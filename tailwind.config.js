/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_green: "#1B6B50",
        primary_green_darken: "#16523D",
        primary_lightgray: "#F5F5F7",
        primary_black: "#37363C",
        primary_gray: "#737277"
      }
    }
  },
  plugins: []
};
