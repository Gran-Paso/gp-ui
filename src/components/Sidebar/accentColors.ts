export type AccentColor =
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'pink'
  | 'rose'
  | 'orange'
  | 'amber'
  | 'lime'
  | 'slate'
  | 'zinc';

export interface AccentClasses {
  activeBg: string;
  activeBorder: string;
  activeText: string;
  iconChip: string;
  avatar: string;
  focusRing: string;
  launcherBg: string;
  launcherBgHover: string;
  launcherShadow: string;
}

const accentMap: Record<AccentColor, AccentClasses> = {
  green: {
    activeBg: 'bg-green-500/20',
    activeBorder: 'border-green-500/30',
    activeText: 'text-green-400',
    iconChip: 'bg-green-600',
    avatar: 'bg-green-700',
    focusRing: 'ring-green-500',
    launcherBg: 'bg-green-500/20',
    launcherBgHover: 'hover:bg-green-500/30',
    launcherShadow: 'shadow-green-500/25',
  },
  emerald: {
    activeBg: 'bg-emerald-500/20',
    activeBorder: 'border-emerald-500/30',
    activeText: 'text-emerald-400',
    iconChip: 'bg-emerald-600',
    avatar: 'bg-emerald-700',
    focusRing: 'ring-emerald-500',
    launcherBg: 'bg-emerald-500/20',
    launcherBgHover: 'hover:bg-emerald-500/30',
    launcherShadow: 'shadow-emerald-500/25',
  },
  teal: {
    activeBg: 'bg-teal-500/20',
    activeBorder: 'border-teal-500/30',
    activeText: 'text-teal-400',
    iconChip: 'bg-teal-600',
    avatar: 'bg-teal-700',
    focusRing: 'ring-teal-500',
    launcherBg: 'bg-teal-500/20',
    launcherBgHover: 'hover:bg-teal-500/30',
    launcherShadow: 'shadow-teal-500/25',
  },
  cyan: {
    activeBg: 'bg-cyan-500/20',
    activeBorder: 'border-cyan-500/30',
    activeText: 'text-cyan-400',
    iconChip: 'bg-cyan-600',
    avatar: 'bg-cyan-700',
    focusRing: 'ring-cyan-500',
    launcherBg: 'bg-cyan-500/20',
    launcherBgHover: 'hover:bg-cyan-500/30',
    launcherShadow: 'shadow-cyan-500/25',
  },
  sky: {
    activeBg: 'bg-sky-500/20',
    activeBorder: 'border-sky-500/30',
    activeText: 'text-sky-400',
    iconChip: 'bg-sky-600',
    avatar: 'bg-sky-700',
    focusRing: 'ring-sky-500',
    launcherBg: 'bg-sky-500/20',
    launcherBgHover: 'hover:bg-sky-500/30',
    launcherShadow: 'shadow-sky-500/25',
  },
  blue: {
    activeBg: 'bg-blue-500/20',
    activeBorder: 'border-blue-500/30',
    activeText: 'text-blue-400',
    iconChip: 'bg-blue-600',
    avatar: 'bg-blue-700',
    focusRing: 'ring-blue-500',
    launcherBg: 'bg-blue-500/20',
    launcherBgHover: 'hover:bg-blue-500/30',
    launcherShadow: 'shadow-blue-500/25',
  },
  indigo: {
    activeBg: 'bg-indigo-500/20',
    activeBorder: 'border-indigo-500/30',
    activeText: 'text-indigo-400',
    iconChip: 'bg-indigo-600',
    avatar: 'bg-indigo-700',
    focusRing: 'ring-indigo-500',
    launcherBg: 'bg-indigo-500/20',
    launcherBgHover: 'hover:bg-indigo-500/30',
    launcherShadow: 'shadow-indigo-500/25',
  },
  violet: {
    activeBg: 'bg-violet-500/20',
    activeBorder: 'border-violet-500/30',
    activeText: 'text-violet-400',
    iconChip: 'bg-violet-600',
    avatar: 'bg-violet-700',
    focusRing: 'ring-violet-500',
    launcherBg: 'bg-violet-500/20',
    launcherBgHover: 'hover:bg-violet-500/30',
    launcherShadow: 'shadow-violet-500/25',
  },
  purple: {
    activeBg: 'bg-purple-500/20',
    activeBorder: 'border-purple-500/30',
    activeText: 'text-purple-400',
    iconChip: 'bg-purple-600',
    avatar: 'bg-purple-700',
    focusRing: 'ring-purple-500',
    launcherBg: 'bg-purple-500/20',
    launcherBgHover: 'hover:bg-purple-500/30',
    launcherShadow: 'shadow-purple-500/25',
  },
  pink: {
    activeBg: 'bg-pink-500/20',
    activeBorder: 'border-pink-500/30',
    activeText: 'text-pink-400',
    iconChip: 'bg-pink-600',
    avatar: 'bg-pink-700',
    focusRing: 'ring-pink-500',
    launcherBg: 'bg-pink-500/20',
    launcherBgHover: 'hover:bg-pink-500/30',
    launcherShadow: 'shadow-pink-500/25',
  },
  rose: {
    activeBg: 'bg-rose-500/20',
    activeBorder: 'border-rose-500/30',
    activeText: 'text-rose-400',
    iconChip: 'bg-rose-600',
    avatar: 'bg-rose-700',
    focusRing: 'ring-rose-500',
    launcherBg: 'bg-rose-500/20',
    launcherBgHover: 'hover:bg-rose-500/30',
    launcherShadow: 'shadow-rose-500/25',
  },
  orange: {
    activeBg: 'bg-orange-500/20',
    activeBorder: 'border-orange-500/30',
    activeText: 'text-orange-400',
    iconChip: 'bg-orange-600',
    avatar: 'bg-orange-700',
    focusRing: 'ring-orange-500',
    launcherBg: 'bg-orange-500/20',
    launcherBgHover: 'hover:bg-orange-500/30',
    launcherShadow: 'shadow-orange-500/25',
  },
  amber: {
    activeBg: 'bg-amber-500/20',
    activeBorder: 'border-amber-500/30',
    activeText: 'text-amber-400',
    iconChip: 'bg-amber-600',
    avatar: 'bg-amber-700',
    focusRing: 'ring-amber-500',
    launcherBg: 'bg-amber-500/20',
    launcherBgHover: 'hover:bg-amber-500/30',
    launcherShadow: 'shadow-amber-500/25',
  },
  lime: {
    activeBg: 'bg-lime-500/20',
    activeBorder: 'border-lime-500/30',
    activeText: 'text-lime-400',
    iconChip: 'bg-lime-600',
    avatar: 'bg-lime-700',
    focusRing: 'ring-lime-500',
    launcherBg: 'bg-lime-500/20',
    launcherBgHover: 'hover:bg-lime-500/30',
    launcherShadow: 'shadow-lime-500/25',
  },
  slate: {
    activeBg: 'bg-slate-500/20',
    activeBorder: 'border-slate-500/30',
    activeText: 'text-slate-400',
    iconChip: 'bg-slate-600',
    avatar: 'bg-slate-700',
    focusRing: 'ring-slate-500',
    launcherBg: 'bg-slate-500/20',
    launcherBgHover: 'hover:bg-slate-500/30',
    launcherShadow: 'shadow-slate-500/25',
  },
  zinc: {
    activeBg: 'bg-zinc-500/20',
    activeBorder: 'border-zinc-500/30',
    activeText: 'text-zinc-400',
    iconChip: 'bg-zinc-600',
    avatar: 'bg-zinc-700',
    focusRing: 'ring-zinc-500',
    launcherBg: 'bg-zinc-500/20',
    launcherBgHover: 'hover:bg-zinc-500/30',
    launcherShadow: 'shadow-zinc-500/25',
  },
};

export function getAccentClasses(color?: AccentColor): AccentClasses {
  return accentMap[color ?? 'green'];
}
