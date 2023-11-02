/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts and enjoy.
        "font-primary": ["Rubik", "sans-serif"],
      },
      colors: {
        "bg-primary": "#FFFFFF",
        "bg-secondary": "#EFFAF9",
        primary: "#4ECDC4",
        "status-inProgress": "#9ECDF8",
        "status-done": "#A3EDAA",
        "status-Review": "#FCBE9F",
        "status-NotYet": "#E5E5E5",
      },
    },
  },
  plugins: [require("flowbite/plugin"),
  require("daisyui"),
  require('@tailwindcss/line-clamp')],
};
