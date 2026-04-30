import React, { useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

export interface ModalProps {
  /** Controlled visibility */
  open: boolean;
  onClose: () => void;
  /** Modal shell fills viewport overlay when open */
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Optional decoration beside title (e.g. IconChip) */
  icon?: React.ReactNode;
  /** Scrollable main region */
  children: React.ReactNode;
  /** Pinned footer (actions); laid out end-aligned with gap */
  footer?: React.ReactNode;
  size?: 'md' | 'lg' | 'xl';
  /** Click backdrop closes modal when true */
  closeOnBackdrop?: boolean;
  /** Disallow ESC / backdrop / close button while submitting */
  closeDisabled?: boolean;
  /** Second modal above another GP modal (higher z-index). */
  stacked?: boolean;
  /** Optional explicit id for aria-labelledby (defaults to generated title id) */
  labelledBy?: string;
  className?: string;
}

const sizeClasses: Record<NonNullable<ModalProps['size']>, string> = {
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

/**
 * ERP-standard modal: portal overlay, titled header, scroll body, optional footer.
 * Uses muted backdrop without decorative blur defaults.
 */
const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  subtitle,
  icon,
  children,
  footer,
  size = 'lg',
  closeOnBackdrop = true,
  closeDisabled = false,
  stacked = false,
  labelledBy,
  className = '',
}) => {
  const reactId = useId();
  const titleId = labelledBy ?? `gp-modal-title-${reactId.replace(/:/g, '')}`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !closeDisabled) {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, closeDisabled, onClose]);

  if (!open || typeof document === 'undefined') return null;

  const handleBackdropMouseDown = (e: React.MouseEvent) => {
    if (closeDisabled || !closeOnBackdrop) return;
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 sm:p-6 ${stacked ? 'z-[130]' : 'z-[120]'}`}
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-[rgba(17,24,39,0.45)]"
        aria-hidden
        onMouseDown={handleBackdropMouseDown}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative flex max-h-[min(90vh,900px)] w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl ${sizeClasses[size]} ${className}`}
      >
        <header className="flex shrink-0 items-start justify-between gap-4 border-b border-gray-100 px-5 py-4 sm:px-6">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            {icon && <div className="shrink-0 pt-0.5">{icon}</div>}
            <div className="min-w-0">
              <h2 id={titleId} className="text-xl font-bold leading-snug text-gray-900 font-montserrat">
                {title}
              </h2>
              {subtitle != null && subtitle !== '' && (
                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={closeDisabled}
            className="shrink-0 rounded-xl p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/35 disabled:opacity-40"
            aria-label="Cerrar"
          >
            <X size={22} strokeWidth={2} />
          </button>
        </header>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6">{children}</div>

        {footer != null && footer !== false && (
          <footer className="flex shrink-0 flex-wrap items-center justify-end gap-2 border-t border-gray-100 px-5 py-4 sm:px-6">
            {footer}
          </footer>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
