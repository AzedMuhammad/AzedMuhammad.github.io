/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Viga: "Viga",
      Inter: "Inter",
    },
    extend: {
      colors: {
        "light-green": "#436850",
        "dark-green": "#12372A",
        "cream-light": "#EBD9B4",
        slate: "#F2F1EB",
      },
    },
  },
  plugins: [],
};
