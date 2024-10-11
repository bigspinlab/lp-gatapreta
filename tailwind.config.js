/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.html",
  ],
  prefix: 'twlp-',
  theme: {
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

