import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingClasses = {
  none: '',
  sm:   'p-4',
  md:   'p-5',
  lg:   'p-6',
} as const;

const Card: React.FC<CardProps> = ({
  padding = 'md',
  className = '',
  children,
  ...props
}) => (
  <div
    className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${paddingClasses[padding]} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default Card;
