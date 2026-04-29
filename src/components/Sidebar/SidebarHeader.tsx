import React from 'react';
import type { AccentClasses } from './accentColors';

interface SidebarHeaderProps {
  appName: string;
  appIcon: React.ElementType;
  collapsed: boolean;
  onToggle: () => void;
  accent: AccentClasses;
}

/**
 * @deprecated Use the hover-expand Sidebar instead. This component is kept
 * for backward compatibility but is no longer rendered by the default Sidebar.
 */
const SidebarHeader: React.FC<SidebarHeaderProps> = () => null;

export default SidebarHeader;
