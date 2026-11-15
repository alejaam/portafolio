// @ts-check
// Idiomas y rutas. Es JavaScript plano (con tipos en JSDoc) para que las
// pruebas de `tests/` lo importen con Node sin compilar TypeScript.

/** @typedef {import('./types').Lang} Lang */

/**
 * Idiomas publicados, en el orden del selector.
 * @type {readonly Lang[]}
 */
export const LANGS = ['es', 'en'];

/**
 * Idioma al que redirige la raíz `/`.
 * @type {Lang}
 */
export const DEFAULT_LANG = 'es';

const LANG_PREFIX = new RegExp(`^/(?:${LANGS.join('|')})(?=/|$)`);

/**
 * Misma ruta en otro idioma: `/es/algo/` → `/en/algo/`.
 * Una ruta sin prefijo de idioma (por ejemplo `/`) queda bajo `/{target}/`.
 * @param {string} pathname
 * @param {Lang} target
 * @returns {string}
 */
export function localizePath(pathname, target) {
  const rest = pathname.replace(LANG_PREFIX, '');
  return `/${target}${rest || '/'}`;
}
