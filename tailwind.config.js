/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1600px",
    },
    extend: {
      colors: {
        primary: "#275DAD",
        secondary: "#5EA9FF",
        white: "#5EA9FF",
        mainGrey: "#424656",
        mainYellow: "#5EA9FF",
      },
    },
  },
  plugins: [],
};
