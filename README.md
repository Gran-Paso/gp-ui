# @gp/ui

Shared component library and design system for Gran Paso ERP.

## Install

### 1. Configure npm to use GitHub Packages for the `@gp` scope

Create or update `.npmrc` in your project root (or `~/.npmrc` for global):

```
@gp:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GPR_TOKEN}
```

Set `GPR_TOKEN` as an environment variable with a GitHub personal access token that has `read:packages` scope.

### 2. Install the package

```bash
npm install @gp/ui
```

### 3. Configure Tailwind

Update your app's `tailwind.config.js`:

```js
import gpPreset from '@gp/ui/theme/tailwind-preset';

export default {
  presets: [gpPreset],
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './node_modules/@gp/ui/dist/**/*.{js,mjs}',
  ],
};
```

### 4. Import the CSS

In your `main.tsx` or entry file:

```tsx
import '@gp/ui/style.css';
```

## Usage

### Layout + Sidebar

```tsx
import { Layout, Sidebar, leaf, section, group } from '@gp/ui';
import type { NavItem } from '@gp/ui';
import { LayoutDashboard, Users, Settings } from 'lucide-react';
import { Outlet } from 'react-router-dom';

const NAV_ITEMS: NavItem[] = [
  leaf('/dashboard', 'Inicio', LayoutDashboard, null),
  section('Gestión', [
    leaf('/users', 'Usuarios', Users, 'view_users'),
    leaf('/settings', 'Configuración', Settings, 'manage_settings'),
  ]),
];

function AppLayout() {
  // These come from your auth store
  const { user, availableBusinesses, selectedBusinessId, setSelectedBusiness, logout } = useAuthStore();

  return (
    <Layout
      sidebar={
        <Sidebar
          appName="GP Factory"
          appIcon={LayoutDashboard}
          navItems={NAV_ITEMS}
          user={user}
          availableBusinesses={availableBusinesses}
          selectedBusinessId={selectedBusinessId}
          onSelectBusiness={setSelectedBusiness}
          onChangeApp={() => { window.location.href = 'https://auth.granpasochile.cl'; }}
          onLogout={logout}
          permissionCheck={(perm) => userHasPermission(perm)}
        />
      }
    >
      <Outlet />
    </Layout>
  );
}
```

### Router setup

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

### Components

```tsx
import { Button, Card, PageHeader, EmptyState, LoadingSkeleton, Table } from '@gp/ui';
import type { Column } from '@gp/ui';
import { Inbox } from 'lucide-react';

// Button variants
<Button variant="primary">Guardar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="danger" loading>Eliminando...</Button>
<Button variant="ghost" size="sm">Ver más</Button>

// Card
<Card>
  <h2>Contenido aquí</h2>
</Card>
<Card padding="lg" className="col-span-2">
  <h2>Card grande</h2>
</Card>

// Page header with actions
<PageHeader
  title="Usuarios"
  description="Gestiona los usuarios del sistema"
  actions={<Button>Nuevo usuario</Button>}
/>

// Table
const columns: Column<User>[] = [
  { key: 'name', header: 'Nombre' },
  { key: 'email', header: 'Email' },
  { key: 'role', header: 'Rol', render: (row) => <span className="capitalize">{row.role}</span> },
];
<Table columns={columns} data={users} keyExtractor={(u) => u.id} onRowClick={handleClick} />

// Empty state
<EmptyState
  icon={Inbox}
  title="Sin resultados"
  description="No se encontraron registros con los filtros aplicados"
  action={<Button variant="secondary">Limpiar filtros</Button>}
/>

// Loading skeleton
<LoadingSkeleton variant="table" rows={8} />
<LoadingSkeleton variant="card" rows={3} />
<LoadingSkeleton variant="text" rows={4} />
```

## Development

```bash
npm install
npm run dev      # dev server
npm run build    # library build to dist/
```

## Publishing

Push a version tag to trigger the GitHub Actions workflow:

```bash
npm version patch   # or minor / major
git push --follow-tags
```

The workflow builds and publishes to GitHub Packages automatically.

## Components

| Component | Description |
|-----------|-------------|
| `Layout` | App shell: sidebar slot + scrollable main area |
| `Sidebar` | Dark collapsible sidebar with nav, business picker, user footer |
| `Button` | 4 variants (primary/secondary/danger/ghost), 3 sizes, loading state |
| `Card` | White rounded container with configurable padding |
| `Table` | Typed table with column definitions, row click, empty state |
| `PageHeader` | Title + description + actions row |
| `EmptyState` | Centered icon + message + optional CTA |
| `LoadingSkeleton` | Skeleton loaders for cards, tables, and text |

## Nav helpers

| Helper | Signature |
|--------|-----------|
| `leaf()` | `(to, label, icon, perm, href?) => NavLeaf` |
| `group()` | `(id, label, icon, perm, children) => NavGroup` |
| `section()` | `(label, items) => NavSection` |
