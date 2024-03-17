/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html.js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000080",
        secondary: "#708090",
        accent: "#4682B4",
      },

      animation: {
        fade: "fadeIn .5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
