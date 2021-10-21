module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
        4000: "4000ms",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        }
      },
      animation: {
        "fade-in": "fade-in 3s cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  variants: {
    extend: {},
    display: ["responsive", "group-hover", "group-focus"],
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
