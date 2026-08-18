import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Clock, ImagePlus, Search, Shapes, Smile, X } from 'lucide-react';
import { ALL_EMOJIS, EMOJI_CATEGORIES, EMOJI_NAME, type EmojiCategoryId } from './emojiCatalog';
import { listLucideIcons } from './lucideIcons';
import { GlyphIcon, type GlyphValue } from './GlyphIcon';

const RECENT_EMOJI_KEY = 'gp-ui-glyph-recent-emoji';
const RECENT_LUCIDE_KEY = 'gp-ui-glyph-recent-lucide';
const RECENT_MAX = 32;

type Tab = 'emoji' | 'lucide' | 'photo';

function readRecent(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function pushRecent(key: string, value: string) {
  const next = [value, ...readRecent(key).filter((x) => x !== value)].slice(0, RECENT_MAX);
  try {
    localStorage.setItem(key, JSON.stringify(next));
  } catch {
    /* ignore quota */
  }
}

export interface GlyphPickerProps {
  value?: GlyphValue | null;
  onChange: (next: GlyphValue) => void;
  /** Trigger node (icon button). Default: current glyph. */
  trigger?: React.ReactNode;
  fallbackLabel?: string;
  allowClear?: boolean;
  allowPhoto?: boolean;
  onUploadPhoto?: (file: File) => Promise<string>;
  className?: string;
}

const GlyphPicker: React.FC<GlyphPickerProps> = ({
  value,
  onChange,
  trigger,
  fallbackLabel = '?',
  allowClear = true,
  allowPhoto = false,
  onUploadPhoto,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>('emoji');
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<EmojiCategoryId>('smileys');
  const [recentEmoji, setRecentEmoji] = useState<string[]>([]);
  const [recentLucide, setRecentLucide] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setRecentEmoji(readRecent(RECENT_EMOJI_KEY));
    setRecentLucide(readRecent(RECENT_LUCIDE_KEY));
      const t = window.setTimeout(() => searchRef.current?.focus(), 20);
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const query = q.trim().toLowerCase();
  const lucideAll = useMemo(() => (open ? listLucideIcons() : []), [open]);

  const emojiList = useMemo(() => {
    if (query) {
      return ALL_EMOJIS.filter((e) => {
        if (e.includes(query)) return true;
        const name = EMOJI_NAME[e];
        return name ? name.toLowerCase().includes(query) : false;
      });
    }
    if (cat === 'recent') return recentEmoji;
    return EMOJI_CATEGORIES.find((c) => c.id === cat)?.emojis ?? [];
  }, [query, cat, recentEmoji]);

  const lucideList = useMemo(() => {
    if (query) {
      return lucideAll.filter((i) => {
        const spaced = i.name.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        return i.name.toLowerCase().includes(query) || spaced.includes(query);
      });
    }
    if (recentLucide.length === 0) return lucideAll;
    const recentSet = new Set(recentLucide);
    const head = recentLucide
      .map((name) => lucideAll.find((i) => i.name === name))
      .filter((x): x is (typeof lucideAll)[number] => Boolean(x));
    return [...head, ...lucideAll.filter((i) => !recentSet.has(i.name))];
  }, [query, lucideAll, recentLucide]);

  const pickEmoji = (emoji: string) => {
    pushRecent(RECENT_EMOJI_KEY, emoji);
    setRecentEmoji(readRecent(RECENT_EMOJI_KEY));
    onChange({ kind: 'emoji', value: emoji });
    setOpen(false);
  };

  const pickLucide = (name: string) => {
    pushRecent(RECENT_LUCIDE_KEY, name);
    setRecentLucide(readRecent(RECENT_LUCIDE_KEY));
    onChange({ kind: 'lucide', value: name });
    setOpen(false);
  };

  const uploadPhoto = async (file: File | undefined) => {
    if (!file || !onUploadPhoto) return;
    setBusy(true);
    try {
      const url = await onUploadPhoto(file);
      onChange({ kind: 'media', value: url });
      setOpen(false);
    } finally {
      setBusy(false);
    }
  };

  const cats: { id: EmojiCategoryId; sample: string; label: string }[] = [
    { id: 'recent', sample: '', label: 'Recientes' },
    ...EMOJI_CATEGORIES.map((c) => ({ id: c.id, sample: c.sample, label: c.label })),
  ];

  return (
    <div ref={rootRef} className={`relative inline-flex ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="rounded-lg p-0.5 hover:bg-gray-100 dark:hover:bg-gray-800"
        title="Elegir icono"
        aria-label="Elegir icono"
        aria-expanded={open}
      >
        {trigger ?? <GlyphIcon glyph={value} fallback={fallbackLabel} size={28} />}
      </button>
      {open && (
        <div className="absolute left-0 top-full z-40 mt-2 flex h-[22.5rem] w-[20.5rem] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl dark:border-gray-700 dark:bg-gray-900">
          <div className="flex items-center justify-between px-3 pt-2.5">
            <p className="font-montserrat text-[11px] font-semibold uppercase tracking-widest text-gray-400">
              Elegir
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
              aria-label="Cerrar"
            >
              <X size={14} />
            </button>
          </div>
          <div className="mt-2 flex gap-1 px-3">
            {(
              [
                ['emoji', Smile, 'Emoji'],
                ['lucide', Shapes, 'Iconos'],
                ...(allowPhoto && onUploadPhoto ? ([['photo', ImagePlus, 'Foto']] as const) : []),
              ] as const
            ).map(([id, Icon, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => { setTab(id); setQ(''); }}
                className={`flex items-center gap-1 rounded-lg px-2 py-1 text-[12px] ${
                  tab === id
                    ? 'bg-gray-100 font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                    : 'text-gray-500 hover:text-gray-800 dark:text-gray-400'
                }`}
              >
                <Icon size={12} /> {label}
              </button>
            ))}
          </div>

          {tab !== 'photo' && (
            <label className="relative mx-3 mt-2 block">
              <Search
                size={12}
                className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                ref={searchRef}
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder={tab === 'emoji' ? 'Buscar emoji' : 'Buscar icono'}
                className="w-full rounded-lg border-0 bg-gray-50 py-1.5 pl-7 pr-2 text-[13px] text-gray-800 outline-none placeholder:text-gray-400 dark:bg-gray-800 dark:text-gray-100"
              />
            </label>
          )}

          {tab === 'emoji' && (
            <>
              <div className="min-h-0 flex-1 overflow-y-auto px-2 py-2">
                {emojiList.length === 0 ? (
                  <p className="px-2 py-6 text-center text-[12px] text-gray-400">
                    {cat === 'recent' && !query ? 'Aún no hay recientes.' : 'Sin resultados.'}
                  </p>
                ) : (
                  <div className="grid grid-cols-8 gap-0.5">
                    {emojiList.map((e) => (
                      <button
                        key={e}
                        type="button"
                        title={EMOJI_NAME[e] ?? e}
                        onClick={() => pickEmoji(e)}
                        className="flex h-8 items-center justify-center rounded-lg text-[18px] leading-none hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {!query && (
                <div className="flex shrink-0 border-t border-gray-100 px-1 py-1 dark:border-gray-800">
                  {cats.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      title={c.label}
                      onClick={() => setCat(c.id)}
                      className={`flex h-8 flex-1 items-center justify-center rounded-md text-[15px] ${
                        cat === c.id
                          ? 'bg-gray-100 dark:bg-gray-800'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800/60'
                      }`}
                    >
                      {c.id === 'recent' ? (
                        <Clock size={13} className="text-gray-500" />
                      ) : (
                        <span aria-hidden>{c.sample}</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}

          {tab === 'lucide' && (
            <div className="min-h-0 flex-1 overflow-y-auto px-2 py-2">
              {lucideList.length === 0 ? (
                <p className="px-2 py-6 text-center text-[12px] text-gray-400">Sin resultados.</p>
              ) : (
                <div className="grid grid-cols-8 gap-0.5">
                  {lucideList.map(({ name, Icon }) => (
                    <button
                      key={name}
                      type="button"
                      title={name}
                      onClick={() => pickLucide(name)}
                      className="flex h-8 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    >
                      <Icon size={16} strokeWidth={1.75} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === 'photo' && (
            <div className="flex flex-1 flex-col justify-center px-4">
              <input
                ref={fileRef}
                type="file"
                accept="image/jpeg,image/png,image/webp,image/gif"
                className="hidden"
                onChange={(e) => {
                  void uploadPhoto(e.target.files?.[0]);
                  e.target.value = '';
                }}
              />
              <button
                type="button"
                disabled={busy}
                onClick={() => fileRef.current?.click()}
                className="rounded-lg bg-gray-100 px-3 py-2 text-[13px] text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {busy ? 'Subiendo…' : 'Subir foto'}
              </button>
            </div>
          )}

          {allowClear && (
            <button
              type="button"
              onClick={() => { onChange({ kind: 'none', value: null }); setOpen(false); }}
              className="px-3 py-2 text-left text-[12px] text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              Quitar icono
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default GlyphPicker;
