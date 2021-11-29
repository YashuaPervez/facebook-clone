const { colors } = require("./styles/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { ...colors },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
      },
    },
  },
  variants: {
    extend: {
      width: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
