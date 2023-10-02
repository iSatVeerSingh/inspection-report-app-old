/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app": "#F0F0F6",
        "stroke": "#E0E0E0",
        "rich-black": "#0D0D26",
        "main": "#505050",
        "blue-primay": "#0B8AD9",
        "placeholder": "#707070",
        "input-bg": "#F7F7F7",
        "gray-dark": "#2E3A59",
        "menu-bg": "#DEE0FC",
        "menu-link": "#2B3674"
      }
    },
  },
  plugins: [],
};
