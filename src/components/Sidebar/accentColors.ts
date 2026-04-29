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
    activeBg: 'bg-green-50',
    activeBorder: 'border-green-100',
    activeText: 'text-green-700',
    iconChip: 'bg-green-600',
    avatar: 'bg-green-600',
    focusRing: 'ring-green-500',
    launcherBg: 'bg-green-50',
    launcherBgHover: 'hover:bg-green-100',
    launcherShadow: 'shadow-green-200',
    navIcon: 'text-green-500',
    navIconActive: 'text-green-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-green-50',
    navbarChipText: 'text-green-700',
  },
  emerald: {
    activeBg: 'bg-emerald-50',
    activeBorder: 'border-emerald-100',
    activeText: 'text-emerald-700',
    iconChip: 'bg-emerald-600',
    avatar: 'bg-emerald-600',
    focusRing: 'ring-emerald-500',
    launcherBg: 'bg-emerald-50',
    launcherBgHover: 'hover:bg-emerald-100',
    launcherShadow: 'shadow-emerald-200',
    navIcon: 'text-emerald-500',
    navIconActive: 'text-emerald-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-emerald-50',
    navbarChipText: 'text-emerald-700',
  },
  teal: {
    activeBg: 'bg-teal-50',
    activeBorder: 'border-teal-100',
    activeText: 'text-teal-700',
    iconChip: 'bg-teal-600',
    avatar: 'bg-teal-600',
    focusRing: 'ring-teal-500',
    launcherBg: 'bg-teal-50',
    launcherBgHover: 'hover:bg-teal-100',
    launcherShadow: 'shadow-teal-200',
    navIcon: 'text-teal-500',
    navIconActive: 'text-teal-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-teal-50',
    navbarChipText: 'text-teal-700',
  },
  cyan: {
    activeBg: 'bg-cyan-50',
    activeBorder: 'border-cyan-100',
    activeText: 'text-cyan-700',
    iconChip: 'bg-cyan-600',
    avatar: 'bg-cyan-600',
    focusRing: 'ring-cyan-500',
    launcherBg: 'bg-cyan-50',
    launcherBgHover: 'hover:bg-cyan-100',
    launcherShadow: 'shadow-cyan-200',
    navIcon: 'text-cyan-500',
    navIconActive: 'text-cyan-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-cyan-50',
    navbarChipText: 'text-cyan-700',
  },
  sky: {
    activeBg: 'bg-sky-50',
    activeBorder: 'border-sky-100',
    activeText: 'text-sky-700',
    iconChip: 'bg-sky-600',
    avatar: 'bg-sky-600',
    focusRing: 'ring-sky-500',
    launcherBg: 'bg-sky-50',
    launcherBgHover: 'hover:bg-sky-100',
    launcherShadow: 'shadow-sky-200',
    navIcon: 'text-sky-500',
    navIconActive: 'text-sky-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-sky-50',
    navbarChipText: 'text-sky-700',
  },
  blue: {
    activeBg: 'bg-blue-50',
    activeBorder: 'border-blue-100',
    activeText: 'text-blue-700',
    iconChip: 'bg-blue-600',
    avatar: 'bg-blue-600',
    focusRing: 'ring-blue-500',
    launcherBg: 'bg-blue-50',
    launcherBgHover: 'hover:bg-blue-100',
    launcherShadow: 'shadow-blue-200',
    navIcon: 'text-blue-500',
    navIconActive: 'text-blue-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-blue-50',
    navbarChipText: 'text-blue-700',
  },
  indigo: {
    activeBg: 'bg-indigo-50',
    activeBorder: 'border-indigo-100',
    activeText: 'text-indigo-700',
    iconChip: 'bg-indigo-600',
    avatar: 'bg-indigo-600',
    focusRing: 'ring-indigo-500',
    launcherBg: 'bg-indigo-50',
    launcherBgHover: 'hover:bg-indigo-100',
    launcherShadow: 'shadow-indigo-200',
    navIcon: 'text-indigo-500',
    navIconActive: 'text-indigo-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-indigo-50',
    navbarChipText: 'text-indigo-700',
  },
  violet: {
    activeBg: 'bg-violet-50',
    activeBorder: 'border-violet-100',
    activeText: 'text-violet-700',
    iconChip: 'bg-violet-600',
    avatar: 'bg-violet-600',
    focusRing: 'ring-violet-500',
    launcherBg: 'bg-violet-50',
    launcherBgHover: 'hover:bg-violet-100',
    launcherShadow: 'shadow-violet-200',
    navIcon: 'text-violet-500',
    navIconActive: 'text-violet-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-violet-50',
    navbarChipText: 'text-violet-700',
  },
  purple: {
    activeBg: 'bg-purple-50',
    activeBorder: 'border-purple-100',
    activeText: 'text-purple-700',
    iconChip: 'bg-purple-600',
    avatar: 'bg-purple-600',
    focusRing: 'ring-purple-500',
    launcherBg: 'bg-purple-50',
    launcherBgHover: 'hover:bg-purple-100',
    launcherShadow: 'shadow-purple-200',
    navIcon: 'text-purple-500',
    navIconActive: 'text-purple-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-purple-50',
    navbarChipText: 'text-purple-700',
  },
  pink: {
    activeBg: 'bg-pink-50',
    activeBorder: 'border-pink-100',
    activeText: 'text-pink-700',
    iconChip: 'bg-pink-600',
    avatar: 'bg-pink-600',
    focusRing: 'ring-pink-500',
    launcherBg: 'bg-pink-50',
    launcherBgHover: 'hover:bg-pink-100',
    launcherShadow: 'shadow-pink-200',
    navIcon: 'text-pink-500',
    navIconActive: 'text-pink-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-pink-50',
    navbarChipText: 'text-pink-700',
  },
  rose: {
    activeBg: 'bg-rose-50',
    activeBorder: 'border-rose-100',
    activeText: 'text-rose-700',
    iconChip: 'bg-rose-600',
    avatar: 'bg-rose-600',
    focusRing: 'ring-rose-500',
    launcherBg: 'bg-rose-50',
    launcherBgHover: 'hover:bg-rose-100',
    launcherShadow: 'shadow-rose-200',
    navIcon: 'text-rose-500',
    navIconActive: 'text-rose-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-rose-50',
    navbarChipText: 'text-rose-700',
  },
  orange: {
    activeBg: 'bg-orange-50',
    activeBorder: 'border-orange-100',
    activeText: 'text-orange-700',
    iconChip: 'bg-orange-600',
    avatar: 'bg-orange-600',
    focusRing: 'ring-orange-500',
    launcherBg: 'bg-orange-50',
    launcherBgHover: 'hover:bg-orange-100',
    launcherShadow: 'shadow-orange-200',
    navIcon: 'text-orange-500',
    navIconActive: 'text-orange-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-orange-50',
    navbarChipText: 'text-orange-700',
  },
  amber: {
    activeBg: 'bg-amber-50',
    activeBorder: 'border-amber-100',
    activeText: 'text-amber-700',
    iconChip: 'bg-amber-600',
    avatar: 'bg-amber-600',
    focusRing: 'ring-amber-500',
    launcherBg: 'bg-amber-50',
    launcherBgHover: 'hover:bg-amber-100',
    launcherShadow: 'shadow-amber-200',
    navIcon: 'text-amber-500',
    navIconActive: 'text-amber-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-amber-50',
    navbarChipText: 'text-amber-700',
  },
  lime: {
    activeBg: 'bg-lime-50',
    activeBorder: 'border-lime-100',
    activeText: 'text-lime-700',
    iconChip: 'bg-lime-600',
    avatar: 'bg-lime-600',
    focusRing: 'ring-lime-500',
    launcherBg: 'bg-lime-50',
    launcherBgHover: 'hover:bg-lime-100',
    launcherShadow: 'shadow-lime-200',
    navIcon: 'text-lime-600',
    navIconActive: 'text-lime-800',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-lime-50',
    navbarChipText: 'text-lime-700',
  },
  slate: {
    activeBg: 'bg-slate-100',
    activeBorder: 'border-slate-200',
    activeText: 'text-slate-700',
    iconChip: 'bg-slate-600',
    avatar: 'bg-slate-600',
    focusRing: 'ring-slate-500',
    launcherBg: 'bg-slate-100',
    launcherBgHover: 'hover:bg-slate-200',
    launcherShadow: 'shadow-slate-200',
    navIcon: 'text-slate-500',
    navIconActive: 'text-slate-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-slate-100',
    navbarChipText: 'text-slate-700',
  },
  zinc: {
    activeBg: 'bg-zinc-100',
    activeBorder: 'border-zinc-200',
    activeText: 'text-zinc-700',
    iconChip: 'bg-zinc-600',
    avatar: 'bg-zinc-600',
    focusRing: 'ring-zinc-500',
    launcherBg: 'bg-zinc-100',
    launcherBgHover: 'hover:bg-zinc-200',
    launcherShadow: 'shadow-zinc-200',
    navIcon: 'text-zinc-500',
    navIconActive: 'text-zinc-700',
    hoverBg: 'hover:bg-gray-50',
    navbarChip: 'bg-zinc-100',
    navbarChipText: 'text-zinc-700',
  },
};

export function getAccentClasses(color?: AccentColor): AccentClasses {
  return accentMap[color ?? 'green'];
}
