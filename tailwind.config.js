/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F7AD45", // Yellow 400 (main)
          dark: "#FFB823", // Yellow 700 (hover/dark)
        },
        secondary: {
          DEFAULT: "#111827", // Dark gray 900 for secondary bg
          dark: "#1F2937", // Slightly lighter dark gray for hover/dark
        },
        background: {
          light: "#F9FAFB", // Light background
          dark: "#111827", // Dark background (same as secondary.DEFAULT)
        },
        text: {
          light: "#374151", // Gray 700 for light text
          dark: "#D1D5DB", // Gray 300 for dark mode text
        },
        surface: {
          light: "#FFFFFF", // White card backgrounds
          dark: "#1F2937", // Dark card backgrounds
        },
        border: {
          light: "#E5E7EB", // Gray 200 borders
          dark: "#374151", // Gray 700 borders dark mode
        },
        focus: {
          primary: "#F7AD45", // same as primary DEFAULT for focus rings
          secondary: "#111827", // same as secondary DEFAULT for focus rings
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
