/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        playwrite:["Playwrite"],
        roboto:["Roboto"],
        rubik:["Rubik"]
      },
      colors: {
        pillcolor: '#f3f4f6',
        bigheading: '#a35af7',
        footercolor: '#4f46e5'
      },
      minHeight: {
        80: '16rem',
      }
    },
  },
  plugins: [],
}