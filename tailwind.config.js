module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        main: ["Inter"],
        body: ["Poppins"],
      },

      colors: {
        primary: {
          100: "#1FC188",
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
