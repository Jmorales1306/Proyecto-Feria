/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          'sm': '640px',
          'md': '1080px',
          'xl': '1280px',
          '2xl': '1920px',
        },
      },
    },
  },
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '1080px',
        'lg': '1280px', // Personaliza la resolución de lg a 1280px
        '2xl': '1920px',
      },
    },
  },
  plugins: []
};