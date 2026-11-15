/**
 * Datos que no dependen del idioma: enlaces, correo y archivos.
 *
 * ┌──────────────────────────────────────────────────────────────┐
 * │ PENDIENTE: valores provisionales que entrega Javier.         │
 * │ Reemplazar antes de publicar. Buscar "PENDIENTE" en el repo. │
 * └──────────────────────────────────────────────────────────────┘
 */

/** PENDIENTE: correo de contacto real. */
export const PENDING_CONTACT_EMAIL = 'pendiente@example.com';

/** PENDIENTE: URL del perfil de LinkedIn. */
export const PENDING_LINKEDIN_URL = 'https://www.linkedin.com/in/PENDIENTE/';

/**
 * PENDIENTE: CV en PDF. Hoy apunta a un PDF provisional en `public/cv/`;
 * reemplazar el archivo (o esta ruta) por el CV real.
 */
export const PENDING_CV_PATH = '/cv/javier-alamar-cv.pdf';

export const GITHUB_PROFILE_URL = 'https://github.com/alejaam';

export const REPOS = {
  micha: 'https://github.com/alejaam/micha',
  tourneyRank: 'https://github.com/alejaam/tourney-rank',
  twitchGptBot: 'https://github.com/alejaam/twitch-gpt-bot',
  devharness: 'https://github.com/alejaam/devharness',
} as const;

/** La página del caso de devagentx va en otro issue; por ahora no lleva a ningún lado. */
export const DEVAGENTX_CASE_URL = '#';

/** Salida decorativa de la celda de contacto (código, igual en ambos idiomas). */
export const TERMINAL_LINES = [
  '$ go test ./...',
  'ok   micha/expense      0.21s',
  'ok   tourney-rank/rank  0.18s',
  'ok   twitch-gpt-bot     0.05s',
  'ok   devagentx/review   0.33s',
  'PASS',
];
