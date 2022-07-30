/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          pp: "PP Neue Montreal",
        },
        colors: {
          test: "#E1DFDD",
        },
      },
    },
  },
  plugins: [],
};
