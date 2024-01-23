/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      screens: {
        phone: '360px',
        tablet: '768px',
        desktop: '1024px',
      },
      colors: {
        verdeClaro: '#48a45e',
        verdePuro: '#00913f',
        verdeOscuro: '#008130',
        rojoClaro: '#ff3b1f',
        rojoPuro: '#ff0000',
        rojoOscuro: '#c3292e',
      },
    },
  },
  plugins: [],
}

