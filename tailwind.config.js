/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      colors: {
        ink: '#080a08',
        forest: '#0f2018',
        moss: '#6f7f43',
        grain: '#d5ad6d',
        linen: '#f5ecd9',
        steel: '#9eb0bf',
      },
      boxShadow: {
        premium: '0 24px 80px rgba(0, 0, 0, 0.42)',
      },
    },
  },
  plugins: [],
};
