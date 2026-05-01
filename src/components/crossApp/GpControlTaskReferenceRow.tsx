import React from 'react';

export interface GpControlTaskReferenceRowProps {
  title: string;
  subtitle?: string;
  typeLabel: string;
  typeClassName: string;
  statusLabel: string;
  statusClassName?: string;
  assigneeName?: string | null;
  leading?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  trailing?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const CoreInner: React.FC<{
  title: string;
  subtitle?: string;
  typeLabel: string;
  typeClassName: string;
  statusLabel: string;
  statusClassName: string;
  assigneeName?: string | null;
  leading?: React.ReactNode;
}> = ({
  title,
  subtitle,
  typeLabel,
  typeClassName,
  statusLabel,
  statusClassName,
  assigneeName,
  leading,
}) => (
  <>
    {leading}
    <span
      className={`shrink-0 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${typeClassName}`}
    >
      {typeLabel}
    </span>
    <div className="min-w-0 flex-1">
      <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
      {subtitle ? <p className="text-[11px] text-gray-500 truncate">{subtitle}</p> : null}
    </div>
    {assigneeName ? (
      <span
        className="hidden sm:inline text-[11px] text-gray-500 truncate max-w-[120px]"
        title={assigneeName}
      >
        {assigneeName}
      </span>
    ) : null}
    <span className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-md ${statusClassName}`}>
      {statusLabel}
    </span>
  </>
);

const ghostHit =
  'flex flex-1 min-w-0 items-center gap-2 rounded-md px-1 py-0.5 text-left transition-colors hover:bg-gray-50';

/**
 * Unified list row for Control / Kanban tasks when shown outside the board.
 */
export const GpControlTaskReferenceRow: React.FC<GpControlTaskReferenceRowProps> = ({
  title,
  subtitle,
  typeLabel,
  typeClassName,
  statusLabel,
  statusClassName = 'bg-gray-100 text-gray-700',
  assigneeName,
  leading,
  href,
  onClick,
  trailing,
  className = '',
  disabled = false,
}) => {
  const inner = (
    <CoreInner
      title={title}
      subtitle={subtitle}
      typeLabel={typeLabel}
      typeClassName={typeClassName}
      statusLabel={statusLabel}
      statusClassName={statusClassName}
      assigneeName={assigneeName}
      leading={leading}
    />
  );

  if (trailing) {
    return (
      <div
        className={`flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2 py-1.5 transition-colors hover:bg-gray-50 ${className}`}
      >
        {href ? (
          <a href={href} className={`${ghostHit} no-underline text-inherit cursor-pointer`} onClick={onClick}>
            {inner}
          </a>
        ) : (
          <button
            type="button"
            className={`${ghostHit} cursor-pointer border-0 bg-transparent font-inherit disabled:opacity-40 disabled:pointer-events-none`}
            onClick={onClick}
            disabled={disabled}
          >
            {inner}
          </button>
        )}
        <div className="flex shrink-0 items-center pl-0.5">{trailing}</div>
      </div>
    );
  }

  const shell =
    'flex w-full items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-left transition-colors hover:bg-gray-50';

  if (href) {
    return (
      <a href={href} className={`${shell} no-underline text-inherit cursor-pointer ${className}`} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button type="button" className={`${shell} cursor-pointer disabled:opacity-40 disabled:pointer-events-none ${className}`} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
};

export default GpControlTaskReferenceRow;
