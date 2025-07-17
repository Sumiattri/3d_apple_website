import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: "#2997FF",
          500: "#2997FF",
        },
        gray: {
          ...colors.gray,
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#42424570",
        },
        zinc: {
          DEFAULT: "#101010",
        },
      },
    },
  },
  plugins: [],
};
