import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, LogOut } from 'lucide-react';
import type { User } from './types';
import type { AccentClasses } from './accentColors';

interface SidebarFooterProps {
  collapsed: boolean;
  user: User | null;
  onLauncherToggle: () => void;
  launcherOpen: boolean;
  onLogout: () => void;
  accent: AccentClasses;
}

const SidebarFooter: React.FC<SidebarFooterProps> = ({
  collapsed,
  user,
  onLauncherToggle,
  launcherOpen,
  onLogout,
  accent,
}) => (
  <div className="border-t border-gray-800 px-2 py-2 space-y-0.5">
    {!collapsed && user && (
      <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-gray-800/50 mb-1">
        <div className={`w-6 h-6 rounded-full ${accent.avatar} flex items-center justify-center text-white text-[10px] font-bold shrink-0 select-none`}>
          {user.name.charAt(0)}
          {user.lastName.charAt(0)}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium text-gray-200 truncate">
            {user.name} {user.lastName}
          </p>
          <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
        </div>
      </div>
    )}

    {collapsed && user && (
      <div className="flex justify-center py-1">
        <div className={`w-7 h-7 rounded-full ${accent.avatar} flex items-center justify-center text-white text-[10px] font-bold select-none`}>
          {user.name.charAt(0)}
          {user.lastName.charAt(0)}
        </div>
      </div>
    )}

    <button
      onClick={onLauncherToggle}
      className={`flex items-center gap-2.5 w-full px-3 py-2 rounded-lg transition-all text-sm border border-transparent ${
        launcherOpen
          ? `${accent.activeBg} ${accent.activeText}`
          : 'text-gray-400 hover:bg-white/5 hover:text-white'
      }`}
      title="Aplicaciones"
    >
      <LayoutGrid size={17} className="shrink-0" />
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="overflow-hidden whitespace-nowrap text-sm"
          >
            Aplicaciones
          </motion.span>
        )}
      </AnimatePresence>
    </button>

    <button
      onClick={onLogout}
      className="flex items-center gap-2.5 w-full px-3 py-2 rounded-lg text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all text-sm border border-transparent"
      title="Cerrar sesión"
    >
      <LogOut size={17} className="shrink-0" />
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="overflow-hidden whitespace-nowrap text-sm"
          >
            Cerrar sesión
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  </div>
);

export default SidebarFooter;
