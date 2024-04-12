/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'montserrat': 'Montserrat'
    },
    extend: {
      // animation: {
      //   'transformz': 'transformX 3s linear'
      // },
      // keyframes: {
      //   'transformX': {
      //     '0%': {transform: 'translateX(0px) translateY(0px)'},
      //     '100%': {transform: 'translateX(500px) translateY(500px)'},
      //   }
      // }
    },
  },
  plugins: [],
}

