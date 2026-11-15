export type Lang = 'es' | 'en';

export interface Labelled {
  label: string;
}

export interface Stat extends Labelled {
  value: string;
  caption: string;
}

export interface Project extends Labelled {
  name: string;
  description: string;
  stack: string;
  url: string;
}

export interface Job {
  dates: string;
  role: string;
  company: string;
  description: string;
}

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
    nav: { projects: string; experience: string; contact: string };
    langSwitchLabel: string;
    langNames: Record<Lang, string>;
  };
  hero: {
    label: string;
    title: string;
    intro: string;
  };
  now: {
    label: string;
    role: string;
    details: string;
  };
  featured: {
    label: string;
    status: string;
    name: string;
    description: string;
    stagesLabel: string;
    stages: { name: string; highlight?: boolean }[];
    stack: string;
    cta: string;
    ctaUrl: string;
  };
  stats: [Stat, Stat];
  projects: {
    heading: string;
    items: Project[];
  };
  experience: {
    label: string;
    jobs: Job[];
  };
  stack: {
    label: string;
    main: string;
    items: string[];
  };
  contact: {
    heading: string;
    terminal: { alt: string; lines: string[] };
    emailLabel: string;
    email: string;
    linksLabel: string;
    links: { label: string; url: string; external: boolean }[];
  };
}
