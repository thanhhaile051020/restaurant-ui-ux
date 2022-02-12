const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        '--color-golden': '#DCCA87',
        '--color-black': '#0C0C0C',
        '--color-gray': '#545454',
        '--color-crimson': '#F5EFDB',
        '--color-grey': '#AAAAAA',
        '--color-white': '#FFFFFF',
      },
      fontFamily: {
        Cormorant: ['Cormorant Upright', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        '3xl': '2000px',
      },
      keyframes: {
        fadeIn: {
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-animation-delay'),
  ],
}
