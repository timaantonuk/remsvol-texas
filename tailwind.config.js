/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors:{
      dark_gray: "#474745",
      medium_gray: "#889293",
      light_gray: "#B7C1C3",
      light_white: "#CCD6D8",
      white: "#E3E8EB",
    },
    fontFamily: {
      display: ["Arimo", "sans-serif"],
      display: ["Rubik", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
