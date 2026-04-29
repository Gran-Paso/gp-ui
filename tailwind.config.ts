import type { Config } from 'tailwindcss';
import gpPreset from './src/theme/tailwind-preset';

export default {
  presets: [gpPreset],
  content: ['./src/**/*.{ts,tsx}'],
} satisfies Config;
