import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShoppingBag } from 'lucide-react';
import type { AppDefinition } from './types';

interface AppLauncherFlyoutProps {
  apps: AppDefinition[];
  currentAppId: string;
  onAppSelect: (app: AppDefinition) => void;
  onClose: () => void;
}

const AppLauncherFlyout: React.FC<AppLauncherFlyoutProps> = ({
  apps,
  currentAppId,
  onAppSelect,
  onClose,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const timer = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
    }, 10);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      ref={panelRef}
      initial={{ opacity: 0, x: -12, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: -12, scale: 0.96 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="absolute top-2 left-16 z-50 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 w-[320px]"
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold text-gray-900 font-montserrat">
          Aplicaciones
        </h2>
        <span className="text-[10px] text-gray-400">Gran Paso ERP</span>
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {apps.map((app) => {
          const isCurrent = app.id === currentAppId;
          const disabled = app.disabled;
          const isNoApp = app.disabledReason === 'no_business_app';
          const isNoPermission = app.disabledReason === 'no_permission';
          const Icon = app.icon;

          return (
            <button
              key={app.id}
              onClick={() => !disabled && onAppSelect(app)}
              disabled={disabled}
              title={
                isNoApp
                  ? 'Tu negocio no tiene contratada esta app'
                  : isNoPermission
                    ? 'No tienes permisos para esta app'
                    : app.name
              }
              className={`relative flex flex-col items-center justify-center aspect-square rounded-xl border-2 gap-1.5 transition-all duration-150 ${
                disabled
                  ? isNoApp
                    ? 'border-amber-100 bg-amber-50/60 opacity-60 cursor-not-allowed'
                    : 'border-gray-100 bg-gray-50 opacity-40 cursor-not-allowed'
                  : isCurrent
                    ? 'border-green-400 bg-green-50 shadow-sm'
                    : 'border-gray-100 bg-white cursor-pointer hover:border-green-300 hover:shadow-md'
              }`}
            >
              {isNoApp && (
                <span className="absolute top-1 right-1 flex items-center bg-amber-400 text-white text-[8px] font-bold px-1 py-0.5 rounded-full">
                  <ShoppingBag size={7} />
                </span>
              )}
              {isNoPermission && (
                <span className="absolute top-1 right-1 flex items-center bg-gray-400 text-white text-[8px] font-bold px-1 py-0.5 rounded-full">
                  <Lock size={7} />
                </span>
              )}

              <div className={`rounded-lg p-2 ${app.color}`}>
                <Icon
                  size={20}
                  className={
                    disabled
                      ? isNoApp
                        ? 'text-amber-300'
                        : 'text-gray-400'
                      : app.iconColor
                  }
                />
              </div>
              <span
                className={`text-[11px] font-medium leading-none text-center px-1 ${
                  disabled
                    ? isNoApp
                      ? 'text-amber-400'
                      : 'text-gray-400'
                    : isCurrent
                      ? 'text-green-700'
                      : 'text-gray-700'
                }`}
              >
                {app.shortName}
              </span>
              {isCurrent && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AppLauncherFlyout;
