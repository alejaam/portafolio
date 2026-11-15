# portafolio

Portafolio personal de Javier Alamar, Software Engineer backend en Go. Es un sitio estático hecho con [Astro](https://astro.build), en español (`/es/`) e inglés (`/en/`).

## Requisitos

- Node.js 22.12 o superior
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
- `tests/dist.test.mjs`: revisa `dist/`: la raíz redirige a `/es/`, existen `/es/` y `/en/` con su `lang`, y el selector apunta al otro idioma y marca el actual. Necesita un build previo.

## Estructura

```
src/
  content/       todo el texto del sitio
    es.ts        contenido en español
    en.ts        contenido en inglés
    shared.ts    enlaces, correo y CV (iguales en los dos idiomas)
    types.ts     forma del contenido; ambos idiomas la cumplen
    paths.js     idiomas disponibles y helpers de rutas (JS para probarlo con Node)
    index.ts     punto de entrada: contenido por idioma y reexporta paths.js
  components/    una fila del bento por componente
  layouts/       documento HTML base
  pages/[lang]/  genera /es/ y /en/
  styles/        CSS global (variables, retícula) y @font-face
tests/           pruebas con node:test (rutas por idioma y sitio compilado)
public/
  fonts/         Familjen Grotesk e IBM Plex Mono en woff2 (SIL OFL 1.1)
  cv/            CV en PDF
```

- **Textos:** se editan solo en `src/content/es.ts` y `src/content/en.ts`. Los componentes no tienen textos propios.
- **Estilos:** CSS propio con variables en `src/styles/global.css`, sin Tailwind ni librerías de componentes. El bento es un contenedor con fondo tinta y `gap: 1px`: las líneas son el hueco entre celdas.
- **Fuentes:** se sirven desde `public/fonts/`, no desde un CDN.

## Contenido pendiente

Hay valores provisionales marcados con `PENDIENTE` (búsqueda: `grep -rn PENDIENTE src`):

| Dato | Dónde |
|---|---|
| Correo de contacto | `PENDING_CONTACT_EMAIL` en `src/content/shared.ts` |
| URL de LinkedIn | `PENDING_LINKEDIN_URL` en `src/content/shared.ts` |
| CV en PDF | reemplazar `public/cv/javier-alamar-cv.pdf` (hoy es un PDF provisional) |
| Descripción del puesto actual | `PENDING_CURRENT_ROLE_DESCRIPTION` en `src/content/es.ts` y `en.ts` |
