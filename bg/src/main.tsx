import { createRoot } from 'react-dom/client';
import './index.css';
import { StarsBackground } from './animate-ui/stars';
import { Constellation } from './constellation';

/**
 * Ilha React do background da landing CA ESW.
 * Camada 1: Stars (animate-ui) — campo estelar dourado sutil, deriva lenta.
 * Camada 2: Constellation — rede de partículas douradas reativa ao mouse.
 * Monta dentro de #bg-root (fixo, atrás do conteúdo). Não captura eventos.
 */
function Background() {
  return (
    <>
      <StarsBackground
        starColor="rgba(228, 184, 74, 0.55)"
        factor={0.03}
        speed={110}
        pointerEvents={false}
        style={{ position: 'absolute', inset: 0, background: 'transparent' }}
      />
      <Constellation />
    </>
  );
}

const el = document.getElementById('bg-root');
if (el) {
  createRoot(el).render(<Background />);
  // fade-in suave depois de montar (a landing pinta primeiro; o fundo entra em seguida)
  requestAnimationFrame(() => {
    requestAnimationFrame(() => el.classList.add('bg-ready'));
  });
}
