import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import cssInjectedByJs from 'vite-plugin-css-injected-by-js';

// Build da ilha: um único bundle auto-montável em ../assets/bg/bg.js
// (CSS injetado pelo próprio JS -> só um <script> na landing).
export default defineConfig({
  plugins: [react(), tailwindcss(), cssInjectedByJs()],
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    outDir: '../assets/bg',
    emptyOutDir: true,
    target: 'es2019',
    lib: {
      entry: 'src/main.tsx',
      formats: ['es'],
      fileName: () => 'bg.js',
    },
  },
});
