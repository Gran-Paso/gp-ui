import * as Lucide from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const SKIP = new Set([
  'createLucideIcon',
  'icons',
  'default',
  'Icon',
  'LucideIcon',
  'LucideProps',
  'IconNode',
]);

function isIcon(value: unknown): value is LucideIcon {
  if (typeof value === 'function') return true;
  return typeof value === 'object' && value !== null;
}

let cached: { name: string; Icon: LucideIcon }[] | null = null;

export function listLucideIcons(): { name: string; Icon: LucideIcon }[] {
  if (cached) return cached;
  const out: { name: string; Icon: LucideIcon }[] = [];
  for (const [name, value] of Object.entries(Lucide)) {
    if (SKIP.has(name)) continue;
    if (name[0] < 'A' || name[0] > 'Z') continue;
    if (name.endsWith('Icon') || name.startsWith('Lucide')) continue;
    if (!isIcon(value)) continue;
    out.push({ name, Icon: value });
  }
  out.sort((a, b) => a.name.localeCompare(b.name));
  cached = out;
  return out;
}

export function getLucideIcon(name: string): LucideIcon | null {
  if (!name) return null;
  const value = (Lucide as Record<string, unknown>)[name];
  return isIcon(value) ? value : null;
}
