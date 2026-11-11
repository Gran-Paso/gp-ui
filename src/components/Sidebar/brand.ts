import type { CSSProperties } from 'react';

export function normalizeBrandHex(value?: string | null): string | undefined {
  if (!value) return undefined;
  const hex = value.trim();
  return /^#[0-9A-Fa-f]{6}$/.test(hex) ? hex : undefined;
}

function channel(hexPair: string): number {
  const c = parseInt(hexPair, 16) / 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance(hex: string): number {
  const r = channel(hex.slice(1, 3));
  const g = channel(hex.slice(3, 5));
  const b = channel(hex.slice(5, 7));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrastRatio(foreground: string, background: string): number {
  const lighter = Math.max(luminance(foreground), luminance(background));
  const darker = Math.min(luminance(foreground), luminance(background));
  return (lighter + 0.05) / (darker + 0.05);
}

function mixHex(from: string, to: string, amount: number): string {
  const pair = (start: number) => {
    const a = parseInt(from.slice(start, start + 2), 16);
    const b = parseInt(to.slice(start, start + 2), 16);
    return Math.round(a + (b - a) * amount)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${pair(1)}${pair(3)}${pair(5)}`;
}

const LIGHT_SURFACE = '#ffffff';
/** Sidebar oscuro (gray-950) y menús (gray-900). */
const DARK_SURFACES = ['#030712', '#111827'] as const;
const MIN_ICON_CONTRAST = 3;

/**
 * Devuelve el mismo hex si ya se lee sobre el fondo.
 * Si no, lo acerca al blanco o al negro solo hasta el contraste mínimo.
 */
export function colorForSurface(
  hex: string,
  surfaces: string | readonly string[],
  min = MIN_ICON_CONTRAST,
): string {
  const list = typeof surfaces === 'string' ? [surfaces] : [...surfaces];
  const worst = (color: string) =>
    list.reduce((lowest, surface) => Math.min(lowest, contrastRatio(color, surface)), Number.POSITIVE_INFINITY);
  if (worst(hex) >= min) return hex;

  const average = list.reduce((sum, surface) => sum + luminance(surface), 0) / list.length;
  const toward = average > 0.4 ? '#000000' : '#ffffff';
  let low = 0;
  let high = 1;
  let best = toward;
  for (let step = 0; step < 16; step += 1) {
    const mid = (low + high) / 2;
    const mixed = mixHex(hex, toward, mid);
    if (worst(mixed) >= min) {
      best = mixed;
      high = mid;
    } else {
      low = mid;
    }
  }
  return best;
}

/** Negro o blanco, el que contraste más con el hex. */
export function contrastInk(hex: string): '#000000' | '#ffffff' {
  return luminance(hex) > 0.179 ? '#000000' : '#ffffff';
}

export function brandCssVars(
  primary?: string | null,
  secondary?: string | null,
): CSSProperties | undefined {
  const p = normalizeBrandHex(primary);
  const s = normalizeBrandHex(secondary);
  if (!p && !s) return undefined;
  const style: Record<string, string> = {};
  if (p) {
    style['--gp-brand-primary'] = p;
    style['--gp-brand-on-primary'] = contrastInk(p);
    style['--gp-brand-primary-on-light'] = colorForSurface(p, LIGHT_SURFACE);
    style['--gp-brand-primary-on-dark'] = colorForSurface(p, DARK_SURFACES);
  }
  if (s) {
    style['--gp-brand-secondary'] = s;
    style['--gp-brand-on-secondary'] = contrastInk(s);
    style['--gp-brand-secondary-on-light'] = colorForSurface(s, LIGHT_SURFACE);
    style['--gp-brand-secondary-on-dark'] = colorForSurface(s, DARK_SURFACES);
  }
  return style;
}
