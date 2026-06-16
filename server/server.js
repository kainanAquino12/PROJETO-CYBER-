/**
 * ============================================================================
 *  DEMONSTRACAO EDUCATIVA — Conscientizacao sobre sites falsos / phishing
 *  Centro Academico de Engenharia de Software — PUC PR (Toledo)
 * ============================================================================
 *  Este servidor recebe dados que o navegador do visitante ja expoe
 *  (user-agent, tela, idioma, fuso, GPU, etc.) e os salva para serem exibidos
 *  num painel. O objetivo e mostrar, em sala de aula / apresentacao, o quanto
 *  um site qualquer consegue saber sobre quem o acessa.
 *
 *  USO RESPONSAVEL: apenas em ambiente controlado e com consentimento.
 *  NAO coleta senhas/credenciais. NAO faz keylogging. E uma ferramenta de
 *  conscientizacao, nao de ataque.
 * ============================================================================
 */

'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs/promises');
const fssync = require('fs');
const crypto = require('crypto');

// ── Config (via .env) ──────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'; // 0.0.0.0 = aceita conexoes externas (Docker)
const GEO_ENABLED = String(process.env.GEO_ENABLED || 'true').toLowerCase() === 'true';
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || '';
// URL da API do ERP (painel) que o NAVEGADOR usa para puxar Eventos e Diretoria.
// É a URL acessível pelo navegador do visitante (ex.: http://localhost:3000 no local).
const ERP_API_URL = process.env.ERP_API_URL || 'http://localhost:3000';
// Pasta do front-end (landing page + config.js + style.css). Padrao: pasta-pai.
const FRONT_DIR = path.resolve(__dirname, process.env.FRONT_DIR || '..');
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'visits.json');
const AUTH_FILE = path.join(DATA_DIR, 'auth.json');

// E-mails autorizados a acessar o painel. SOMENTE estes podem cadastrar senha
// e fazer login. Qualquer outro e-mail e recusado de imediato.
const ALLOWED_EMAILS = [
  'lucaskronbauer16@gmail.com',
  'kainanneres262@gmail.com',
];

// Nome do arquivo da landing page (tem espaco e parenteses no nome original).
const LANDING_FILE = 'ca_esw (3).html';

// ── App ─────────────────────────────────────────────────────────────────────
const app = express();
app.set('trust proxy', true); // confia no X-Forwarded-For (Render/Railway/proxy)
app.use(cors({ origin: ALLOW_ORIGIN || true }));
app.use(express.json({ limit: '64kb' }));

// Healthcheck (usado pelo Docker / orquestrador).
app.get('/health', (req, res) => res.json({ ok: true, uptime: process.uptime() }));

// ── Persistencia em arquivo JSON ─────────────────────────────────────────────
async function ensureStore() {
  if (!fssync.existsSync(DATA_DIR)) {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
  if (!fssync.existsSync(DATA_FILE)) {
    await fs.writeFile(DATA_FILE, '[]', 'utf8');
  }
  await ensureAuth(); // garante o segredo de assinatura dos tokens
}

async function readVisits() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    const arr = JSON.parse(raw);
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

async function writeVisits(arr) {
  await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), 'utf8');
}

// ── Helpers de IP / Geo ───────────────────────────────────────────────────────
function getClientIp(req) {
  // Cloudflare (Tunnel/proxy) envia o IP real do visitante nestes headers —
  // mais confiavel que o X-Forwarded-For, que pode trazer IPs internos.
  const cf = req.headers['cf-connecting-ip'] || req.headers['true-client-ip'];
  if (cf) return String(cf).trim();
  const xff = req.headers['x-forwarded-for'];
  if (xff) {
    // primeiro IP da cadeia = cliente original
    return String(xff).split(',')[0].trim();
  }
  return (req.socket && req.socket.remoteAddress) || req.ip || '';
}

function isPrivateIp(ip) {
  if (!ip) return true;
  const clean = ip.replace(/^::ffff:/, ''); // IPv4 mapeado em IPv6
  return (
    clean === '::1' ||
    clean === '127.0.0.1' ||
    clean.startsWith('10.') ||
    clean.startsWith('192.168.') ||
    /^172\.(1[6-9]|2\d|3[0-1])\./.test(clean) ||
    clean.startsWith('fc') ||
    clean.startsWith('fd') ||
    clean === ''
  );
}

