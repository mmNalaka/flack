module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          '50':  '#f9fafb',
          '100': '#f3f6f8',
          '200': '#e4e7f1',
          '300': '#d1d0e9',
          '400': '#b2a6da',
          '500': '#8a7bc7',
          '600': '#6456a6',
          '700': '#4a4281',
          '800': '#37335c',
          '900': '#2a2947',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
