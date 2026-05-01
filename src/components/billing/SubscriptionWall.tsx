import { CreditCard, LogOut } from 'lucide-react';
import Button from '../Button';

export interface SubscriptionWallProps {
  /** When Mercado Pago preapproval URL is known (e.g. from 402 body). */
  paymentUrl?: string | null;
  /** Fallback portal (e.g. env). Shown if no paymentUrl. */
  billingPortalUrl?: string | null;
  supportWhatsAppHref?: string | null;
  onSignOut?: () => void;
  expiresHint?: string;
}

function SubscriptionWall({
  paymentUrl,
  billingPortalUrl,
  supportWhatsAppHref,
  onSignOut,
  expiresHint,
}: SubscriptionWallProps) {
  const primaryHref = paymentUrl?.trim() || billingPortalUrl?.trim() || null;

  return (
    <div
      className="absolute inset-0 z-[60] flex flex-col items-center justify-center bg-gray-50/95 px-6 py-12 backdrop-blur-[2px]"
      role="alertdialog"
      aria-labelledby="gp-sub-wall-title"
      aria-describedby="gp-sub-wall-desc"
    >
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-xl">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-600">
          <CreditCard size={28} strokeWidth={2} />
        </div>
        <h1
          id="gp-sub-wall-title"
          className="text-center font-montserrat text-xl font-bold text-gray-900"
        >
          Suscripción suspendida
        </h1>
        <p id="gp-sub-wall-desc" className="mt-3 text-center text-sm leading-relaxed text-gray-600">
          El acceso a esta aplicación está bloqueado hasta regularizar el pago. Si ya pagaste, espera unos
          minutos o contacta soporte.
        </p>
        {expiresHint ? (
          <p className="mt-2 text-center text-xs text-gray-400">{expiresHint}</p>
        ) : null}

        <div className="mt-8 flex flex-col gap-3">
          {primaryHref ? (
            <Button
              variant="primary"
              className="w-full justify-center"
              onClick={() => {
                window.open(primaryHref, '_blank', 'noopener,noreferrer');
              }}
            >
              Ir a pagar
            </Button>
          ) : null}
          {supportWhatsAppHref ? (
            <Button variant="outline" className="w-full justify-center" onClick={() => {
                window.open(supportWhatsAppHref, '_blank', 'noopener,noreferrer');
              }}>
              Contactar soporte
            </Button>
          ) : null}
          {onSignOut ? (
            <button
              type="button"
              onClick={onSignOut}
              className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-800"
            >
              <LogOut size={18} />
              Cerrar sesión
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SubscriptionWall;
