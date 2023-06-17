/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        portfolio: "1400px",
      },
      fontFamily: {
        default: ["Sulphur Point"],
        display: ["Norges"],
      },
      fontSize: {
        heading1: "2.4rem",
        heading2: "2rem",
        heading3: "1.8rem",
        title: "6rem",
        body1: "1.45rem",
        body2: "1.2rem",
      },
      height: {
        heading1: "2.4rem",
        heading2: "2rem",
        heading3: "1.8rem",
        title: "6rem",
        body1: "1.45rem",
        body2: "1.2rem",
      },
      colors: {
        primary: "#05060C",
        "primary-contrast": "#DDDFEC",
        secondary: "#CF2525",
        body: "#DDDFEC",
      },
    },
  },
  plugins: [],
}
