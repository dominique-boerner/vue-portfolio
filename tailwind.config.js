/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#05060C",
        secondary: "#CF2525",
        body: "#DDDFEC"
      }
    },
  },
  plugins: [],
}
