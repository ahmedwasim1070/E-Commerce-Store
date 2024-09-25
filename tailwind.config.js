/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom-red': '0 -1px 20px rgba(255, 0, 0, 0.2)',  
        'facebook': '0 -1px 10px rgba(24, 119, 242, 1)',
        'instagram': '0 -1px 10px rgba(225, 48, 108, 1)',
        'whatsapp': '0 -1px 10px rgba(37, 211, 102, 1)',
        'tiktok': '0 -1px 10px rgba(0, 255, 255, 1)'

      },
      screens:{
        'esm': '350px',
        'fl': '1150px'
      }
    },
  },
  plugins: [],
}