/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "290px",
        xs: "400px",
        sm: "601px",
        md: "769px",
        mdLg: "900px",
        lg: "1100px",
        xl: "1200px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
}

