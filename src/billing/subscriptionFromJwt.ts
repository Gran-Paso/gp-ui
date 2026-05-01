/** Effective subscription gate statuses from gp-inventory-api JWT */
export type GpSubscriptionStatus =
  | 'free_pass'
  | 'pending'
  | 'active'
  | 'past_due'
  | 'suspended'
  | 'cancelled'
  | 'paused'
  | 'none';

export interface BillingSubscriptionJwtRow {
  businessId: number;
  status: string;
  expires: string;
}

/**
 * Decode JWT payload (no signature verification — same pattern as GP SPAs).
 */
export function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const parts = token.split('.');
    if (parts.length < 2) return null;
    let payload = parts[1].replace(/-/g, '+').replace(/_/g, '/');
    const pad = (4 - (payload.length % 4)) % 4;
    payload += '='.repeat(pad);
    const json = decodeURIComponent(
      atob(payload)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join(''),
    );
    return JSON.parse(json) as Record<string, unknown>;
  } catch {
    return null;
  }
}

function parseBillingRows(raw: unknown): BillingSubscriptionJwtRow[] | null {
  if (typeof raw !== 'string' || !raw.trim()) return null;
  try {
    const arr = JSON.parse(raw) as unknown;
    if (!Array.isArray(arr)) return null;
    return arr.map((row) => {
      const o = row as Record<string, unknown>;
      return {
        businessId: Number(o.businessId),
        status: String(o.status ?? 'none'),
        expires: String(o.expires ?? ''),
      };
    });
  } catch {
    return null;
  }
}

/**
 * Uses claim `billingSubscriptions` when present; falls back to `subscriptionStatus` / `subscriptionExpires` (primary business).
 */
export function resolveSubscriptionSnapshot(
  claims: Record<string, unknown> | null,
  selectedBusinessId: number | null | undefined,
): { status: string; expires: string } {
  if (!claims) return { status: 'none', expires: '' };

  const primaryStatus = String(claims.subscriptionStatus ?? 'none');
  const primaryExpires = String(claims.subscriptionExpires ?? '');

  const sid = selectedBusinessId ?? null;
  if (sid == null || Number.isNaN(sid)) {
    return { status: primaryStatus, expires: primaryExpires };
  }

  const rows = parseBillingRows(claims.billingSubscriptions);
  const hit = rows?.find((r) => r.businessId === sid);
  if (hit) return { status: hit.status, expires: hit.expires };

  return { status: primaryStatus, expires: primaryExpires };
}

export function getSystemRoleFromToken(token: string | null): string | null {
  if (!token) return null;
  const claims = decodeJwtPayload(token);
  const raw = claims?.systemRole;
  return typeof raw === 'string' ? raw : null;
}
