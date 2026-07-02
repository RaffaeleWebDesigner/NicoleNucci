/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        serif: ['Instrument Serif', 'serif'],
        display: ['Dirtyline', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
