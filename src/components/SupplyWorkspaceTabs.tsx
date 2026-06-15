import { Package, Warehouse } from 'lucide-react';
import TabBar from './TabBar';

export type SupplyWorkspaceTab = 'insumos' | 'bodega';

export interface SupplyWorkspaceTabsProps {
  value: SupplyWorkspaceTab;
  onChange: (value: SupplyWorkspaceTab) => void;
  /** Tailwind text color class for active tab, e.g. `text-green-700` */
  accentText?: string;
  className?: string;
}

/**
 * Tabs estándar Insumos / Bodega — compartido entre GP Factory, GP Services y GP Inventory.
 */
function SupplyWorkspaceTabs({
  value,
  onChange,
  accentText = 'text-green-700',
  className = '',
}: SupplyWorkspaceTabsProps) {
  return (
    <TabBar
      tabs={[
        { value: 'insumos', label: 'Insumos', icon: <Package size={14} /> },
        { value: 'bodega', label: 'Bodega', icon: <Warehouse size={14} /> },
      ]}
      value={value}
      onChange={onChange}
      accentText={accentText}
      className={className}
    />
  );
}

export default SupplyWorkspaceTabs;
