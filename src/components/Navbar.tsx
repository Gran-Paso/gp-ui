import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Building2, Store, Check } from 'lucide-react';
import type { NavbarProps } from './Sidebar/types';
import { getAccentClasses } from './Sidebar/accentColors';

/**
 * Top navigation bar — same bg as Sidebar, forming the horizontal arm of the L.
 * Shows current negocio (business) context and user info.
 */
const Navbar: React.FC<NavbarProps> = ({
  accentColor,
  user,
  availableBusinesses,
  selectedBusinessId,
  onSelectBusiness,
}) => {
  const accent = getAccentClasses(accentColor);
  const [bizOpen, setBizOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  const selectedBiz = availableBusinesses.find(
    (b) => b.businessId === selectedBusinessId,
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setBizOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="flex items-center justify-between h-14 px-5 bg-white border-b border-gray-100 shrink-0">
      {/* Left: contexto de negocio (el isotipo va solo en el Sidebar) */}
      <div className="flex min-w-0 items-center gap-2">
        <Store size={14} className="shrink-0 text-gray-300" />
        <span className="truncate text-[13px] font-medium text-gray-400">
          {selectedBiz?.businessName ?? '—'}
        </span>
      </div>

      {/* Right: business selector + user */}
      <div className="flex items-center gap-3">
        {/* Business selector */}
        {availableBusinesses.length > 0 && (
          <div className="relative" ref={dropRef}>
            <button
              onClick={() => setBizOpen((o) => !o)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-150 text-[13px] font-medium ${
                bizOpen
                  ? `${accent.navbarChip} ${accent.navbarChipText} border-transparent`
                  : 'bg-gray-50 text-gray-600 border-gray-100 hover:bg-gray-100 hover:border-gray-200'
              }`}
            >
              <Building2 size={13} className="shrink-0" />
              <span className="max-w-[140px] truncate">
                {selectedBiz?.businessName ?? 'Negocio'}
              </span>
              {availableBusinesses.length > 1 && (
                <ChevronDown
                  size={13}
                  className={`shrink-0 transition-transform ${bizOpen ? 'rotate-180' : ''}`}
                />
              )}
            </button>

            {bizOpen && availableBusinesses.length > 1 && (
              <div className="absolute right-0 top-full mt-1.5 w-52 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
                {availableBusinesses.map((biz) => (
                  <button
                    key={biz.businessId}
                    onClick={() => {
                      onSelectBusiness(biz.businessId);
                      setBizOpen(false);
                    }}
                    className={`flex items-center justify-between w-full px-3 py-2.5 text-[13px] transition-colors ${
                      biz.businessId === selectedBusinessId
                        ? `${accent.navbarChipText} font-semibold`
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="truncate">{biz.businessName}</span>
                    {biz.businessId === selectedBusinessId && (
                      <Check size={13} className="shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Divider */}
        {user && <div className="h-5 w-px bg-gray-100" />}

        {/* User chip */}
        {user && (
          <div className="flex items-center gap-2.5">
            <div className="text-right hidden sm:block">
              <p className="text-[13px] font-medium text-gray-700 leading-none">
                {user.name} {user.lastName}
              </p>
              <p className="text-[11px] text-gray-400 mt-0.5 leading-none">{user.role}</p>
            </div>
            <div
              className={`w-8 h-8 rounded-lg ${accent.iconChip} flex items-center justify-center shrink-0`}
            >
              <span className="text-[10px] font-bold text-white select-none">
                {user.name.charAt(0)}
                {user.lastName.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
