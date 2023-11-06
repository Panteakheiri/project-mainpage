/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/header.png')",
        'shiraz': "url('./assets/shiraz.jpg')",
        'yazd': "url('./assets/yazd.jpg')",
        'gambroon': "url('./assets/ghambroon.jpg')",
        'footerimg': "url('./assets/FOOTERIMG.jpg')",
      }
    
  },
  plugins: [],
}

}