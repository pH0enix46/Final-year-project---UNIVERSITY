/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2f4f4f", // brand color
        primary: "#3c6b6b",
        secondary: "#4f767b",
        accent: "#a8d8d1",
      },

      fontFamily: {
        josefin: ['"Josefin Sans"', "sans-serif"],
        sofia: ["Sofia", "sans-serif"],
      },
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
