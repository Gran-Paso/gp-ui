import React from 'react';

export interface PageHeaderProps {
  title: string;
  /** Small icon rendered before the title */
  icon?: React.ReactNode;
  /** Short descriptive text below the title */
  subtitle?: string;
  /** @deprecated Use subtitle */
  description?: string;
  /** Action buttons / filters on the right */
  actions?: React.ReactNode;
  /** Alias for actions — accept children as action slot */
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  icon,
  subtitle,
  description,
  actions,
  children,
}) => {
  const sub = subtitle ?? description;
  const trailing = actions ?? children;
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 font-montserrat flex items-center gap-2 leading-tight">
          {icon}
          {title}
        </h1>
        {sub && (
          <p className="text-sm text-gray-400 mt-1">{sub}</p>
        )}
      </div>
      {trailing && (
        <div className="flex items-center gap-2 flex-wrap shrink-0">
          {trailing}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