async function lookupGeo(ip) {
  if (!GEO_ENABLED) return null;
  const clean = ip.replace(/^::ffff:/, '');
  if (isPrivateIp(clean)) return null; // IP local nao tem geolocalizacao util
  try {
    const fields = 'status,message,country,regionName,city,zip,lat,lon,timezone,isp,org,as,query';
    const url = `http://ip-api.com/json/${encodeURIComponent(clean)}?fields=${fields}`;
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 4000);
    const resp = await fetch(url, { signal: ctrl.signal });
    clearTimeout(t);
    if (!resp.ok) return null;
    const data = await resp.json();
    if (data.status !== 'success') return null;
    return {
      country: data.country,
      region: data.regionName,
      city: data.city,
      zip: data.zip,
      lat: data.lat,
      lon: data.lon,
      timezone: data.timezone,
      isp: data.isp,
      org: data.org,
      asn: data.as,
      query: data.query,
    };
  } catch {
    return null; // falha de geo nunca quebra a coleta
  }
}

// ── Autenticacao do painel (e-mail autorizado + senha) ───────────────────────
const SCRYPT_KEYLEN = 64;
const TOKEN_TTL_MS = 1000 * 60 * 60 * 12; // sessao valida por 12h

function normEmail(e) { return String(e || '').trim().toLowerCase(); }
function isAllowedEmail(email) { return ALLOWED_EMAILS.includes(normEmail(email)); }

async function readAuth() {
  try {
    const obj = JSON.parse(await fs.readFile(AUTH_FILE, 'utf8'));
    if (obj && typeof obj === 'object') {
      if (!obj.users || typeof obj.users !== 'object') obj.users = {};
      return obj;
    }
  } catch { /* ausente/invalido -> recria abaixo */ }
  return { secret: '', users: {} };
}
async function writeAuth(obj) {
  await fs.writeFile(AUTH_FILE, JSON.stringify(obj, null, 2), 'utf8');
}
// Garante um segredo para assinar os tokens de sessao (gerado uma unica vez).
async function ensureAuth() {
  const auth = await readAuth();
  if (!auth.secret) {
    auth.secret = crypto.randomBytes(32).toString('hex');
    await writeAuth(auth);
  }
  return auth;
}

