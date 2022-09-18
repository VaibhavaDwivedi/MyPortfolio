/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "rgb(237, 247, 250)",
          default: "rgb(255, 100, 100)",
          dark: "rgb(248,47,47)",
          shadow: "rgb(247, 141, 167)",
          neutral: "rgb(238,238,238)",
        },
      },
    },
  },
  plugins: [],
};
