/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#4caf50',
        darkPrimary: '#2e7d32',
        secondary: '#ff5722',
        darkSecondary: '#e64a19',
        background: '#f4f4f4',
        darkBackground: '#121212',
        text: '#fff',
        darkText: '#e0e0e0'
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px"
    }
  },
  plugins: [],
};