import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom-red': '0 -1px 20px rgba(255, 0, 0, 0.2)',  
      },
      screens:{
        'fl': '1150px'
      }
    },
  },
  plugins: [],
}