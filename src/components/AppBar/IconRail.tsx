import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, ChevronDown, LogOut } from 'lucide-react';
import type { NavItem, NavLeaf, NavGroup, NavSection, User } from './types';

interface IconRailProps {
  appIcon: React.ElementType;
  navItems: NavItem[];
  user: User | null;
  onLauncherToggle: () => void;
  launcherOpen: boolean;
  onLogout: () => void;
  permissionCheck?: (perm: string) => boolean;
}

const Tooltip: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="relative group/tip">
    {children}
    <div className="absolute left-full ml-2 top-1/2 -translate-y-1/2 px-2.5 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 pointer-events-none group-hover/tip:opacity-100 transition-opacity whitespace-nowrap z-50 shadow-lg">
      {label}
      <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900" />
    </div>
  </div>
);

const RailLeaf: React.FC<{
  item: NavLeaf;
  indent?: boolean;
}> = ({ item, indent }) => {
  const Icon = item.icon;

  if (item.href) {
    return (
      <Tooltip label={item.label}>
        <a
          href={item.href}
          className={`flex items-center justify-center w-10 h-10 rounded-xl text-gray-500 hover:bg-white/10 hover:text-white transition-all ${indent ? 'w-8 h-8' : ''}`}
        >
          <Icon size={indent ? 16 : 20} />
        </a>
      </Tooltip>
    );
  }

  return (
    <Tooltip label={item.label}>
      <NavLink
        to={item.to}
        end={item.to === '/dashboard'}
        className={({ isActive }) =>
          `relative flex items-center justify-center rounded-xl transition-all ${
            indent ? 'w-8 h-8' : 'w-10 h-10'
          } ${
            isActive
              ? 'bg-green-500/20 text-green-400'
              : 'text-gray-500 hover:bg-white/10 hover:text-white'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.div
                layoutId="rail-active"
                className="absolute -left-[11px] w-[3px] h-5 bg-green-400 rounded-r-full"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            <Icon size={indent ? 16 : 20} />
          </>
        )}
      </NavLink>
    </Tooltip>
  );
};

const RailGroup: React.FC<{
  item: NavGroup;
  hasPerm: (perm: string | null) => boolean;
}> = ({ item, hasPerm }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  const visibleChildren = item.children.filter((c) => hasPerm(c.perm));
  if (visibleChildren.length === 0) return null;

  const anyActive = visibleChildren.some((c) =>
    location.pathname.startsWith(c.to),
  );

  return (
    <div className="relative">
      <Tooltip label={item.label}>
        <button
          onClick={() => setOpen((o) => !o)}
          className={`relative flex items-center justify-center w-10 h-10 rounded-xl transition-all ${
            anyActive
              ? 'bg-green-500/20 text-green-400'
              : 'text-gray-500 hover:bg-white/10 hover:text-white'
          }`}
        >
          {anyActive && !open && (
            <motion.div
              layoutId="rail-active"
              className="absolute -left-[11px] w-[3px] h-5 bg-green-400 rounded-r-full"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <Icon size={20} />
          <ChevronDown
            size={10}
            className={`absolute -bottom-0.5 -right-0.5 text-gray-600 transition-transform ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </Tooltip>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute left-full top-0 ml-2 bg-gray-900 border border-gray-700 rounded-xl p-1.5 shadow-xl z-50 space-y-0.5"
          >
            {visibleChildren.map((child) => (
              <NavLink
                key={child.to}
                to={child.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-green-500/20 text-green-400'
                      : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                <child.icon size={15} className="shrink-0" />
                {child.label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IconRail: React.FC<IconRailProps> = ({
  appIcon: AppIcon,
  navItems,
  user,
  onLauncherToggle,
  launcherOpen,
  onLogout,
  permissionCheck,
}) => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const hasPerm = (perm: string | null) => {
    if (perm === null) return true;
    if (!permissionCheck) return true;
    return permissionCheck(perm);
  };

  const renderItem = (item: NavItem, idx: number) => {
    if (item.kind === 'section') return renderSection(item, idx);
    if (item.kind === 'group') {
      if (!hasPerm(item.perm)) return null;
      return <RailGroup key={item.id} item={item} hasPerm={hasPerm} />;
    }
    if (!hasPerm(item.perm)) return null;
    return <RailLeaf key={item.to} item={item} />;
  };

  const renderSection = (section: NavSection, idx: number) => {
    const items = section.items.filter((i) => hasPerm(i.perm));
    if (items.length === 0) return null;

    return (
      <React.Fragment key={idx}>
        <div className="mx-2 h-px bg-gray-800 my-1.5" />
        {items.map((item) =>
          item.kind === 'group' ? (
            <RailGroup key={item.id} item={item} hasPerm={hasPerm} />
          ) : (
            <RailLeaf key={item.to} item={item} />
          ),
        )}
      </React.Fragment>
    );
  };

  return (
    <div className="flex flex-col items-center w-14 h-full bg-gray-950 border-r border-gray-800 py-3 shrink-0">
      {/* App launcher trigger */}
      <Tooltip label="Aplicaciones">
        <button
          onClick={onLauncherToggle}
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all mb-1 ${
            launcherOpen
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
              : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
          }`}
        >
          {launcherOpen ? (
            <LayoutGrid size={20} />
          ) : (
            <AppIcon size={20} />
          )}
        </button>
      </Tooltip>

      <div className="mx-2 h-px bg-gray-800 my-1.5 w-8" />

      {/* Nav items */}
      <nav className="flex-1 flex flex-col items-center gap-0.5 overflow-y-auto py-1">
        {navItems.map(renderItem)}
      </nav>

      {/* User avatar */}
      <div className="relative mt-auto pt-2">
        <div className="mx-2 h-px bg-gray-800 mb-2 w-8" />

        <Tooltip label={user ? `${user.name} ${user.lastName}` : 'Usuario'}>
          <button
            onClick={() => setUserMenuOpen((o) => !o)}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            {user ? (
              <span className="text-xs font-bold text-green-400 select-none">
                {user.name.charAt(0)}
                {user.lastName.charAt(0)}
              </span>
            ) : (
              <span className="w-5 h-5 rounded-full bg-gray-600" />
            )}
          </button>
        </Tooltip>

        <AnimatePresence>
          {userMenuOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setUserMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, x: -4, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -4, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute left-full bottom-0 ml-2 bg-gray-900 border border-gray-700 rounded-xl p-2 shadow-xl z-50 min-w-[180px]"
              >
                {user && (
                  <div className="px-3 py-2 mb-1">
                    <p className="text-sm font-medium text-white truncate">
                      {user.name} {user.lastName}
                    </p>
                    <p className="text-[11px] text-gray-500 truncate">
                      {user.email}
                    </p>
                    <p className="text-[10px] text-gray-600 mt-0.5">
                      {user.role}
                    </p>
                  </div>
                )}
                <button
                  onClick={() => {
                    setUserMenuOpen(false);
                    onLogout();
                  }}
                  className="flex items-center gap-2 w-full px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                >
                  <LogOut size={15} />
                  Cerrar sesión
                </button>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default IconRail;
