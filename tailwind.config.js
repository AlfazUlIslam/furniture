/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#054C73",
        mediumBlue: "#011C42",
        darkBlue: "#03344F",
        lightBlack: "#333333",
        lightGray: "#F2F5FF",
        darkGray: "#666666"
      }
    },
    fontFamily: {
      montserrat: "'Montserrat', sans-serif"
    }
  },
  plugins: [],
}

