import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import type { SidebarProps } from './types';
import SidebarHeader from './SidebarHeader';
import SidebarNav from './SidebarNav';
import SidebarFooter from './SidebarFooter';

const Sidebar: React.FC<SidebarProps> = ({
  appName,
  appIcon,
  navItems,
  user,
  availableBusinesses,
  selectedBusinessId,
  onSelectBusiness,
  onChangeApp,
  onLogout,
  permissionCheck,
}) => {
  const [collapsed, setCollapsed] = useState(false);

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
      animate={{ width: collapsed ? 68 : 232 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="relative flex flex-col h-full bg-gray-950 text-white overflow-hidden shrink-0 border-r border-gray-800"
    >
      <SidebarHeader
        appName={appName}
        appIcon={appIcon}
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
      />

      {/* Business selector */}
      {!collapsed && selectedBiz && (
        <div className="mx-3 mt-3 mb-1 px-3 py-2 bg-gray-800/80 rounded-lg border border-gray-700/50">
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
              className="mt-1.5 w-full text-xs bg-gray-900 text-gray-200 border border-gray-600 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-green-500"
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

      {collapsed && selectedBiz && (
        <div className="px-3 py-2 border-b border-gray-800 flex justify-center">
          <Building2
            size={14}
            className="text-gray-500"
            aria-label={selectedBiz.businessName}
          />
        </div>
      )}

      <SidebarNav items={navItems} collapsed={collapsed} hasPerm={hasPerm} />

      <SidebarFooter
        collapsed={collapsed}
        user={user}
        onChangeApp={onChangeApp}
        onLogout={onLogout}
      />
    </motion.aside>
  );
};

export default Sidebar;
