import React from 'react';

interface LayoutProps {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ sidebar, children }) => (
  <div className="flex h-screen bg-gray-50 overflow-hidden">
    {sidebar}
    <main className="flex-1 overflow-y-auto">{children}</main>
  </div>
);

export default Layout;
