/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primaryLight: "rgba(0,0,0,10%)",
        secondLight: "hsl(200, 15%, 8%)",
        
        primaryDark: "hsl(209, 23%, 22%)",
        secondDark: "hsl(207, 26%, 17%)",

        third: "rgba(100%, 100%, 100%, 100%)"
      }
    },
  },
  plugins: [],
}