import React from 'react';
import { Building2, ChevronDown } from 'lucide-react';
import type { User, Business } from './types';

interface TopBarProps {
  appName: string;
  user: User | null;
  availableBusinesses: Business[];
  selectedBusinessId: number | null;
  onSelectBusiness: (id: number) => void;
}

const TopBar: React.FC<TopBarProps> = ({
  appName,
  user,
  availableBusinesses,
  selectedBusinessId,
  onSelectBusiness,
}) => {
  const selectedBiz = availableBusinesses.find(
    (b) => b.businessId === selectedBusinessId,
  );

  return (
    <header className="flex items-center justify-between h-12 px-5 bg-white border-b border-gray-200 shrink-0">
      {/* Left: app name */}
      <div className="flex items-center gap-3 min-w-0">
        <h1 className="text-sm font-bold text-gray-900 font-montserrat truncate">
          {appName}
        </h1>
      </div>

      {/* Right: business + user */}
      <div className="flex items-center gap-4">
        {/* Business selector */}
        {selectedBiz && (
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gray-50 rounded-lg border border-gray-200">
              <Building2 size={13} className="text-gray-400 shrink-0" />
              {availableBusinesses.length > 1 ? (
                <div className="relative">
                  <select
                    value={selectedBusinessId ?? ''}
                    onChange={(e) =>
                      onSelectBusiness(parseInt(e.target.value))
                    }
                    className="appearance-none bg-transparent text-xs font-medium text-gray-700 pr-5 cursor-pointer focus:outline-none"
                  >
                    {availableBusinesses.map((b) => (
                      <option key={b.businessId} value={b.businessId}>
                        {b.businessName}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    size={12}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              ) : (
                <span className="text-xs font-medium text-gray-700 truncate max-w-[160px]">
                  {selectedBiz.businessName}
                </span>
              )}
            </div>
          </div>
        )}

        {/* User info */}
        {user && (
          <div className="flex items-center gap-2 pl-3 border-l border-gray-200">
            <div className="text-right hidden sm:block">
              <p className="text-xs font-medium text-gray-700 leading-none">
                {user.name} {user.lastName}
              </p>
              <p className="text-[10px] text-gray-400 mt-0.5">{user.role}</p>
            </div>
            <div className="w-7 h-7 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-green-600 select-none">
                {user.name.charAt(0)}
                {user.lastName.charAt(0)}
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default TopBar;
