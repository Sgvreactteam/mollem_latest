/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: "Effra, sans-serif",
    },
    extend: {
      colors: {
        primary: "#2353F5",
        background: "#F2F6FE"
      },
      boxShadow: {
        box: "3px 31px 40px -42px rgba(0, 0, 0, 0.25)"
      }
    },
  },
  plugins: [],
};
