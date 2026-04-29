import type { Meta, StoryObj } from '@storybook/react-vite';
import { Package, Search, FileX } from 'lucide-react';
import EmptyState from './EmptyState';
import Button from './Button';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    icon: Package,
    title: 'Sin insumos',
    description: 'Aún no has registrado insumos para este negocio.',
  },
};

export const WithAction: Story = {
  args: {
    icon: Package,
    title: 'Sin insumos',
    description: 'Comienza agregando tu primer insumo.',
    action: <Button size="sm">Agregar insumo</Button>,
  },
};

export const SearchNoResults: Story = {
  args: {
    icon: Search,
    title: 'Sin resultados',
    description: 'No se encontraron registros con los filtros aplicados.',
  },
};

export const Error: Story = {
  args: {
    icon: FileX,
    title: 'Error al cargar',
    description: 'Ocurrió un problema al obtener los datos. Intenta de nuevo.',
    action: <Button variant="secondary" size="sm">Reintentar</Button>,
  },
};
