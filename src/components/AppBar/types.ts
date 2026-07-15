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

export interface TopBarProps {
  appName: string;
  user: User | null;
  availableBusinesses: Business[];
  selectedBusinessId: number | null;
  onSelectBusiness: (id: number) => void;
  /** Optional subscription badge rendered near the business selector. */
  subscriptionBadge?: React.ReactNode;
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
  /** Optional subscription badge forwarded to TopBar. */
  subscriptionBadge?: React.ReactNode;
  /** Lista de app IDs habilitadas para el negocio actual (desde gp-admin). */
  businessApps?: string[];
  /** Rol de sistema del usuario (ej. 'super_admin'). Usado para filtrar GP Admin. */
  systemRole?: string | null;
  /** Click en app bloqueada del launcher (upsell / sin permiso). */
  onLockedAppClick?: (app: AppDefinition) => void;
}

export type { NavItem, NavLeaf, NavGroup, NavSection, User, Business } from '../Sidebar/types';
