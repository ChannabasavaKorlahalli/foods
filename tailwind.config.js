/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: '#05070f',
        midnight: '#0c1224',
        midnightLight: '#121a32',
        gold: '#c9a227',
        goldLight: '#e4c76b',
        cream: '#f5f3ef',
        creamMuted: '#a8a49c',
        steel: '#6b7289',
      },
      boxShadow: {
        glow: '0 0 60px rgba(201, 162, 39, 0.15)',
        card: '0 24px 80px rgba(0, 0, 0, 0.45)',
        lift: '0 32px 64px rgba(0, 0, 0, 0.55)',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201, 162, 39, 0.12), transparent 55%), linear-gradient(180deg, #05070f 0%, #0c1224 45%, #05070f 100%)',
        'gold-gradient': 'linear-gradient(135deg, #e4c76b 0%, #c9a227 50%, #9a7b1a 100%)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% center' },
          '100%': { backgroundPosition: '-200% center' },
        },
      },
    },
  },
  plugins: [],
};
