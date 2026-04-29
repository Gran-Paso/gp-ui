import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { AppBarProps } from './types';
import IconRail from './IconRail';
import TopBar from './TopBar';
import AppLauncherFlyout from './AppLauncherFlyout';

const AppBar: React.FC<AppBarProps> = ({
  appName,
  appIcon,
  appId,
  navItems,
  user,
  availableBusinesses,
  selectedBusinessId,
  onSelectBusiness,
  apps,
  onAppSelect,
  onLogout,
  permissionCheck,
  children,
}) => {
  const [launcherOpen, setLauncherOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Icon Rail + App Launcher */}
      <div className="relative z-30">
        <IconRail
          appIcon={appIcon}
          navItems={navItems}
          user={user}
          onLauncherToggle={() => setLauncherOpen((o) => !o)}
          launcherOpen={launcherOpen}
          onLogout={onLogout}
          permissionCheck={permissionCheck}
        />

        <AnimatePresence>
          {launcherOpen && (
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
      </div>

      {/* TopBar + Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          appName={appName}
          user={user}
          availableBusinesses={availableBusinesses}
          selectedBusinessId={selectedBusinessId}
          onSelectBusiness={onSelectBusiness}
        />
        <main className="flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default AppBar;
