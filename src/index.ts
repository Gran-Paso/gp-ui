// Theme
import './theme/index.css';

// Components
export { default as Layout } from './components/Layout';
export { default as Sidebar } from './components/Sidebar/Sidebar';
export { default as Navbar } from './components/Navbar';
export { default as GpLogo } from './assets/GpLogo';
export { default as Button } from './components/Button';
export { default as Card } from './components/Card';
export { default as Table } from './components/Table';
export { default as PageHeader } from './components/PageHeader';
export { default as EmptyState } from './components/EmptyState';
export { default as LoadingSkeleton } from './components/LoadingSkeleton';

// AppBar (hybrid layout)
export { default as AppBar } from './components/AppBar/AppBar';
export { default as IconRail } from './components/AppBar/IconRail';
export { default as TopBar } from './components/AppBar/TopBar';
export { default as AppLauncherFlyout } from './components/AppBar/AppLauncherFlyout';

// Sidebar nav helpers
export { leaf, group, section } from './components/Sidebar/types';

// Sidebar accent color utility
export { getAccentClasses } from './components/Sidebar/accentColors';

// Types — Sidebar + Navbar
export type {
  AccentColor,
  NavLeaf,
  NavGroup,
  NavSection,
  NavItem,
  User,
  Business,
  SidebarProps,
  NavbarProps,
} from './components/Sidebar/types';

// Types — Accent
export type { AccentClasses } from './components/Sidebar/accentColors';

// Types — AppBar
export type { AppDefinition, AppBarProps } from './components/AppBar/types';

export type { ButtonProps } from './components/Button';
export type { CardProps } from './components/Card';
export type { Column, TableProps } from './components/Table';
export type { PageHeaderProps } from './components/PageHeader';
export type { EmptyStateProps } from './components/EmptyState';
export type { LoadingSkeletonProps } from './components/LoadingSkeleton';
