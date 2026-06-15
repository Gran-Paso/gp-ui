/** Permission keys removed from assignable matrix (owner-only via GP Control). */
export const OWNER_ONLY_PERMISSION_KEYS = [
  'view_roles',
  'manage_roles',
  'view_users',
  'manage_users',
] as const;

export type PermissionSectionId =
  | 'hr'
  | 'expenses'
  | 'inventory'
  | 'analytics'
  | 'factory'
  | 'services'
  | 'sales'
  | 'sessions'
  | 'control'
  | 'assets'
  | 'providers';

export interface PermissionSectionDef {
  id: PermissionSectionId;
  appKey: string;
  label: string;
  iconColor: string;
  headerBg: string;
  badgeClass: string;
  keys: readonly string[];
}

export const DEFAULT_PERMISSIONS: Record<string, boolean> = {
  view_employees: false,
  manage_employees: false,
  view_payroll: false,
  manage_payroll: false,
  view_leaves: false,
  manage_leaves: false,
  approve_leaves: false,
  view_departments: false,
  manage_departments: false,
  view_positions: false,
  manage_positions: false,
  view_expenses: false,
  manage_expenses: false,
  view_gastos: false,
  manage_gastos: false,
  view_costos: false,
  manage_costos: false,
  view_inversiones: false,
  manage_inversiones: false,
  view_recurrentes: false,
  manage_recurrentes: false,
  pay_recurrentes: false,
  view_presupuestos: false,
  manage_presupuestos: false,
  view_inventory: false,
  manage_inventory: false,
  view_products: false,
  manage_products: false,
  view_providers: false,
  manage_providers: false,
  view_provider_transactions: false,
  view_analytics: false,
  view_analytics_financial: false,
  view_analytics_advanced: false,
  export_analytics: false,
  view_factory: false,
  manage_factory: false,
  view_processes: false,
  manage_processes: false,
  complete_process: false,
  view_supplies: false,
  manage_supplies: false,
  view_components: false,
  manage_components: false,
  view_factory_products: false,
  manage_factory_products: false,
  view_manufacture: false,
  view_factory_providers: false,
  manage_factory_providers: false,
  view_factory_analytics: false,
  view_sales: false,
  manage_sales: false,
  use_quick_sale: false,
  view_services: false,
  manage_services: false,
  view_sessions: false,
  manage_sessions: false,
  view_session_expenses: false,
  manage_session_expenses: false,
  'binnacle.view_own': false,
  'binnacle.view_all': false,
  'binnacle.manage_projects': false,
  'control.view_boards': false,
  'control.manage_boards': false,
  'assets.view': false,
  'assets.manage': false,
};

export const PERM_LABELS: Record<string, string> = {
  view_employees: 'Ver empleados',
  manage_employees: 'Gestionar empleados',
  view_payroll: 'Ver liquidaciones',
  manage_payroll: 'Gestionar liquidaciones',
  view_leaves: 'Ver permisos',
  manage_leaves: 'Gestionar permisos',
  approve_leaves: 'Aprobar permisos',
  view_departments: 'Ver departamentos',
  manage_departments: 'Gestionar departamentos',
  view_positions: 'Ver cargos',
  manage_positions: 'Gestionar cargos',
  view_expenses: 'Ver egresos (panel general)',
  manage_expenses: 'Gestionar egresos (general)',
  view_gastos: 'Ver gastos operacionales',
  manage_gastos: 'Gestionar gastos operacionales',
  view_costos: 'Ver costos de producción',
  manage_costos: 'Gestionar costos de producción',
  view_inversiones: 'Ver inversiones',
  manage_inversiones: 'Gestionar inversiones',
  view_recurrentes: 'Ver gastos recurrentes',
  manage_recurrentes: 'Gestionar gastos recurrentes',
  pay_recurrentes: 'Pagar gastos recurrentes',
  view_presupuestos: 'Ver presupuestos',
  manage_presupuestos: 'Gestionar presupuestos',
  view_inventory: 'Ver inventario',
  manage_inventory: 'Gestionar inventario',
  view_products: 'Ver productos',
  manage_products: 'Gestionar productos',
  view_providers: 'Ver proveedores',
  manage_providers: 'Gestionar proveedores',
  view_provider_transactions: 'Ver transacciones de proveedores',
  view_analytics: 'Ver analytics',
  view_analytics_financial: 'Ver datos financieros',
  view_analytics_advanced: 'Ver métricas avanzadas',
  export_analytics: 'Exportar reportes',
  view_factory: 'Ver producción (general)',
  manage_factory: 'Gestionar producción (general)',
  view_processes: 'Ver procesos',
  manage_processes: 'Gestionar procesos',
  complete_process: 'Completar procesos',
  view_supplies: 'Ver insumos',
  manage_supplies: 'Gestionar insumos',
  view_components: 'Ver componentes',
  manage_components: 'Gestionar componentes',
  view_factory_products: 'Ver productos (producción)',
  manage_factory_products: 'Gestionar productos (producción)',
  view_manufacture: 'Ver manufactura',
  view_factory_providers: 'Ver proveedores (producción)',
  manage_factory_providers: 'Gestionar proveedores (producción)',
  view_factory_analytics: 'Ver analytics (producción)',
  view_sales: 'Ver ventas (GP Sales)',
  manage_sales: 'Gestionar ventas (GP Sales)',
  use_quick_sale: 'Usar venta rápida (GP Sales)',
  view_services: 'Ver servicios / planes / clientes',
  manage_services: 'Gestionar servicios / planes / clientes',
  view_sessions: 'Ver agenda y sesiones',
  manage_sessions: 'Gestionar sesiones',
  view_session_expenses: 'Ver gastos de sesión',
  manage_session_expenses: 'Aprobar/pagar gastos de sesión',
  'binnacle.view_own': 'Ver bitácora propia',
  'binnacle.view_all': 'Ver todas las bitácoras',
  'binnacle.manage_projects': 'Gestionar proyectos de bitácora',
  'control.view_boards': 'Ver tableros GP Control',
  'control.manage_boards': 'Gestionar tableros GP Control',
  'assets.view': 'Ver activos fijos',
  'assets.manage': 'Crear y gestionar activos fijos',
};

