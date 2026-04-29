import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SidebarProps } from './types';
import { getAccentClasses } from './accentColors';
import GpLogo from '../../assets/GpLogo';
import SidebarNav from './SidebarNav';
import SidebarFooter from './SidebarFooter';
import AppLauncherFlyout from '../AppBar/AppLauncherFlyout';

const sidebarTransition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };

const Sidebar: React.FC<SidebarProps> = ({
  appName,
  appIcon: _AppIcon,
  logoSrc,
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

  const canLaunch = !!(apps && appId && onAppSelect);

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
      {/* ── Logo zone — unified launcher trigger ── */}
      <button
        onClick={() => canLaunch && setLauncherOpen((o) => !o)}
        disabled={!canLaunch}
        className={`flex items-center h-14 shrink-0 w-full transition-all duration-150 select-none ${
          expanded ? 'gap-3 px-4' : 'justify-center px-0'
        } ${
          canLaunch
            ? launcherOpen
              ? `${accent.activeBg}`
              : `hover:bg-gray-50 active:bg-gray-100`
            : 'cursor-default'
        }`}
      >
        {/* Logo image or SVG fallback */}
        <div className={`flex items-center justify-center shrink-0 ${!logoSrc ? accent.navIconActive : ''}`}>
          {logoSrc ? (
            <img src={logoSrc} alt="Gran Paso" className="w-7 h-7 object-contain" />
          ) : (
            <GpLogo size={26} />
          )}
        </div>

        {expanded && (
          <AnimatePresence>
            <motion.div
              key="appname"
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex flex-col min-w-0 text-left"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 leading-none">
                Gran Paso
              </span>
              <span className={`text-[14px] font-semibold truncate leading-tight font-montserrat mt-0.5 ${
                launcherOpen ? accent.navIconActive : 'text-gray-800'
              }`}>
                {appName}
              </span>
            </motion.div>
          </AnimatePresence>
        )}
      </button>

      <div className="mx-3 h-px bg-gray-100 shrink-0" />

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
        {launcherOpen && canLaunch && (
          <AppLauncherFlyout
            apps={apps!}
            currentAppId={appId!}
            onAppSelect={(app) => {
              setLauncherOpen(false);
              onAppSelect!(app);
            }}
            onClose={() => setLauncherOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

export default Sidebar;
