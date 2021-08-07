const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // 'false' or 'true' or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        'body': {backgroundColor: theme('backgroundColor') },
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
