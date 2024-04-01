/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        colorBackG: "rgba(0,0,0,10%)",
        colorFront: "hsl(200, 15%, 8%)",
        colorCard: "rgba(100%, 100%, 100%, 100%)"
      }
    },
  },
  plugins: [],
}