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
  <div className="mt-auto pt-2 pb-3">
    <div className="mx-3 h-px bg-gray-100 mb-2" />

    <div className={`relative ${expanded ? 'px-2' : 'flex justify-center'}`}>
      <button
        onClick={onUserMenuToggle}
        className={`flex items-center gap-3 rounded-xl transition-all duration-150 ${
          expanded
            ? 'w-full px-3 py-2 hover:bg-gray-50'
            : 'w-10 h-10 justify-center hover:bg-gray-100'
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
            <p className="text-[13px] font-medium text-gray-700 truncate">
              {user.name} {user.lastName}
            </p>
            <p className="text-[11px] text-gray-400 truncate">{user.role}</p>
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
            className="absolute bottom-full left-2 right-2 mb-1 bg-white border border-gray-100 rounded-xl p-1.5 shadow-lg z-50"
          >
            {user && (
              <div className="px-3 py-2 mb-1">
                <p className="text-[11px] text-gray-400 truncate">{user.email}</p>
              </div>
            )}
            <button
              onClick={onLogout}
              className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-[13px] text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
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

export default SidebarFooter;
