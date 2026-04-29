import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import {
  LayoutDashboard,
  Wrench,
  ShoppingCart,
  Package,
  FolderOpen,
  Users,
  Factory,
  CalendarRange,
} from 'lucide-react';
import Sidebar from './Sidebar';
import { leaf, group, section } from './types';
import type { AppDefinition } from './types';

const sampleNav = [
  leaf('/dashboard', 'Inicio', LayoutDashboard, null),
  leaf('/sales', 'Ventas', ShoppingCart, 'view_sales'),
  leaf('/clients', 'Clientes', Users, 'view_clients'),
  section('Catálogo', [
    group('catalog', 'Catálogo', Wrench, 'view_services', [
      leaf('/services', 'Servicios', Wrench, 'view_services'),
      leaf('/categories', 'Categorías', FolderOpen, 'view_services'),
    ]),
  ]),
  section('Recursos', [
    leaf('/supplies', 'Insumos', Package, 'view_supplies'),
  ]),
];

const sampleUser = {
  name: 'Pablo',
  lastName: 'Prieto',
  email: 'pablo@granpaso.cl',
  role: 'admin',
};

const sampleBusinesses = [
  { businessId: 1, businessName: 'Gran Paso Santiago' },
  { businessId: 2, businessName: 'Gran Paso Viña' },
];

const sampleApps: AppDefinition[] = [
  { id: 'gp-services', name: 'GP Services', shortName: 'Services', icon: Wrench, color: 'bg-teal-100', iconColor: 'text-teal-600', url: '#' },
  { id: 'gp-inventory', name: 'GP Inventory', shortName: 'Inventory', icon: Package, color: 'bg-emerald-100', iconColor: 'text-emerald-600', url: '#' },
  { id: 'gp-factory', name: 'GP Factory', shortName: 'Factory', icon: Factory, color: 'bg-slate-100', iconColor: 'text-slate-600', url: '#' },
  { id: 'gp-sessions', name: 'GP Sessions', shortName: 'Sessions', icon: CalendarRange, color: 'bg-indigo-100', iconColor: 'text-indigo-600', url: '#' },
];

const meta: Meta<typeof Sidebar> = {
  title: 'Layout/Sidebar',
  component: Sidebar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <div className="h-screen flex">
          <Story />
          <div className="flex-1 bg-gray-100 p-8">
            <p className="text-gray-400 text-sm">Page content area</p>
          </div>
        </div>
      </MemoryRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    appName: 'GP Services',
    appIcon: Wrench,
    appId: 'gp-services',
    accentColor: 'teal',
    navItems: sampleNav,
    user: sampleUser,
    availableBusinesses: sampleBusinesses,
    selectedBusinessId: 1,
    onSelectBusiness: (id) => console.log('selectBusiness', id),
    onLogout: () => console.log('logout'),
    apps: sampleApps,
    onAppSelect: (app) => console.log('appSelect', app.id),
    permissionCheck: () => true,
  },
};

export const IndigoAccent: Story = {
  args: {
    appName: 'GP Sessions',
    appIcon: CalendarRange,
    appId: 'gp-sessions',
    accentColor: 'indigo',
    navItems: sampleNav,
    user: sampleUser,
    availableBusinesses: [sampleBusinesses[0]],
    selectedBusinessId: 1,
    onSelectBusiness: () => {},
    onLogout: () => {},
    apps: sampleApps,
    onAppSelect: (app) => console.log('appSelect', app.id),
  },
};

export const VioletAccent: Story = {
  args: {
    appName: 'GP Control',
    appIcon: Wrench,
    appId: 'gp-binnacle',
    accentColor: 'violet',
    navItems: sampleNav,
    user: sampleUser,
    availableBusinesses: sampleBusinesses,
    selectedBusinessId: 1,
    onSelectBusiness: () => {},
    onLogout: () => {},
    apps: sampleApps,
    onAppSelect: (app) => console.log('appSelect', app.id),
    permissionCheck: (perm) => perm === 'view_sales',
  },
};
