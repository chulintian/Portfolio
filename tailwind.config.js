/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        'dark-gray': '#0f172a',
        'gray': '#262e3f',
        'lighter-gray': '#3e4554',
        'green': '#8fdcc2',
        'light-teal': '#A5C9CA',
        'lightest-teal': '#E7F6F2',
      },
    },
  },
  plugins: [],
};
