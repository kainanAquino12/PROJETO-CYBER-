/* ============================================================================
 *  main.js — Camada de interface da landing (nav, menu, reveals, form, parallax).
 *
 *  Extraído e reescrito a partir do <script> inline no refactor 6.0.
 *  Sem dependências externas. Respeita prefers-reduced-motion.
 * ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };

  /* ── NAV: sombra/vidro ao rolar + link ativo ─────────────────────────────── */
  var nav = document.getElementById('mainNav');
  var sections = ['home', 'noticias', 'sobre', 'eventos', 'diretoria', 'contato'];
  var navLinks = $$('.nav-links a');

  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);

    var cur = '';
    for (var i = 0; i < sections.length; i++) {
      var el = document.getElementById(sections[i]);
      if (el && window.scrollY >= el.offsetTop - 140) cur = sections[i];
    }
    navLinks.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── MENU MOBILE ─────────────────────────────────────────────────────────── */
  var ham = document.getElementById('hamBtn');
  var mobileNav = document.getElementById('mobileNav');

  function toggleMenu() {
    var open = ham.classList.toggle('open');
    mobileNav.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  function closeMenu() {
    ham.classList.remove('open');
    mobileNav.classList.remove('open');
    ham.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  if (ham) ham.addEventListener('click', toggleMenu);
  $$('#mobileNav a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  // expõe para markup legado que ainda use onclick=""
  window.toggleMenu = toggleMenu;
  window.closeMenu = closeMenu;

  /* ── REVEALS: blur-to-sharp + fade/translate, com stagger ────────────────── */
  var revealEls = $$('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var group = e.target.parentElement;
        // stagger relativo à posição do elemento entre os irmãos .reveal
        var siblings = group ? $$('.reveal', group) : [e.target];
        var idx = Math.max(0, siblings.indexOf(e.target));
        e.target.style.setProperty('--reveal-delay', Math.min(idx, 8) * 70 + 'ms');
        e.target.classList.add('is-in');
        obs.unobserve(e.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { obs.observe(el); });
  }

  /* ── PARALLAX SUTIL nos glows/emblema (scroll-driven) ────────────────────── */
  var parallaxEls = $$('[data-parallax]');
  if (!reduceMotion && parallaxEls.length) {
    var ticking = false;
    function applyParallax() {
      var y = window.scrollY;
      parallaxEls.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-parallax')) || 0.1;
        el.style.transform = 'translate3d(0,' + (y * speed).toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(applyParallax); ticking = true; }
    }, { passive: true });
    applyParallax();
  }

  /* ── FORMULÁRIO DE CONTATO (mesma validação/UX do original) ──────────────── */
  function sendForm() {
    var nome = (document.getElementById('fNome').value || '').trim();
    var email = (document.getElementById('fEmail').value || '').trim();
    var msg = (document.getElementById('fMsg').value || '').trim();
    var btn = document.getElementById('btnTxt');

    if (!nome || !email || !msg) {
      btn.textContent = 'Preencha nome, e-mail e mensagem';
      setTimeout(function () { btn.textContent = 'Enviar mensagem'; }, 2500);
      return;
    }
    btn.textContent = 'Enviando…';
    setTimeout(function () {
      document.getElementById('formArea').style.display = 'none';
      document.getElementById('formOk').style.display = 'block';
    }, 1000);
  }
  var sendBtn = document.getElementById('btnSend');
  if (sendBtn) sendBtn.addEventListener('click', sendForm);
  window.sendForm = sendForm; // compat

  /* ── METER STRIP: barras variadas por envelope (leitura, não decoração) ──── */
  var meterBars = document.getElementById('meterBars');
  if (meterBars) {
    var n = 56, frag = document.createDocumentFragment();
    for (var b = 0; b < n; b++) {
      var t = b / (n - 1);
      // envelope: seno + leve ruído determinístico -> parece medição
      var env = 0.32 + 0.5 * Math.abs(Math.sin(t * Math.PI * 3.1)) + 0.12 * Math.sin(t * 40);
      env = Math.max(0.14, Math.min(1, env));
      var span = document.createElement('span');
      span.style.height = (env * 100).toFixed(0) + '%';
      span.style.opacity = (0.35 + env * 0.4).toFixed(2);
      frag.appendChild(span);
    }
    meterBars.appendChild(frag);
  }

  /* ── TOAST "coleta técnica": barra de progresso indeterminada ────────────── */
  var toast = document.getElementById('scanToast');
  var prog = document.getElementById('tprog');
  if (toast && prog && !reduceMotion) {
    // pequeno atraso para entrar depois do carregamento, e some sozinho
    setTimeout(function () { toast.classList.add('show'); }, 1400);
    var pct = 0;
    var timer = setInterval(function () {
      pct = Math.min(100, pct + Math.random() * 18);
      prog.style.width = pct.toFixed(0) + '%';
      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(function () { toast.classList.remove('show'); }, 900);
      }
    }, 380);
  }
})();
