/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat'],
      },
      backgroundImage: {
        heroBackground: "url('/src/assets/images/hero-background.png')",
        maisonBackground: "url('/src/assets/images/maison-background.png')",
      },
      colors: {
        333: '#333333',
        DDD: '#DDDDDD',
      },
      dropShadow: {
        shyam: '0 2px 20px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

