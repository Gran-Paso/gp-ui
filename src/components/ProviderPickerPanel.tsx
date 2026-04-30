import React from 'react';
import { Building2, Plus, RefreshCw } from 'lucide-react';
import Button from './Button';

export interface ProviderPickerPanelProps {
  /** Main label (e.g. "Proveedor") */
  label?: React.ReactNode;
  /** Shown inline after label — badges like "(Sugerido)" */
  labelSuffix?: React.ReactNode;
  /** Validation message */
  error?: string;
  /** Neutral helper under controls */
  hintMuted?: React.ReactNode;
  /** Highlight helper (e.g. success line); caller controls color */
  hintAccent?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  /** Typically a `<select>` with optional icon wrapper */
  children: React.ReactNode;
  onAddProvider: () => void;
  onReloadProviders: () => void;
  addDisabled?: boolean;
  reloadDisabled?: boolean;
  addLabel?: string;
  reloadLabel?: string;
  className?: string;
}

/**
 * Standard proveedores block — borde rojo (marca módulo proveedores GP),
 * acciones "Agregar proveedor" y "Actualizar lista" reutilizables entre apps.
 */
const ProviderPickerPanel: React.FC<ProviderPickerPanelProps> = ({
  label = 'Proveedor',
  labelSuffix,
  error,
  hintMuted,
  hintAccent,
  disabled = false,
  loading = false,
  children,
  onAddProvider,
  onReloadProviders,
  addDisabled = false,
  reloadDisabled = false,
  addLabel = 'Agregar proveedor',
  reloadLabel = 'Recargar proveedores',
  className = '',
}) => (
  <fieldset
    disabled={disabled}
    className={`overflow-hidden rounded-lg border border-gray-200 bg-white ${className}`}
  >
    <legend className="sr-only">{typeof label === 'string' ? label : 'Selección de proveedor'}</legend>
    <div className="flex items-center gap-2 border-b border-red-100/90 bg-red-50/60 px-3 py-2">
      <Building2 className="h-4 w-4 shrink-0 text-red-600" aria-hidden />
      <span className="text-sm font-medium text-gray-900">Proveedores</span>
    </div>
    <div className="space-y-3 p-3 sm:p-4">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <span className="text-sm text-gray-800">{label}</span>
        {labelSuffix != null && labelSuffix !== false ? (
          <span className="text-xs text-gray-500">{labelSuffix}</span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-3">
        <div className="min-w-0 flex-1">{children}</div>
        <div className="flex shrink-0 gap-2 sm:flex-col sm:justify-stretch md:flex-row">
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={disabled || addDisabled}
            onClick={onAddProvider}
            className="flex-1 justify-center border-red-200/90 bg-white text-red-800 hover:bg-red-50 sm:min-w-[9.5rem]"
          >
            <Plus className="h-4 w-4 shrink-0" />
            {addLabel}
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={disabled || reloadDisabled || loading}
            onClick={onReloadProviders}
            className="flex-1 justify-center border-gray-200 bg-white text-gray-700 hover:bg-gray-50 sm:min-w-[9.5rem]"
          >
            <RefreshCw className={`h-4 w-4 shrink-0 ${loading ? 'animate-spin' : ''}`} />
            {reloadLabel}
          </Button>
        </div>
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {hintAccent != null && hintAccent !== false ? (
        <div className="text-sm">{hintAccent}</div>
      ) : null}
      {hintMuted != null && hintMuted !== false ? (
        <p className="text-xs text-gray-500">{hintMuted}</p>
      ) : null}
    </div>
  </fieldset>
);

export default ProviderPickerPanel;
