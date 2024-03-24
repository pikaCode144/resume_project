/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layout-gradient': 'linear-gradient(45deg, #eff3fe 50%, #fbf4f7 100%, #edf2ff)',
        'btn-gradient': 'linear-gradient(90deg, #8ae2f9, #88d5f5 15%, #85b3ed 65%, #8083e1)'
      }
    }
  },
  plugins: []
}

