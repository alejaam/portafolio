// Pruebas unitarias de las rutas por idioma. No necesitan el build.
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DEFAULT_LANG, LANGS, localizePath } from '../src/content/paths.js';

test('los idiomas publicados son es y en, con es por omisión', () => {
  assert.deepEqual([...LANGS], ['es', 'en']);
  assert.equal(DEFAULT_LANG, 'es');
});

test('cambia el prefijo de idioma sin duplicarlo', () => {
  assert.equal(localizePath('/es/', 'en'), '/en/');
  assert.equal(localizePath('/en/', 'es'), '/es/');
  assert.equal(localizePath('/es/', 'es'), '/es/');
  assert.equal(localizePath('/en/', 'en'), '/en/');
});

test('conserva el resto de la ruta', () => {
  assert.equal(localizePath('/es/casos/devagentx/', 'en'), '/en/casos/devagentx/');
  assert.equal(localizePath('/en/cases/devagentx/', 'es'), '/es/cases/devagentx/');
});

test('acepta rutas sin barra final', () => {
  assert.equal(localizePath('/es', 'en'), '/en/');
  assert.equal(localizePath('/en', 'es'), '/es/');
});

test('una ruta sin idioma queda bajo el idioma pedido', () => {
  assert.equal(localizePath('/', 'en'), '/en/');
  assert.equal(localizePath('/', 'es'), '/es/');
});

test('no confunde segmentos que solo empiezan como un idioma', () => {
  assert.equal(localizePath('/essay/', 'en'), '/en/essay/');
  assert.equal(localizePath('/english/', 'es'), '/es/english/');
});
