import React, { isValidElement } from 'react';

export interface EmptyStateProps {
  /** Lucide icon element at ~40px, or component type */
  icon?: React.ReactNode | React.ElementType;
  title: string;
  description?: string;
  /** Rendered below the description */
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => {
  let iconNode: React.ReactNode = null;
  if (icon) {
    // Lucide (and many wrappers) are ForwardRefExoticComponent → typeof === 'object', not 'function'
    if (isValidElement(icon)) {
      iconNode = icon;
    } else {
      const Icon = icon as React.ElementType;
      iconNode = <Icon size={44} className="text-gray-300" />;
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      {iconNode && <div className="mb-4 text-gray-300">{iconNode}</div>}
      <p className="text-gray-600 font-semibold text-[15px] font-montserrat">{title}</p>
      {description && (
        <p className="text-gray-400 text-sm mt-1.5 max-w-xs leading-relaxed">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
};

export default EmptyState;
