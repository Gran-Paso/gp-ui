import React from 'react';

export interface EmptyStateProps {
  icon: React.ElementType;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  action,
}) => (
  <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
    <Icon size={48} className="text-gray-300 mb-4" />
    <h3 className="text-lg font-semibold text-gray-700 font-montserrat">{title}</h3>
    {description && (
      <p className="text-sm text-gray-500 mt-1 max-w-sm">{description}</p>
    )}
    {action && <div className="mt-4">{action}</div>}
  </div>
);

export default EmptyState;
