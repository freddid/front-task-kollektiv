/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        regular: {
          0: '#1E0E4C',
          1: '#3D06D7',
          2: '#CFCADF',
          3: '#906FEE'
        }
      },
      fontFamily: {
        'koulen': ['Koulen', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
