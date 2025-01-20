/** @type {import('tailwindcss').Config} */
export default {
  assetsInclude: ['**/*.PNG'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      darkcolor:"#181824",
      primarycolor:"#7562E0",
      whitecolor:"#FFFFFF",
      ligthcolor:"#F5F5F5",
      lowdark:"#848191",
      lowcolor:"#F5F5F5"
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
    },
  },
  
  plugins: [],
}