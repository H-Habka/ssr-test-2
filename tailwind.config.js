/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
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
        1440: "1440px"
      },
      colors : {
        
      }
    },
  },
  plugins: [require("tailwind-scrollbar"), require("tailwindcss-rtl")],
};
