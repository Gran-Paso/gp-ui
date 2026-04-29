import type { Meta, StoryObj } from '@storybook/react-vite';
import { MemoryRouter } from 'react-router-dom';
import {
  LayoutDashboard,
  Wrench,
  ShoppingCart,
  Package,
  FolderOpen,
  CalendarDays,
  Users,
  DollarSign,
  Factory,
  TrendingDown,
  CalendarRange,
  BookOpen,
  Landmark,
  Truck,
  Target,
  Store,
  Shield,
} from 'lucide-react';
import AppBar from './AppBar';
import { leaf, group, section } from '../Sidebar/types';
import type { AppDefinition } from './types';

const sampleNav = [
  leaf('/dashboard', 'Inicio', LayoutDashboard, null),
  leaf('/sales', 'Ventas', ShoppingCart, 'view_sales'),
  leaf('/agenda', 'Agenda', CalendarDays, 'view_sales'),
  leaf('/expenses', 'Gastos', DollarSign, 'view_sales'),
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

const sampleApps: AppDefinition[] = [
  { id: 'gp-inventory', name: 'GP Inventory', shortName: 'Inventory', icon: Package, color: 'bg-green-100', iconColor: 'text-green-600', url: '#' },
  { id: 'gp-factory', name: 'GP Factory', shortName: 'Factory', icon: Factory, color: 'bg-blue-100', iconColor: 'text-blue-600', url: '#' },
  { id: 'gp-expenses', name: 'Outflow', shortName: 'Outflow', icon: TrendingDown, color: 'bg-orange-100', iconColor: 'text-orange-600', url: '#' },
  { id: 'gp-services', name: 'GP Services', shortName: 'Services', icon: Wrench, color: 'bg-teal-100', iconColor: 'text-teal-600', url: '#' },
  { id: 'gp-sessions', name: 'GP Sessions', shortName: 'Sessions', icon: CalendarRange, color: 'bg-indigo-100', iconColor: 'text-indigo-600', url: '#' },
  { id: 'gp-hr', name: 'GP RRHH', shortName: 'RRHH', icon: Users, color: 'bg-sky-100', iconColor: 'text-sky-600', url: '#' },
  { id: 'gp-binnacle', name: 'GP Control', shortName: 'Control', icon: BookOpen, color: 'bg-violet-100', iconColor: 'text-violet-600', url: '#' },
  { id: 'gp-assets', name: 'GP Assets', shortName: 'Assets', icon: Landmark, color: 'bg-amber-100', iconColor: 'text-amber-600', url: '#' },
  { id: 'gp-providers', name: 'GP Providers', shortName: 'Providers', icon: Truck, color: 'bg-rose-100', iconColor: 'text-rose-600', url: '#' },
  { id: 'gp-sales', name: 'GP Sales', shortName: 'Sales', icon: ShoppingCart, color: 'bg-cyan-100', iconColor: 'text-cyan-600', url: '#' },
  { id: 'gp-crm', name: 'GP CRM', shortName: 'CRM', icon: Target, color: 'bg-pink-100', iconColor: 'text-pink-600', url: '#' },
  { id: 'gp-shop', name: 'GP Shop', shortName: 'Shop', icon: Store, color: 'bg-teal-100', iconColor: 'text-teal-600', url: '#' },
  { id: 'gp-admin', name: 'GP Admin', shortName: 'Admin', icon: Shield, color: 'bg-purple-100', iconColor: 'text-purple-600', url: '#' },
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

const meta: Meta<typeof AppBar> = {
  title: 'Layout/AppBar',
  component: AppBar,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/dashboard']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Default: Story = {
  args: {
    appName: 'GP Services',
    appIcon: Wrench,
    appId: 'gp-services',
    navItems: sampleNav,
    user: sampleUser,
    availableBusinesses: sampleBusinesses,
    selectedBusinessId: 1,
    onSelectBusiness: (id) => console.log('selectBusiness', id),
    apps: sampleApps,
    onAppSelect: (app) => console.log('appSelect', app.id),
    onLogout: () => console.log('logout'),
    permissionCheck: () => true,
    children: (
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Dashboard</h2>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="h-4 w-24 bg-gray-100 rounded mb-2" />
              <div className="h-8 w-16 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export const WithDisabledApps: Story = {
  args: {
    ...Default.args,
    apps: sampleApps.map((app) =>
      app.id === 'gp-factory' || app.id === 'gp-binnacle'
        ? { ...app, disabled: true, disabledReason: 'no_business_app' }
        : app.id === 'gp-admin'
          ? { ...app, disabled: true, disabledReason: 'no_permission' }
          : app,
    ),
  },
};

export const SingleBusiness: Story = {
  args: {
    ...Default.args,
    availableBusinesses: [sampleBusinesses[0]],
    selectedBusinessId: 1,
  },
};
