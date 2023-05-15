/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightfont: '#000000',
        lightbg: '#FFFFFF',
        lightgray: '#888888',
        pointbluelight: '#412DD4',
        pointbluemd: '#452CDD',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
