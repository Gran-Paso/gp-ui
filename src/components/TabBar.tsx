import React from 'react';

export interface TabItem<T extends string = string> {
  value: T;
  label: string;
  icon?: React.ReactNode;
  /** Badge count shown next to the label */
  badge?: number;
}

export interface TabBarProps<T extends string = string> {
  tabs: TabItem<T>[];
  value: T;
  onChange: (value: T) => void;
  /** pill = segmented control (rounded bg). underline = border-bottom nav. */
  variant?: 'pill' | 'underline';
  /** Active color accent for the pill variant */
  accentText?: string;
  className?: string;
}

/**
 * Tab switcher — two visual variants:
 * - `pill`: segmented control with white bg on active (default).
 * - `underline`: border-bottom indicator for contextual navigation.
 */
function TabBar<T extends string>({
  tabs,
  value,
  onChange,
  variant = 'pill',
  accentText = 'text-teal-700',
  className = '',
}: TabBarProps<T>) {
  if (variant === 'underline') {
    return (
      <div className={`flex gap-1 border-b border-gray-100 ${className}`}>
        {tabs.map(tab => {
          const active = tab.value === value;
          return (
            <button
              key={tab.value}
              onClick={() => onChange(tab.value)}
              className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium border-b-2 -mb-px transition-all ${
                active
                  ? `border-teal-600 ${accentText}`
                  : 'border-transparent text-gray-400 hover:text-gray-600 hover:border-gray-200'
              }`}
            >
              {tab.icon}
              {tab.label}
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                  active ? 'bg-teal-100 text-teal-700' : 'bg-gray-100 text-gray-500'
                }`}>
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className={`flex gap-1 bg-gray-100 p-1 rounded-xl w-fit ${className}`}>
      {tabs.map(tab => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              active
                ? `bg-white shadow-sm ${accentText}`
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.icon}
            {tab.label}
            {tab.badge !== undefined && tab.badge > 0 && (
              <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                active ? 'bg-teal-100 text-teal-700' : 'bg-gray-200 text-gray-500'
              }`}>
                {tab.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default TabBar;
