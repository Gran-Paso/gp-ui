import type React from 'react';

export interface NavLeaf {
  kind: 'leaf';
  to: string;
  label: string;
  icon: React.ElementType;
  perm: string | null;
  /** External URL — opens via window.location.href instead of router NavLink */
  href?: string;
}

export interface NavGroup {
  kind: 'group';
  id: string;
  label: string;
  icon: React.ElementType;
  perm: string | null;
  children: NavLeaf[];
}

export interface NavSection {
  kind: 'section';
  label: string;
  items: (NavLeaf | NavGroup)[];
}

export type NavItem = NavLeaf | NavGroup | NavSection;

export interface User {
  name: string;
  lastName: string;
  email: string;
  role: string;
}

export interface Business {
  businessId: number;
  businessName: string;
}

export interface SidebarProps {
  appName: string;
  appIcon: React.ElementType;
  navItems: NavItem[];
  user: User | null;
  availableBusinesses: Business[];
  selectedBusinessId: number | null;
  onSelectBusiness: (id: number) => void;
  onChangeApp: () => void;
  onLogout: () => void;
  /** Return true if the user has the given permission. Items with perm=null are always shown. */
  permissionCheck?: (perm: string) => boolean;
}

// Helper factories for cleaner nav definitions in consumer apps
export const leaf = (
  to: string,
  label: string,
  icon: React.ElementType,
  perm: string | null,
  href?: string,
): NavLeaf => ({ kind: 'leaf', to, label, icon, perm, href });

export const group = (
  id: string,
  label: string,
  icon: React.ElementType,
  perm: string | null,
  children: NavLeaf[],
): NavGroup => ({ kind: 'group', id, label, icon, perm, children });

export const section = (
  label: string,
  items: (NavLeaf | NavGroup)[],
): NavSection => ({ kind: 'section', label, items });
