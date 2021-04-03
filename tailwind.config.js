module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        prisma: "#2d3748",
        "prisma-dark": "#1e2531",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
