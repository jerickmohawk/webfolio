/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",

    },
    screens:{
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',

    },
    fontFamily:{
      primary: 'var(--font-mont)',
      secondary: 'var(--font-sans)'
    },
    extend: {
      colors:{
        accent: {
          DEFAULT: '#FF073A',
          hover: '#C1323D'
        },
        placeholder: '#808080',
        darkBg : {
          DEFAULT: '#2C2C2EFF'
        },
        lightBg : {
          DEFAULT: '#F2F2F7FF'
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}