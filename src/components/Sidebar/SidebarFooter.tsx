import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut } from 'lucide-react';
import type { User } from './types';
import type { AccentClasses } from './accentColors';

interface SidebarFooterProps {
  expanded: boolean;
  user: User | null;
  userMenuOpen: boolean;
  onUserMenuToggle: () => void;
  onLogout: () => void;
  accent: AccentClasses;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({
  expanded,
  user,
  userMenuOpen,
  onUserMenuToggle,
  onLogout,
  accent,
}) => (
  <div className="mt-auto pt-2">
    <div className="mx-3 h-px bg-gray-800 mb-2" />

    <div className={`relative ${expanded ? 'px-2' : 'flex justify-center'}`}>
      <button
        onClick={onUserMenuToggle}
        className={`flex items-center gap-3 rounded-xl transition-colors ${
          expanded
            ? 'w-full px-3 py-2 hover:bg-white/5'
            : 'w-10 h-10 justify-center bg-gray-800 hover:bg-gray-700'
        }`}
      >
        <div className={`w-8 h-8 rounded-lg ${accent.iconChip} flex items-center justify-center shrink-0`}>
          {user ? (
            <span className="text-[10px] font-bold text-white select-none">
              {user.name.charAt(0)}
              {user.lastName.charAt(0)}
            </span>
          ) : (
            <span className={`w-4 h-4 rounded-full ${accent.activeText}`} />
          )}
        </div>
        {expanded && user && (
          <div className="flex-1 min-w-0 text-left">
            <p className="text-xs font-medium text-gray-200 truncate">
              {user.name} {user.lastName}
            </p>
            <p className="text-[10px] text-gray-500 truncate">{user.role}</p>
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
            className="absolute bottom-full left-2 right-2 mb-1 bg-gray-900 border border-gray-700 rounded-xl p-1.5 shadow-xl z-50"
          >
            {user && (
              <div className="px-3 py-2 mb-1">
                <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
              </div>
            )}
            <button
              onClick={onLogout}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
            >
              <LogOut size={15} />
              Cerrar sesión
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    <div className="h-2" />
  </div>
);

export default SidebarFooter;
