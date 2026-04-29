import type { Meta, StoryObj } from '@storybook/react-vite';
import Table from './Table';
import type { Column } from './Table';

interface Service {
  id: number;
  name: string;
  category: string;
  price: number;
  status: string;
  [key: string]: unknown;
}

const sampleData: Service[] = [
  { id: 1, name: 'Corte de pelo', category: 'Peluquería', price: 12000, status: 'Activo' },
  { id: 2, name: 'Tintura completa', category: 'Peluquería', price: 35000, status: 'Activo' },
  { id: 3, name: 'Manicure gel', category: 'Uñas', price: 18000, status: 'Activo' },
  { id: 4, name: 'Pedicure spa', category: 'Uñas', price: 22000, status: 'Inactivo' },
  { id: 5, name: 'Limpieza facial', category: 'Estética', price: 28000, status: 'Activo' },
];

const columns: Column<Service>[] = [
  { key: 'name', header: 'Servicio' },
  { key: 'category', header: 'Categoría' },
  {
    key: 'price',
    header: 'Precio',
    render: (row) => `$${row.price.toLocaleString('es-CL')}`,
  },
  {
    key: 'status',
    header: 'Estado',
    render: (row) => (
      <span
        className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
          row.status === 'Activo'
            ? 'bg-green-100 text-green-700'
            : 'bg-gray-100 text-gray-500'
        }`}
      >
        {row.status}
      </span>
    ),
  },
];

const meta: Meta<typeof Table<Service>> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table<Service>>;

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
    keyExtractor: (row) => row.id,
  },
};

export const Clickable: Story = {
  args: {
    columns,
    data: sampleData,
    keyExtractor: (row) => row.id,
    onRowClick: (row) => alert(`Clicked: ${row.name}`),
  },
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
    keyExtractor: (row) => row.id,
    emptyMessage: 'No hay servicios registrados',
  },
};
