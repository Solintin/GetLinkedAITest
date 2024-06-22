module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["DM Sans"],
      },

      colors: {
        primary: {
          100: "#755AE2",
          200: "#1FC18840",
          300: "#1FC18833",
        },
        secondary: {
          yellow: "#FFEAC0",
          green: "#D6EBC7",
          red: "#F44",
        },
        grey: {
          30: "#f4f4f4",
          50: "#e9e9e9",
          100: "#bababa",
          200: "#6a6a6a",
          300: "#4d4d4d",
          400: "#999999",
          900: "#0e0e0e",
        },
      },
    },
  },
  plugins: [],
};
