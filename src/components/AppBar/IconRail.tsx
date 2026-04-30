import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, ChevronDown, LogOut, ExternalLink } from 'lucide-react';
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

const RailLeaf: React.FC<{
  item: NavLeaf;
  expanded: boolean;
  indent?: boolean;
}> = ({ item, expanded, indent }) => {
  const Icon = item.icon;

  const base = `relative flex items-center gap-3 rounded-xl transition-all ${
    indent ? 'py-1.5' : 'py-2'
  }`;
  const sizing = expanded ? 'px-3 w-full' : 'px-0 w-10 justify-center';

  if (item.href) {
    return (
      <a
        href={item.href}
        className={`${base} ${sizing} text-gray-500 hover:bg-white/10 hover:text-white relative`}
      >
        <Icon size={indent ? 16 : 18} className="shrink-0" />
        {expanded && (
          <>
            <span className="flex-1 min-w-0 text-sm font-medium truncate">{item.label}</span>
            <ExternalLink size={14} className="shrink-0 opacity-55" aria-hidden />
          </>
        )}
        {!expanded && (
          <ExternalLink
            size={11}
            strokeWidth={2.25}
            className="pointer-events-none absolute bottom-1 right-1 opacity-60"
            aria-hidden
          />
        )}
      </a>
    );
  }

  return (
    <NavLink
      to={item.to}
      end={item.to === '/dashboard'}
      className={({ isActive }) =>
        `${base} ${sizing} ${
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
              className="absolute -left-3 w-[3px] h-5 bg-green-400 rounded-r-full"
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          )}
          <Icon size={indent ? 16 : 18} className="shrink-0" />
          {expanded && (
            <span className="text-sm font-medium truncate">{item.label}</span>
          )}
        </>
      )}
    </NavLink>
  );
};

const RailGroup: React.FC<{
  item: NavGroup;
  expanded: boolean;
  hasPerm: (perm: string | null) => boolean;
}> = ({ item, expanded, hasPerm }) => {
  const location = useLocation();
  const visibleChildren = item.children.filter((c) => hasPerm(c.perm));
  if (visibleChildren.length === 0) return null;

  const anyActive = visibleChildren.some((c) =>
    location.pathname.startsWith(c.to),
  );
  const [open, setOpen] = useState(anyActive);
  const Icon = item.icon;

  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`relative flex items-center gap-3 rounded-xl transition-all py-2 w-full ${
          expanded ? 'px-3' : 'px-0 justify-center'
        } ${
          anyActive
            ? 'bg-green-500/20 text-green-400'
            : 'text-gray-500 hover:bg-white/10 hover:text-white'
        }`}
      >
        {anyActive && !open && (
          <motion.div
            layoutId="rail-active"
            className="absolute -left-3 w-[3px] h-5 bg-green-400 rounded-r-full"
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        )}
        <Icon size={18} className="shrink-0" />
        {expanded && (
          <>
            <span className="text-sm font-medium truncate flex-1 text-left">
              {item.label}
            </span>
            <ChevronDown
              size={13}
              className={`shrink-0 text-gray-600 transition-transform ${open ? 'rotate-180' : ''}`}
            />
          </>
        )}
      </button>

      <AnimatePresence initial={false}>
        {open && expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="overflow-hidden ml-3 mt-0.5 space-y-0.5 border-l border-gray-800 pl-2"
          >
            {visibleChildren.map((child) => (
              <RailLeaf key={child.to} item={child} expanded={expanded} indent />
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
  const [hovered, setHovered] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const expanded = hovered || launcherOpen;

  const hasPerm = (perm: string | null) => {
    if (perm === null) return true;
    if (!permissionCheck) return true;
    return permissionCheck(perm);
  };

  const renderItem = (item: NavItem, idx: number) => {
    if (item.kind === 'section') return renderSection(item, idx);
    if (item.kind === 'group') {
      if (!hasPerm(item.perm)) return null;
      return <RailGroup key={item.id} item={item} expanded={expanded} hasPerm={hasPerm} />;
    }
    if (!hasPerm(item.perm)) return null;
    return <RailLeaf key={item.to} item={item} expanded={expanded} />;
  };

  const renderSection = (section: NavSection, idx: number) => {
    const items = section.items.filter((i) => hasPerm(i.perm));
    if (items.length === 0) return null;

    return (
      <React.Fragment key={idx}>
        <div className="h-px bg-gray-800 my-2" />
        {expanded && (
          <p className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
            {section.label}
          </p>
        )}
        {items.map((item) =>
          item.kind === 'group' ? (
            <RailGroup key={item.id} item={item} expanded={expanded} hasPerm={hasPerm} />
          ) : (
            <RailLeaf key={item.to} item={item} expanded={expanded} />
          ),
        )}
      </React.Fragment>
    );
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setUserMenuOpen(false);
      }}
      animate={{ width: expanded ? 200 : 56 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="flex flex-col h-full bg-gray-950 border-r border-gray-800 py-3 shrink-0 overflow-hidden"
    >
      {/* App launcher trigger */}
      <div className={`flex items-center gap-3 mb-1 ${expanded ? 'px-3' : 'px-2 justify-center'}`}>
        <button
          onClick={onLauncherToggle}
          className={`flex items-center justify-center w-10 h-10 rounded-xl transition-all shrink-0 ${
            launcherOpen
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
              : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
          }`}
        >
          {launcherOpen ? <LayoutGrid size={20} /> : <AppIcon size={20} />}
        </button>
        {expanded && (
          <span className="text-xs font-bold text-white truncate font-montserrat">
            Aplicaciones
          </span>
        )}
      </div>

      <div className="mx-3 h-px bg-gray-800 my-1.5" />

      {/* Nav items */}
      <nav className={`flex-1 flex flex-col gap-0.5 overflow-y-auto py-1 ${expanded ? 'px-2' : 'items-center px-2'}`}>
        {navItems.map(renderItem)}
      </nav>

      {/* User section */}
      <div className="mt-auto pt-2">
        <div className="mx-3 h-px bg-gray-800 mb-2" />

        <div className={`relative ${expanded ? 'px-2' : 'flex justify-center'}`}>
          <button
            onClick={() => setUserMenuOpen((o) => !o)}
            className={`flex items-center gap-3 rounded-xl transition-colors ${
              expanded
                ? 'w-full px-3 py-2 hover:bg-white/5'
                : 'w-10 h-10 justify-center bg-gray-800 hover:bg-gray-700'
            }`}
          >
            <div className="w-8 h-8 rounded-lg bg-green-600 flex items-center justify-center shrink-0">
              {user ? (
                <span className="text-[10px] font-bold text-white select-none">
                  {user.name.charAt(0)}
                  {user.lastName.charAt(0)}
                </span>
              ) : (
                <span className="w-4 h-4 rounded-full bg-green-400" />
              )}
            </div>
            {expanded && user && (
              <div className="flex-1 min-w-0 text-left">
                <p className="text-xs font-medium text-gray-200 truncate">
                  {user.name} {user.lastName}
                </p>
                <p className="text-[10px] text-gray-500 truncate">{user.role}</p>
              </div>
            )}
          </button>

          <AnimatePresence>
            {userMenuOpen && expanded && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.12 }}
                className="absolute bottom-full left-2 right-2 mb-1 bg-gray-900 border border-gray-700 rounded-xl p-1.5 shadow-xl z-50"
              >
                {user && (
                  <div className="px-3 py-2 mb-1">
                    <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
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
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default IconRail;
