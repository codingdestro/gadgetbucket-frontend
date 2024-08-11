/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html.js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ssm: "400px",
      },
      colors: {
        primary: "#000080",
        secondary: "#708090",
        accent: "#4682B4",
        pending: "#FFA500",
        ordered: "#008000",
        cancelled: " #FF0000",
        delivered: "#0000FF",
      },

      animation: {
        fade: "fadeIn .5s ease-in-out",
        fadeInOut: "fadeInOut 2s ease-in  forwards",
      },

      keyframes: {
        spin: {
          from: {
            rotate: "0deg",
          },
          to: {
            rotate: "360deg",
          },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeInOut: {
          "0%": {
            opacity: 0,
          },
          "25%": {
            opacity: 1,
          },
          "80%": {
            opacity: 1,
          },

          "100%": {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
