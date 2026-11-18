import {
  GITHUB_URL,
  EMAIL,
  LINKEDIN_URL,
} from './contact';
import type { Content } from './types';

/** PENDIENTE: proyecto y resultado medible del puesto actual (lo entrega Javier). */
const PENDIENTE_PUESTO_ACTUAL = '[pendiente: proyecto y resultado medible]';

export const es: Content = {
  lang: 'es',
  meta: {
    title: 'Javier Alamar · Backend Engineer en Go',
    description:
      'Javier Alamar, Software Engineer backend en Go. Más de cinco años en Mercado Libre y herramientas que ponen a agentes de IA a programar.',
    skipLabel: 'Saltar al contenido',
  },
  header: {
    name: 'Javier Alamar',
    homeLabel: 'Javier Alamar, inicio',
    navLabel: 'Secciones',
    langSwitchLabel: 'Idioma',
    langNames: { es: 'Español', en: 'English' },
  },
  sections: {
    projects: { id: 'proyectos', label: 'Proyectos' },
    experience: { id: 'experiencia', label: 'Experiencia' },
    contact: { id: 'contacto', label: 'Contacto' },
  },
  hero: {
    label: 'Software Engineer · Backend · Go',
    title: 'Backend en Go para sistemas que usan millones de personas.',
    lead: 'Llevo más de cinco años en Mercado Libre. Fuera del trabajo construyo herramientas que ponen a agentes de IA a programar.',
  },
  now: {
    label: 'Ahora',
    role: 'Software Engineer en Mercado Libre',
    meta: 'feb 2024 — hoy · remoto, México',
  },
  featured: {
    label: 'Proyecto principal',
    status: '2026 · en curso',
    title: 'devagentx',
    text: 'Una fábrica de software personal: toma un issue de GitHub, lo implementa con un agente dentro de un contenedor, lo revisa con otro modelo y me entrega un PR listo para aprobar.',
    stagesLabel: 'Etapas del flujo',
    stages: [
      { name: 'backlog' },
      { name: 'implement' },
      { name: 'review' },
      { name: 'human_test', highlight: true },
      { name: 'pull request' },
    ],
    stack: 'Go · Docker · MCP · React',
    // La página del caso llega en otro issue.
    cta: { label: 'Leer el caso →', href: '#' },
  },
  stats: [
    { label: 'Trayectoria', value: '5+', text: 'años en Mercado Libre' },
    {
      label: 'Agentes que orquesto',
      value: '4',
      text: 'Claude Code, Codex, OpenCode, Antigravity',
    },
  ],
  projects: {
    linkHint: '(repositorio en GitHub)',
    items: [
      {
        label: 'App · finanzas',
        name: 'micha',
        description: 'Gastos compartidos para roomies, parejas y familias.',
        stack: 'Go (DDD, hexagonal) · PostgreSQL · React',
        href: 'https://github.com/alejaam/micha',
      },
      {
        label: 'Plataforma · torneos',
        name: 'tourney-rank',
        description: 'Torneos de varios juegos con cálculo automático de ranking.',
        stack: 'Go (clean architecture) · MongoDB · React',
        href: 'https://github.com/alejaam/tourney-rank',
      },
      {
        label: 'Servicio · HTTP',
        name: 'twitch-gpt-bot',
        description: 'Puente entre los comandos del chat de Twitch y un LLM.',
        stack: 'Go, solo librería estándar · Docker',
        href: 'https://github.com/alejaam/twitch-gpt-bot',
      },
      {
        label: 'Kit · agentes',
        name: 'devharness',
        description:
          'Reglas, skills y memoria portables entre Claude Code, Codex, Copilot CLI y OpenCode.',
        stack: 'Configuración · Markdown',
        href: 'https://github.com/alejaam/devharness',
      },
    ],
  },
  experience: {
    items: [
      {
        dates: 'feb 2024 — hoy',
        role: 'Software Engineer',
        company: 'Mercado Libre',
        text: PENDIENTE_PUESTO_ACTUAL,
      },
      {
        dates: 'jun 2021 — feb 2024',
        role: 'Software Development Analyst',
        company: 'Mercado Libre',
        text: 'Renovación del sitio de Mercado Libre Argentina y su migración.',
      },
      {
        dates: 'ago 2020 — jun 2021',
        role: 'Web Developer Jr',
        company: 'Segmail',
        text: 'Desarrollo web para una empresa de logística y fulfillment.',
      },
      {
        dates: 'sep 2019 — ago 2020',
        role: 'Intern PHP',
        company: 'Master Loyalty Group',
        text: 'Mejoras a aplicaciones internas: frontend, backend y base de datos.',
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
    terminal: {
      alt: 'Salida decorativa de una terminal: go test ./... pasa en todos los paquetes.',
      lines: [
        '$ go test ./...',
        'ok   micha/internal/expense     0.412s',
        'ok   tourney-rank/ranking       0.388s',
        'ok   twitch-gpt-bot/bot         0.127s',
        'PASS',
      ],
    },
    email: { label: 'Escríbeme', address: EMAIL },
    linksLabel: 'Otros enlaces',
    links: [
      { label: 'LinkedIn', href: LINKEDIN_URL },
      { label: 'GitHub', href: GITHUB_URL },
    ],
  },
};
