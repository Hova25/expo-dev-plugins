/** @type {import('tailwindcss').Config} */

const { COLORS } = require('./src/constants/COLORS');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...COLORS,
      },
      screens: {
        sm: '380px',
        md: '420px',
        lg: '680px',
        tablet: '1024px',
      },
    },
  },
  plugins: [],
};
