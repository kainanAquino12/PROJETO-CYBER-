'use client';

import * as React from 'react';

/**
 * Constellation — fundo interativo em <canvas>.
 * Partículas douradas que derivam devagar e se ligam por linhas de proximidade.
 * Perto do cursor, os nós acendem e se conectam ao mouse (efeito "rede/constelação").
 *
 * Performance: rAF único, DPR limitado a 2, pausa com a aba oculta, teardown no unmount.
 * Acessibilidade: em prefers-reduced-motion desenha um campo estático (sem animação/mouse).
 */

type Pt = { x: number; y: number; vx: number; vy: number; r: number };

const GOLD = '228, 184, 74'; // #e4b84a — casa com o acento da landing

export function Constellation() {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let points: Pt[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const LINK_DIST = 132; // ligação entre partículas
    const MOUSE_DIST = 200; // raio de influência do cursor

    function seed() {
      // densidade proporcional à área, com teto para telas grandes
      const target = Math.round((width * height) / 15000);
      const count = Math.max(24, Math.min(reduce ? 60 : 96, target));
      points = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.6,
      }));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (!reduce) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -20) p.x = width + 20;
          else if (p.x > width + 20) p.x = -20;
          if (p.y < -20) p.y = height + 20;
          else if (p.y > height + 20) p.y = -20;
        }

        // proximidade do cursor -> brilho do nó
        let glow = 0;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < MOUSE_DIST) {
            glow = 1 - d / MOUSE_DIST;
            // linha até o cursor
            ctx.strokeStyle = `rgba(${GOLD}, ${(glow * 0.55).toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // ligações entre partículas (apenas j>i p/ não duplicar)
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < LINK_DIST) {
            const a = (1 - d / LINK_DIST) * 0.28;
            ctx.strokeStyle = `rgba(${GOLD}, ${a.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // nó
        const rr = p.r + glow * 1.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rr, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD}, ${(0.45 + glow * 0.5).toFixed(3)})`;
        ctx.fill();
        if (glow > 0.25) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, rr + 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${GOLD}, ${(glow * 0.12).toFixed(3)})`;
          ctx.fill();
        }
      }
    }

    let raf = 0;
    let running = true;
    function loop() {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    }

    function onMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }
    function onLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }
    function onVisibility() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!reduce) {
        running = true;
        loop();
      }
    }

    let resizeTimer = 0;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        if (reduce) draw();
      }, 150);
    }

    resize();
    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onMove, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('visibilitychange', onVisibility);

    if (reduce) {
      draw(); // um quadro estático, sem loop nem mouse
    } else {
      loop();
    }

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
    />
  );
}
