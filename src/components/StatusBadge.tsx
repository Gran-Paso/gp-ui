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
  pending:     { label: 'Pendiente',   dot: 'bg-amber-400',  bg: 'bg-amber-50',   text: 'text-amber-700'  },
  in_progress: { label: 'En progreso', dot: 'bg-blue-400',   bg: 'bg-blue-50',    text: 'text-blue-700'   },
  completed:   { label: 'Completada',  dot: 'bg-teal-400',   bg: 'bg-teal-50',    text: 'text-teal-700'   },
  cancelled:   { label: 'Cancelada',   dot: 'bg-gray-300',   bg: 'bg-gray-100',   text: 'text-gray-400'   },
  paid:        { label: 'Pagado',      dot: 'bg-teal-400',   bg: 'bg-teal-50',    text: 'text-teal-700'   },
  unpaid:      { label: 'Pendiente',   dot: 'bg-amber-400',  bg: 'bg-amber-50',   text: 'text-amber-700'  },
  available:   { label: 'Disponible',  dot: 'bg-teal-400',   bg: 'bg-teal-50',    text: 'text-teal-700'   },
  low_stock:   { label: 'Bajo stock',  dot: 'bg-amber-400',  bg: 'bg-amber-50',   text: 'text-amber-700'  },
  no_stock:    { label: 'Sin stock',   dot: 'bg-red-400',    bg: 'bg-red-50',     text: 'text-red-700'    },
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
    bg: 'bg-gray-100',
    text: 'text-gray-600',
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
