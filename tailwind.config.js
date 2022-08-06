/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'ui-sans-serif'],
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#643c20',
        secondary: '#f3cf0d',
      },
    },
    screen: {
      '2xl': '1320px',
    },
  },
  plugins: [],
};
