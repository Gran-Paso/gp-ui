import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { NavItem, NavLeaf, NavGroup, NavSection } from './types';
import type { AccentClasses } from './accentColors';

interface SidebarNavProps {
  items: NavItem[];
  collapsed: boolean;
  hasPerm: (perm: string | null) => boolean;
  accent: AccentClasses;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ items, collapsed, hasPerm, accent }) => {
  const location = useLocation();

  const allGroups = items.flatMap((n) =>
    n.kind === 'section'
      ? n.items.filter((i): i is NavGroup => i.kind === 'group')
      : n.kind === 'group'
        ? [n]
        : [],
  );

  const activeGroupIds = allGroups
    .filter((g) => g.children.some((c) => location.pathname.startsWith(c.to)))
    .map((g) => g.id);

  const [openGroups, setOpenGroups] = useState<string[]>(activeGroupIds);

  const toggleGroup = (id: string) =>
    setOpenGroups((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  const renderLeaf = (item: NavLeaf, indent = false) => {
    if (!hasPerm(item.perm)) return null;

    if (item.href) {
      return (
        <button
          key={item.to}
          onClick={() => { window.location.href = item.href!; }}
          className={`w-full flex items-center gap-2.5 rounded-lg transition-all text-sm font-medium ${
            indent ? 'px-3 py-2 ml-2' : 'px-3 py-2.5'
          } text-gray-400 hover:bg-white/5 hover:text-white border border-transparent`}
        >
          <item.icon size={indent ? 15 : 18} className="shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="whitespace-nowrap overflow-hidden"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      );
    }

    return (
      <NavLink
        key={item.to}
        to={item.to}
        className={({ isActive }) =>
          `flex items-center gap-2.5 rounded-lg transition-all text-sm font-medium ${
            indent ? 'px-3 py-2 ml-2' : 'px-3 py-2.5'
          } ${
            isActive
              ? `${accent.activeBg} text-white border ${accent.activeBorder}`
              : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
          }`
        }
      >
        <item.icon size={indent ? 15 : 18} className="shrink-0" />
        <AnimatePresence>
          {!collapsed && (
            <motion.span
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="whitespace-nowrap overflow-hidden"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>
      </NavLink>
    );
  };

  const renderGroup = (item: NavGroup) => {
    if (!hasPerm(item.perm)) return null;
    const visibleChildren = item.children.filter((c) => hasPerm(c.perm));
    if (visibleChildren.length === 0) return null;

    const isOpen = openGroups.includes(item.id);
    const anyChildActive = visibleChildren.some((c) =>
      location.pathname.startsWith(c.to),
    );

    return (
      <div key={item.id}>
        <button
          onClick={() => !collapsed && toggleGroup(item.id)}
          className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg transition-all text-sm font-medium border ${
            anyChildActive
              ? `${accent.activeBg} text-white ${accent.activeBorder}`
              : 'text-gray-400 hover:bg-white/5 hover:text-white border-transparent'
          }`}
        >
          <item.icon size={18} className="shrink-0" />
          <AnimatePresence>
            {!collapsed && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="flex-1 text-left whitespace-nowrap overflow-hidden"
              >
                {item.label}
              </motion.span>
            )}
          </AnimatePresence>
          {!collapsed && (
            <ChevronDown
              size={13}
              className={`shrink-0 transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
            />
          )}
        </button>

        <AnimatePresence initial={false}>
          {!collapsed && isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="overflow-hidden mt-0.5 space-y-0.5"
            >
              {visibleChildren.map((c) => renderLeaf(c, true))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  const renderSection = (s: NavSection, idx: number) => {
    const rendered = s.items
      .map((item) => (item.kind === 'leaf' ? renderLeaf(item) : renderGroup(item)))
      .filter(Boolean);

    if (rendered.length === 0) return null;

    return (
      <div key={idx} className="space-y-0.5">
        {!collapsed && (
          <div className="flex items-center gap-2 px-3 pt-3 pb-1">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-600">
              {s.label}
            </span>
            <div className="flex-1 h-px bg-gray-700/60" />
          </div>
        )}
        {collapsed && <div className="mx-2 h-px bg-gray-700/60 my-2" />}
        {rendered}
      </div>
    );
  };

  return (
    <nav className="flex-1 px-2 py-2 overflow-y-auto space-y-0.5">
      {items.map((item, idx) => {
        if (item.kind === 'section') return renderSection(item, idx);
        if (item.kind === 'leaf') return renderLeaf(item);
        return renderGroup(item);
      })}
    </nav>
  );
};

export default SidebarNav;
