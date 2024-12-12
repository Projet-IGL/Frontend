/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors :{
        'navyBlue':'#150078',
        'veryLightBlue':'#DEEBFF',
        'lightBlue' :'#3D3BF3',
      },
      fontFamily:{
        'pop':'Poppins',
        'jim':'Jim Nightshade',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}