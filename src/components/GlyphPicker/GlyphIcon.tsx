import React from 'react';
import { getLucideIcon } from './lucideIcons';

export type GlyphKind = 'none' | 'emoji' | 'lucide' | 'media';

export interface GlyphValue {
  kind: GlyphKind;
  value: string | null;
}

export const GlyphIcon: React.FC<{
  glyph?: GlyphValue | null;
  fallback?: string;
  size?: number;
  mediaSrc?: string;
  className?: string;
}> = ({ glyph, fallback = '?', size = 16, mediaSrc, className = '' }) => {
  const kind = glyph?.kind ?? 'none';
  const value = glyph?.value ?? '';

  if (kind === 'media' && (mediaSrc || value)) {
    return (
      <img
        src={mediaSrc || value}
        alt=""
        className={`rounded-md object-cover ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }

  if (kind === 'emoji' && value) {
    return (
      <span
        className={`inline-flex items-center justify-center leading-none ${className}`}
        style={{ width: size, height: size, fontSize: Math.round(size * 0.78) }}
        aria-hidden
      >
        {value}
      </span>
    );
  }

  if (kind === 'lucide' && value) {
    const Icon = getLucideIcon(value);
    if (Icon) {
      return (
        <Icon
          size={size}
          strokeWidth={1.75}
          className={`shrink-0 text-gray-500 dark:text-gray-400 ${className}`}
        />
      );
    }
  }

  const initial = (fallback || '?').trim().charAt(0).toUpperCase() || '?';
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-md bg-gray-100 font-semibold text-gray-500 dark:bg-gray-800 dark:text-gray-400 ${className}`}
      style={{ width: size, height: size, fontSize: Math.max(9, Math.round(size * 0.45)) }}
      aria-hidden
    >
      {initial}
    </span>
  );
};
