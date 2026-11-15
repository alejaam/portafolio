// Pruebas sobre el sitio compilado en dist/. Corren al final de `pnpm build`
// (o con `pnpm test` después de compilar).
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));

/** @param {string} path */
function page(path) {
  const file = join(dist, path, 'index.html');
  assert.ok(existsSync(file), `falta ${path}index.html en dist/; ¿corriste el build?`);
  return readFileSync(file, 'utf8');
}

/** Enlaces del selector de idioma: [{ lang, href, current }]. */
function langSwitch(html) {
  const list = html.match(/<ul class="lang-switch"[^>]*>([\s\S]*?)<\/ul>/);
  assert.ok(list, 'no se encontró el selector de idioma');
  return [...list[1].matchAll(/<a\b([^>]*)>/g)].map(([, attrs]) => ({
    lang: attrs.match(/\bhreflang="([^"]+)"/)?.[1],
    href: attrs.match(/\bhref="([^"]+)"/)?.[1],
    current: /\baria-current="page"/.test(attrs),
  }));
}

test('la raíz redirige a /es/', () => {
  const html = page('/');
  assert.match(html, /<meta http-equiv="refresh" content="0;\s*url=\/es\/"/);
  assert.match(html, /<link rel="canonical" href="\/es\/"/);
});

for (const [lang, other] of [
  ['es', 'en'],
  ['en', 'es'],
]) {
  test(`/${lang}/ existe y declara lang="${lang}"`, () => {
    assert.match(page(`/${lang}/`), new RegExp(`<html[^>]*\\blang="${lang}"`));
  });

  test(`en /${lang}/ el selector lleva a /${other}/ y marca ${lang.toUpperCase()}`, () => {
    const links = langSwitch(page(`/${lang}/`));
    assert.deepEqual(
      links.map(({ lang: l, href }) => [l, href]),
      [
        ['es', '/es/'],
        ['en', '/en/'],
      ],
    );
    assert.deepEqual(
      links.filter((l) => l.current).map((l) => l.lang),
      [lang],
      'solo el idioma actual lleva aria-current="page"',
    );
  });
}

test('el contenido cambia de idioma', () => {
  assert.match(page('/es/'), /Backend en Go para sistemas que usan millones de personas\./);
  const en = page('/en/');
  assert.doesNotMatch(en, /Backend en Go para sistemas/);
  assert.doesNotMatch(en, /Saltar al contenido/);
});
