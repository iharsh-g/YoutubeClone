/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xss': {'max': '400px'},
      'xs': {'max': '600px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}

