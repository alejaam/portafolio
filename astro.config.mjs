// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  // La raíz lleva al idioma por omisión.
  redirects: {
    '/': '/es/',
  },
});
