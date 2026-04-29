import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { AccentClasses } from './accentColors';

interface SidebarHeaderProps {
  appName: string;
  appIcon: React.ElementType;
  collapsed: boolean;
  onToggle: () => void;
  accent: AccentClasses;
}

const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  appName,
  appIcon: AppIcon,
  collapsed,
  onToggle,
  accent,
}) => (
  <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
    <AnimatePresence>
      {!collapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center gap-2 min-w-0"
        >
          <div className={`w-7 h-7 rounded-lg ${accent.iconChip} flex items-center justify-center shrink-0`}>
            <AppIcon size={14} className="text-white" />
          </div>
          <span className="font-montserrat font-bold text-sm whitespace-nowrap text-white truncate">
            {appName}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
    {collapsed && (
      <div className={`mx-auto w-7 h-7 rounded-lg ${accent.iconChip} flex items-center justify-center shrink-0`}>
        <AppIcon size={14} className="text-white" />
      </div>
    )}
    <button
      onClick={onToggle}
      className="p-1.5 rounded-lg hover:bg-gray-800 transition-colors ml-auto text-gray-400 hover:text-white"
    >
      {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
    </button>
  </div>
);

export default SidebarHeader;
