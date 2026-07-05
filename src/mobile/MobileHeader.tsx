import React from 'react';
import GpLogo from '../assets/GpLogo';
import type { MobileHeaderProps } from './types';

const MobileHeader: React.FC<MobileHeaderProps> = ({
  appName = 'Gran Paso',
  appSubtitle = 'Personal',
  user,
  onAvatarClick,
}) => {
  const initials = user
    ? `${user.name?.[0] ?? ''}${user.lastName?.[0] ?? user.name?.[1] ?? ''}`.toUpperCase()
    : '?';

  return (
    <header className="lg:hidden shrink-0 flex items-center justify-between h-mobile-header px-4 pt-[env(safe-area-inset-top)] bg-white border-b border-gray-100">
      <div className="flex items-center gap-2.5 min-w-0">
        <GpLogo size={28} />
        <div className="min-w-0">
          <p className="text-sm font-extrabold text-gray-900 leading-none truncate">{appName}</p>
          <p className="text-[10px] font-medium text-gray-400 mt-0.5 truncate">{appSubtitle}</p>
        </div>
      </div>

      {user ? (
        <button
          type="button"
          onClick={onAvatarClick}
          aria-label="Menú de cuenta"
          className="shrink-0 w-9 h-9 rounded-full bg-gp-vinculo flex items-center justify-center ring-2 ring-white shadow-sm"
        >
          <span className="text-white text-xs font-bold">{initials}</span>
        </button>
      ) : null}
    </header>
  );
};

export default MobileHeader;
