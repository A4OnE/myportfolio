/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // fontFamily: {
    //   Agustina: ["Agustina", "sans-serif"],
    //   Raleway: ['"Raleway"', "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
    // },
  },
  plugins: [],
};
