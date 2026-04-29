import React from 'react';
import { Search } from 'lucide-react';

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Controlled value */
  value: string;
  onValueChange: (v: string) => void;
  placeholder?: string;
  /** Focus ring color — default teal */
  accentRing?: string;
  className?: string;
}

/**
 * Search input with leading icon. Controlled component.
 * `onValueChange` fires on every keystroke.
 */
const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onValueChange,
  placeholder = 'Buscar…',
  accentRing = 'focus:ring-teal-400',
  className = '',
  ...rest
}) => (
  <div className={`relative ${className}`}>
    <Search
      size={15}
      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
    />
    <input
      type="text"
      value={value}
      onChange={e => onValueChange(e.target.value)}
      placeholder={placeholder}
      className={`w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 bg-white focus:outline-none focus:ring-2 ${accentRing} focus:border-transparent transition`}
      {...rest}
    />
  </div>
);

export default SearchInput;
