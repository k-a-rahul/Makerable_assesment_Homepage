/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       blue:'#1F75FE',
       pink:'#ffd7e9',
       white:'#ffffff',
       lightblue:'#6CB4EE',
       turquoise:'#00CED1',
       card:'#E6E6FA',
       modal:'#AFDBF5'
      },
    },
  },
  plugins: [],
};
