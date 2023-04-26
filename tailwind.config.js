/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    data: {
      active: 'ui~="active"',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mulish: ["var(--font-mulish)"],
        montserrat: ["var(--font-montserrat)"],
      },
      keyframes: {
        morph: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
        readMoreAnim: {
          "0%": {
            transformOrigin: "left center",
            transform: "scaleX(0.2)",
          },
          "70%": {
            transformOrigin: "left center",
            transform: "scaleX(1)",
          },
          "71%": {
            transformOrigin: "right center",
          },
          "100%": {
            transformOrigin: "right center",
            transform: "scaleX(0.2)",
          },
        },
      },
      animation: {
        morph: "morph 8s ease-in-out infinite 1s",
        readMoreAnim: "readMoreAnim cubic-bezier(0.6,0.01,0,1) forwards 0.4s",
      },
    },
  },
  plugins: [],
};
