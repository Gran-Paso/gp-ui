import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Building2, LogOut, X } from 'lucide-react';
import GpLogo from '../assets/GpLogo';
import type { MobileDrawerProps } from './types';

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1 },
};

const panelVariants = {
  closed: { x: '100%' },
  open: {
    x: 0,
    transition: { type: 'spring' as const, stiffness: 320, damping: 34 },
  },
};

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  open,
  onClose,
  sections,
  user,
  onLogout,
  onSwitchToErp,
  showErpBridge = false,
  appName = 'Gran Paso',
  appSubtitle = 'Personal',
}) => {
  const location = useLocation();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const initials = user
    ? `${user.name?.[0] ?? ''}${user.lastName?.[0] ?? ''}`.toUpperCase()
    : '?';

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Cerrar menú"
            variants={backdropVariants}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/25 lg:hidden"
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label="Menú"
            variants={panelVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-y-0 right-0 z-50 flex w-[min(100vw,20rem)] flex-col bg-white shadow-2xl lg:hidden pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          >
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <GpLogo size={36} />
                <div>
                  <p className="text-base font-extrabold text-gray-900 leading-tight">{appName}</p>
                  <p className="text-xs font-medium text-gray-400">{appSubtitle}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar"
                className="flex h-9 w-9 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>

            {user ? (
              <div className="flex items-center gap-3 px-4 py-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gp-vinculo flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">{initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-gray-900 truncate">
                    {user.name}
                    {user.lastName ? ` ${user.lastName}` : ''}
                  </p>
                  {user.email ? (
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  ) : null}
                </div>
              </div>
            ) : null}

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              {sections.map((section) => (
                <div key={section.label} className="mb-5">
                  <p className="px-2 mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {section.label}
                  </p>
                  <ul className="space-y-0.5">
                    {section.items.map((item) => {
                      const Icon = item.icon;
                      const isActive = !item.href && location.pathname === item.to;

                      if (item.href) {
                        return (
                          <li key={item.to + item.label}>
                            <a
                              href={item.href}
                              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                            >
                              <Icon size={18} className="text-gp-teal-400 shrink-0" />
                              {item.label}
                            </a>
                          </li>
                        );
                      }

                      return (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            onClick={onClose}
                            className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition-colors ${
                              isActive
                                ? 'bg-gp-vinculo-soft text-gp-teal-600'
                                : 'text-gray-700 hover:bg-gray-50'
                            }`}
                          >
                            <Icon size={18} className="text-gp-teal-400 shrink-0" />
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

              {showErpBridge && onSwitchToErp ? (
                <div className="mb-5">
                  <p className="px-2 mb-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    Vínculo ERP
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onSwitchToErp();
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 hover:bg-gp-vinculo-soft transition-colors"
                  >
                    <Building2 size={18} className="text-gp-green-400 shrink-0" />
                    Ir a mi negocio
                  </button>
                </div>
              ) : null}
            </nav>

            <div className="border-t border-gray-100 p-3">
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onLogout();
                }}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                <LogOut size={18} />
                Cerrar sesión
              </button>
            </div>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileDrawer;
