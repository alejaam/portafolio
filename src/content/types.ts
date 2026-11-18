export type Lang = 'es' | 'en';

/**
 * Forma del contenido de cada idioma. `es.ts` y `en.ts` la cumplen, así que
 * un texto que falta en un idioma rompe `pnpm check`.
 */
export interface Content {
  lang: Lang;
  meta: {
    title: string;
    description: string;
    /** Enlace "saltar al contenido" para teclado y lectores de pantalla. */
    skipLabel: string;
  };
  header: {
    name: string;
    homeLabel: string;
    langSwitchLabel: string;
    langNames: Record<Lang, string>;
  };
}
