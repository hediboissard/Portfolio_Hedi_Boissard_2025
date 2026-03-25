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
        accent: { DEFAULT: '#38bdf8', light: '#7dd3fc' },
        muted: 'var(--muted)'
      }
    }
  },
  plugins: []
}
