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

/** Negro o blanco, el que contraste más con el hex. */
export function contrastInk(hex: string): '#000000' | '#ffffff' {
  const r = channel(hex.slice(1, 3));
  const g = channel(hex.slice(3, 5));
  const b = channel(hex.slice(5, 7));
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance > 0.179 ? '#000000' : '#ffffff';
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
  }
  if (s) {
    style['--gp-brand-secondary'] = s;
    style['--gp-brand-on-secondary'] = contrastInk(s);
  }
  return style;
}
