/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      left: {
        390: "390px",
      },
      top: {
        47: "47px",
      },
      fontFamily: {
        sen: ['"Sen"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
