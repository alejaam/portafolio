import type { Content } from './types';
import {
  DEVAGENTX_CASE_URL,
  GITHUB_PROFILE_URL,
  PENDING_CONTACT_EMAIL,
  PENDING_CV_PATH,
  PENDING_LINKEDIN_URL,
  REPOS,
  TERMINAL_LINES,
} from './shared';

/** PENDIENTE: descripción del puesto actual (proyecto y resultado medible). */
const PENDING_CURRENT_ROLE_DESCRIPTION = '[pendiente: proyecto y resultado medible]';

export const es: Content = {
  lang: 'es',
  meta: {
    title: 'Javier Alamar · Backend Engineer en Go',
    description:
      'Javier Alamar, Software Engineer backend en Go. Más de cinco años en Mercado Libre y herramientas que ponen a agentes de IA a programar.',
  },
  header: {
    name: 'Javier Alamar',
    homeLabel: 'Javier Alamar, inicio',
    navLabel: 'Principal',
    nav: { projects: 'Proyectos', experience: 'Experiencia', contact: 'Contacto' },
    langSwitchLabel: 'Idioma',
    langNames: { es: 'Español', en: 'English' },
  },
  hero: {
    label: 'Software Engineer · Backend · Go',
    title: 'Backend en Go para sistemas que usan millones de personas.',
    intro:
      'Llevo más de cinco años en Mercado Libre. Fuera del trabajo construyo herramientas que ponen a agentes de IA a programar.',
  },
  now: {
    label: 'Ahora',
    role: 'Software Engineer en Mercado Libre',
    details: 'feb 2024 — hoy · remoto, México',
  },
  featured: {
    label: 'Proyecto principal',
    status: '2026 · en curso',
    name: 'devagentx',
    description:
      'Una fábrica de software personal: toma un issue de GitHub, lo implementa con un agente dentro de un contenedor, lo revisa con otro modelo y me entrega un PR listo para aprobar.',
    stagesLabel: 'Etapas del flujo',
    stages: [
      { name: 'backlog' },
      { name: 'implement' },
      { name: 'review' },
      { name: 'human_test', highlight: true },
      { name: 'pull request' },
    ],
    stack: 'Go · Docker · MCP · React',
    cta: 'Leer el caso',
    ctaUrl: DEVAGENTX_CASE_URL,
  },
  stats: [
    { label: 'Trayectoria', value: '5+', caption: 'años en Mercado Libre' },
    {
      label: 'Agentes que orquesto',
      value: '4',
      caption: 'Claude Code, Codex, OpenCode, Antigravity',
    },
  ],
  projects: {
    heading: 'Proyectos',
    items: [
      {
        label: 'App · finanzas',
        name: 'micha',
        description: 'Gastos compartidos para roomies, parejas y familias.',
        stack: 'Go (DDD, hexagonal) · PostgreSQL · React',
        url: REPOS.micha,
      },
      {
        label: 'Plataforma · torneos',
        name: 'tourney-rank',
        description: 'Torneos de varios juegos con cálculo automático de ranking.',
        stack: 'Go (clean architecture) · MongoDB · React',
        url: REPOS.tourneyRank,
      },
      {
        label: 'Servicio · HTTP',
        name: 'twitch-gpt-bot',
        description: 'Puente entre los comandos del chat de Twitch y un LLM.',
        stack: 'Go, solo librería estándar · Docker',
        url: REPOS.twitchGptBot,
      },
      {
        label: 'Kit · agentes',
        name: 'devharness',
        description:
          'Reglas, skills y memoria portables entre Claude Code, Codex, Copilot CLI y OpenCode.',
        stack: 'Configuración · Markdown',
        url: REPOS.devharness,
      },
    ],
  },
  experience: {
    label: 'Experiencia',
    jobs: [
      {
        dates: 'feb 2024 — hoy',
        role: 'Software Engineer',
        company: 'Mercado Libre',
        description: PENDING_CURRENT_ROLE_DESCRIPTION,
      },
      {
        dates: 'jun 2021 — feb 2024',
        role: 'Software Development Analyst',
        company: 'Mercado Libre',
        description: 'Renovación del sitio de Mercado Libre Argentina y su migración.',
      },
      {
        dates: 'ago 2020 — jun 2021',
        role: 'Web Developer Jr',
        company: 'Segmail',
        description: 'Desarrollo web para una empresa de logística y fulfillment.',
      },
      {
        dates: 'sep 2019 — ago 2020',
        role: 'Intern PHP',
        company: 'Master Loyalty Group',
        description: 'Mejoras a aplicaciones internas: frontend, backend y base de datos.',
      },
    ],
  },
  stack: {
    label: 'Con qué trabajo',
    main: 'Go',
    items: [
      'Arquitectura de software',
      'Cómputo en la nube',
      'PostgreSQL · MongoDB · SQL',
      'Docker',
      'Agentes de IA · MCP',
      'React, cuando hace falta',
    ],
  },
  contact: {
    heading: 'Contacto',
    terminal: {
      alt: 'Salida decorativa de go test ./...: todas las pruebas pasan.',
      lines: TERMINAL_LINES,
    },
    emailLabel: 'Escríbeme',
    email: PENDING_CONTACT_EMAIL,
    linksLabel: 'En otros lados',
    links: [
      { label: 'LinkedIn', url: PENDING_LINKEDIN_URL, external: true },
      { label: 'GitHub', url: GITHUB_PROFILE_URL, external: true },
      { label: 'CV en PDF', url: PENDING_CV_PATH, external: false },
    ],
  },
};
