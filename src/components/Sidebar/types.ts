import type React from 'react';
import type { AccentColor } from './accentColors';
import type { AppDefinition } from '../AppBar/types';

export type { AccentColor } from './accentColors';
export type { AppDefinition } from '../AppBar/types';

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
  /** URL of logo image — replaces the default GpLogo SVG */
  logoSrc?: string;
  appId?: string;
  accentColor?: AccentColor;
  navItems: NavItem[];
  user: User | null;
  /** @deprecated Move to NavbarProps — business context now lives in Navbar */
  availableBusinesses?: Business[];
  /** @deprecated Move to NavbarProps */
  selectedBusinessId?: number | null;
  /** @deprecated Move to NavbarProps */
  onSelectBusiness?: (id: number) => void;
  onLogout: () => void;
  apps?: AppDefinition[];
  onAppSelect?: (app: AppDefinition) => void;
  /** Return true if the user has the given permission. Items with perm=null are always shown. */
  permissionCheck?: (perm: string) => boolean;
}

export interface NavbarProps {
  appName: string;
  appIcon: React.ElementType;
  accentColor?: AccentColor;
  user: User | null;
  availableBusinesses: Business[];
  selectedBusinessId: number | null;
  onSelectBusiness: (id: number) => void;
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
