/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D2A4D',
          50: '#E8EEF3',
          100: '#D1DDE7',
          200: '#A3BCCE',
          300: '#759BB5',
          400: '#4678A6',
          500: '#2C5A82',
          600: '#163D5C',
          700: '#0D2A4D',
          800: '#0A2342',
          900: '#071A33',
        },
        midblue: '#4678A6',
        lightblue: '#A8C1D9',
        panel: '#DDE6EF',
        gold: {
          DEFAULT: '#C9A45C',
          50: '#FBF8F2',
          100: '#F6EFE0',
          200: '#ECDAB8',
          300: '#DDBA78',
          400: '#D4B06A',
          500: '#C9A45C',
          600: '#A8884D',
          700: '#876B3D',
          800: '#65502E',
          900: '#433620',
        },
      },
      fontFamily: {
        headline: ['"Jost"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Montserrat"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        luxe: '0.18em',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'fade-in': 'fadeIn 0.6s ease-out both',
        'slow-zoom': 'slowZoom 20s ease-in-out infinite alternate',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
