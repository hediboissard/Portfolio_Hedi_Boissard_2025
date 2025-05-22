/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#E8E8E8',
        'primary-dark': '#0e0c12',
        accent: '#FFFFFF',
        'accent-dark': '#007198',
        secondary: '#3399BB',
        'secondary-dark': '#007198'
      }
    },
  },
  plugins: [],
}