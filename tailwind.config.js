/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      boxShadow: {
        '95': 'inset 3px 3px #fff, 3px 3px #000',
      },
      backgroundColor: {
        'primary': '#067A7B',
        'taskbar': '#CCCCCC',
        'winblue': '#050376',
      }
    },
  },
  plugins: [],
}

