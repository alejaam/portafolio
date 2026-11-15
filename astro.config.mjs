// @ts-check
import { defineConfig } from 'astro/config';
import { DEFAULT_LANG } from './src/content/paths.js';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  // La raíz lleva al idioma por omisión.
  redirects: {
    '/': `/${DEFAULT_LANG}/`,
  },
});
