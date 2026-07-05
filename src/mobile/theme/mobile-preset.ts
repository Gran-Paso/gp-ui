import type { Config } from 'tailwindcss';

/**
 * GP UI Mobile — brand tokens from Gran Paso identity manual.
 * Green #32D74B · Teal #14B8A6 · Cyan #06B6D4
 */
const mobilePreset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        gp: {
          green: '#32D74B',
          teal: '#14B8A6',
          cyan: '#06B6D4',
        },
        'gp-green': {
          50: '#edfcf0',
          100: '#d3f9da',
          200: '#aaf0b8',
          300: '#72e389',
          400: '#32D74B',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        'gp-teal': {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#14B8A6',
          500: '#0d9488',
          600: '#0f766e',
          700: '#115e59',
          800: '#134e4a',
          900: '#042f2e',
        },
        'gp-cyan': {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#06B6D4',
          500: '#0891b2',
          600: '#0e7490',
          700: '#155e75',
          800: '#164e63',
          900: '#083344',
        },
      },
      backgroundImage: {
        'gp-vinculo': 'linear-gradient(135deg, #32D74B 0%, #14B8A6 50%, #06B6D4 100%)',
        'gp-vinculo-soft': 'linear-gradient(135deg, rgba(50,215,75,0.12) 0%, rgba(20,184,166,0.12) 100%)',
      },
      spacing: {
        'mobile-header': '3rem',
        'mobile-tabbar': '3.5rem',
      },
    },
  },
};

export default mobilePreset;
