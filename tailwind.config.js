/** @type {import('tailwindcss').Config} */
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
				sm: "425px",
				md: "800px",
			},
    },
  },
  plugins: [],
}

