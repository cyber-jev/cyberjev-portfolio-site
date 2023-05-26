/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "hsl(0, 0%, 8%)",
        body2: "hsl(0, 0%, 14%)",
        blur: "hsla(0, 0%, 8%, 0.493)",
        accent: "hsl(153, 71%, 59%)",
        text1: "hsl(0, 0%, 100%)",
        text2: "hsl(0, 0%, 85%)",
        invalid: "hsl(7, 100%, 68%)",
      },
      fontFamily: {
        tere: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
