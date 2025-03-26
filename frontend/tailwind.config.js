/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkNavy: "#1E1E2E",
        softBlue: "#5E81AC",
        lightCyan: "#88C0D0",
        coralRed: "#BF616A",
        offWhite: "#ECEFF4",
      },
    },
  },
  plugins: [],
};
