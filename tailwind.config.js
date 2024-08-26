/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {},
      colors: {
        footer: "#001327",
        inputColor: "#F8F8F8",
        footerLinks: "#a6aab6",
        scrollToTop: "#e7473c",
        trackColor: "#002147",
        colorThree: "#2a3b2c",
        colorFour: "#1a2b6d",
        colorFive: "#2a3b2c",
        cdnColor: "#1a2b6d",
        cdnColorTwo: "#e7473c",
      },
    },
  },
  plugins: [],
}

