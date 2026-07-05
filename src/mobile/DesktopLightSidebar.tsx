import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import GpLogo from '../assets/GpLogo';
import type { MobileDrawerSection, MobileTab, MobileUser } from './types';

interface DesktopLightSidebarProps {
  appName?: string;
  appSubtitle?: string;
  tabs: MobileTab[];
  drawerSections: MobileDrawerSection[];
  user: MobileUser | null;
  onLogout: () => void;
}

/** Desktop companion nav — light theme, same routes as mobile tabs + drawer */
const DesktopLightSidebar: React.FC<DesktopLightSidebarProps> = ({
  appName = 'Gran Paso',
  appSubtitle = 'Personal',
  tabs,
  drawerSections,
  user,
  onLogout,
}) => {
  const location = useLocation();

  const initials = user
    ? `${user.name?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase()
    : '?';

  return (
    <aside className="hidden lg:flex w-60 shrink-0 flex-col bg-white border-r border-gray-100">
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <GpLogo size={32} />
          <div>
            <p className="text-sm font-extrabold text-gray-900 leading-none">{appName}</p>
            <p className="text-xs text-gray-400 mt-0.5">{appSubtitle}</p>
          </div>
        </div>
      </div>

      {user ? (
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gp-vinculo flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-xs">{initials}</span>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">
                {user.name}
                {user.lastName ? ` ${user.lastName}` : ''}
              </p>
              {user.email ? (
                <p className="text-xs text-gray-400 truncate">{user.email}</p>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}

      <nav className="flex-1 overflow-y-auto p-3">
        <p className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          Principal
        </p>
        <div className="space-y-0.5 mb-4">
          {tabs.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname === item.to ||
                  (item.match === 'prefix' && location.pathname.startsWith(item.to));
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gp-vinculo-soft text-gp-teal-600'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon size={16} />
                {item.label}
              </Link>
            );
          })}
        </div>

        {drawerSections.map((section) => (
          <div key={section.label} className="mb-4">
            <p className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              {section.label}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-gp-vinculo-soft text-gp-teal-600'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-3 border-t border-gray-100">
        <button
          type="button"
          onClick={onLogout}
          className="flex items-center gap-3 px-3 py-2 w-full rounded-lg text-sm text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={16} />
          Cerrar sesión
        </button>
      </div>
    </aside>
  );
};

export default DesktopLightSidebar;
