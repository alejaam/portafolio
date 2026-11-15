import { en } from './en';
import { es } from './es';
import type { Content, Lang } from './types';

export const LANGS = ['es', 'en'] as const satisfies readonly Lang[];
export const DEFAULT_LANG: Lang = 'es';

const content: Record<Lang, Content> = { es, en };

export function getContent(lang: Lang): Content {
  return content[lang];
}

/** Misma ruta en otro idioma: /es/algo/ → /en/algo/. */
export function localizePath(pathname: string, target: Lang): string {
  const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, '');
  return `/${target}${rest || '/'}`;
}

export type { Content, Lang };
