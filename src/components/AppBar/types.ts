import type React from 'react';
import type { NavItem, User, Business } from '../Sidebar/types';

export interface AppDefinition {
  id: string;
  name: string;
  shortName: string;
  icon: React.ElementType;
  color: string;
  iconColor: string;
  url: string;
  disabled?: boolean;
  disabledReason?: string;
}

export interface AppBarProps {
  appName: string;
  appIcon: React.ElementType;
  appId: string;
  navItems: NavItem[];
  user: User | null;
  availableBusinesses: Business[];
  selectedBusinessId: number | null;
  onSelectBusiness: (id: number) => void;
  apps: AppDefinition[];
  onAppSelect: (app: AppDefinition) => void;
  onLogout: () => void;
  permissionCheck?: (perm: string) => boolean;
  children: React.ReactNode;
}

export type { NavItem, NavLeaf, NavGroup, NavSection, User, Business } from '../Sidebar/types';
