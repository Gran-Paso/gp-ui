import React from 'react';

export interface ListingCardProps {
  title: string;
  subtitle?: string;
  /** Small trailing badge cluster (e.g. status) */
  trailing?: React.ReactNode;
  /** Media slot (image, placeholder icon, etc.) */
  media?: React.ReactNode;
  /** Body metrics / meta below media */
  children?: React.ReactNode;
  /** Footer actions row */
  footer?: React.ReactNode;
  className?: string;
  /**
   * `default`: stacked layout with wide 4:3 media (catalog hero).
   * `compact`: horizontal thumbnail + denser text — better for long lists; GIFs/videos still work via `<img>` in `media`.
   */
  density?: 'default' | 'compact';
}

/**
 * Catalog-style card for grids (products, SKUs, variants): header band, media, body, footer.
 * Neutral chrome so hosts control accents via chips inside slots.
 */
const ListingCard: React.FC<ListingCardProps> = ({
  title,
  subtitle,
  trailing,
  media,
  children,
  footer,
  className = '',
  density = 'default',
}) => {
  if (density === 'compact') {
    return (
      <article
        className={`flex flex-row items-stretch gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow hover:shadow-md ${className}`}
      >
        {media != null && (
          <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-20 sm:w-20">
            {media}
          </div>
        )}
        <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold leading-tight text-gray-900">{title}</h3>
              {subtitle != null && subtitle !== '' && (
                <p className="mt-0.5 truncate text-xs text-gray-500">{subtitle}</p>
              )}
            </div>
            {trailing != null && trailing !== false && (
              <div className="flex shrink-0 flex-wrap items-start justify-end gap-1">{trailing}</div>
            )}
          </div>
          {children != null && <div className="flex flex-1 flex-col gap-2">{children}</div>}
          {footer != null && footer !== false && (
            <div className="mt-auto border-t border-gray-50 pt-2">{footer}</div>
          )}
        </div>
      </article>
    );
  }

  return (
    <article
      className={`flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md ${className}`}
    >
      <div className="flex items-start justify-between gap-3 border-b border-gray-50 px-4 pb-3 pt-4">
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-semibold text-base leading-snug text-gray-900">{title}</h3>
          {subtitle != null && subtitle !== '' && (
            <p className="mt-0.5 truncate text-sm text-gray-500">{subtitle}</p>
          )}
        </div>
        {trailing != null && trailing !== false && (
          <div className="flex shrink-0 flex-wrap items-center justify-end gap-1">{trailing}</div>
        )}
      </div>

      {media != null && (
        <div className="relative mx-4 mb-1 mt-3 aspect-[4/3] overflow-hidden rounded-xl bg-gray-100">
          {media}
        </div>
      )}

      {children != null && (
        <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-3">{children}</div>
      )}

      {footer != null && footer !== false && (
        <div className="border-t border-gray-50 px-4 py-3">{footer}</div>
      )}
    </article>
  );
};

export default ListingCard;
