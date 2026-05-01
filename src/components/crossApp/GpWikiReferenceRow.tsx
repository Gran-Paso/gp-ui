import React from 'react';
import { BookOpen } from 'lucide-react';

export interface GpWikiReferenceRowProps {
  title: string;
  /** Secondary line, e.g. slug or app name */
  hint?: string;
  href?: string;
  onClick?: () => void;
  trailing?: React.ReactNode;
  className?: string;
}

const shell =
  'flex items-center gap-2.5 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-left transition-colors hover:bg-gray-50';

/**
 * Compact wiki link preview for cross-app surfaces (CRM, HR, etc.).
 * Same chrome as GP Control wiki sidebar picks; consumers pass `href` or `onClick`.
 */
export const GpWikiReferenceRow: React.FC<GpWikiReferenceRowProps> = ({
  title,
  hint,
  href,
  onClick,
  trailing,
  className = '',
}) => {
  const body = (
    <>
      <BookOpen size={15} className="shrink-0 text-gray-500" aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-900 truncate">{title}</p>
        {hint ? <p className="text-[11px] text-gray-500 truncate">{hint}</p> : null}
      </div>
      {trailing}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${shell} no-underline text-inherit ${className}`} onClick={onClick}>
        {body}
      </a>
    );
  }

  return (
    <button type="button" className={`${shell} w-full ${className}`} onClick={onClick}>
      {body}
    </button>
  );
};

export default GpWikiReferenceRow;
