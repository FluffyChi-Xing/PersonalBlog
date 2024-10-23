// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme': '#b84141',
        'darkTheme': '#5e3535',
        'lightGray': '#E4E4E9'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