/** All permission sections with app_key mapping for business_app_access filtering. */
export const ALL_PERMISSION_SECTIONS: PermissionSectionDef[] = [
  {
    id: 'hr',
    appKey: 'gp-hr',
    label: 'Recursos Humanos',
    iconColor: 'text-blue-600',
    headerBg: 'bg-blue-50',
    badgeClass: 'bg-blue-50 text-blue-700',
    keys: [
      'view_employees',
      'manage_employees',
      'view_payroll',
      'manage_payroll',
      'view_leaves',
      'manage_leaves',
      'approve_leaves',
      'view_departments',
      'manage_departments',
      'view_positions',
      'manage_positions',
    ],
  },
  {
    id: 'expenses',
    appKey: 'gp-expenses',
    label: 'Gastos (Outflow)',
    iconColor: 'text-rose-600',
    headerBg: 'bg-rose-50',
    badgeClass: 'bg-rose-50 text-rose-700',
    keys: [
      'view_expenses',
      'manage_expenses',
      'view_gastos',
      'manage_gastos',
      'view_costos',
      'manage_costos',
      'view_inversiones',
      'manage_inversiones',
      'view_recurrentes',
      'manage_recurrentes',
      'pay_recurrentes',
      'view_presupuestos',
      'manage_presupuestos',
    ],
  },
  {
    id: 'inventory',
    appKey: 'gp-inventory',
    label: 'Inventario',
    iconColor: 'text-amber-600',
    headerBg: 'bg-amber-50',
    badgeClass: 'bg-amber-50 text-amber-700',
    keys: [
      'view_inventory',
      'manage_inventory',
      'view_products',
      'manage_products',
    ],
  },
  {
    id: 'analytics',
    appKey: 'gp-inventory',
    label: 'Analytics (Inventario)',
    iconColor: 'text-indigo-600',
    headerBg: 'bg-indigo-50',
    badgeClass: 'bg-indigo-50 text-indigo-700',
    keys: [
      'view_analytics',
      'view_analytics_financial',
      'view_analytics_advanced',
      'export_analytics',
    ],
  },
  {
    id: 'factory',
    appKey: 'gp-factory',
    label: 'Producción',
    iconColor: 'text-purple-600',
    headerBg: 'bg-purple-50',
    badgeClass: 'bg-purple-50 text-purple-700',
    keys: [
      'view_factory',
      'manage_factory',
      'view_processes',
      'manage_processes',
      'complete_process',
      'view_supplies',
      'manage_supplies',
      'view_components',
      'manage_components',
      'view_factory_products',
      'manage_factory_products',
      'view_manufacture',
      'view_factory_providers',
      'manage_factory_providers',
      'view_factory_analytics',
    ],
  },
  {
    id: 'services',
    appKey: 'gp-services',
    label: 'Servicios',
    iconColor: 'text-emerald-600',
    headerBg: 'bg-emerald-50',
    badgeClass: 'bg-emerald-50 text-emerald-700',
    keys: ['view_services', 'manage_services'],
  },
  {
    id: 'sales',
    appKey: 'gp-sales',
    label: 'GP Sales',
    iconColor: 'text-cyan-600',
    headerBg: 'bg-cyan-50',
    badgeClass: 'bg-cyan-50 text-cyan-700',
    keys: ['view_sales', 'manage_sales', 'use_quick_sale'],
  },
  {
    id: 'sessions',
    appKey: 'gp-sessions',
    label: 'GP Sessions',
    iconColor: 'text-indigo-600',
    headerBg: 'bg-indigo-50',
    badgeClass: 'bg-indigo-50 text-indigo-700',
    keys: [
      'view_sessions',
      'manage_sessions',
      'view_session_expenses',
      'manage_session_expenses',
    ],
  },
  {
    id: 'control',
    appKey: 'gp-binnacle',
    label: 'GP Control',
    iconColor: 'text-violet-600',
    headerBg: 'bg-violet-50',
    badgeClass: 'bg-violet-50 text-violet-700',
    keys: [
      'binnacle.view_own',
      'binnacle.view_all',
      'binnacle.manage_projects',
      'control.view_boards',
      'control.manage_boards',
    ],
  },
  {
    id: 'assets',
    appKey: 'gp-assets',
    label: 'GP Assets',
    iconColor: 'text-amber-600',
    headerBg: 'bg-amber-50',
    badgeClass: 'bg-amber-50 text-amber-700',
    keys: ['assets.view', 'assets.manage'],
  },
  {
    id: 'providers',
    appKey: 'gp-providers',
    label: 'GP Providers',
    iconColor: 'text-rose-600',
    headerBg: 'bg-rose-50',
    badgeClass: 'bg-rose-50 text-rose-700',
    keys: ['view_providers', 'manage_providers', 'view_provider_transactions'],
  },
];

