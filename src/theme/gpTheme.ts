import { useCallback, useEffect, useState } from 'react';

export const GP_THEME_COOKIE = 'gp_theme';
export const GP_THEME_STORAGE_KEY = 'gp_theme';
export const GP_THEME_CHANGE_EVENT = 'gp-theme-change';

export type GpTheme = 'light' | 'dark' | 'system';
export type GpResolvedTheme = 'light' | 'dark';

const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const THEMES: GpTheme[] = ['light', 'dark', 'system'];

function isGpTheme(value: string | null | undefined): value is GpTheme {
  return value === 'light' || value === 'dark' || value === 'system';
}

function cookieDomain(): string | undefined {
  if (typeof window === 'undefined') return undefined;
  const host = window.location.hostname;
  if (host === 'localhost' || host === '127.0.0.1') return undefined;
  if (host.endsWith('granpasochile.cl')) return '.granpasochile.cl';
  return undefined;
}

function readCookie(): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(/(?:^|; )gp_theme=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(theme: GpTheme): void {
  if (typeof document === 'undefined') return;
  const parts = [
    `${GP_THEME_COOKIE}=${encodeURIComponent(theme)}`,
    'Path=/',
    `Max-Age=${COOKIE_MAX_AGE}`,
    'SameSite=Lax',
  ];
  const domain = cookieDomain();
  if (domain) parts.push(`Domain=${domain}`);
  if (typeof window !== 'undefined' && window.location.protocol === 'https:') {
    parts.push('Secure');
  }
  document.cookie = parts.join('; ');
}

function prefersDark(): boolean {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export function readGpTheme(): GpTheme {
  if (typeof window === 'undefined') return 'system';
  const fromCookie = readCookie();
  if (isGpTheme(fromCookie)) return fromCookie;
  try {
    const fromStorage = window.localStorage.getItem(GP_THEME_STORAGE_KEY);
    if (isGpTheme(fromStorage)) return fromStorage;
  } catch {
    /* private mode */
  }
  return 'system';
}

export function resolvedGpTheme(theme: GpTheme = readGpTheme()): GpResolvedTheme {
  if (theme === 'system') return prefersDark() ? 'dark' : 'light';
  return theme;
}

export function applyGpTheme(theme: GpTheme): GpResolvedTheme {
  const resolved = resolvedGpTheme(theme);
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', resolved === 'dark');
    document.documentElement.style.colorScheme = resolved;
  }
  writeCookie(theme);
  try {
    window.localStorage.setItem(GP_THEME_STORAGE_KEY, theme);
  } catch {
    /* private mode */
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent(GP_THEME_CHANGE_EVENT, { detail: { theme, resolved } }),
    );
  }
  return resolved;
}

export function bootGpTheme(): GpResolvedTheme {
  return applyGpTheme(readGpTheme());
}

/**
 * Inline snippet for `<head>` — apply class before first paint.
 * Keep in sync with applyGpTheme / readGpTheme.
 */
export const GP_THEME_FOUC_SCRIPT = `(function(){try{var t=null;var m=document.cookie.match(/(?:^|; )gp_theme=([^;]*)/);if(m)t=decodeURIComponent(m[1]);if(!t)t=localStorage.getItem('gp_theme');if(t!=='light'&&t!=='dark'&&t!=='system')t='system';var dark=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);var el=document.documentElement;el.classList.toggle('dark',dark);el.style.colorScheme=dark?'dark':'light';}catch(e){}})();`;

export function useGpTheme(): {
  theme: GpTheme;
  resolved: GpResolvedTheme;
  setTheme: (theme: GpTheme) => void;
  cycleTheme: () => void;
} {
  const [theme, setThemeState] = useState<GpTheme>(readGpTheme);
  const [resolved, setResolved] = useState<GpResolvedTheme>(() => resolvedGpTheme());

  const sync = useCallback(() => {
    const next = readGpTheme();
    setThemeState(next);
    setResolved(resolvedGpTheme(next));
  }, []);

  useEffect(() => {
    applyGpTheme(readGpTheme());
    const onChange = () => sync();
    window.addEventListener(GP_THEME_CHANGE_EVENT, onChange);
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onMedia = () => {
      if (readGpTheme() === 'system') applyGpTheme('system');
    };
    mq.addEventListener('change', onMedia);
    return () => {
      window.removeEventListener(GP_THEME_CHANGE_EVENT, onChange);
      mq.removeEventListener('change', onMedia);
    };
  }, [sync]);

  const setTheme = useCallback((next: GpTheme) => {
    applyGpTheme(next);
  }, []);

  const cycleTheme = useCallback(() => {
    const current = readGpTheme();
    const idx = THEMES.indexOf(current);
    applyGpTheme(THEMES[(idx + 1) % THEMES.length]);
  }, []);

  return { theme, resolved, setTheme, cycleTheme };
}
