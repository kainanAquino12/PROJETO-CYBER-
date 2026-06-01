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

// ── Config (via .env) ──────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0'; // 0.0.0.0 = aceita conexoes externas (Docker)
const GEO_ENABLED = String(process.env.GEO_ENABLED || 'true').toLowerCase() === 'true';
const DASHBOARD_KEY = process.env.DASHBOARD_KEY || '';
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || '';
// Pasta do front-end (landing page + config.js + style.css). Padrao: pasta-pai.
const FRONT_DIR = path.resolve(__dirname, process.env.FRONT_DIR || '..');
const DATA_DIR = path.join(__dirname, 'data');
const DATA_FILE = path.join(DATA_DIR, 'visits.json');

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

// ── Auth simples para o painel ────────────────────────────────────────────────
function checkKey(req, res, next) {
  if (!DASHBOARD_KEY) return next(); // sem chave configurada = aberto (apenas dev)
  const provided = req.query.key || req.headers['x-key'] || '';
  if (provided === DASHBOARD_KEY) return next();
  res.status(401).json({ ok: false, error: 'chave invalida ou ausente' });
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
app.get('/api/visits', checkKey, async (req, res) => {
  const visits = await readVisits();
  res.json({ ok: true, total: visits.length, visits: visits.slice().reverse() });
});

// Limpa os dados (protegida).
app.delete('/api/visits', checkKey, async (req, res) => {
  await writeVisits([]);
  res.json({ ok: true });
});

// config.js dinamico: injeta a URL da API a partir do .env do servidor.
// Quando o front e servido por este mesmo app, API_URL fica vazio (mesma origem).
app.get('/config.js', (req, res) => {
  res.type('application/javascript');
  res.send(`window.APP_CONFIG = ${JSON.stringify({ API_URL: ALLOW_ORIGIN || '' })};`);
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
    console.log(`  Dashboard : http://localhost:${PORT}/dashboard?key=${DASHBOARD_KEY || '(sem chave)'}`);
    console.log(`  Geo-IP    : ${GEO_ENABLED ? 'ligado (ip-api.com)' : 'desligado'}`);
    console.log(`  Dados     : ${DATA_FILE}`);
    console.log('================================================================');
  });
});
