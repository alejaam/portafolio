export type Lang = 'es' | 'en';

/** Enlace con texto visible. */
export interface Link {
  label: string;
  href: string;
}

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
    navLabel: string;
    langSwitchLabel: string;
    langNames: Record<Lang, string>;
  };
  /** Anclas de las secciones (en el idioma de la URL) y su texto en el menú. */
  sections: {
    projects: { id: string; label: string };
    experience: { id: string; label: string };
    contact: { id: string; label: string };
  };
  hero: {
    label: string;
    title: string;
    lead: string;
  };
  now: {
    label: string;
    role: string;
    meta: string;
  };
  featured: {
    label: string;
    status: string;
    title: string;
    text: string;
    stagesLabel: string;
    stages: { name: string; highlight?: boolean }[];
    stack: string;
    cta: Link;
  };
  stats: { label: string; value: string; text: string }[];
  projects: {
    /** Texto para lectores de pantalla que acompaña a cada enlace. */
    linkHint: string;
    items: { label: string; name: string; description: string; stack: string; href: string }[];
  };
  experience: {
    items: { dates: string; role: string; company: string; text: string }[];
  };
  stack: {
    label: string;
    main: string;
    items: string[];
  };
  contact: {
    terminal: { alt: string; lines: string[] };
    email: { label: string; address: string };
    linksLabel: string;
    links: Link[];
  };
}
