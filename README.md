# portafolio

Portafolio personal de Javier Alamar, Software Engineer backend en Go. Es un sitio estático hecho con [Astro](https://astro.build), en español (`/es/`) e inglés (`/en/`).

## Requisitos

- Node.js 22.23.4 o superior
- pnpm 10 (`corepack enable` toma la versión declarada en `package.json`)

## Instalar

```sh
pnpm install --frozen-lockfile
```

## Desarrollar

```sh
pnpm dev        # servidor local en http://localhost:4321 (la raíz redirige a /es/)
pnpm check      # verificación de tipos y plantillas (astro check)
```

## Compilar

```sh
pnpm build      # genera el sitio estático en dist/ y luego corre las pruebas
pnpm preview    # sirve dist/ localmente para revisarlo
```

La verificación automática corre `pnpm install --frozen-lockfile && pnpm check && pnpm build`.

## Pruebas

```sh
pnpm test       # corre tests/*.test.mjs con el runner de Node (node:test)
```

No usan dependencias extra. `pnpm build` las corre al terminar, así que una regresión rompe la verificación automática:

- `tests/paths.test.mjs`: `localizePath` (cambio de idioma sin duplicar prefijos como `/en/es/`).
- `tests/dist.test.mjs`: revisa `dist/`: la raíz redirige a `/es/`, existen `/es/` y `/en/` con su `lang`, y el selector apunta al otro idioma y marca el actual. También que la página tenga las filas del bento en orden, los enlaces a los repos y al correo, y que el menú apunte a anclas existentes. Necesita un build previo.
- `tests/styles.test.mjs`: el CSS no usa `border-radius`, `box-shadow` ni degradados, y declara las cinco fuentes locales.

## Estructura

```
src/
  content/       todo el texto del sitio
    es.ts        contenido en español
    en.ts        contenido en inglés
    types.ts     forma del contenido; ambos idiomas la cumplen
    pending.ts   datos pendientes (correo, LinkedIn, CV)
    paths.js     idiomas disponibles y helpers de rutas (JS para probarlo con Node)
    index.ts     punto de entrada: contenido por idioma y reexporta paths.js
  components/    componentes (cabecera con menú y selector ES/EN)
  layouts/       documento HTML base
  pages/[lang]/  genera /es/ y /en/: la página de inicio bento
  styles/
    global.css   variables de diseño, retícula y estilos de la página
    fonts.css    @font-face de las fuentes locales
public/fonts/    Familjen Grotesk (400, 500, 700) e IBM Plex Mono (400, 500) en woff2
tests/           pruebas con node:test (rutas, sitio compilado y reglas del CSS)
```

- **Textos:** se editan solo en `src/content/es.ts` y `src/content/en.ts` (los datos compartidos pendientes, en `src/content/pending.ts`). Los componentes no tienen textos propios.
- **Estilos:** CSS propio con variables en `src/styles/global.css`, sin Tailwind ni librerías de componentes.
- **Fuentes:** se sirven desde `public/fonts/` (sin CDN). Los archivos esperados y de dónde salen están en `public/fonts/README.md`.

## Contenido pendiente

Algunos datos todavía no están y van como constantes marcadas con `PENDIENTE`; el sitio compila con ellas, pero hay que reemplazarlas antes de publicar:

- Correo de contacto, URL de LinkedIn y ruta del CV en PDF: `src/content/pending.ts`. El PDF va en `public/cv/`.
- Descripción del puesto actual: `PENDIENTE_PUESTO_ACTUAL` en `src/content/es.ts` y `PENDIENTE_CURRENT_ROLE` en `src/content/en.ts`.

Para encontrarlas: `grep -rn PENDIENTE src/content`.
