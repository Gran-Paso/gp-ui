import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import type { SidebarProps } from './types';
import { getAccentClasses } from './accentColors';
import GpLogo from '../../assets/GpLogo';
import SidebarNav from './SidebarNav';
import SidebarFooter from './SidebarFooter';
import AppLauncherFlyout from '../AppBar/AppLauncherFlyout';

const sidebarTransition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };

const Sidebar: React.FC<SidebarProps> = ({
  appName,
  appIcon: AppIcon,
  appId,
  accentColor,
  navItems,
  user,
  apps,
  onAppSelect,
  onLogout,
  permissionCheck,
}) => {
  const [hovered, setHovered] = useState(false);
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const expanded = hovered || launcherOpen;
  const accent = getAccentClasses(accentColor);

  const hasPerm = (perm: string | null) => {
    if (perm === null) return true;
    if (!permissionCheck) return true;
    return permissionCheck(perm);
  };

  return (
    <motion.aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setUserMenuOpen(false);
      }}
      animate={{ width: expanded ? 232 : 56 }}
      transition={sidebarTransition}
      className="relative flex flex-col h-full bg-white shrink-0 border-r border-gray-100 overflow-hidden"
    >
      {/* Logo area — aligns with navbar height (h-14 = 56px) */}
      <div
        className={`flex items-center h-14 shrink-0 ${
          expanded ? 'gap-3 px-4' : 'justify-center px-0'
        }`}
      >
        {/* GP Logo mark */}
        <div className={`flex items-center justify-center shrink-0 ${accent.navIconActive}`}>
          <GpLogo size={26} />
        </div>

        {expanded && (
          <AnimatePresence>
            <motion.div
              key="appname"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col min-w-0"
            >
              <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400 leading-none">
                Gran Paso
              </span>
              <span className="text-[14px] font-semibold text-gray-800 truncate leading-tight font-montserrat mt-0.5">
                {appName}
              </span>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      <div className="mx-3 h-px bg-gray-100 shrink-0" />

      {/* App launcher trigger */}
      <div className={`flex px-2 pt-3 pb-1 ${!expanded ? 'justify-center' : ''}`}>
        <button
          onClick={() => setLauncherOpen((o) => !o)}
          title={expanded ? undefined : 'Lanzador de apps'}
          className={`flex items-center gap-3 rounded-xl transition-all duration-150 ${
            expanded
              ? 'w-full px-3 py-2'
              : 'w-10 h-10 justify-center'
          } ${
            launcherOpen
              ? `${accent.activeBg} ${accent.activeText}`
              : `${accent.hoverBg} text-gray-500 hover:text-gray-700`
          }`}
        >
          {launcherOpen ? (
            <LayoutGrid size={18} className={`shrink-0 ${launcherOpen ? accent.navIconActive : accent.navIcon}`} />
          ) : (
            <AppIcon size={18} className={`shrink-0 ${accent.navIcon}`} />
          )}
          {expanded && (
            <span className="text-[13px] truncate">
              {launcherOpen ? 'Apps' : appName}
            </span>
          )}
        </button>
      </div>

      <SidebarNav items={navItems} expanded={expanded} hasPerm={hasPerm} accent={accent} />

      <SidebarFooter
        expanded={expanded}
        user={user}
        userMenuOpen={userMenuOpen}
        onUserMenuToggle={() => setUserMenuOpen((o) => !o)}
        onLogout={onLogout}
        accent={accent}
      />

      <AnimatePresence>
        {launcherOpen && apps && appId && onAppSelect && (
          <AppLauncherFlyout
            apps={apps}
            currentAppId={appId}
            onAppSelect={(app) => {
              setLauncherOpen(false);
              onAppSelect(app);
            }}
            onClose={() => setLauncherOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

export default Sidebar;
