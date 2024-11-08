/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: ['var(--font-lato)', 'sans-serif'],
        opensans: ['var(--font-open-sans)', 'sans-serif'],
        poppins: ['var(--font-poppins)','sans-serif']
      },
      colors :{
        customGold: "#D9A249",
        goldLogo: "#AA7823",
        newColor: "#bf9372",
        navbarColor: "#DEC3B3",
        salmon: "#f8c2c0"
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
        '9xl': '5rem',
        '10xl': '10rem'
        // Dodajte još vrednosti po potrebi
      },
    },
  },
  plugins: [],
};
