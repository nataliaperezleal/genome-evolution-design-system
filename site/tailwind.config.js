/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors (Genome Evolution)
        'brand-primary': '#297a39', // Evergreen
        'brand-secondary': '#6b1b99', // Indigo
        'brand-accent': '#a3b000', // Lime accent

        // Semantic colors
        'success': '#00885c',
        'warning': '#8c7500',
        'error': '#ba1a1a',
        'info': '#2f7cb6',

        // Neutral scale
        'neutral': {
          0: '#ffffff',
          50: '#fcfdfc',
          100: '#f7f8f7',
          150: '#f4f6f4',
          200: '#e9ecea',
          300: '#d9deda',
          400: '#c3cbc5',
          500: '#adb8b0',
          600: '#9daaa0',
          700: '#849588',
          800: '#728376',
          900: '#5f6d62',
          1000: '#4c574e',
          1100: '#3b443d',
          1200: '#2d342f',
          1300: '#1f2721',
        },
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'mono': ['Roboto Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '20px' }],
        'lg': ['18px', { lineHeight: '24px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '36px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '56px' }],
      },
      spacing: {
        '0.5': '1px',
        '1': '2px',
        '2': '4px',
        '3': '8px',
        '4': '12px',
        '5': '16px',
        '6': '20px',
        '7': '24px',
        '8': '32px',
        '9': '40px',
        '10': '48px',
        '12': '64px',
        '16': '96px',
      },
      borderRadius: {
        'none': '0px',
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        'pill': '32px',
        'full': '999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 2px 4px 0 rgba(0, 0, 0, 0.08)',
        'lg': '0 4px 8px 0 rgba(0, 0, 0, 0.12)',
        'xl': '0 4px 16px 0 rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
