/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'anton' : ['Anton', "sans-serif"],
        'roboto' : ['Roboto', "sans-serif"],
      }
    },
  },
  plugins: [],
}