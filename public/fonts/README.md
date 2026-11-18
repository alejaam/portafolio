# Fuentes

Archivos `.woff2` (subconjunto latino) que declara `src/styles/fonts.css`. Se sirven desde el propio sitio, sin CDN.

| Archivo | Familia | Peso |
|---|---|---|
| `familjen-grotesk-latin-400-normal.woff2` | Familjen Grotesk | 400 |
| `familjen-grotesk-latin-500-normal.woff2` | Familjen Grotesk | 500 |
| `familjen-grotesk-latin-700-normal.woff2` | Familjen Grotesk | 700 |
| `ibm-plex-mono-latin-400-normal.woff2` | IBM Plex Mono | 400 |
| `ibm-plex-mono-latin-500-normal.woff2` | IBM Plex Mono | 500 |

Origen: paquetes [`@fontsource/familjen-grotesk`](https://www.npmjs.com/package/@fontsource/familjen-grotesk) e [`@fontsource/ibm-plex-mono`](https://www.npmjs.com/package/@fontsource/ibm-plex-mono), carpeta `files/`, con los mismos nombres. Ambas familias tienen licencia SIL Open Font License 1.1, que permite servirlas desde el sitio.

Para descargarlas sin agregar dependencias al proyecto:

```sh
for f in familjen-grotesk-latin-{400,500,700}-normal; do
  curl -fsSLo "public/fonts/$f.woff2" "https://cdn.jsdelivr.net/npm/@fontsource/familjen-grotesk/files/$f.woff2"
done
for f in ibm-plex-mono-latin-{400,500}-normal; do
  curl -fsSLo "public/fonts/$f.woff2" "https://cdn.jsdelivr.net/npm/@fontsource/ibm-plex-mono/files/$f.woff2"
done
```
