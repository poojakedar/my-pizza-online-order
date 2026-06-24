/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        'pizza-purple': '#8b5cf6',
        'pizza-purple-light': '#a78bfa',
        'pizza-orange': '#f4a261',
        'pizza-dark': '#1d1e2c',
        'pizza-card': '#2b2d42',
      },
      fontFamily: {
        'pizza': ['"Playfair Display"', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: []
}
