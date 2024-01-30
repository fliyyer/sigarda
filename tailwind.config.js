/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#457EFF',
        'darker': '#4064B4',
        'subtitle' : '#F6F8FF',
        'dark': '#5E5E5E',
        'error' : '#FF3B3B',
        'warning' : '#FFCC00',
        'info' : '#0063F7',
        'success' : '#06C270'

      }
    },
  },
  plugins: [],
}