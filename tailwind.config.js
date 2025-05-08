/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily:{
        alfa: 'Abril Fatface',
        italy: "Noto Sans Display",
      },
      colors:{
        mainbg: 'rgb(2, 31, 82);',
        btncl: 'rgb(252, 192, 91)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

