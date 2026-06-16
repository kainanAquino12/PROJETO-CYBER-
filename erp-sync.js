/* ============================================================================
 *  erp-sync.js — Conecta o site ao painel (ERP).
 *
 *  Busca Eventos e Diretoria da API do ERP e renderiza nas seções
 *  #eventos (#ev-grid) e #diretoria (#dir-grid). Assim, o que for editado
 *  no painel do ERP aparece aqui ao recarregar a página.
 *
 *  Se a API do ERP não responder, o conteúdo fixo que já está no HTML é
 *  mantido (fallback) — o site nunca quebra por causa disso.
 *
 *  A URL da API vem de window.APP_CONFIG.ERP_API_URL (config.js);
 *  padrão: http://localhost:3000
 * ========================================================================== */
(function () {
  'use strict';

  var ERP = (window.APP_CONFIG && window.APP_CONFIG.ERP_API_URL) || 'http://localhost:3000';
  ERP = String(ERP).replace(/\/$/, '');

  var MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
  var MESES_ABR = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  function parseDate(iso) {
    if (!iso) return null;
    var p = String(iso).slice(0, 10).split('-');
    if (p.length < 3) return null;
    return { y: +p[0], m: +p[1], d: +p[2] };
  }

  // Ícones (mesmo estilo .evi usado nos cards de evento do site)
  var ICO = {
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    ticket: '<path d="M2 9a3 3 0 0 0 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 0 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>'
  };
  function svg(p) { return '<svg class="evi" viewBox="0 0 24 24">' + p + '</svg>'; }

  // ── EVENTOS ────────────────────────────────────────────────────────────────
  function renderEventos(list) {
    var grid = document.getElementById('ev-grid');
    if (!grid || !Array.isArray(list) || !list.length) return;
    var evs = list
      .filter(function (e) { return e.status !== 'cancelado' && e.status !== 'concluido'; })
      .sort(function (a, b) { return String(a.data || '').localeCompare(String(b.data || '')); });
    if (!evs.length) return;

    grid.innerHTML = evs.map(function (e) {
      var dt = parseDate(e.data);
      var dia = dt ? String(dt.d).padStart(2, '0') : '--';
      var mon = dt ? MESES_ABR[dt.m - 1] : '';
      var dataLonga = dt ? (dt.d + ' de ' + MESES[dt.m - 1] + ' de ' + dt.y) : '';
      var quando = e.horaInicio ? (dataLonga + ' · ' + esc(e.horaInicio)) : dataLonga;

      var metas = '';
      if (e.local) metas += '<div class="ev-meta">' + svg(ICO.pin) + esc(e.local) + '</div>';
      if (quando) metas += '<div class="ev-meta">' + svg(ICO.clock) + quando + '</div>';
      if (e.publico) metas += '<div class="ev-meta">' + svg(ICO.ticket) + esc(e.publico) + '</div>';

      return '<div class="ev-card">' +
        '<div class="ev-head">' +
          '<div class="ev-title">' + esc(e.titulo) + '</div>' +
          '<div class="ev-cal"><div class="ev-day">' + dia + '</div><div class="ev-mon">' + mon + '</div></div>' +
        '</div>' +
        '<div class="ev-body">' +
          (e.descricao ? '<div class="ev-desc">' + esc(e.descricao) + '</div>' : '') +
          metas +
        '</div>' +
      '</div>';
    }).join('');
  }

  // ── DIRETORIA ───────────────────────────────────────────────────────────────
  // Deriva estilo/ordem a partir do cargo (tolerante a variações de texto).
  function roleInfo(cargo) {
    var c = String(cargo || '').toLowerCase();
    // "vice" antes de "presid" — senão "Vice-Presidente" cairia no presidente.
    if (c.indexOf('vice') >= 0) return { type: 'role', cls: 'dr-vp', order: 1 };
    if (c.indexOf('presid') >= 0) return { type: 'pres', cls: '', order: 0 };
    if (c.indexOf('tesour') >= 0) return { type: 'role', cls: 'dr-tess', order: 2 };
    if (c.indexOf('adjunto') >= 0) return { type: 'role', cls: 'dr-sec', order: 4 };
    if (c.indexOf('secret') >= 0) return { type: 'role', cls: 'dr-sec', order: 3 };
    if (c.indexOf('evento') >= 0) return { type: 'role', cls: 'dr-ev', order: 5 };
    if (c.indexOf('comunica') >= 0) return { type: 'role', cls: 'dr-com', order: 6 };
    if (c.indexOf('suplente') >= 0) {
      var n = (c.match(/(\d+)/) || [])[1];
      return { type: 'sup', cls: 'dr-sup', order: 7 + (n ? +n : 0) };
    }
    return { type: 'role', cls: 'dr-sec', order: 20 };
  }

  function initials(nome) {
    return String(nome || '').split(' ').slice(0, 2)
      .map(function (n) { return (n[0] || '').toUpperCase(); }).join('');
  }

  function photoHtml(m) {
    if (m.foto) return '<div class="dir-photo"><img src="' + esc(m.foto) + '" alt="' + esc(m.nome) + '"/></div>';
    return '<div class="dir-photo" style="display:flex;align-items:center;justify-content:center;' +
      'font-weight:800;font-size:22px;color:var(--blue4)">' + esc(initials(m.nome)) + '</div>';
  }

  function renderDiretoria(list) {
    var grid = document.getElementById('dir-grid');
    if (!grid || !Array.isArray(list) || !list.length) return;
    var membros = list.filter(function (m) { return m.ativo !== false; });
    if (!membros.length) return;

    membros.forEach(function (m) { m._r = roleInfo(m.cargo); });
    membros.sort(function (a, b) {
      return a._r.order - b._r.order || String(a.nome).localeCompare(String(b.nome));
    });

    grid.innerHTML = membros.map(function (m) {
      var r = m._r;
      var desc = m.observacao ? '<div class="dir-desc">' + esc(m.observacao) + '</div>' : '';
      if (r.type === 'pres') {
        return '<div class="dir-card pres">' +
          photoHtml(m) +
          '<div class="pres-badge">' + esc(m.cargo || 'Presidente') + '</div>' +
          '<div class="dir-name">' + esc(m.nome) + '</div>' +
          '<div class="pres-loc">CA Engenharia de Software · PUC PR Toledo · Gestão 2026</div>' +
          desc +
        '</div>';
      }
      var roleTag = r.type === 'sup'
        ? '<div class="dir-role-badge ' + r.cls + '">' + esc(m.cargo) + '</div>'
        : '<div class="dir-role ' + r.cls + '">' + esc(m.cargo) + '</div>';
      return '<div class="dir-card">' +
        photoHtml(m) +
        roleTag +
        '<div class="dir-name">' + esc(m.nome) + '</div>' +
        desc +
      '</div>';
    }).join('');
  }

  function load(resource) {
    return fetch(ERP + '/api/' + resource, { cache: 'no-store' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    });
  }

  // Cada seção carrega de forma independente; se a API falhar, mantém o HTML fixo.
  load('eventos').then(renderEventos).catch(function (e) { console.warn('[erp-sync] eventos:', e.message); });
  load('membros').then(renderDiretoria).catch(function (e) { console.warn('[erp-sync] diretoria:', e.message); });
})();
