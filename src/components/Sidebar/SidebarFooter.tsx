import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Monitor, Moon, Settings, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { User } from './types';
import type { AccentClasses } from './accentColors';
import { useGpTheme, type GpTheme } from '../../theme/gpTheme';

interface SidebarFooterProps {
  expanded: boolean;
  user: User | null;
  userMenuOpen: boolean;
  onUserMenuToggle: () => void;
  onLogout: () => void;
  accent: AccentClasses;
  showSettings?: boolean;
}

const themeItems: { value: GpTheme; label: string; icon: typeof Sun }[] = [
  { value: 'light', label: 'Claro', icon: Sun },
  { value: 'dark', label: 'Oscuro', icon: Moon },
  { value: 'system', label: 'Sistema', icon: Monitor },
];

const SidebarFooter: React.FC<SidebarFooterProps> = ({
  expanded,
  user,
  userMenuOpen,
  onUserMenuToggle,
  onLogout,
  accent,
  showSettings,
}) => {
  const { theme, setTheme } = useGpTheme();

  return (
  <div className="mt-auto pt-2 pb-3">
    <div className="mx-3 h-px bg-gray-100 mb-2 dark:bg-gray-800" />

    <div className={`relative ${expanded ? 'px-2' : 'flex justify-center'}`}>
      <button
        onClick={onUserMenuToggle}
        className={`flex items-center gap-3 rounded-xl transition-all duration-150 ${
          expanded
            ? 'w-full px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/5'
            : 'w-10 h-10 justify-center hover:bg-gray-100 dark:hover:bg-white/10'
        }`}
      >
        <div className={`w-8 h-8 rounded-lg ${accent.iconChip} flex items-center justify-center shrink-0`}>
          {user ? (
            <span className="text-[10px] font-bold text-white select-none">
              {user.name.charAt(0)}
              {user.lastName.charAt(0)}
            </span>
          ) : (
            <span className="w-3.5 h-3.5 rounded-full bg-white/50" />
          )}
        </div>
        {expanded && user && (
          <div className="flex-1 min-w-0 text-left">
            <p className="text-[13px] font-medium text-gray-700 truncate dark:text-gray-200">
              {user.name} {user.lastName}
            </p>
            {user.businessName && (
              <p className="text-[10px] text-gray-400 truncate dark:text-gray-500">{user.businessName}</p>
            )}
            <p className="text-[11px] text-gray-400 truncate dark:text-gray-500">{user.role}</p>
          </div>
        )}
      </button>

      <AnimatePresence>
        {userMenuOpen && expanded && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.12 }}
            className="absolute bottom-full left-2 right-2 mb-1 bg-white border border-gray-100 rounded-xl p-1.5 shadow-lg z-50 dark:bg-gray-900 dark:border-gray-800"
          >
            {user && (
              <div className="px-3 py-2 mb-1">
                <p className="text-[11px] text-gray-400 truncate dark:text-gray-500">{user.email}</p>
              </div>
            )}
            <div className="px-1.5 pb-1.5">
              <p className="px-1.5 pb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                Apariencia
              </p>
              <div className="flex gap-0.5 rounded-lg bg-gray-50 p-0.5 dark:bg-gray-800">
                {themeItems.map(({ value, label, icon: Icon }) => {
                  const active = theme === value;
                  return (
                    <button
                      key={value}
                      type="button"
                      title={label}
                      aria-pressed={active}
                      onClick={() => setTheme(value)}
                      className={`flex flex-1 items-center justify-center gap-1 rounded-md px-1.5 py-1.5 text-[11px] font-medium transition-colors ${
                        active
                          ? 'bg-white text-gray-800 shadow-sm dark:bg-gray-700 dark:text-gray-100'
                          : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                      }`}
                    >
                      <Icon size={12} />
                      <span className="hidden min-[200px]:inline">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            {showSettings && (
              <Link
                to="/settings"
                className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-[13px] text-gray-500 hover:bg-gray-100 transition-colors dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-200"
              >
                <Settings size={14} />
                Configuración
              </Link>
            )}
            <button
              onClick={onLogout}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-[13px] text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors dark:hover:bg-red-500/10 dark:hover:text-red-400"
            >
              <LogOut size={14} />
              Cerrar sesión
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
  );
};

export default SidebarFooter;
