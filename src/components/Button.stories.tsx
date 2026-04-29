import type { Meta, StoryObj } from '@storybook/react-vite';
import { Plus, Trash2, Download } from 'lucide-react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'ghost'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { children: 'Guardar', variant: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Cancelar', variant: 'secondary' },
};

export const Danger: Story = {
  args: { children: 'Eliminar', variant: 'danger' },
};

export const Ghost: Story = {
  args: { children: 'Ver más', variant: 'ghost' },
};

export const Loading: Story = {
  args: { children: 'Guardando...', loading: true },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Pequeño</Button>
      <Button size="md">Mediano</Button>
      <Button size="lg">Grande</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary"><Plus size={16} /> Agregar</Button>
      <Button variant="danger"><Trash2 size={16} /> Eliminar</Button>
      <Button variant="secondary"><Download size={16} /> Exportar</Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['primary', 'secondary', 'danger', 'ghost'] as const).map((v) => (
        <div key={v} className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-20">{v}</span>
          <Button variant={v} size="sm">Small</Button>
          <Button variant={v} size="md">Medium</Button>
          <Button variant={v} size="lg">Large</Button>
          <Button variant={v} disabled>Disabled</Button>
          <Button variant={v} loading>Loading</Button>
        </div>
      ))}
    </div>
  ),
};
