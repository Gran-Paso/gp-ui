import type { Meta, StoryObj } from '@storybook/react-vite';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    padding: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 className="text-lg font-semibold text-gray-900">Título de tarjeta</h3>
        <p className="text-sm text-gray-500 mt-1">Contenido descriptivo de la tarjeta.</p>
      </div>
    ),
  },
};

export const Paddings: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      {(['none', 'sm', 'md', 'lg'] as const).map((p) => (
        <Card key={p} padding={p}>
          <span className="text-sm text-gray-600">padding=&quot;{p}&quot;</span>
        </Card>
      ))}
    </div>
  ),
};

export const DashboardExample: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      {[
        { label: 'Servicios hoy', value: '12' },
        { label: 'Ventas del mes', value: '$2.450.000' },
        { label: 'Clientes nuevos', value: '8' },
      ].map((s) => (
        <Card key={s.label}>
          <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{s.value}</p>
        </Card>
      ))}
    </div>
  ),
};
