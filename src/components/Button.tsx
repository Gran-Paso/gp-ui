import React from 'react';
import { Loader2 } from 'lucide-react';

const variantClasses = {
  primary:   'bg-teal-600   hover:bg-teal-700   text-white shadow-sm',
  secondary: 'bg-gray-100   hover:bg-gray-200   text-gray-700',
  danger:    'bg-red-500    hover:bg-red-600    text-white shadow-sm',
  ghost:     'text-gray-600 hover:bg-gray-100',
  outline:   'border border-gray-200 bg-white hover:bg-gray-50 text-gray-700',
} as const;

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-4 py-2   text-sm rounded-xl gap-2',
  lg: 'px-5 py-2.5 text-sm rounded-xl gap-2',
} as const;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className = '',
  ...props
}) => (
  <button
    disabled={disabled || loading}
    className={`inline-flex items-center justify-center font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    {...props}
  >
    {loading && <Loader2 size={size === 'sm' ? 13 : 15} className="animate-spin" />}
    {children}
  </button>
);

export default Button;
