import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { SidebarProps } from './types';
import { getAccentClasses } from './accentColors';
import { brandCssVars, normalizeBrandHex } from './brand';
import GpLogo from '../../assets/GpLogo';
import SidebarNav from './SidebarNav';
import SidebarFooter from './SidebarFooter';
import AppLauncherFlyout from '../AppBar/AppLauncherFlyout';

const sidebarTransition = { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] as const };

const Sidebar: React.FC<SidebarProps> = ({
  appName,
  appIcon: _AppIcon,
  logoSrc,
  businessLogoSrc,
  brandPrimary,
  brandSecondary,
  appId,
  accentColor,
  navItems,
  user,
  apps,
  onAppSelect,
  onLogout,
  permissionCheck,
  showSettings,
  businessApps,
  systemRole,
  onLockedAppClick,
}) => {
  const [hovered, setHovered] = useState(false);
  const [launcherOpen, setLauncherOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const expanded = hovered || launcherOpen;
  const accent = getAccentClasses(accentColor);
  const primaryOn = !!normalizeBrandHex(brandPrimary);
  const secondaryOn = !!normalizeBrandHex(brandSecondary);
  const brandStyle = brandCssVars(brandPrimary, brandSecondary);
  const logo = businessLogoSrc || logoSrc;

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
      style={brandStyle}
      className="relative z-30 flex flex-col h-full bg-white shrink-0 border-r border-gray-100 overflow-visible dark:bg-gray-950 dark:border-gray-800"
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
              ? primaryOn
                ? 'gp-brand-active'
                : `${accent.activeBg}`
              : `hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-white/5 dark:active:bg-white/10`
            : 'cursor-default'
        }`}
      >
        {/* Logo: PNG por defecto (gp-ui) o URL opcional por app */}
        <div className="flex shrink-0 items-center justify-center">
          {logo ? (
            <img src={logo} alt={businessLogoSrc ? 'Logo del negocio' : 'Gran Paso'} className="h-7 w-7 object-contain" />
          ) : (
            <GpLogo size={28} className="rounded-md" />
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
              <span className={`text-[10px] font-bold uppercase tracking-widest leading-none ${
                launcherOpen && primaryOn
                  ? 'gp-brand-on opacity-80'
                  : secondaryOn
                    ? 'gp-brand-secondary-text'
                    : 'text-gray-400 dark:text-gray-500'
              }`}>
                Gran Paso
              </span>
              <span className={`text-[14px] font-semibold truncate leading-tight font-montserrat mt-0.5 ${
                launcherOpen && primaryOn
                  ? 'gp-brand-on'
                  : launcherOpen
                    ? accent.navIconActive
                    : 'text-gray-800 dark:text-gray-100'
              }`}>
                {appName}
              </span>
            </motion.div>
          </AnimatePresence>
        )}
      </button>

      <div className="mx-3 h-px bg-gray-100 shrink-0 dark:bg-gray-800" />

      <SidebarNav
        items={navItems}
        expanded={expanded}
        hasPerm={hasPerm}
        accent={accent}
        brandPrimary={primaryOn}
        brandSecondary={secondaryOn}
      />

      <SidebarFooter
        expanded={expanded}
        user={user}
        userMenuOpen={userMenuOpen}
        onUserMenuToggle={() => setUserMenuOpen((o) => !o)}
        onLogout={onLogout}
        accent={accent}
        brandPrimary={primaryOn}
        showSettings={showSettings}
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
            businessApps={businessApps}
            systemRole={systemRole}
            onLockedAppClick={(app) => {
              setLauncherOpen(false);
              onLockedAppClick?.(app);
            }}
          />
        )}
      </AnimatePresence>
    </motion.aside>
  );
};

export default Sidebar;
