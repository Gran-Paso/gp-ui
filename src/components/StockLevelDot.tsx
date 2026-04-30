import React from 'react';

export type StockLevelTone = 'critical' | 'warn' | 'ok';

export interface ResolveStockLevelOptions {
  /**
   * Upper bound of the “cercano al mínimo” band as a multiple of `minimumStock`.
   * Default 1.25 → entre el mínimo y ceil(min × 1.25) inclusive va en advertencia (amarillo).
   */
  nearMultiplier?: number;
}

/**
 * Deriva el estado visual del puntito frente a cantidad actual vs stock mínimo.
 *
 * - Sin `minimumStock` o mínimo ≤ 0: solo distingue sin stock (crítico) vs hay unidades (ok).
 * - Con mínimo > 0: rojo bajo el mínimo; amarillo desde el mínimo hasta ceil(min × nearMultiplier); verde por encima.
 */
export function resolveStockLevel(
  quantity: number,
  minimumStock?: number | null,
  options?: ResolveStockLevelOptions
): StockLevelTone {
  const nearMultiplier = options?.nearMultiplier ?? 1.25;
  const min = minimumStock ?? 0;

  if (min <= 0) {
    if (quantity <= 0) return 'critical';
    return 'ok';
  }

  if (quantity < min) return 'critical';

  const nearUpper = Math.ceil(min * nearMultiplier);
  if (quantity <= nearUpper) return 'warn';

  return 'ok';
}

const toneClasses: Record<StockLevelTone, string> = {
  critical: 'bg-red-500 shadow-[0_0_0_1px_rgba(220,38,38,0.35)]',
  warn: 'bg-amber-400 shadow-[0_0_0_1px_rgba(217,119,6,0.35)]',
  ok: 'bg-emerald-500 shadow-[0_0_0_1px_rgba(5,150,105,0.35)]',
};

export interface StockLevelDotProps {
  quantity: number;
  minimumStock?: number | null;
  nearMultiplier?: number;
  className?: string;
  /** Override accessible name (Spanish defaults below). */
  'aria-label'?: string;
}

function defaultAriaLabel(tone: StockLevelTone, quantity: number, min?: number | null): string {
  if (min === undefined || min === null || min <= 0) {
    return tone === 'critical'
      ? `Sin stock (${quantity} unidades)`
      : `En stock (${quantity} unidades)`;
  }
  switch (tone) {
    case 'critical':
      return `Stock bajo el mínimo: ${quantity} unidades, mínimo ${min}`;
    case 'warn':
      return `Stock cercano al mínimo: ${quantity} unidades, mínimo ${min}`;
    default:
      return `Stock en nivel cómodo: ${quantity} unidades, mínimo ${min}`;
  }
}

/**
 * Punto de estado de inventario (listados de productos, tarjetas de catálogo).
 * Colores: rojo bajo el mínimo, amarillo zona cercana al mínimo, verde por encima.
 */
const StockLevelDot: React.FC<StockLevelDotProps> = ({
  quantity,
  minimumStock,
  nearMultiplier,
  className = '',
  'aria-label': ariaLabel,
}) => {
  const tone = resolveStockLevel(quantity, minimumStock, { nearMultiplier });
  const label = ariaLabel ?? defaultAriaLabel(tone, quantity, minimumStock);

  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className={`inline-block h-2 w-2 shrink-0 rounded-full ${toneClasses[tone]} ${className}`}
    />
  );
};

export default StockLevelDot;
