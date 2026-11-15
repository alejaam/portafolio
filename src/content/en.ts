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

/** PENDIENTE (PENDING): current role description (project and measurable result). */
const PENDING_CURRENT_ROLE_DESCRIPTION = '[pending: project and measurable result]';

export const en: Content = {
  lang: 'en',
  meta: {
    title: 'Javier Alamar · Go Backend Engineer',
    description:
      'Javier Alamar, backend Software Engineer working in Go. Five-plus years at Mercado Libre, plus tools that put AI agents to work writing code.',
  },
  header: {
    name: 'Javier Alamar',
    homeLabel: 'Javier Alamar, home',
    navLabel: 'Main',
    nav: { projects: 'Projects', experience: 'Experience', contact: 'Contact' },
    langSwitchLabel: 'Language',
    langNames: { es: 'Español', en: 'English' },
  },
  hero: {
    label: 'Software Engineer · Backend · Go',
    title: 'Go backends for systems millions of people rely on.',
    intro:
      'I’ve been at Mercado Libre for over five years. Outside of work, I build tools that put AI agents to work writing code.',
  },
  now: {
    label: 'Now',
    role: 'Software Engineer at Mercado Libre',
    details: 'Feb 2024 — present · remote, Mexico',
  },
  featured: {
    label: 'Featured project',
    status: '2026 · in progress',
    name: 'devagentx',
    description:
      'My personal software factory: it picks up a GitHub issue, has an agent implement it inside a container, gets a second model to review the work, and hands me a PR that’s ready to approve.',
    stagesLabel: 'Pipeline stages',
    stages: [
      { name: 'backlog' },
      { name: 'implement' },
      { name: 'review' },
      { name: 'human_test', highlight: true },
      { name: 'pull request' },
    ],
    stack: 'Go · Docker · MCP · React',
    cta: 'Read the case study',
    ctaUrl: DEVAGENTX_CASE_URL,
  },
  stats: [
    { label: 'Track record', value: '5+', caption: 'years at Mercado Libre' },
    {
      label: 'Agents I orchestrate',
      value: '4',
      caption: 'Claude Code, Codex, OpenCode, Antigravity',
    },
  ],
  projects: {
    heading: 'Projects',
    items: [
      {
        label: 'App · finance',
        name: 'micha',
        description: 'Shared expenses for roommates, couples and families.',
        stack: 'Go (DDD, hexagonal) · PostgreSQL · React',
        url: REPOS.micha,
      },
      {
        label: 'Platform · tournaments',
        name: 'tourney-rank',
        description: 'Multi-game tournaments with rankings calculated automatically.',
        stack: 'Go (clean architecture) · MongoDB · React',
        url: REPOS.tourneyRank,
      },
      {
        label: 'Service · HTTP',
        name: 'twitch-gpt-bot',
        description: 'Connects Twitch chat commands to an LLM.',
        stack: 'Go, standard library only · Docker',
        url: REPOS.twitchGptBot,
      },
      {
        label: 'Kit · agents',
        name: 'devharness',
        description:
          'Rules, skills and memory you can carry across Claude Code, Codex, Copilot CLI and OpenCode.',
        stack: 'Configuration · Markdown',
        url: REPOS.devharness,
      },
    ],
  },
  experience: {
    label: 'Experience',
    jobs: [
      {
        dates: 'Feb 2024 — present',
        role: 'Software Engineer',
        company: 'Mercado Libre',
        description: PENDING_CURRENT_ROLE_DESCRIPTION,
      },
      {
        dates: 'Jun 2021 — Feb 2024',
        role: 'Software Development Analyst',
        company: 'Mercado Libre',
        description: 'Redesign and migration of the Mercado Libre Argentina website.',
      },
      {
        dates: 'Aug 2020 — Jun 2021',
        role: 'Junior Web Developer',
        company: 'Segmail',
        description: 'Web development for a logistics and fulfillment company.',
      },
      {
        dates: 'Sep 2019 — Aug 2020',
        role: 'PHP Intern',
        company: 'Master Loyalty Group',
        description: 'Improved internal applications across the frontend, backend and database.',
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
      'React, when the job calls for it',
    ],
  },
  contact: {
    heading: 'Contact',
    terminal: {
      alt: 'Decorative go test ./... output: every test passes.',
      lines: TERMINAL_LINES,
    },
    emailLabel: 'Get in touch',
    email: PENDING_CONTACT_EMAIL,
    linksLabel: 'Elsewhere',
    links: [
      { label: 'LinkedIn', url: PENDING_LINKEDIN_URL, external: true },
      { label: 'GitHub', url: GITHUB_PROFILE_URL, external: true },
      { label: 'Résumé (PDF)', url: PENDING_CV_PATH, external: false },
    ],
  },
};
