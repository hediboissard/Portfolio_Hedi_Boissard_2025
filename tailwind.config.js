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
        primary: {
          light: '#E8E8E8',
          DEFAULT: '#E8E8E8',
          dark: '#0e0c12'
        },
        secondary: {
          light: '#FFFFFF',
          DEFAULT: '#FFFFFF',
          dark: '#1E293B',
        },
        accent: {
          light: '#3399BB',
          DEFAULT: '#3399BB',
          dark: '#007198'
        },
      }
    },
  },
  plugins: [],
}