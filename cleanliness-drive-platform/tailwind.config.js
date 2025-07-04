/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#e6f9e6',
          100: '#b3f0b3',
          200: '#80e680',
          300: '#4ddb4d',
          400: '#26d926',
          500: '#00cc00',
          600: '#009900',
          700: '#006600',
          800: '#004d00',
          900: '#003300',
        },
        black: '#000000',
        white: '#ffffff',
      },
      fontFamily: {
        display: ["Algerian", "Calibri", "Arial", "sans-serif"],
        body: ["Calibri", "Arial", "sans-serif"],
        enriqueta: ["Enriqueta", "serif"],
      },
    },
  },
  plugins: [],
} 
