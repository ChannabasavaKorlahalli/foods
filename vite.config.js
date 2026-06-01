import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2020',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-router')) return 'router';
          if (id.includes('node_modules/react-dom')) return 'react-dom';
          if (id.includes('node_modules/react/')) return 'react';
          if (id.includes('node_modules/lucide-react')) return 'icons';
        },
      },
    },
  },
});
