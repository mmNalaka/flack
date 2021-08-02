module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          '50':  '#f1f7f7',
          '100': '#d6f0f6',
          '200': '#a5e4ea',
          '300': '#6dc9cf',
          '400': '#32a8ac',
          '500': '#238a8a',
          '600': '#1f726f',
          '700': '#1c5756',
          '800': '#153b3f',
          '900': '#0d242c',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
