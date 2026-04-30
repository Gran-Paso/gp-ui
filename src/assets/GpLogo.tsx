import React from 'react';
import isotipoUrl from './isotipo.png';

interface GpLogoProps {
  size?: number;
  className?: string;
}

/**
 * Isotipo oficial Gran Paso (gradiente sobre fondo oscuro).
 */
const GpLogo: React.FC<GpLogoProps> = ({ size = 24, className = '' }) => (
  <img
    src={isotipoUrl}
    alt="Gran Paso"
    width={size}
    height={size}
    className={`object-contain select-none ${className}`}
    draggable={false}
  />
);

export default GpLogo;
