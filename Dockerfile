# ============================================================================
#  Imagem unica que serve TUDO (landing + API + dashboard) no mesmo processo.
#  Projeto educativo de conscientizacao sobre sites falsos — PUC PR Toledo.
# ============================================================================
FROM node:20-alpine

# Pasta de trabalho da aplicacao.
WORKDIR /app

# 1) Instala dependencias primeiro (aproveita cache de build).
COPY server/package*.json ./server/
RUN cd server && npm install --omit=dev

# 2) Copia o codigo do servidor.
COPY server/ ./server/

# 3) Copia os arquivos do front-end (FRONT_DIR=.. aponta para /app).
COPY ["ca_esw (3).html", "style.css", "config.js", "./"]

# Roda a partir da pasta do servidor (mesma estrutura do projeto local).
WORKDIR /app/server

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=36724
ENV FRONT_DIR=..

EXPOSE 36724

# Healthcheck simples batendo em /health.
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1:36724/health || exit 1

CMD ["node", "server.js"]
