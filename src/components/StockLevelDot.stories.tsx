import type { Meta, StoryObj } from '@storybook/react-vite';
import StockLevelDot, { resolveStockLevel } from './StockLevelDot';
import ListingCard from './ListingCard';
import { Package } from 'lucide-react';

const meta: Meta<typeof StockLevelDot> = {
  title: 'Components/StockLevelDot',
  component: StockLevelDot,
  parameters: {
    docs: {
      description: {
        component:
          'Indicador puntual para cantidad vs stock mínimo: rojo si la cantidad es menor que el mínimo; amarillo si está en el mínimo o en la banda cercana (por defecto hasta ceil(mínimo × 1,25)); verde por encima de esa banda. Sin mínimo definido (≤ 0): rojo solo si la cantidad es 0 o menor, verde si hay stock.',
      },
    },
  },
  argTypes: {
    quantity: { control: { type: 'number' } },
    minimumStock: { control: { type: 'number' } },
    nearMultiplier: { control: { type: 'number', step: 0.05, min: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof StockLevelDot>;

export const BajoElMinimo: Story = {
  name: 'Rojo (bajo el mínimo)',
  args: {
    quantity: 4,
    minimumStock: 10,
  },
};

export const CercanoAlMinimo: Story = {
  name: 'Amarillo (cerca del mínimo)',
  args: {
    quantity: 11,
    minimumStock: 10,
  },
};

export const EnStock: Story = {
  name: 'Verde (en stock)',
  args: {
    quantity: 40,
    minimumStock: 10,
  },
};

export const SinMinimoConfigurado: Story = {
  name: 'Sin mínimo (solo hay / no hay)',
  render: () => (
    <div className="flex flex-wrap items-center gap-6">
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <StockLevelDot quantity={0} />
        <span>Cantidad 0</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-700">
        <StockLevelDot quantity={12} />
        <span>Cantidad 12</span>
      </div>
    </div>
  ),
};

export const TablaReferencia: Story = {
  name: 'Tabla (mínimo = 10, multiplicador 1,25)',
  render: () => {
    const min = 10;
    const mult = 1.25;
    const rows = [0, 5, 9, 10, 12, 13, 14, 50].map((qty) => ({
      qty,
      tone: resolveStockLevel(qty, min, { nearMultiplier: mult }),
    }));
    return (
      <div className="max-w-md space-y-3 font-mono text-sm">
        <p className="text-xs text-gray-500">
          Límite superior banda amarilla: ceil({min} × {mult}) = {Math.ceil(min * mult)}
        </p>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
              <th className="border border-gray-200 px-2 py-1">Cantidad</th>
              <th className="border border-gray-200 px-2 py-1">Nivel</th>
              <th className="border border-gray-200 px-2 py-1">Punto</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ qty, tone }) => (
              <tr key={qty}>
                <td className="border border-gray-200 px-2 py-1">{qty}</td>
                <td className="border border-gray-200 px-2 py-1">{tone}</td>
                <td className="border border-gray-200 px-2 py-1">
                  <StockLevelDot quantity={qty} minimumStock={min} nearMultiplier={mult} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

export const EnListingCard: Story = {
  name: 'Ejemplo en ListingCard',
  render: () => (
    <div className="max-w-sm">
      <ListingCard
        title="Producto demo"
        subtitle="Categoría"
        media={
          <div className="flex h-full w-full items-center justify-center bg-gray-100">
            <Package className="h-14 w-14 text-gray-400" aria-hidden />
          </div>
        }
      >
        <div className="rounded-xl border border-gray-100 bg-gray-50 px-3 py-2">
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
              <StockLevelDot quantity={11} minimumStock={10} />
              Stock disponible
            </span>
            <span className="text-base font-bold text-gray-900">11 u.</span>
          </div>
        </div>
      </ListingCard>
    </div>
  ),
};
