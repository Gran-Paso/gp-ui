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
  /** Active item background (light) */
  activeBg: string;
  /** Active item border (legacy, kept for compat) */
  activeBorder: string;
  /** Active item text + icon color */
  activeText: string;
  /** Launcher button / avatar background */
  iconChip: string;
  /** Avatar background (alias for iconChip) */
  avatar: string;
  /** Focus ring */
  focusRing: string;
  /** Launcher button idle bg */
  launcherBg: string;
  /** Launcher button hover bg */
  launcherBgHover: string;
  /** Launcher button shadow */
  launcherShadow: string;
  /** Nav icon color — inactive (on light surface) */
  navIcon: string;
  /** Nav icon color — active (on light surface) */
  navIconActive: string;
  /** Hover background for nav items on light surface */
  hoverBg: string;
  /** Navbar accent chip bg */
  navbarChip: string;
  /** Navbar accent chip text */
  navbarChipText: string;
}

const accentMap: Record<AccentColor, AccentClasses> = {
  green: {
    activeBg: 'bg-green-50 dark:bg-green-500/15',
    activeBorder: 'border-green-100 dark:border-green-500/30',
    activeText: 'text-green-700 dark:text-green-300',
    iconChip: 'bg-green-600',
    avatar: 'bg-green-600',
    focusRing: 'ring-green-500',
    launcherBg: 'bg-green-50 dark:bg-green-500/15',
    launcherBgHover: 'hover:bg-green-100 dark:hover:bg-green-500/25',
    launcherShadow: 'shadow-green-200 dark:shadow-black/40',
    navIcon: 'text-green-500 dark:text-green-400',
    navIconActive: 'text-green-700 dark:text-green-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-green-50 dark:bg-green-500/15',
    navbarChipText: 'text-green-700 dark:text-green-300',
  },
  emerald: {
    activeBg: 'bg-emerald-50 dark:bg-emerald-500/15',
    activeBorder: 'border-emerald-100 dark:border-emerald-500/30',
    activeText: 'text-emerald-700 dark:text-emerald-300',
    iconChip: 'bg-emerald-600',
    avatar: 'bg-emerald-600',
    focusRing: 'ring-emerald-500',
    launcherBg: 'bg-emerald-50 dark:bg-emerald-500/15',
    launcherBgHover: 'hover:bg-emerald-100 dark:hover:bg-emerald-500/25',
    launcherShadow: 'shadow-emerald-200 dark:shadow-black/40',
    navIcon: 'text-emerald-500 dark:text-emerald-400',
    navIconActive: 'text-emerald-700 dark:text-emerald-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-emerald-50 dark:bg-emerald-500/15',
    navbarChipText: 'text-emerald-700 dark:text-emerald-300',
  },
  teal: {
    activeBg: 'bg-teal-50 dark:bg-teal-500/15',
    activeBorder: 'border-teal-100 dark:border-teal-500/30',
    activeText: 'text-teal-700 dark:text-teal-300',
    iconChip: 'bg-teal-600',
    avatar: 'bg-teal-600',
    focusRing: 'ring-teal-500',
    launcherBg: 'bg-teal-50 dark:bg-teal-500/15',
    launcherBgHover: 'hover:bg-teal-100 dark:hover:bg-teal-500/25',
    launcherShadow: 'shadow-teal-200 dark:shadow-black/40',
    navIcon: 'text-teal-500 dark:text-teal-400',
    navIconActive: 'text-teal-700 dark:text-teal-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-teal-50 dark:bg-teal-500/15',
    navbarChipText: 'text-teal-700 dark:text-teal-300',
  },
  cyan: {
    activeBg: 'bg-cyan-50 dark:bg-cyan-500/15',
    activeBorder: 'border-cyan-100 dark:border-cyan-500/30',
    activeText: 'text-cyan-700 dark:text-cyan-300',
    iconChip: 'bg-cyan-600',
    avatar: 'bg-cyan-600',
    focusRing: 'ring-cyan-500',
    launcherBg: 'bg-cyan-50 dark:bg-cyan-500/15',
    launcherBgHover: 'hover:bg-cyan-100 dark:hover:bg-cyan-500/25',
    launcherShadow: 'shadow-cyan-200 dark:shadow-black/40',
    navIcon: 'text-cyan-500 dark:text-cyan-400',
    navIconActive: 'text-cyan-700 dark:text-cyan-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-cyan-50 dark:bg-cyan-500/15',
    navbarChipText: 'text-cyan-700 dark:text-cyan-300',
  },
  sky: {
    activeBg: 'bg-sky-50 dark:bg-sky-500/15',
    activeBorder: 'border-sky-100 dark:border-sky-500/30',
    activeText: 'text-sky-700 dark:text-sky-300',
    iconChip: 'bg-sky-600',
    avatar: 'bg-sky-600',
    focusRing: 'ring-sky-500',
    launcherBg: 'bg-sky-50 dark:bg-sky-500/15',
    launcherBgHover: 'hover:bg-sky-100 dark:hover:bg-sky-500/25',
    launcherShadow: 'shadow-sky-200 dark:shadow-black/40',
    navIcon: 'text-sky-500 dark:text-sky-400',
    navIconActive: 'text-sky-700 dark:text-sky-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-sky-50 dark:bg-sky-500/15',
    navbarChipText: 'text-sky-700 dark:text-sky-300',
  },
  blue: {
    activeBg: 'bg-blue-50 dark:bg-blue-500/15',
    activeBorder: 'border-blue-100 dark:border-blue-500/30',
    activeText: 'text-blue-700 dark:text-blue-300',
    iconChip: 'bg-blue-600',
    avatar: 'bg-blue-600',
    focusRing: 'ring-blue-500',
    launcherBg: 'bg-blue-50 dark:bg-blue-500/15',
    launcherBgHover: 'hover:bg-blue-100 dark:hover:bg-blue-500/25',
    launcherShadow: 'shadow-blue-200 dark:shadow-black/40',
    navIcon: 'text-blue-500 dark:text-blue-400',
    navIconActive: 'text-blue-700 dark:text-blue-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-blue-50 dark:bg-blue-500/15',
    navbarChipText: 'text-blue-700 dark:text-blue-300',
  },
  indigo: {
    activeBg: 'bg-indigo-50 dark:bg-indigo-500/15',
    activeBorder: 'border-indigo-100 dark:border-indigo-500/30',
    activeText: 'text-indigo-700 dark:text-indigo-300',
    iconChip: 'bg-indigo-600',
    avatar: 'bg-indigo-600',
    focusRing: 'ring-indigo-500',
    launcherBg: 'bg-indigo-50 dark:bg-indigo-500/15',
    launcherBgHover: 'hover:bg-indigo-100 dark:hover:bg-indigo-500/25',
    launcherShadow: 'shadow-indigo-200 dark:shadow-black/40',
    navIcon: 'text-indigo-500 dark:text-indigo-400',
    navIconActive: 'text-indigo-700 dark:text-indigo-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-indigo-50 dark:bg-indigo-500/15',
    navbarChipText: 'text-indigo-700 dark:text-indigo-300',
  },
  violet: {
    activeBg: 'bg-violet-50 dark:bg-violet-500/15',
    activeBorder: 'border-violet-100 dark:border-violet-500/30',
    activeText: 'text-violet-700 dark:text-violet-300',
    iconChip: 'bg-violet-600',
    avatar: 'bg-violet-600',
    focusRing: 'ring-violet-500',
    launcherBg: 'bg-violet-50 dark:bg-violet-500/15',
    launcherBgHover: 'hover:bg-violet-100 dark:hover:bg-violet-500/25',
    launcherShadow: 'shadow-violet-200 dark:shadow-black/40',
    navIcon: 'text-violet-500 dark:text-violet-400',
    navIconActive: 'text-violet-700 dark:text-violet-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-violet-50 dark:bg-violet-500/15',
    navbarChipText: 'text-violet-700 dark:text-violet-300',
  },
  purple: {
    activeBg: 'bg-purple-50 dark:bg-purple-500/15',
    activeBorder: 'border-purple-100 dark:border-purple-500/30',
    activeText: 'text-purple-700 dark:text-purple-300',
    iconChip: 'bg-purple-600',
    avatar: 'bg-purple-600',
    focusRing: 'ring-purple-500',
    launcherBg: 'bg-purple-50 dark:bg-purple-500/15',
    launcherBgHover: 'hover:bg-purple-100 dark:hover:bg-purple-500/25',
    launcherShadow: 'shadow-purple-200 dark:shadow-black/40',
    navIcon: 'text-purple-500 dark:text-purple-400',
    navIconActive: 'text-purple-700 dark:text-purple-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-purple-50 dark:bg-purple-500/15',
    navbarChipText: 'text-purple-700 dark:text-purple-300',
  },
  pink: {
    activeBg: 'bg-pink-50 dark:bg-pink-500/15',
    activeBorder: 'border-pink-100 dark:border-pink-500/30',
    activeText: 'text-pink-700 dark:text-pink-300',
    iconChip: 'bg-pink-600',
    avatar: 'bg-pink-600',
    focusRing: 'ring-pink-500',
    launcherBg: 'bg-pink-50 dark:bg-pink-500/15',
    launcherBgHover: 'hover:bg-pink-100 dark:hover:bg-pink-500/25',
    launcherShadow: 'shadow-pink-200 dark:shadow-black/40',
    navIcon: 'text-pink-500 dark:text-pink-400',
    navIconActive: 'text-pink-700 dark:text-pink-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-pink-50 dark:bg-pink-500/15',
    navbarChipText: 'text-pink-700 dark:text-pink-300',
  },
  rose: {
    activeBg: 'bg-rose-50 dark:bg-rose-500/15',
    activeBorder: 'border-rose-100 dark:border-rose-500/30',
    activeText: 'text-rose-700 dark:text-rose-300',
    iconChip: 'bg-rose-600',
    avatar: 'bg-rose-600',
    focusRing: 'ring-rose-500',
    launcherBg: 'bg-rose-50 dark:bg-rose-500/15',
    launcherBgHover: 'hover:bg-rose-100 dark:hover:bg-rose-500/25',
    launcherShadow: 'shadow-rose-200 dark:shadow-black/40',
    navIcon: 'text-rose-500 dark:text-rose-400',
    navIconActive: 'text-rose-700 dark:text-rose-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-rose-50 dark:bg-rose-500/15',
    navbarChipText: 'text-rose-700 dark:text-rose-300',
  },
  orange: {
    activeBg: 'bg-orange-50 dark:bg-orange-500/15',
    activeBorder: 'border-orange-100 dark:border-orange-500/30',
    activeText: 'text-orange-700 dark:text-orange-300',
    iconChip: 'bg-orange-600',
    avatar: 'bg-orange-600',
    focusRing: 'ring-orange-500',
    launcherBg: 'bg-orange-50 dark:bg-orange-500/15',
    launcherBgHover: 'hover:bg-orange-100 dark:hover:bg-orange-500/25',
    launcherShadow: 'shadow-orange-200 dark:shadow-black/40',
    navIcon: 'text-orange-500 dark:text-orange-400',
    navIconActive: 'text-orange-700 dark:text-orange-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-orange-50 dark:bg-orange-500/15',
    navbarChipText: 'text-orange-700 dark:text-orange-300',
  },
  amber: {
    activeBg: 'bg-amber-50 dark:bg-amber-500/15',
    activeBorder: 'border-amber-100 dark:border-amber-500/30',
    activeText: 'text-amber-700 dark:text-amber-300',
    iconChip: 'bg-amber-600',
    avatar: 'bg-amber-600',
    focusRing: 'ring-amber-500',
    launcherBg: 'bg-amber-50 dark:bg-amber-500/15',
    launcherBgHover: 'hover:bg-amber-100 dark:hover:bg-amber-500/25',
    launcherShadow: 'shadow-amber-200 dark:shadow-black/40',
    navIcon: 'text-amber-500 dark:text-amber-400',
    navIconActive: 'text-amber-700 dark:text-amber-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-amber-50 dark:bg-amber-500/15',
    navbarChipText: 'text-amber-700 dark:text-amber-300',
  },
  lime: {
    activeBg: 'bg-lime-50 dark:bg-lime-500/15',
    activeBorder: 'border-lime-100 dark:border-lime-500/30',
    activeText: 'text-lime-700 dark:text-lime-300',
    iconChip: 'bg-lime-600',
    avatar: 'bg-lime-600',
    focusRing: 'ring-lime-500',
    launcherBg: 'bg-lime-50 dark:bg-lime-500/15',
    launcherBgHover: 'hover:bg-lime-100 dark:hover:bg-lime-500/25',
    launcherShadow: 'shadow-lime-200 dark:shadow-black/40',
    navIcon: 'text-lime-600 dark:text-lime-400',
    navIconActive: 'text-lime-800 dark:text-lime-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-lime-50 dark:bg-lime-500/15',
    navbarChipText: 'text-lime-700 dark:text-lime-300',
  },
  slate: {
    activeBg: 'bg-slate-100 dark:bg-slate-500/20',
    activeBorder: 'border-slate-200 dark:border-slate-500/30',
    activeText: 'text-slate-700 dark:text-slate-300',
    iconChip: 'bg-slate-600',
    avatar: 'bg-slate-600',
    focusRing: 'ring-slate-500',
    launcherBg: 'bg-slate-100 dark:bg-slate-500/20',
    launcherBgHover: 'hover:bg-slate-200 dark:hover:bg-slate-500/30',
    launcherShadow: 'shadow-slate-200 dark:shadow-black/40',
    navIcon: 'text-slate-500 dark:text-slate-400',
    navIconActive: 'text-slate-700 dark:text-slate-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-slate-100 dark:bg-slate-500/20',
    navbarChipText: 'text-slate-700 dark:text-slate-300',
  },
  zinc: {
    activeBg: 'bg-zinc-100 dark:bg-zinc-500/20',
    activeBorder: 'border-zinc-200 dark:border-zinc-500/30',
    activeText: 'text-zinc-700 dark:text-zinc-300',
    iconChip: 'bg-zinc-600',
    avatar: 'bg-zinc-600',
    focusRing: 'ring-zinc-500',
    launcherBg: 'bg-zinc-100 dark:bg-zinc-500/20',
    launcherBgHover: 'hover:bg-zinc-200 dark:hover:bg-zinc-500/30',
    launcherShadow: 'shadow-zinc-200 dark:shadow-black/40',
    navIcon: 'text-zinc-500 dark:text-zinc-400',
    navIconActive: 'text-zinc-700 dark:text-zinc-300',
    hoverBg: 'hover:bg-gray-50 dark:hover:bg-white/5',
    navbarChip: 'bg-zinc-100 dark:bg-zinc-500/20',
    navbarChipText: 'text-zinc-700 dark:text-zinc-300',
  },
};

export function getAccentClasses(color?: AccentColor): AccentClasses {
  return accentMap[color ?? 'green'];
}