// Hash de senha com scrypt (sem dependencia externa). Guarda salt + hash.
function hashPassword(password, salt) {
  const s = salt || crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(String(password), s, SCRYPT_KEYLEN).toString('hex');
  return { salt: s, hash };
}
function verifyPassword(password, salt, expectedHash) {
  const a = Buffer.from(hashPassword(password, salt).hash, 'hex');
  const b = Buffer.from(String(expectedHash || ''), 'hex');
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// ── Token de sessao stateless: base64url(payload).base64url(hmac) ─────────────
function b64url(buf) {
  return Buffer.from(buf).toString('base64')
    .replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function unb64url(str) {
  return Buffer.from(String(str).replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8');
}
function signPayload(payloadB64, secret) {
  return b64url(crypto.createHmac('sha256', secret).update(payloadB64).digest());
}
function makeToken(email, secret) {
  const p = b64url(JSON.stringify({ email: normEmail(email), exp: Date.now() + TOKEN_TTL_MS }));
  return p + '.' + signPayload(p, secret);
}
function verifyToken(token, secret) {
  if (!token || typeof token !== 'string' || !token.includes('.')) return null;
  const [p, sig] = token.split('.');
  if (!p || !sig) return null;
  const expected = signPayload(p, secret);
  const a = Buffer.from(sig), b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  let payload;
  try { payload = JSON.parse(unb64url(p)); } catch { return null; }
  if (!payload || !payload.exp || Date.now() > payload.exp) return null;
  if (!isAllowedEmail(payload.email)) return null; // e-mail saiu da allowlist -> token invalido
  return payload;
}
function getToken(req) {
  const h = req.headers['authorization'] || '';
  if (h.startsWith('Bearer ')) return h.slice(7).trim();
  return req.query.token || req.headers['x-token'] || '';
}

// Middleware: exige um token de sessao valido (ou seja, login ja feito).
async function checkAuth(req, res, next) {
  const store = await readAuth();
  if (!store.secret) return res.status(503).json({ ok: false, error: 'autenticacao nao inicializada' });
  const payload = verifyToken(getToken(req), store.secret);
  if (!payload) return res.status(401).json({ ok: false, error: 'nao autenticado' });
  req.userEmail = payload.email;
  next();
}

// ── Rotas ─────────────────────────────────────────────────────────────────────

// Recebe os dados coletados no navegador (rota aberta — o visitante posta aqui).
app.post('/api/collect', async (req, res) => {
  try {
    const ip = getClientIp(req);
    const geo = await lookupGeo(ip);
    const client = (req.body && typeof req.body === 'object') ? req.body : {};

    const visit = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
      receivedAt: new Date().toISOString(),
      ip,
      geo,
      cfCountry: req.headers['cf-ipcountry'] || null, // pais informado pela Cloudflare
      ipUserAgent: req.headers['user-agent'] || '',
      acceptLanguage: req.headers['accept-language'] || '',
      client, // tudo que o front-end enviou
    };

    const visits = await readVisits();
    visits.push(visit);
    await writeVisits(visits);

    res.json({ ok: true });
  } catch (err) {
    console.error('[collect] erro:', err.message);
    res.status(500).json({ ok: false });
  }
});

// Lista os dados coletados (protegida) — mais recentes primeiro.
app.get('/api/visits', checkAuth, async (req, res) => {
  const visits = await readVisits();
  res.json({ ok: true, total: visits.length, visits: visits.slice().reverse() });
});

// Limpa os dados (protegida).
app.delete('/api/visits', checkAuth, async (req, res) => {
  await writeVisits([]);
  res.json({ ok: true });
});

// ── Login do painel: somente e-mails autorizados ────────────────────────────

// Status do e-mail: e autorizado? ja tem senha cadastrada? (controla o botao do front)
app.get('/api/auth/status', async (req, res) => {
  const email = normEmail(req.query.email);
  if (!isAllowedEmail(email)) return res.json({ ok: true, allowed: false, registered: false });
  const store = await readAuth();
  const registered = !!(store.users[email] && store.users[email].hash);
  res.json({ ok: true, allowed: true, registered });
});

// Cadastra a senha de um e-mail autorizado (apenas no primeiro acesso).
app.post('/api/auth/register', async (req, res) => {
  const email = normEmail(req.body && req.body.email);
  const password = String((req.body && req.body.password) || '');
  if (!isAllowedEmail(email)) return res.status(403).json({ ok: false, error: 'e-mail nao autorizado' });
  if (password.length < 4) return res.status(400).json({ ok: false, error: 'senha muito curta (minimo 4 caracteres)' });
  const store = await ensureAuth();
  if (store.users[email] && store.users[email].hash) {
    return res.status(409).json({ ok: false, error: 'este e-mail ja tem senha cadastrada — faca login' });
  }
  const { salt, hash } = hashPassword(password);
  store.users[email] = { salt, hash, createdAt: new Date().toISOString() };
  await writeAuth(store);
  res.json({ ok: true, token: makeToken(email, store.secret), email });
});

// Login com e-mail autorizado + senha ja cadastrada.
app.post('/api/auth/login', async (req, res) => {
  const email = normEmail(req.body && req.body.email);
  const password = String((req.body && req.body.password) || '');
  if (!isAllowedEmail(email)) return res.status(403).json({ ok: false, error: 'e-mail nao autorizado' });
  const store = await ensureAuth();
  const u = store.users[email];
  if (!u || !u.hash) return res.status(404).json({ ok: false, error: 'e-mail sem senha cadastrada' });
  if (!verifyPassword(password, u.salt, u.hash)) {
    return res.status(401).json({ ok: false, error: 'senha incorreta' });
  }
  res.json({ ok: true, token: makeToken(email, store.secret), email });
});

// config.js dinamico: injeta a URL da API a partir do .env do servidor.
// Quando o front e servido por este mesmo app, API_URL fica vazio (mesma origem).
app.get('/config.js', (req, res) => {
  res.type('application/javascript');
  res.send(`window.APP_CONFIG = ${JSON.stringify({ API_URL: ALLOW_ORIGIN || '', ERP_API_URL })};`);
});

// Pagina de cadastro da primeira senha (somente e-mails autorizados).
app.get('/cadastro', (req, res) => {
  res.sendFile(path.join(__dirname, 'cadastro.html'));
});

// Painel.
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Arquivos estaticos do front (style.css, imagens, config.js estatico se existir).
app.use(express.static(FRONT_DIR));

// Landing page na raiz.
app.get('/', (req, res) => {
  res.sendFile(path.join(FRONT_DIR, LANDING_FILE));
});

// ── Start ─────────────────────────────────────────────────────────────────────
ensureStore().then(() => {
  app.listen(PORT, HOST, () => {
    console.log('================================================================');
    console.log('  API educativa de coleta — projeto de conscientizacao');
    console.log('  (uso apenas em ambiente controlado e com consentimento)');
    console.log('----------------------------------------------------------------');
    console.log(`  Escutando : ${HOST}:${PORT}`);
    console.log(`  Landing   : http://localhost:${PORT}/`);
    console.log(`  Dashboard : http://localhost:${PORT}/dashboard  (login por e-mail + senha)`);
    console.log(`  Autorizados: ${ALLOWED_EMAILS.join(', ')}`);
    console.log(`  Geo-IP    : ${GEO_ENABLED ? 'ligado (ip-api.com)' : 'desligado'}`);
    console.log(`  Dados     : ${DATA_FILE}`);
    console.log('================================================================');
  });
});
