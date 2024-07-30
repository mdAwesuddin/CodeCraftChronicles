/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 8s infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shimmer-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shimmer-width)) 0",
          },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat"],
        playwrite:["Playwrite"],
        roboto:["Roboto"],
        rubik:["Rubik"]
      },
      colors: {
        pillcolor: '#f3f4f6',
        bigheading: '#a35af7',
        footercolor: '#4f46e5',
        btncolor:'#934cce5e',
      },
      minHeight: {
        80: '16rem',
      }
    },
  },
  plugins: [],
}