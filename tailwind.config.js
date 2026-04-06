/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0066cc',
        'primary-dark': '#0052a3',
        'accent': '#00d084',
        'dark': '#1a1a1a',
        'light': '#f8f9fa',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
