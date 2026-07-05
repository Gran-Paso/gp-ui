import React, { useState } from 'react';
import MobileHeader from './MobileHeader';
import MobileTabBar from './MobileTabBar';
import MobileDrawer from './MobileDrawer';
import DesktopLightSidebar from './DesktopLightSidebar';
import type { MobileShellProps } from './types';

const MobileShell: React.FC<MobileShellProps> = ({
  appName = 'Gran Paso',
  appSubtitle = 'Personal',
  tabs,
  drawerSections,
  user,
  onLogout,
  onSwitchToErp,
  showErpBridge = false,
  badges,
  children,
  hideTabBar = false,
  hideHeader = false,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 overflow-hidden">
      <DesktopLightSidebar
        appName={appName}
        appSubtitle={appSubtitle}
        tabs={tabs}
        drawerSections={drawerSections}
        user={user}
        onLogout={onLogout}
      />

      <div className="flex flex-1 flex-col min-w-0 min-h-screen">
        {!hideHeader ? (
          <MobileHeader
            appName={appName}
            appSubtitle={appSubtitle}
            user={user}
            onAvatarClick={() => setDrawerOpen(true)}
          />
        ) : null}

        <main
          className={`flex-1 overflow-y-auto overflow-x-hidden ${
            hideTabBar ? '' : 'pb-[calc(3.5rem+env(safe-area-inset-bottom))] lg:pb-0'
          }`}
        >
          <div className="px-4 py-4 lg:px-8 lg:py-8">{children}</div>
        </main>

        {!hideTabBar ? (
          <MobileTabBar
            tabs={tabs}
            badges={badges}
            onMoreClick={() => setDrawerOpen(true)}
          />
        ) : null}
      </div>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sections={drawerSections}
        user={user}
        onLogout={onLogout}
        onSwitchToErp={onSwitchToErp}
        showErpBridge={showErpBridge}
        appName={appName}
        appSubtitle={appSubtitle}
      />
    </div>
  );
};

export default MobileShell;
