import React from 'react';

export interface PageToolbarProps {
  /** Filters row (search, selects, toggles) */
  children: React.ReactNode;
  className?: string;
}

/**
 * Standard toolbar strip under PageHeader: white surface, radius and border aligned with Card.
 */
const PageToolbar: React.FC<PageToolbarProps> = ({ children, className = '' }) => (
  <div
    className={`flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm md:flex-row md:flex-wrap md:items-center md:gap-4 md:p-5 ${className}`}
  >
    {children}
  </div>
);

export default PageToolbar;
