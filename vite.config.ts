import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || '';
          if (url.includes('.') || url.startsWith('/@') || url.startsWith('/api') || url.startsWith('/src') || url.startsWith('/node_modules') || url.startsWith('/assets')) {
            return next();
          }
          req.url = '/index.html';
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          const url = req.url || '';
          if (url.includes('.') || url.startsWith('/@') || url.startsWith('/api') || url.startsWith('/src') || url.startsWith('/node_modules') || url.startsWith('/assets')) {
            return next();
          }
          req.url = '/index.html';
          next();
        });
      },
    },
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
});
