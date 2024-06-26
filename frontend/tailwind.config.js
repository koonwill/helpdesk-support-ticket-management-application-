/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,css}",
    "./src/App.{js,ts,jsx,tsx,css}",
    "./src/**/*.{js,ts,jsx,tsx,css}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      mainBackgroundColor: "#0D1117",
      columnBackgroundColor: "#161B22",
    },
  },
  plugins: [],
};
