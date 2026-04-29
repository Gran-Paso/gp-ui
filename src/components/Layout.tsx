import React from 'react';

interface LayoutProps {
  sidebar: React.ReactNode;
  /** Top navbar — when provided it forms an L-shape with the sidebar. */
  navbar?: React.ReactNode;
  children: React.ReactNode;
}

/**
 * Root shell layout.
 *
 * With `navbar` provided:
 *   [sidebar] | [navbar  ]
 *             | [content ]
 *
 * Sidebar + navbar share `bg-white` and `border-gray-100`, forming a seamless L.
 */
const Layout: React.FC<LayoutProps> = ({ sidebar, navbar, children }) => (
  <div className="flex h-screen bg-gray-50 overflow-hidden">
    {sidebar}
    <div className="flex-1 flex flex-col min-w-0">
      {navbar}
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  </div>
);

export default Layout;
