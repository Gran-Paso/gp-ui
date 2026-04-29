import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { NavItem, NavLeaf, NavGroup, NavSection } from './types';
import type { AccentClasses } from './accentColors';

interface SidebarNavProps {
  items: NavItem[];
  expanded: boolean;
  hasPerm: (perm: string | null) => boolean;
  accent: AccentClasses;
}

const LeafItem: React.FC<{
  item: NavLeaf;
  expanded: boolean;
  accent: AccentClasses;
  indent?: boolean;
}> = ({ item, expanded, accent, indent }) => {
  const Icon = item.icon;

  const base = `relative flex items-center gap-3 rounded-xl transition-all ${
    indent ? 'py-1.5' : 'py-2'
  }`;
  const sizing = expanded ? 'px-3 w-full' : 'px-0 w-10 justify-center';

  if (item.href) {
    return (
      <a
        href={item.href}
        className={`${base} ${sizing} text-gray-500 hover:bg-white/10 hover:text-white`}
      >
        <Icon size={indent ? 16 : 18} className="shrink-0" />
        {expanded && (
          <span className="text-sm font-medium truncate">{item.label}</span>
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
            ? `${accent.activeBg} ${accent.activeText}`
            : 'text-gray-500 hover:bg-white/10 hover:text-white'
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <motion.div
              layoutId="sidebar-active"
              className={`absolute -left-3 w-[3px] h-5 rounded-r-full ${accent.iconChip}`}
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

const GroupItem: React.FC<{
  item: NavGroup;
  expanded: boolean;
  hasPerm: (perm: string | null) => boolean;
  accent: AccentClasses;
}> = ({ item, expanded, hasPerm, accent }) => {
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
            ? `${accent.activeBg} ${accent.activeText}`
            : 'text-gray-500 hover:bg-white/10 hover:text-white'
        }`}
      >
        {anyActive && !open && (
          <motion.div
            layoutId="sidebar-active"
            className={`absolute -left-3 w-[3px] h-5 rounded-r-full ${accent.iconChip}`}
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
              <LeafItem key={child.to} item={child} expanded={expanded} accent={accent} indent />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SidebarNav: React.FC<SidebarNavProps> = ({ items, expanded, hasPerm, accent }) => {
  const renderItem = (item: NavItem, idx: number) => {
    if (item.kind === 'section') return renderSection(item, idx);
    if (item.kind === 'group') {
      if (!hasPerm(item.perm)) return null;
      return <GroupItem key={item.id} item={item} expanded={expanded} hasPerm={hasPerm} accent={accent} />;
    }
    if (!hasPerm(item.perm)) return null;
    return <LeafItem key={item.to} item={item} expanded={expanded} accent={accent} />;
  };

  const renderSection = (s: NavSection, idx: number) => {
    const sectionItems = s.items.filter((i) => hasPerm(i.perm));
    if (sectionItems.length === 0) return null;

    return (
      <React.Fragment key={idx}>
        <div className="h-px bg-gray-800 my-2" />
        {expanded && (
          <p className="px-3 mb-1 text-[10px] font-semibold uppercase tracking-widest text-gray-600">
            {s.label}
          </p>
        )}
        {sectionItems.map((item) =>
          item.kind === 'group' ? (
            <GroupItem key={item.id} item={item} expanded={expanded} hasPerm={hasPerm} accent={accent} />
          ) : (
            <LeafItem key={item.to} item={item} expanded={expanded} accent={accent} />
          ),
        )}
      </React.Fragment>
    );
  };

  return (
    <nav className={`flex-1 flex flex-col gap-0.5 overflow-y-auto py-1 ${expanded ? 'px-2' : 'items-center px-2'}`}>
      {items.map(renderItem)}
    </nav>
  );
};

export default SidebarNav;
