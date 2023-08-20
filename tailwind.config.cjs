/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#252B48",
        secondary: "#9BABB8",
        light: "#F1F0E8"
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "0.5rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "1rem",
      },
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
  },
  plugins: [],
  important: true,
};
