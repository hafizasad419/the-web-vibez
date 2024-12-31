/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#f5f5f5",
        orange: "#F55800",
        zinc: "#246F78",
        grayEightHundred:"#1f2937" // Just to remember Hex Code
      }
    },
  },
  plugins: [],
}

