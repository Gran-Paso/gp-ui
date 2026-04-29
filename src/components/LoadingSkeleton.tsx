import React from 'react';

export interface LoadingSkeletonProps {
  variant?: 'card' | 'table' | 'text';
  rows?: number;
  className?: string;
}

const SkeletonLine: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-gray-200 animate-pulse rounded-lg ${className}`} />
);

const CardSkeleton: React.FC = () => (
  <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
    <SkeletonLine className="h-5 w-1/3" />
    <SkeletonLine className="h-4 w-full" />
    <SkeletonLine className="h-4 w-2/3" />
  </div>
);

const TableSkeleton: React.FC<{ rows: number }> = ({ rows }) => (
  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
    <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex gap-4">
      <SkeletonLine className="h-3 w-24" />
      <SkeletonLine className="h-3 w-32" />
      <SkeletonLine className="h-3 w-20" />
      <SkeletonLine className="h-3 w-28" />
    </div>
    {Array.from({ length: rows }).map((_, i) => (
      <div key={i} className="border-b border-gray-100 px-4 py-3 flex gap-4">
        <SkeletonLine className="h-4 w-24" />
        <SkeletonLine className="h-4 w-32" />
        <SkeletonLine className="h-4 w-20" />
        <SkeletonLine className="h-4 w-28" />
      </div>
    ))}
  </div>
);

const TextSkeleton: React.FC<{ rows: number }> = ({ rows }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, i) => (
      <SkeletonLine
        key={i}
        className={`h-4 ${i === rows - 1 ? 'w-2/3' : 'w-full'}`}
      />
    ))}
  </div>
);

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'card',
  rows = 5,
  className = '',
}) => (
  <div className={className}>
    {variant === 'card' && (
      <div className="grid gap-4">
        {Array.from({ length: Math.min(rows, 6) }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    )}
    {variant === 'table' && <TableSkeleton rows={rows} />}
    {variant === 'text' && <TextSkeleton rows={rows} />}
  </div>
);

export default LoadingSkeleton;
