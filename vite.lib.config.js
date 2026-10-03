import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// Library build config — produces ESM + UMD bundles for npm.
// Run with: npm run build:lib
export default defineConfig({
  plugins: [react()],

  // Never copy index.html or public/ assets into the lib dist.
  publicDir: false,

  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.js'),
      name: 'OrbitNavbar',
      fileName: 'orbit-navbar',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // Peer deps must NOT be bundled.
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'ReactJSXRuntime',
        },
        // Emit all CSS into a single orbit-navbar.css — no per-chunk splitting.
        assetFileNames: 'orbit-navbar[extname]',
      },
    },
    // Copy TypeScript declarations into dist alongside the bundle.
    copyPublicDir: false,
    minify: true,
    sourcemap: true,
  },
});
