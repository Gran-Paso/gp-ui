import { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export interface SubscriptionPastDueBannerProps {
  billingPortalUrl?: string | null;
  paymentUrl?: string | null;
  expiresHint?: string;
}

function SubscriptionPastDueBanner({
  billingPortalUrl,
  paymentUrl,
  expiresHint,
}: SubscriptionPastDueBannerProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  const href = paymentUrl?.trim() || billingPortalUrl?.trim() || null;

  return (
    <div className="mb-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
      <AlertTriangle className="mt-0.5 shrink-0 text-amber-600" size={18} aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="font-semibold text-amber-950">Pago pendiente</p>
        <p className="mt-0.5 leading-snug text-amber-900/90">
          Tu suscripción tiene un cobro atrasado. Regulariza el pago para evitar la suspensión del servicio.
          {expiresHint ? ` ${expiresHint}` : ''}
        </p>
        {href ? (
          <button
            type="button"
            className="mt-2 text-sm font-semibold text-amber-900 underline underline-offset-2 hover:text-amber-950"
            onClick={() => window.open(href, '_blank', 'noopener,noreferrer')}
          >
            Ver estado de pago
          </button>
        ) : null}
      </div>
      <button
        type="button"
        aria-label="Cerrar aviso"
        className="shrink-0 rounded-lg p-1 text-amber-700/80 hover:bg-amber-100 hover:text-amber-900"
        onClick={() => setOpen(false)}
      >
        <X size={18} />
      </button>
    </div>
  );
}

export default SubscriptionPastDueBanner;
