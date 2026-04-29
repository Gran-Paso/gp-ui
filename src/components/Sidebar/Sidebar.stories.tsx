import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import {
  LayoutDashboard,
  Wrench,
  ShoppingCart,
  Package,
  FolderOpen,
  Users,
} from 'lucide-react';
import Sidebar from './Sidebar';
import { leaf, group, section } from './types';

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
    navItems: sampleNav,
    user: sampleUser,
    availableBusinesses: sampleBusinesses,
    selectedBusinessId: 1,
    onSelectBusiness: (id) => console.log('selectBusiness', id),
    onChangeApp: () => console.log('changeApp'),
    onLogout: () => console.log('logout'),
    permissionCheck: () => true,
  },
};

export const SingleBusiness: Story = {
  args: {
    appName: 'GP Services',
    appIcon: Wrench,
    navItems: sampleNav,
    user: sampleUser,
    availableBusinesses: [sampleBusinesses[0]],
    selectedBusinessId: 1,
    onSelectBusiness: () => {},
    onChangeApp: () => {},
    onLogout: () => {},
  },
};

export const RestrictedPermissions: Story = {
  args: {
    appName: 'GP Services',
    appIcon: Wrench,
    navItems: sampleNav,
    user: sampleUser,
    availableBusinesses: sampleBusinesses,
    selectedBusinessId: 1,
    onSelectBusiness: () => {},
    onChangeApp: () => {},
    onLogout: () => {},
    permissionCheck: (perm) => perm === 'view_sales',
  },
};
