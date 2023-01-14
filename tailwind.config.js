/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        380: "380px",
        420: "420px",
        480: "480px",
        600: "600px",
        620: "620px",
        640: "640px",
        700: "700px",
        768: "768px",
        920: "920px",
        1024: "1024px",
        1230: "1230px",
        1360: "1360px",
        1440: "1440px",
      },
      colors: {
        lightOne: "#615DFA",
        lightTwo: "#23D2E2",
        darkOne: "#1D2333",
        darkTwo: "#3F485F",
        darkThree: "#40D04F",
        darkFour: "#4FF461",
        darkFive: "#7750F8",
      },
      boxShadow: {
        '10px': "0px 0px 10px 0px var(--tw-shadow-color)",
        '5px': "0px 0px 5px 0px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-rtl")],
};