export const APP_KEY_DISPLAY_NAMES: Record<string, string> = {
  'gp-hr': 'Recursos Humanos',
  'gp-expenses': 'Egresos',
  'gp-inventory': 'Inventario',
  'gp-factory': 'Producción',
  'gp-services': 'Servicios',
  'gp-sales': 'Ventas',
  'gp-sessions': 'Sesiones',
  'gp-binnacle': 'GP Control',
  'gp-assets': 'Activos',
  'gp-providers': 'Proveedores',
  'gp-crm': 'CRM',
  'gp-shop': 'Tienda',
};

export function getPermissionSectionsForBusiness(businessApps: string[]): PermissionSectionDef[] {
  const enabled = new Set(businessApps);
  return ALL_PERMISSION_SECTIONS.filter((section) => enabled.has(section.appKey));
}

export function getAllowedPermissionKeysForBusiness(businessApps: string[]): Set<string> {
  const keys = new Set<string>();
  for (const section of getPermissionSectionsForBusiness(businessApps)) {
    for (const key of section.keys) {
      keys.add(key);
    }
  }
  return keys;
}

export function buildDefaultPermissionsForBusiness(businessApps: string[]): Record<string, boolean> {
  const allowed = getAllowedPermissionKeysForBusiness(businessApps);
  const result: Record<string, boolean> = { ...DEFAULT_PERMISSIONS };
  for (const key of Object.keys(result)) {
    if (!allowed.has(key)) {
      result[key] = false;
    }
  }
  for (const key of OWNER_ONLY_PERMISSION_KEYS) {
    result[key] = false;
  }
  return result;
}

export function stripPermissionsForBusiness(
  permissions: Record<string, boolean>,
  businessApps: string[],
): Record<string, boolean> {
  const allowed = getAllowedPermissionKeysForBusiness(businessApps);
  const result: Record<string, boolean> = {};
  for (const [key, value] of Object.entries(permissions)) {
    if (OWNER_ONLY_PERMISSION_KEYS.includes(key as (typeof OWNER_ONLY_PERMISSION_KEYS)[number])) {
      continue;
    }
    if (allowed.has(key)) {
      result[key] = value;
    }
  }
  return result;
}

export function findDisallowedPermissionKeys(
  permissions: Record<string, boolean>,
  businessApps: string[],
): string[] {
  const allowed = getAllowedPermissionKeysForBusiness(businessApps);
  return Object.keys(permissions).filter(
    (key) =>
      permissions[key] === true &&
      !allowed.has(key) &&
      !OWNER_ONLY_PERMISSION_KEYS.includes(key as (typeof OWNER_ONLY_PERMISSION_KEYS)[number]),
  );
}
