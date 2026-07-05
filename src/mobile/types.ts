import type React from 'react';

export interface MobileUser {
  name: string;
  lastName?: string;
  email?: string;
}

export interface MobileTab {
  to: string;
  label: string;
  icon: React.ElementType;
  /** exact = pathname must match; prefix = pathname starts with to (default exact) */
  match?: 'exact' | 'prefix';
}

export interface MobileDrawerItem {
  to: string;
  label: string;
  icon: React.ElementType;
  href?: string;
}

export interface MobileDrawerSection {
  label: string;
  items: MobileDrawerItem[];
}

export interface MobileShellProps {
  appName?: string;
  appSubtitle?: string;
  tabs: MobileTab[];
  drawerSections: MobileDrawerSection[];
  user: MobileUser | null;
  onLogout: () => void;
  /** Show "Ir a mi negocio" bridge when user has ERP access */
  onSwitchToErp?: () => void;
  showErpBridge?: boolean;
  /** Path → badge count (e.g. pending review) */
  badges?: Record<string, number>;
  children: React.ReactNode;
  /** Hide bottom tab bar (e.g. login flows) */
  hideTabBar?: boolean;
  /** Hide compact header on mobile */
  hideHeader?: boolean;
}

export interface MobileTabBarProps {
  tabs: MobileTab[];
  badges?: Record<string, number>;
  onMoreClick: () => void;
}

export interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
  sections: MobileDrawerSection[];
  user: MobileUser | null;
  onLogout: () => void;
  onSwitchToErp?: () => void;
  showErpBridge?: boolean;
  appName?: string;
  appSubtitle?: string;
}

export interface MobileHeaderProps {
  appName?: string;
  appSubtitle?: string;
  user: MobileUser | null;
  onAvatarClick?: () => void;
}

export interface ChartCanvasProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  /** Sticky footer slot — period chips, legend, etc. */
  footer?: React.ReactNode;
}
