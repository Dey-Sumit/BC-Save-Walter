module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: "#F8D500",
        },
        gray: {
          light: "#242424",
          dark: "#0C0C0C",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
