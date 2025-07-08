/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#40B0A6', // Aguamarina
        },
        accent: {
          DEFAULT: '#FF8C69', // Coral Suave
        },
        neutral: {
          dark: '#4A4A4A', // Texto principal
          light: '#F5F5F5', // Fondos claros
        },
        'dark-bg': '#1A1A1A', // Fondo principal modo oscuro
        'dark-text': '#E0E0E0', // Texto principal modo oscuro
      },
    },
  },
  plugins: [],
};
