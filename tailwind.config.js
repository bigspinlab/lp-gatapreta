/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html",
  ],
  prefix: 'twlp-',
  theme: {
    fontSize: {
      // Default values with adjusted sizes
      xs: '1.2rem',  // 12px
      sm: '1.4rem',  // 14px
      base: '1.6rem',  // 16px
      lg: '1.8rem',  // 18px
      xl: '2rem',  // 20px
      '2xl': '2.4rem',  // 24px
      '3xl': '3rem',  // 30px
      '4xl': '3.6rem',  // 36px
      '5xl': '4.8rem',  // 48px
      '6xl': '6rem',  // 60px
      '7xl': '7.2rem',  // 72px
    },
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        anton: ['var(--font-anton)'],
      },
      colors: {
        'lp-purple-300': '#37113e',
        'lp-purple-100': '#6c0082',
        'lp-pink-100': '#fe96f5',
        'lp-pastel-100': "#fff9f3",
        'lp-green-100': '#85f753',
      }
    }
  },
  plugins: [],
}

