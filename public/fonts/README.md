# Fuentes

Archivos `.woff2` (subconjunto latino) que declara `src/styles/fonts.css`. Se sirven desde el propio sitio, sin CDN.

| Archivo | Familia | Peso |
|---|---|---|
| `familjen-grotesk-latin-400-normal.woff2` | Familjen Grotesk | 400 |
| `familjen-grotesk-latin-500-normal.woff2` | Familjen Grotesk | 500 |
| `familjen-grotesk-latin-700-normal.woff2` | Familjen Grotesk | 700 |
| `ibm-plex-mono-latin-400-normal.woff2` | IBM Plex Mono | 400 |
| `ibm-plex-mono-latin-500-normal.woff2` | IBM Plex Mono | 500 |

Los cinco archivos están incluidos en el repo: no hace falta descargarlos para compilar. `tests/styles.test.mjs` comprueba que cada fuente que declaran `src/styles/fonts.css` y `src/layouts/BaseLayout.astro` exista aquí y sea un woff2 válido.

## Origen

Paquetes [`@fontsource/familjen-grotesk`](https://www.npmjs.com/package/@fontsource/familjen-grotesk) e [`@fontsource/ibm-plex-mono`](https://www.npmjs.com/package/@fontsource/ibm-plex-mono), carpeta `files/`, con los mismos nombres y sin modificar.

## Licencia

Familjen Grotesk e IBM Plex Mono se distribuyen bajo la [SIL Open Font License 1.1](https://openfontlicense.org) (OFL-1.1). La licencia permite usarlas, incrustarlas y servirlas desde el sitio; lo que no permite es vender las fuentes por sí solas. El texto completo de la licencia y los avisos de copyright están junto a las fuentes: `OFL-FamiljenGrotesk.txt` y `OFL-IBMPlexMono.txt`; la OFL exige conservarlos.

## Actualizarlas

Solo si se quiere otra versión. Sin agregar dependencias al proyecto:

```sh
for f in familjen-grotesk-latin-{400,500,700}-normal; do
  curl -fsSLo "public/fonts/$f.woff2" "https://cdn.jsdelivr.net/npm/@fontsource/familjen-grotesk/files/$f.woff2"
done
for f in ibm-plex-mono-latin-{400,500}-normal; do
  curl -fsSLo "public/fonts/$f.woff2" "https://cdn.jsdelivr.net/npm/@fontsource/ibm-plex-mono/files/$f.woff2"
done
```
