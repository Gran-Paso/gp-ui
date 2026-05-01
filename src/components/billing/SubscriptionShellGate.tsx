import { useMemo, type ReactNode } from 'react';
import SubscriptionWall from './SubscriptionWall';
import SubscriptionPastDueBanner from './SubscriptionPastDueBanner';
import {
  decodeJwtPayload,
  getSystemRoleFromToken,
  resolveSubscriptionSnapshot,
} from '../../billing/subscriptionFromJwt';

export interface SubscriptionShellGateProps {
  /** Raw JWT (Bearer body). */
  token: string | null | undefined;
  isAuthenticated: boolean;
  selectedBusinessId: number | null | undefined;
  children: ReactNode;
  /** Optional MP / billing links */
  paymentUrl?: string | null;
  billingPortalUrl?: string | null;
  supportWhatsAppHref?: string | null;
  onSignOut?: () => void;
  /** Wrapper must be `relative` for the suspended overlay. Default adds `relative min-h-[180px]`. */
  className?: string;
}

/**
 * Gates shell main content: full overlay when suspended; banner when past_due.
 * Matches gp-inventory-api middleware + JWT claims (subscriptionStatus, billingSubscriptions).
 */
function SubscriptionShellGate({
  token,
  isAuthenticated,
  selectedBusinessId,
  children,
  paymentUrl,
  billingPortalUrl,
  supportWhatsAppHref,
  onSignOut,
  className = 'relative flex min-h-[60vh] w-full flex-1 flex-col',
}: SubscriptionShellGateProps) {
  const { snapshot, superBypass } = useMemo(() => {
    if (!isAuthenticated || !token) {
      return { snapshot: { status: 'none', expires: '' }, superBypass: false };
    }
    const role = getSystemRoleFromToken(token);
    if (role === 'super_admin') {
      return { snapshot: { status: 'free_pass', expires: '' }, superBypass: true };
    }
    const claims = decodeJwtPayload(token);
    const snapshot = resolveSubscriptionSnapshot(claims, selectedBusinessId ?? null);
    return { snapshot, superBypass: false };
  }, [isAuthenticated, token, selectedBusinessId]);

  if (!isAuthenticated || !token || superBypass) {
    return <div className={className}>{children}</div>;
  }

  const exp = snapshot.expires?.trim();
  const expiresHint =
    exp && snapshot.status !== 'none' ? `Vencimiento referencia: ${exp}` : undefined;

  if (snapshot.status === 'suspended') {
    return (
      <div className={className}>
        <SubscriptionWall
          paymentUrl={paymentUrl}
          billingPortalUrl={billingPortalUrl}
          supportWhatsAppHref={supportWhatsAppHref}
          onSignOut={onSignOut}
          expiresHint={expiresHint}
        />
      </div>
    );
  }

  return (
    <div className={className}>
      {snapshot.status === 'past_due' ? (
        <SubscriptionPastDueBanner
          paymentUrl={paymentUrl}
          billingPortalUrl={billingPortalUrl}
          expiresHint={expiresHint}
        />
      ) : null}
      {children}
    </div>
  );
}

export default SubscriptionShellGate;
