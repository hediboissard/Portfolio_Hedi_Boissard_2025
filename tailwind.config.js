export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Geist Variable"',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif'
        ]
      },
      colors: {
        accent: { DEFAULT: '#007198', light: '#3399bb' },
        muted: 'var(--muted)'
      }
    }
  },
  plugins: []
}
