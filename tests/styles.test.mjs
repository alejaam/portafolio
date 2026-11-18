// Reglas del sistema visual sobre el CSS fuente. No necesitan el build.
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = fileURLToPath(new URL('../src/styles/', import.meta.url));
const css = readdirSync(dir)
  .filter((f) => f.endsWith('.css'))
  .map((f) => readFileSync(join(dir, f), 'utf8').replace(/\/\*[\s\S]*?\*\//g, ''))
  .join('\n');

test('sin esquinas redondeadas, sombras ni degradados', () => {
  assert.doesNotMatch(css, /border-radius/);
  assert.doesNotMatch(css, /box-shadow/);
  assert.doesNotMatch(css, /gradient\(/);
});

test('las fuentes se sirven desde /fonts/ con los pesos pedidos', () => {
  const faces = [...css.matchAll(/@font-face\s*{([^}]*)}/g)].map(([, body]) => ({
    family: body.match(/font-family:\s*'([^']+)'/)?.[1],
    weight: body.match(/font-weight:\s*(\d+)/)?.[1],
    src: body.match(/url\('([^']+)'\)/)?.[1],
  }));
  assert.deepEqual(
    faces.map((f) => `${f.family} ${f.weight}`),
    [
      'Familjen Grotesk 400',
      'Familjen Grotesk 500',
      'Familjen Grotesk 700',
      'IBM Plex Mono 400',
      'IBM Plex Mono 500',
    ],
  );
  for (const f of faces) assert.match(f.src ?? '', /^\/fonts\/[\w-]+\.woff2$/);
});

test('cada fuente declarada o precargada existe en public/fonts/ y es woff2', () => {
  const pub = fileURLToPath(new URL('../public', import.meta.url));
  const layout = readFileSync(
    fileURLToPath(new URL('../src/layouts/BaseLayout.astro', import.meta.url)),
    'utf8',
  );
  const urls = new Set([
    ...[...css.matchAll(/url\('([^']+)'\)/g)].map(([, u]) => u),
    ...[...layout.matchAll(/rel="preload" href="([^"]+)"/g)].map(([, u]) => u),
  ]);
  assert.ok(urls.size >= 5);
  for (const u of urls) {
    assert.match(u, /^\/fonts\/[\w-]+\.woff2$/);
    const head = readFileSync(join(pub, u)).subarray(0, 4).toString('latin1');
    assert.equal(head, 'wOF2', `${u} no es un woff2 válido`);
  }
});
