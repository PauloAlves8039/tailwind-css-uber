/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'uber': "url('/src/assets/images/bguber.png')",
        'city': "url('/src/assets/images/bg-city.png')",
      }
    },
  },
  plugins: [],
}

