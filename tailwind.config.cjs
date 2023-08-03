/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBlue : '#011F26',
        primaryYellow: '#D98E04',
        primaryBlueLt:'#03657B',
      }
    },
  },
  plugins: [],
}
