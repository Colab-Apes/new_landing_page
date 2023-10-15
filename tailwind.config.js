/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: 'var(--primary-color)',
        acentColor: 'var(--accent-color)',
        green1: 'var(--green1)',
        green2: 'var(--green2)',
        black: 'var(--black)',
        white: 'var(--white)',
      },
      screens: {
			
			},
      fontFamily: {
        lato: ["Lato", ...defaultTheme.fontFamily.sans],
      
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

