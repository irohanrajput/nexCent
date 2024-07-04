/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '64px': '64px',
      },
      lineHeight: {
        '44px': '44px',
      },
      fontWeight: {
        semibold: '600',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      colors: {
        darkBackground: '#2C3132',
        darkText: '#a0aec0',
        defaultText:'#4D4D4D'    
      },
    },
  },
  plugins: [],
}
