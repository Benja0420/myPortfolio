/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':  {
          100: '#006466',
          200: '#065A60',
          300: '#0B525B',
          400: '#144552',
          500: '#1B3A4B',
        },
        'secondary': {
          100: '#212F45',
          200: '#272640',
          300: '#312244',
          400: '#3E1F47',
          500: '#4D194D',
        }
      },
    },
  },
  plugins: [],
}

