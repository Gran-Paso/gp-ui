import type { CSSProperties, FC } from 'react';

const PALETTE = [
  '#4f46e5',
  '#7c3aed',
  '#e11d48',
  '#d97706',
  '#0d9488',
  '#0284c7',
  '#db2777',
  '#16a34a',
  '#ea580c',
  '#0891b2',
];

export function userInitials(name?: string | null, lastName?: string | null): string {
  const first = (name ?? '').trim();
  const last = (lastName ?? '').trim();
  if (first && last) return (first[0] + last[0]).toUpperCase();
  const one = first || last;
  return one.slice(0, 2).toUpperCase() || '?';
}

export function userAvatarColor(userId?: number | null): string {
  if (userId == null || !Number.isFinite(userId)) return PALETTE[0];
  return PALETTE[Math.abs(userId) % PALETTE.length];
}

export function sidebarDisplayName(user: {
  alias?: string | null;
  name?: string | null;
  lastName?: string | null;
}): string {
  const alias = user.alias?.trim();
  if (alias) return alias;
  return `${user.name ?? ''} ${user.lastName ?? ''}`.trim();
}

export function resolveGpMediaUrl(path?: string | null): string | undefined {
  if (!path?.trim()) return undefined;
  const trimmed = path.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.startsWith('//')) {
    return trimmed;
  }
  const host = window.location.hostname;
  let api = 'https://api.granpasochile.cl';
  if (host.includes('localhost') || host.includes('127.0.0.1')) api = 'http://localhost:8080';
  else if (host.startsWith('dev.')) api = 'https://dev.api.granpasochile.cl';
  else if (host.startsWith('qa.')) api = 'https://qa.api.granpasochile.cl';
  return `${api}${trimmed.startsWith('/') ? trimmed : `/${trimmed}`}`;
}

export function gpAuthProfileUrl(): string {
  const host = window.location.hostname;
  let base = 'https://auth.granpasochile.cl';
  if (host.includes('localhost') || host.includes('127.0.0.1')) base = 'http://localhost:3004';
  else if (host.startsWith('dev.')) base = 'https://dev.auth.granpasochile.cl';
  else if (host.startsWith('qa.')) base = 'https://qa.auth.granpasochile.cl';
  return `${base}/perfil`;
}

export function sidebarProfileFields(source: object | null | undefined): {
  id?: number;
  alias?: string;
  avatarUrl?: string;
} {
  if (!source) return {};
  const u = source as { id?: number; alias?: string | null; avatarUrl?: string | null };
  const id = typeof u.id === 'number' && u.id > 0 ? u.id : undefined;
  const alias = u.alias?.trim() || undefined;
  const avatarUrl = u.avatarUrl?.trim() || undefined;
  return {
    ...(id != null ? { id } : {}),
    ...(alias ? { alias } : {}),
    ...(avatarUrl ? { avatarUrl } : {}),
  };
}

interface UserAvatarProps {
  name?: string | null;
  lastName?: string | null;
  userId?: number | null;
  avatarUrl?: string | null;
  className?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({
  name,
  lastName,
  userId,
  avatarUrl,
  className = 'w-8 h-8 rounded-lg',
}) => {
  const src = resolveGpMediaUrl(avatarUrl);
  if (src) {
    return <img src={src} alt="" className={`${className} object-cover shrink-0`} />;
  }
  const style: CSSProperties = { backgroundColor: userAvatarColor(userId) };
  return (
    <div style={style} className={`${className} flex items-center justify-center shrink-0`}>
      <span className="text-[10px] font-bold text-white select-none">
        {userInitials(name, lastName)}
      </span>
    </div>
  );
};

export default UserAvatar;
