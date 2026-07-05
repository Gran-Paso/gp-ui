import React from 'react';
import type { ChartCanvasProps } from './types';

/**
 * Edge-to-edge chart wrapper — full width on mobile with comfortable inner padding.
 */
const ChartCanvas: React.FC<ChartCanvasProps> = ({
  title,
  subtitle,
  children,
  footer,
  className = '',
}) => (
  <section
    className={`rounded-xl bg-white border border-gray-100 shadow-sm overflow-hidden ${className}`}
  >
    {(title || subtitle) && (
      <div className="px-4 lg:px-5 pt-4 lg:pt-5 pb-2">
        {title ? (
          <h3 className="text-sm font-extrabold text-gray-900 font-montserrat">{title}</h3>
        ) : null}
        {subtitle ? <p className="text-xs text-gray-400 mt-0.5">{subtitle}</p> : null}
      </div>
    )}

    <div className="px-4 py-3 lg:px-5 lg:py-4 min-h-[220px]">{children}</div>

    {footer ? (
      <div className="px-4 lg:px-5 py-3 border-t border-gray-50 bg-gray-50/50">{footer}</div>
    ) : null}
  </section>
);

export default ChartCanvas;
