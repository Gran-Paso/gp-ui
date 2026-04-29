import React from 'react';

const sizeMap = { sm: 'w-5 h-5 border-2', md: 'w-8 h-8 border-2', lg: 'w-12 h-12 border-[3px]' };

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  /** Tailwind ring color class e.g. `border-t-teal-600` */
  color?: string;
  className?: string;
}

/**
 * Circular loading indicator.
 * Default color matches the teal module accent.
 */
const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'border-gray-200 border-t-teal-600',
  className = '',
}) => (
  <div
    className={`${sizeMap[size]} rounded-full animate-spin ${color} ${className}`}
    role="status"
    aria-label="Cargando"
  />
);

export default Spinner;
