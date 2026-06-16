// ── "ENV" do front-end — TEMPLATE ────────────────────────────────────────────
// Copie para config.js e ajuste o API_URL.
//   ""                              -> mesma origem (front servido pelo Node)
//   "https://seu-app.onrender.com"  -> API hospedada em outro dominio
window.APP_CONFIG = {
  API_URL: "http://localhost:3000",
  // URL da API do ERP (painel) — de onde o site puxa Eventos e Diretoria.
  ERP_API_URL: "http://localhost:3000"
};
