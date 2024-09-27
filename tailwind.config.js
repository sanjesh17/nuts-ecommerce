/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      mont: ["Montserrat", "sans-serif"],
      proxi: ["Proxima Nova", "Georgia", "sans-serif"],
    },
    extend: {
      colors : {
        lightYellow : "FFFCF0",
      }
    },
  },
  plugins: [],
};
