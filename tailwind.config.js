/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-dark": "#111928",
        "main-orange": "#f59e0b",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [require("daisyui")],
}
