import { useMemo } from 'react';
import {
  decodeJwtPayload,
  resolveSubscriptionSnapshot,
  getSystemRoleFromToken,
} from './subscriptionFromJwt';

export interface UseSubscriptionSnapshotResult {
  /** Resolved status for the selected business (or primary claims). */
  status: string;
  /** Expiration hint (ISO string or empty). */
  expires: string;
  /** True when the caller is a super_admin (bypasses gates). */
  superBypass: boolean;
}

/**
 * React hook that parses the JWT and returns the effective subscription
 * snapshot for the currently selected business.
 *
 * Usage in a Layout / shell component:
 *
 * ```tsx
 * const { status, expires, superBypass } = useSubscriptionSnapshot(token, selectedBusinessId);
 * ```
 *
 * - `superBypass` is `true` for `systemRole === 'super_admin'`.
 * - `status` is one of: `free_pass`, `pending`, `active`, `past_due`,
 *   `suspended`, `cancelled`, `paused`, `none`.
 */
export function useSubscriptionSnapshot(
  token: string | null | undefined,
  selectedBusinessId: number | null | undefined,
): UseSubscriptionSnapshotResult {
  return useMemo(() => {
    if (!token) {
      return { status: 'none', expires: '', superBypass: false };
    }

    const role = getSystemRoleFromToken(token);
    if (role === 'super_admin') {
      return { status: 'free_pass', expires: '', superBypass: true };
    }

    const claims = decodeJwtPayload(token);
    const snapshot = resolveSubscriptionSnapshot(
      claims,
      selectedBusinessId ?? null,
    );
    return { status: snapshot.status, expires: snapshot.expires, superBypass: false };
  }, [token, selectedBusinessId]);
}
