import type { Meta, StoryObj } from '@storybook/react-vite';
import { Plus } from 'lucide-react';
import PageHeader from './PageHeader';
import Button from './Button';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: 'Servicios',
    description: 'Gestiona el catálogo de servicios de tu negocio.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Ventas',
    description: 'Registro de ventas realizadas.',
    actions: (
      <Button variant="primary" size="sm">
        <Plus size={16} /> Nueva Venta
      </Button>
    ),
  },
};

export const TitleOnly: Story = {
  args: { title: 'Dashboard' },
};
