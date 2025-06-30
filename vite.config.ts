import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url))
      },
      {
        find: '@sections',
        replacement: fileURLToPath(new URL('./src/components/sections', import.meta.url))
      },
      {
        find: '@layout',
        replacement: fileURLToPath(new URL('./src/components/layout', import.meta.url))
      },
      {
        find: '@ui',
        replacement: fileURLToPath(new URL('./src/components/ui', import.meta.url))
      },
      {
        find: '@context',
        replacement: fileURLToPath(new URL('./src/context', import.meta.url))
      },
      {
        find: '@styles',
        replacement: fileURLToPath(new URL('./src/styles', import.meta.url))
      },
      {
        find: '@utils',
        replacement: fileURLToPath(new URL('./src/utils', import.meta.url))
      },
      {
        find: '@hooks',
        replacement: fileURLToPath(new URL('./src/hooks', import.meta.url))
      },
      {
        find: '@config',
        replacement: fileURLToPath(new URL('./src/config', import.meta.url))
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url))
      }
    ]
  },
});
