import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import type { MobileTabBarProps, MobileTab } from './types';

function isTabActive(tab: MobileTab, pathname: string): boolean {
  if (tab.match === 'prefix') {
    return pathname === tab.to || (tab.to !== '/' && pathname.startsWith(tab.to));
  }
  if (tab.to === '/') return pathname === '/';
  return pathname === tab.to;
}

const MobileTabBar: React.FC<MobileTabBarProps> = ({ tabs, badges, onMoreClick }) => {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Navegación principal"
      className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-gray-100 pb-[env(safe-area-inset-bottom)]"
    >
      <div className="flex items-stretch h-mobile-tabbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const active = isTabActive(tab, pathname);
          const badge = badges?.[tab.to] ?? 0;

          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.to === '/'}
              className={`relative flex flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold transition-colors ${
                active ? 'text-gp-teal-400' : 'text-gray-400'
              }`}
            >
              <span
                className={`relative flex items-center justify-center w-9 h-7 rounded-xl transition-colors ${
                  active ? 'bg-gp-vinculo-soft' : ''
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.25 : 2} />
                {badge > 0 ? (
                  <span className="absolute -top-0.5 -right-1 min-w-[16px] h-4 px-1 rounded-full bg-red-500 text-white text-[9px] font-bold flex items-center justify-center">
                    {badge > 99 ? '99+' : badge}
                  </span>
                ) : null}
              </span>
              <span>{tab.label}</span>
              {active ? (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-gp-teal-400" />
              ) : null}
            </NavLink>
          );
        })}

        <button
          type="button"
          onClick={onMoreClick}
          aria-label="Más opciones"
          className="flex flex-1 flex-col items-center justify-center gap-0.5 text-[10px] font-semibold text-gray-400"
        >
          <span className="flex items-center justify-center w-9 h-7 rounded-xl">
            <Menu size={20} />
          </span>
          <span>Más</span>
        </button>
      </div>
    </nav>
  );
};

export default MobileTabBar;
