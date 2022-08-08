/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      headerPrimary: "#1D9BF0",
      white: "#ffffff",
    },
    fontFamily: {
      roboto: "roboto",
      sans: ["ui-sans-serif", "system-ui"],
    },
  },
  gridTemplateColumns: {
    asda: `auto 1fr`,
  },
  gridTemplateRows: {
    header: `auto 1fr`,
  },
  plugins: [],
};
