import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, LayoutGrid } from 'lucide-react';
import type { SidebarProps } from './types';
import { getAccentClasses } from './accentColors';
import SidebarNav from './SidebarNav';
import SidebarFooter from './SidebarFooter';
import AppLauncherFlyout from '../AppBar/AppLauncherFlyout';

const Sidebar: React.FC<SidebarProps> = ({
  appName,
  appIcon: AppIcon,
  appId,
  accentColor,
  navItems,
  user,
  availableBusinesses,
  selectedBusinessId,
  onSelectBusiness,
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

  const selectedBiz = availableBusinesses.find(
    (b) => b.businessId === selectedBusinessId,
  );

  return (
    <motion.aside
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setUserMenuOpen(false);
      }}
      animate={{ width: expanded ? 232 : 56 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="relative flex flex-col h-full bg-gray-950 text-white shrink-0 border-r border-gray-800 overflow-hidden"
    >
      {/* App launcher trigger + app name */}
      <div className={`flex items-center gap-3 px-2 py-3 ${!expanded ? 'justify-center' : ''}`}>
        <button
          onClick={() => setLauncherOpen((o) => !o)}
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all shrink-0 ${
            launcherOpen
              ? `${accent.iconChip} text-white shadow-lg ${accent.launcherShadow}`
              : `${accent.launcherBg} ${accent.activeText} ${accent.launcherBgHover}`
          }`}
        >
          {launcherOpen ? <LayoutGrid size={20} /> : <AppIcon size={20} />}
        </button>
        {expanded && (
          <span className="text-xs font-bold text-white truncate font-montserrat">
            {appName}
          </span>
        )}
      </div>

      <div className="mx-3 h-px bg-gray-800" />

      {/* Business selector */}
      {expanded && selectedBiz && (
        <div className="mx-2 mt-2 mb-1 px-3 py-2 bg-gray-800/80 rounded-lg border border-gray-700/50">
          <div className="flex items-center gap-2">
            <Building2 size={13} className="text-gray-400 shrink-0" />
            <span className="text-xs text-gray-300 font-medium truncate">
              {selectedBiz.businessName}
            </span>
          </div>
          {availableBusinesses.length > 1 && (
            <select
              value={selectedBusinessId ?? ''}
              onChange={(e) => onSelectBusiness(parseInt(e.target.value))}
              className={`mt-1.5 w-full text-xs bg-gray-900 text-gray-200 border border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:ring-1 ${accent.focusRing}`}
            >
              {availableBusinesses.map((b) => (
                <option key={b.businessId} value={b.businessId}>
                  {b.businessName}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {!expanded && selectedBiz && (
        <div className="px-2 py-2 flex justify-center">
          <Building2
            size={14}
            className="text-gray-500"
            aria-label={selectedBiz.businessName}
          />
        </div>
      )}

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
