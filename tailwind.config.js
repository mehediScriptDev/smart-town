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
        plus: "Plus Jakarta Sans",
      },
      colors:{
        mainbg: 'rgb(2, 31, 82);',
        btncl: 'rgb(252, 192, 91)',
        textcl: 'rgba(255, 255, 255, 0.7)',
        littlebg: 'rgba(255, 255, 255, 0.16);',
        searchbar: 'rgb(246, 248, 254)',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

