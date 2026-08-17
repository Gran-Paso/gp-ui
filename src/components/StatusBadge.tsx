import React from 'react';

export type StatusKey =
  | 'pending'
  | 'in_progress'
  | 'completed'
  | 'cancelled'
  | 'paid'
  | 'unpaid'
  | 'available'
  | 'low_stock'
  | 'no_stock';

const config: Record<StatusKey, { label: string; dot: string; bg: string; text: string }> = {
  pending:     { label: 'Pendiente',   dot: 'bg-amber-400',  bg: 'bg-amber-50 dark:bg-amber-500/15',   text: 'text-amber-700 dark:text-amber-300'  },
  in_progress: { label: 'En progreso', dot: 'bg-blue-400',   bg: 'bg-blue-50 dark:bg-blue-500/15',    text: 'text-blue-700 dark:text-blue-300'   },
  completed:   { label: 'Completada',  dot: 'bg-teal-400',   bg: 'bg-teal-50 dark:bg-teal-500/15',    text: 'text-teal-700 dark:text-teal-300'   },
  cancelled:   { label: 'Cancelada',   dot: 'bg-gray-300',   bg: 'bg-gray-100 dark:bg-gray-800',      text: 'text-gray-400 dark:text-gray-500'   },
  paid:        { label: 'Pagado',      dot: 'bg-teal-400',   bg: 'bg-teal-50 dark:bg-teal-500/15',    text: 'text-teal-700 dark:text-teal-300'   },
  unpaid:      { label: 'Pendiente',   dot: 'bg-amber-400',  bg: 'bg-amber-50 dark:bg-amber-500/15',   text: 'text-amber-700 dark:text-amber-300'  },
  available:   { label: 'Disponible',  dot: 'bg-teal-400',   bg: 'bg-teal-50 dark:bg-teal-500/15',    text: 'text-teal-700 dark:text-teal-300'   },
  low_stock:   { label: 'Bajo stock',  dot: 'bg-amber-400',  bg: 'bg-amber-50 dark:bg-amber-500/15',   text: 'text-amber-700 dark:text-amber-300'  },
  no_stock:    { label: 'Sin stock',   dot: 'bg-red-400',    bg: 'bg-red-50 dark:bg-red-500/15',      text: 'text-red-700 dark:text-red-300'    },
};

export interface StatusBadgeProps {
  status: StatusKey | string;
  /** Override the default label */
  label?: string;
  size?: 'sm' | 'md';
}

/**
 * Semantic status pill with dot indicator.
 * Falls back gracefully for unknown status keys.
 */
const StatusBadge: React.FC<StatusBadgeProps> = ({ status, label, size = 'sm' }) => {
  const c = config[status as StatusKey] ?? {
    label: status,
    dot: 'bg-gray-300',
    bg: 'bg-gray-100 dark:bg-gray-800',
    text: 'text-gray-600 dark:text-gray-300',
  };

  const px = size === 'md' ? 'px-2.5 py-1 text-xs' : 'px-2 py-0.5 text-[11px]';
  const dotSize = size === 'md' ? 'w-2 h-2' : 'w-1.5 h-1.5';

  return (
    <span className={`inline-flex items-center gap-1.5 ${px} font-semibold rounded-full ${c.bg} ${c.text}`}>
      <span className={`${dotSize} rounded-full shrink-0 ${c.dot}`} />
      {label ?? c.label}
    </span>
  );
};

export default StatusBadge;
