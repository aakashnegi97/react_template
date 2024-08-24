const { buttonConfig } = require("./src/config/themeCongif");

// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        button: buttonConfig
      },
    },
  },
  options: {
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
