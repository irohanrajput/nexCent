// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
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
    },
  },
  plugins: [],
}
