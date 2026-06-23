/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}"
  ],
  theme: {
    extend: {
      colors: {
        'pizza-red': '#e63946',
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
