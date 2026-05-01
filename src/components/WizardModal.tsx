import React, { useEffect, useId } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import Spinner from './Spinner';

/** Accent presets for wizard chrome (header band + progress). */
export type WizardModalAccent = 'orange' | 'teal' | 'green' | 'indigo';

const ACCENT: Record<
  WizardModalAccent,
  { header: string; progress: string; spinner: string; subtitle: string }
> = {
  orange: {
    header: 'bg-gradient-to-r from-orange-500 to-orange-600',
    progress: 'bg-orange-500',
    spinner: 'border-gray-200 border-t-orange-500',
    subtitle: 'text-orange-100',
  },
  teal: {
    header: 'bg-gradient-to-r from-teal-600 to-teal-700',
    progress: 'bg-teal-500',
    spinner: 'border-gray-200 border-t-teal-600',
    subtitle: 'text-teal-100',
  },
  green: {
    header: 'bg-gradient-to-r from-emerald-600 to-green-700',
    progress: 'bg-emerald-500',
    spinner: 'border-gray-200 border-t-emerald-600',
    subtitle: 'text-emerald-100',
  },
  indigo: {
    header: 'bg-gradient-to-r from-indigo-600 to-indigo-700',
    progress: 'bg-indigo-500',
    spinner: 'border-gray-200 border-t-indigo-600',
    subtitle: 'text-indigo-100',
  },
};

export interface WizardModalProps {
  open: boolean;
  onClose: () => void;
  /** Shown in colored header */
  title: React.ReactNode;
  /** Shown under title (e.g. step hint). If omitted, renders “Paso x de y” when stepCount &gt; 1 */
  subtitle?: React.ReactNode;
  /** Optional icon tile in header (e.g. lucide icon in white) */
  icon?: React.ReactNode;
  /** Current step for progress bar, 1-based */
  stepIndex: number;
  stepCount: number;
  accent?: WizardModalAccent;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'lg' | 'xl';
  closeOnBackdrop?: boolean;
  closeDisabled?: boolean;
  stacked?: boolean;
  /** Full-screen blocking overlay with spinner */
  busy?: boolean;
  busyLabel?: string;
  className?: string;
}

const sizeClasses = { lg: 'max-w-3xl', xl: 'max-w-4xl' } as const;

/**
 * Multi-step workflow shell: same portal/backdrop contract as Modal, plus accent header and progress.
 * Domain forms live in `children`; host maps business steps to display stepIndex/stepCount.
 */
function WizardModal({
  open,
  onClose,
  title,
  subtitle,
  icon,
  stepIndex,
  stepCount,
  accent = 'orange',
  children,
  footer,
  size = 'lg',
  closeOnBackdrop = true,
  closeDisabled = false,
  stacked = false,
  busy = false,
  busyLabel = 'Guardando…',
  className = '',
}: WizardModalProps): React.ReactElement | null {
  const reactId = useId();
  const titleId = `gp-wizard-modal-title-${reactId.replace(/:/g, '')}`;
  const palette = ACCENT[accent];
  const pct = stepCount > 0 ? Math.min(100, Math.max(0, (stepIndex / stepCount) * 100)) : 0;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !closeDisabled && !busy) {
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
  }, [open, closeDisabled, busy, onClose]);

  if (!open || typeof document === 'undefined') return null;

  const handleBackdropMouseDown = (e: React.MouseEvent) => {
    if (closeDisabled || busy || !closeOnBackdrop) return;
    if (e.target === e.currentTarget) onClose();
  };

  const defaultSubtitle =
    stepCount > 1 ? (
      <p className={`text-sm ${palette.subtitle}`}>
        Paso {stepIndex} de {stepCount}
      </p>
    ) : null;

  return createPortal(
    <div
      className={`fixed inset-0 flex items-center justify-center p-4 sm:p-6 ${stacked ? 'z-[140]' : 'z-[130]'}`}
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
        <header className={`shrink-0 px-6 py-4 ${palette.header}`}>
          <div className="flex items-start justify-between gap-4">
            <div className="flex min-w-0 flex-1 items-start gap-3">
              {icon != null && (
                <div className="shrink-0 rounded-lg bg-white/20 p-2 text-white">{icon}</div>
              )}
              <div className="min-w-0">
                <h2 id={titleId} className="text-xl font-bold leading-snug text-white font-montserrat">
                  {title}
                </h2>
                {subtitle != null && subtitle !== false ? (
                  <div className={`mt-1 text-sm ${palette.subtitle}`}>{subtitle}</div>
                ) : (
                  defaultSubtitle
                )}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              disabled={closeDisabled || busy}
              className="shrink-0 rounded-xl p-2 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 disabled:opacity-40"
              aria-label="Cerrar"
            >
              <X size={22} strokeWidth={2} />
            </button>
          </div>
        </header>

        <div className="h-1 shrink-0 bg-gray-200" aria-hidden>
          <div className={`h-full transition-[width] duration-300 ease-out ${palette.progress}`} style={{ width: `${pct}%` }} />
        </div>

        <div className="relative min-h-0 flex-1 overflow-y-auto">
          <div className="px-6 py-6">{children}</div>
          {busy ? (
            <div className="absolute inset-0 flex items-center justify-center rounded-b-2xl bg-white/85 backdrop-blur-[1px]">
              <div className="text-center">
                <Spinner size="lg" color={palette.spinner} className="mx-auto mb-4" />
                <p className="font-semibold text-gray-800">{busyLabel}</p>
              </div>
            </div>
          ) : null}
        </div>

        {footer != null && footer !== false ? (
          <footer className="flex shrink-0 flex-wrap items-center justify-end gap-2 border-t border-gray-100 px-6 py-4">
            {footer}
          </footer>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}

export default WizardModal;
