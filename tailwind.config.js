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
        mediumGray: "#DFE9F4",
        darkGray: "#666666"
      }
    },
    fontFamily: {
      montserrat: "'Montserrat', sans-serif"
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px"
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

