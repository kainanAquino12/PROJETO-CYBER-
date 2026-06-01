# CA · Engenharia de Software — Demo de conscientização sobre sites falsos

Projeto **educacional** do Centro Acadêmico de Engenharia de Software (PUC PR — Toledo).
Demonstra, em ambiente controlado, o quanto um site qualquer consegue saber sobre quem o
acessa — para conscientizar sobre os riscos de entrar em **sites falsos / phishing**.

> ⚠️ **Aviso ético.** Esta é uma ferramenta de **conscientização**, não de ataque. Use apenas
> em ambiente controlado (sala de aula / apresentação) e com **consentimento** das pessoas.
> O sistema **não coleta senhas, credenciais nem faz keylogging** — apenas dados que o
> navegador já expõe a qualquer site (user-agent, tela, idioma, fuso, GPU, etc.). Os dados
> coletados são pessoais: o painel é protegido por chave e o `visits.json` não vai para o git.

---

## O que ele faz

1. A **landing page** (`ca_esw (3).html`) coleta, ao carregar, dados do navegador do visitante.
2. Envia esses dados para a **API em Node** (`server/`).
3. A API enriquece com **IP** (do request) e **geolocalização aproximada** (país/cidade/ISP via
   [ip-api.com](http://ip-api.com)) e salva em `server/data/visits.json`.
4. O **dashboard** (`/dashboard`) exibe tudo numa página simples, protegida por chave.

### Dados coletados
Página/referrer, user-agent, SO e navegador, mobile/desktop, resolução de tela e viewport,
densidade de pixels, núcleos de CPU, memória, suporte a toque, fuso horário, idioma(s),
tipo de conexão, bateria, **GPU (WebGL)**, **fingerprint de canvas**, cookies/DNT — e, no
servidor, **IP + geolocalização (país, cidade, ISP)**.

> GPS preciso (`navigator.geolocation`) **não** é usado: ele exige um pop-up de permissão
> visível, o que descaracterizaria a coleta. A localização vem do IP (aproximada).

---

## Como rodar localmente

Requer **Node.js 18+**.

```bash
cd server
npm install
copy .env.example .env      # Windows (ou: cp .env.example .env)
# edite server/.env e troque DASHBOARD_KEY
npm start
```

Abra:
- Landing: <http://localhost:3000/>
- Dashboard: `http://localhost:3000/dashboard?key=SUA_CHAVE`

> Em **localhost** o IP será `::1`/`127.0.0.1` e a geolocalização virá vazia — isso é
> esperado. Para ver IP e país reais, faça o **deploy** (abaixo) ou acesse de outro
> dispositivo na mesma Wi-Fi pelo IP da sua máquina.

---

## Configuração (`.env`)

**Servidor — `server/.env`:**

| Variável        | Função                                                              |
|-----------------|---------------------------------------------------------------------|
| `PORT`          | Porta local (no Render/Railway é injetada automaticamente).         |
| `GEO_ENABLED`   | `true`/`false` — liga a geolocalização por IP (ip-api.com).         |
| `DASHBOARD_KEY` | Chave de acesso ao `/dashboard` e a `/api/visits`. **Troque!**     |
| `ALLOW_ORIGIN`  | Origem do front no CORS (se hospedado em outro domínio). Vazio = qualquer. |
| `FRONT_DIR`     | Pasta do front-end. Padrão `..` (a pasta-pai do `server/`).         |

**Front-end — `.env` e `config.js`:**

Um HTML estático **não lê `.env`** em runtime — quem o navegador lê é o **`config.js`**
(`window.APP_CONFIG.API_URL`). O `.env` da raiz é a fonte editável/documentação; mantenha o
mesmo valor no `config.js`. Cenários:

- **Front servido pelo próprio Node** (recomendado): deixe `API_URL` vazio → mesma origem,
  sem CORS. (A rota `/config.js` do servidor injeta o valor automaticamente.)
- **Front hospedado à parte** (ex.: GitHub Pages): coloque a URL da API no `config.js`,
  ex.: `https://seu-app.onrender.com`.

---

## Rodar com Docker (recomendado para colocar no servidor)

A imagem roda **tudo num único container** (landing + API + dashboard no mesmo processo
Node) e publica na porta **36724**. Os dados ficam num volume no host (`server/data/`),
então sobrevivem a `restart`/`rebuild`.

Pré-requisito: Docker + Docker Compose instalados e o daemon rodando.

```bash
# na raiz do projeto
docker compose up -d --build      # builda e sobe em background
docker compose logs -f            # acompanha os logs
docker compose down               # para e remove o container
```

Acessos (troque `<IP>` pelo IP/domínio do servidor):
- Landing: `http://<IP>:36724/`
- Dashboard: `http://<IP>:36724/dashboard?key=SUA_CHAVE`

**Trocar a chave do painel** (antes de subir num servidor exposto):

```bash
# Linux/macOS
DASHBOARD_KEY="minha-chave-secreta" docker compose up -d --build
```
```powershell
# Windows PowerShell
$env:DASHBOARD_KEY="minha-chave-secreta"; docker compose up -d --build
```
Ou edite `DASHBOARD_KEY` direto no [docker-compose.yml](docker-compose.yml).

> **Port forward / firewall:** a porta `36724` do servidor é mapeada para a `36724` do
> container (linha `ports: "36724:36724"`). Para acesso externo, libere a `36724` no
> firewall do servidor (e no provedor de nuvem, se houver). Para usar outra porta no host
> sem mexer no resto, troque só o lado esquerdo: `ports: "8080:36724"`.

> Como o servidor está atrás de proxies às vezes, o código já usa `trust proxy` e lê o IP do
> `X-Forwarded-For` — então o IP real do visitante é capturado mesmo atrás de um Nginx/Cloudflare.

---

## Deploy (Render — captura IP real)

1. Suba o repositório no GitHub.
2. No [Render](https://render.com): **New → Web Service**, conecte o repo.
3. Configure:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment:** `GEO_ENABLED=true`, `DASHBOARD_KEY=<sua-chave>` (a `PORT` é automática).
4. A landing e o dashboard ficam na mesma URL pública → IP e geo **reais**, sem CORS.

---

## Endpoints da API

| Método   | Rota            | Acesso     | Descrição                                  |
|----------|-----------------|------------|--------------------------------------------|
| `POST`   | `/api/collect`  | aberto     | Recebe os dados do navegador.              |
| `GET`    | `/api/visits`   | chave      | Lista os dados coletados (mais recentes 1º).|
| `DELETE` | `/api/visits`   | chave      | Apaga todos os dados.                      |
| `GET`    | `/config.js`    | aberto     | Config do front gerada a partir do `.env`. |
| `GET`    | `/dashboard`    | aberto*    | Painel (o fetch dos dados exige a chave).  |
| `GET`    | `/`             | aberto     | Landing page.                              |

A chave vai por querystring `?key=` ou header `x-key`.

---

## Estrutura

```
FRONT-END-CYBER/
├─ ca_esw (3).html     # landing (coleta + envio)
├─ style.css
├─ config.js           # "env" do front (API_URL lido pelo navegador)
├─ .env                # fonte editável da URL da API (documentação)
└─ server/
   ├─ server.js        # API + serve front/dashboard + /config.js
   ├─ dashboard.html   # painel
   ├─ .env             # config do servidor (chave, geo, porta)
   └─ data/visits.json # dados coletados (criado em runtime)
```
