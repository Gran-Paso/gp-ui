import React, { useMemo } from 'react';
import { Ticket } from 'lucide-react';
import {
  decodeJwtPayload,
  resolveSubscriptionSnapshot,
} from '../../billing/subscriptionFromJwt';

export interface FreePassBadgeProps {
  /** Raw JWT string. */
  token?: string | null;
  /** Selected business id; if omitted uses primary claims. */
  selectedBusinessId?: number | null;
  /** Force a specific status (overrides JWT parsing). */
  status?: 'free_pass' | 'active' | 'past_due' | 'suspended' | 'none' | string;
  /** Force expiration text. */
  expires?: string;
  /** Optional additional className. */
  className?: string;
  /** Tooltip text override. */
  tooltip?: string;
}

/**
 * Golden "Free Pass" flag for the navbar / shell.
 *
 * If no `status` prop is provided, it parses the JWT and resolves the
 * effective subscription status for the selected business.
 *
 * It only renders when the effective status is `'free_pass'`.
 */
const FreePassBadge: React.FC<FreePassBadgeProps> = ({
  token,
  selectedBusinessId,
  status: forcedStatus,
  expires: forcedExpires,
  className = '',
  tooltip,
}) => {
  const { status, expires } = useMemo(() => {
    if (forcedStatus) {
      return {
        status: forcedStatus,
        expires: forcedExpires ?? '',
      };
    }
    if (!token) {
      return { status: 'none', expires: '' };
    }
    const claims = decodeJwtPayload(token);
    const snapshot = resolveSubscriptionSnapshot(
      claims,
      selectedBusinessId ?? null,
    );
    return { status: snapshot.status, expires: snapshot.expires };
  }, [forcedStatus, forcedExpires, token, selectedBusinessId]);

  if (status !== 'free_pass') {
    return null;
  }

  const label = tooltip ?? (expires ? `Free Pass · vence ${expires}` : 'Free Pass');

  return (
    <span
      title={label}
      className={`
        inline-flex items-center gap-1.5
        rounded-full
        border border-amber-300
        bg-amber-50
        px-2.5 py-0.5
        text-[11px] font-semibold uppercase tracking-wider text-amber-700
        shadow-sm
        ${className}
      `}
    >
      <Ticket size={12} className="text-amber-500" />
      Free Pass
    </span>
  );
};

export default FreePassBadge;
