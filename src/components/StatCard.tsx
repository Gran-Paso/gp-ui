import React from 'react';

export interface StatCardProps {
  /** Small all-caps label above the value */
  label: string;
  /** Primary metric value — string or number */
  value: React.ReactNode;
  /** Icon chip rendered on the trailing side */
  icon?: React.ReactNode;
  /** Optional descriptive text below the value */
  description?: string;
  /** Loading skeleton state */
  loading?: boolean;
  /** Extra bottom content — sub-stats row, actions, etc. */
  children?: React.ReactNode;
  className?: string;
}

const ValueSkeleton: React.FC = () => (
  <div className="space-y-2">
    <div className="h-2 w-16 rounded bg-gray-100 animate-pulse" />
    <div className="h-9 w-28 rounded bg-gray-100 animate-pulse" />
  </div>
);

/**
 * Metric display card.
 * Avoids the "hero metric" anti-pattern by keeping all metrics peer-level.
 * Compose with `IconChip` for the `icon` slot.
 */
const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  description,
  loading = false,
  children,
  className = '',
}) => (
  <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4 ${className}`}>
    <div className="flex items-start justify-between gap-3">
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-1.5">
          {label}
        </p>
        {loading ? (
          <ValueSkeleton />
        ) : (
          <>
            <p className="text-3xl font-bold text-gray-800 font-montserrat leading-none">
              {value}
            </p>
            {description && (
              <p className="text-xs text-gray-400 mt-1.5">{description}</p>
            )}
          </>
        )}
      </div>
      {icon && <div className="shrink-0 mt-0.5">{icon}</div>}
    </div>

    {children && (
      <div className="border-t border-gray-50 pt-3">
        {children}
      </div>
    )}
  </div>
);

export default StatCard;
