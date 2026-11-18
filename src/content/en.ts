import {
  GITHUB_URL,
  PENDIENTE_CV_PATH,
  PENDIENTE_EMAIL,
  PENDIENTE_LINKEDIN_URL,
} from './pending';
import type { Content } from './types';

/** PENDIENTE: project and measurable outcome for the current role (Javier provides it). */
const PENDIENTE_CURRENT_ROLE = '[pending: project and measurable outcome]';

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'Javier Alamar · Go Backend Engineer',
    description:
      'Javier Alamar, backend Software Engineer working in Go. Five-plus years at Mercado Libre, plus tools that put AI agents to work writing code.',
    skipLabel: 'Skip to content',
  },
  header: {
    name: 'Javier Alamar',
    homeLabel: 'Javier Alamar, home',
    navLabel: 'Sections',
    langSwitchLabel: 'Language',
    langNames: { es: 'Español', en: 'English' },
  },
  sections: {
    projects: { id: 'projects', label: 'Projects' },
    experience: { id: 'experience', label: 'Experience' },
    contact: { id: 'contact', label: 'Contact' },
  },
  hero: {
    label: 'Software Engineer · Backend · Go',
    title: 'Go backends for systems millions of people rely on.',
    lead: 'I’ve spent five-plus years at Mercado Libre. On my own time, I build tools that get AI agents writing code.',
  },
  now: {
    label: 'Now',
    role: 'Software Engineer at Mercado Libre',
    meta: 'Feb 2024 — present · remote, Mexico',
  },
  featured: {
    label: 'Featured project',
    status: '2026 · in progress',
    title: 'devagentx',
    text: 'My personal software factory: it picks up a GitHub issue, has an agent implement it inside a container, gets a second model to review it, and hands me a PR ready to approve.',
    stagesLabel: 'Pipeline stages',
    stages: [
      { name: 'backlog' },
      { name: 'implement' },
      { name: 'review' },
      { name: 'human_test', highlight: true },
      { name: 'pull request' },
    ],
    stack: 'Go · Docker · MCP · React',
    // The case study page comes in a separate issue.
    cta: { label: 'Read the case study →', href: '#' },
  },
  stats: [
    { label: 'Track record', value: '5+', text: 'years at Mercado Libre' },
    {
      label: 'Agents I orchestrate',
      value: '4',
      text: 'Claude Code, Codex, OpenCode, Antigravity',
    },
  ],
  projects: {
    linkHint: '(GitHub repository)',
    items: [
      {
        label: 'App · finance',
        name: 'micha',
        description: 'Shared expenses for roommates, couples and families.',
        stack: 'Go (DDD, hexagonal) · PostgreSQL · React',
        href: 'https://github.com/alejaam/micha',
      },
      {
        label: 'Platform · tournaments',
        name: 'tourney-rank',
        description: 'Multi-game tournaments with rankings calculated automatically.',
        stack: 'Go (clean architecture) · MongoDB · React',
        href: 'https://github.com/alejaam/tourney-rank',
      },
      {
        label: 'Service · HTTP',
        name: 'twitch-gpt-bot',
        description: 'Bridges Twitch chat commands to an LLM.',
        stack: 'Go, standard library only · Docker',
        href: 'https://github.com/alejaam/twitch-gpt-bot',
      },
      {
        label: 'Kit · agents',
        name: 'devharness',
        description:
          'Rules, skills and memory you can carry across Claude Code, Codex, Copilot CLI and OpenCode.',
        stack: 'Configuration · Markdown',
        href: 'https://github.com/alejaam/devharness',
      },
    ],
  },
  experience: {
    items: [
      {
        dates: 'Feb 2024 — present',
        role: 'Software Engineer',
        company: 'Mercado Libre',
        text: PENDIENTE_CURRENT_ROLE,
      },
      {
        dates: 'Jun 2021 — Feb 2024',
        role: 'Software Development Analyst',
        company: 'Mercado Libre',
        text: 'Revamp and migration of the Mercado Libre Argentina site.',
      },
      {
        dates: 'Aug 2020 — Jun 2021',
        role: 'Junior Web Developer',
        company: 'Segmail',
        text: 'Web development for a logistics and fulfillment company.',
      },
      {
        dates: 'Sep 2019 — Aug 2020',
        role: 'PHP Intern',
        company: 'Master Loyalty Group',
        text: 'Improved internal applications across frontend, backend and database.',
      },
    ],
  },
  stack: {
    label: 'What I work with',
    main: 'Go',
    items: [
      'Software architecture',
      'Cloud computing',
      'PostgreSQL · MongoDB · SQL',
      'Docker',
      'AI agents · MCP',
      'React, when it’s needed',
    ],
  },
  contact: {
    terminal: {
      alt: 'Decorative terminal output: go test ./... passes in every package.',
      lines: [
        '$ go test ./...',
        'ok   micha/internal/expense     0.412s',
        'ok   tourney-rank/ranking       0.388s',
        'ok   twitch-gpt-bot/bot         0.127s',
        'PASS',
      ],
    },
    email: { label: 'Get in touch', address: PENDIENTE_EMAIL },
    linksLabel: 'Elsewhere',
    links: [
      { label: 'LinkedIn', href: PENDIENTE_LINKEDIN_URL },
      { label: 'GitHub', href: GITHUB_URL },
      { label: 'Résumé (PDF)', href: PENDIENTE_CV_PATH },
    ],
  },
};
