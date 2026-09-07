/* ============================================================================
 *  diretoria-social.js — injeta LinkedIn/GitHub/Instagram nos cards da Diretoria.
 *
 *  Os dados vêm de assets/diretoria-social.json (desacoplado do ERP). Como o
 *  erp-sync.js pode reescrever o #dir-grid quando a API do ERP responde, um
 *  MutationObserver re-aplica os ícones sempre que o grid muda. Assim os socials
 *  nunca somem, independente da ordem de carregamento.
 *
 *  Só renderiza ícone com URL preenchida, e só para membros presentes no JSON.
 * ========================================================================== */
(function () {
  'use strict';

  var DATA_URL = 'assets/diretoria-social.json';
  var members = null;

  // normaliza nome p/ casar card x JSON (ignora acento, caixa e espaços extras)
  function norm(s) {
    return String(s == null ? '' : s)
      .trim().toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/\s+/g, ' ');
  }

  var ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.24 8.5h4.5V24H.24V8.5zM8.34 8.5h4.31v2.12h.06c.6-1.08 2.07-2.22 4.26-2.22 4.56 0 5.4 2.86 5.4 6.58V24h-4.5v-6.92c0-1.65-.03-3.78-2.32-3.78-2.32 0-2.68 1.8-2.68 3.66V24H8.34V8.5z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5C5.73.5.6 5.63.6 11.9c0 5.02 3.26 9.28 7.78 10.79.57.1.78-.25.78-.55l-.01-1.94c-3.17.69-3.84-1.53-3.84-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.72-1.54-2.53-.29-5.19-1.27-5.19-5.62 0-1.24.44-2.25 1.17-3.05-.12-.29-.51-1.45.11-3.01 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.56.23 2.72.11 3.01.73.8 1.17 1.81 1.17 3.05 0 4.36-2.67 5.32-5.21 5.6.41.36.78 1.06.78 2.14l-.01 3.17c0 .3.2.66.79.55A11.41 11.41 0 0 0 23.4 11.9C23.4 5.63 18.27.5 12 .5z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.07.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.36.47 2.43C21.99 8.94 22 9.28 22 12s-.01 3.06-.06 4.12c-.05 1.07-.22 1.79-.47 2.43-.26.66-.6 1.22-1.15 1.77-.55.55-1.11.89-1.77 1.15-.64.25-1.36.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.36-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.07.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77.55-.55 1.11-.89 1.77-1.15.64-.25 1.36-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.98.04-1.5.21-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.13.36-.3.88-.34 1.86-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.98.21 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.13.88.3 1.86.34 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.98-.04 1.5-.21 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.13-.36.3-.88.34-1.86.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.98-.21-1.5-.34-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.36-.13-.88-.3-1.86-.34-1.05-.05-1.37-.06-4.04-.06zm0 3.06a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28zm0 1.8a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68zm5.34-3.16a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/></svg>'
  };
  var ORDER = ['linkedin', 'github', 'instagram'];
  var LABEL = { linkedin: 'LinkedIn', github: 'GitHub', instagram: 'Instagram' };

  function buildSocial(m) {
    var html = '';
    ORDER.forEach(function (k) {
      var url = m[k];
      if (url && String(url).trim()) {
        html += '<a class="ds-' + k + '" href="' + url + '" target="_blank" rel="noopener"' +
          ' aria-label="' + LABEL[k] + ' de ' + (m.nome || '') + '">' + ICONS[k] + '</a>';
      }
    });
    if (!html) return null;
    var wrap = document.createElement('div');
    wrap.className = 'dir-social';
    wrap.innerHTML = html;
    return wrap;
  }

  function apply() {
    if (!members) return;
    var grid = document.getElementById('dir-grid');
    if (!grid) return;
    Array.prototype.forEach.call(grid.querySelectorAll('.dir-card'), function (card) {
      if (card.querySelector('.dir-social')) return; // já injetado
      var nameEl = card.querySelector('.dir-name');
      if (!nameEl) return;
      var m = members[norm(nameEl.textContent)];
      if (!m) return;
      var el = buildSocial(m);
      if (el) card.appendChild(el);
    });
  }

  function indexMembers(list) {
    var map = {};
    (list || []).forEach(function (m) { if (m && m.nome) map[norm(m.nome)] = m; });
    return map;
  }

  function start() {
    apply();
    var grid = document.getElementById('dir-grid');
    if (grid && 'MutationObserver' in window) {
      // re-aplica quando o erp-sync (ou qualquer coisa) reescrever o grid
      new MutationObserver(function () { apply(); }).observe(grid, { childList: true });
    }
  }

  fetch(DATA_URL, { cache: 'no-store' })
    .then(function (r) { return r.ok ? r.json() : null; })
    .then(function (json) {
      if (!json) return;
      members = indexMembers(json.membros || json);
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
      } else {
        start();
      }
    })
    .catch(function () { /* silencioso — sem socials, o resto da página segue igual */ });
})();
