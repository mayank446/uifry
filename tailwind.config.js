/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'orange': '#ff5555'
      },
      fontFamily: {
        // 'custom-1': "Plus Jakarta Sans",
        'custom-2': "Roboto",
      }
    },
  },
  plugins: [],
}