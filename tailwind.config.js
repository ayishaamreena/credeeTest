/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js","**/*.html"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#0f0f0f",
        "color-secondary": "#7EBD4C",
        "color-bg":"#2D2D2D"
      }
    },
  },
  plugins: [],
}