import React from 'react';

type ChipColor =
  | 'teal' | 'emerald' | 'green' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple'
  | 'pink' | 'rose' | 'orange' | 'amber' | 'yellow' | 'red' | 'slate' | 'gray';

type ChipSize = 'xs' | 'sm' | 'md' | 'lg';

const bgMap: Record<ChipColor, string> = {
  teal:    'bg-teal-50    text-teal-600 dark:bg-teal-500/15 dark:text-teal-300',
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-300',
  green:   'bg-green-50   text-green-600 dark:bg-green-500/15 dark:text-green-300',
  sky:     'bg-sky-50     text-sky-600 dark:bg-sky-500/15 dark:text-sky-300',
  blue:    'bg-blue-50    text-blue-600 dark:bg-blue-500/15 dark:text-blue-300',
  indigo:  'bg-indigo-50  text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-300',
  violet:  'bg-violet-50  text-violet-600 dark:bg-violet-500/15 dark:text-violet-300',
  purple:  'bg-purple-50  text-purple-600 dark:bg-purple-500/15 dark:text-purple-300',
  pink:    'bg-pink-50    text-pink-600 dark:bg-pink-500/15 dark:text-pink-300',
  rose:    'bg-rose-50    text-rose-600 dark:bg-rose-500/15 dark:text-rose-300',
  orange:  'bg-orange-50  text-orange-600 dark:bg-orange-500/15 dark:text-orange-300',
  amber:   'bg-amber-50   text-amber-600 dark:bg-amber-500/15 dark:text-amber-300',
  yellow:  'bg-yellow-50  text-yellow-600 dark:bg-yellow-500/15 dark:text-yellow-300',
  red:     'bg-red-50     text-red-600 dark:bg-red-500/15 dark:text-red-300',
  slate:   'bg-slate-100  text-slate-600 dark:bg-slate-500/20 dark:text-slate-300',
  gray:    'bg-gray-100   text-gray-600 dark:bg-gray-800 dark:text-gray-300',
};

const sizeMap: Record<ChipSize, string> = {
  xs: 'w-6  h-6  p-1   rounded-md',
  sm: 'w-8  h-8  p-1.5 rounded-lg',
  md: 'w-9  h-9  p-2   rounded-xl',
  lg: 'w-11 h-11 p-2.5 rounded-xl',
};

export interface IconChipProps {
  icon: React.ReactNode;
  color?: ChipColor;
  size?: ChipSize;
  className?: string;
}

/**
 * Colored icon container — used in stat cards, list rows, alert banners.
 * Pair with a Lucide icon inside.
 */
const IconChip: React.FC<IconChipProps> = ({
  icon,
  color = 'gray',
  size = 'md',
  className = '',
}) => (
  <div
    className={`flex items-center justify-center shrink-0 ${bgMap[color]} ${sizeMap[size]} ${className}`}
  >
    {icon}
  </div>
);

export default IconChip;
