/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
        backgroundImage: {
          circularLight:
            "repeating-radial-gradient(circle at center, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 20px, rgba(0,0,0,0.3) 20px, rgba(0,0,0,0.3) 21px, transparent 21px, transparent 40px)",

          circularDark:
            "repeating-radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 20px, rgba(255,255,255,0.3) 20px, rgba(255,255,255,0.3) 21px, transparent 21px, transparent 40px)",

          circularLightLg:
            "repeating-radial-gradient(circle at center, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 30px, rgba(0,0,0,0.3) 30px, rgba(0,0,0,0.3) 31px, transparent 31px, transparent 60px)",

          circularDarkLg:
            "repeating-radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 30px, rgba(255,255,255,0.3) 30px, rgba(255,255,255,0.3) 31px, transparent 31px, transparent 60px)",

          circularLightMd:
            "repeating-radial-gradient(circle at center, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 25px, rgba(0,0,0,0.3) 25px, rgba(0,0,0,0.3) 26px, transparent 26px, transparent 50px)",

          circularDarkMd:
            "repeating-radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 25px, rgba(255,255,255,0.3) 25px, rgba(255,255,255,0.3) 26px, transparent 26px, transparent 50px)",

          circularLightSm:
            "repeating-radial-gradient(circle at center, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 15px, rgba(0,0,0,0.3) 15px, rgba(0,0,0,0.3) 16px, transparent 16px, transparent 30px)",

          circularDarkSm:
            "repeating-radial-gradient(circle at center, rgba(255,255,255,0.3) 1px, transparent 1px, transparent 15px, rgba(255,255,255,0.3) 15px, rgba(255,255,255,0.3) 16px, transparent 16px, transparent 30px)",
        },
    },
  },
  plugins: [],
};
