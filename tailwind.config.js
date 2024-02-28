/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layout-gradient': 'linear-gradient(45deg, #eff3fe 50%, #fbf4f7 100%, #edf2ff)'
      }
    }
  },
  plugins: []
}

