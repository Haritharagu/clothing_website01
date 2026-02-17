/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        foreground: "#FEFEFE",
        graphite: "#2E2E2E",
        silver: "#CFCFCF",
      },
      fontFamily: {
        grotesk: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
