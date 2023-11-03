/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "zoomIn": "zoomIn 1s ease-in-out"
      },
      keyframes: {
        'zoomIn': {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" }
        }
      }

    },
  },
  plugins: [],
}