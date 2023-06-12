/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'd-primary': '#1a1c22',
        'd-secondary': '#2e3239',
        'd-accent': '#5f7adb',
        'd-easy' : '#159f91',
        'd-med' : '#849bce',
        'd-hard' : '#5f7adb',
        'd-text': '#f1f1f1',
      }
    },
  },
  plugins: [],
}

