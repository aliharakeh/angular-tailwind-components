// require('dotenv').config();
// const enablePurge = process.env.NODE_ENV || false;

module.exports = {
  // purge: {
  //   enabled: enablePurge,
  //   content: [
  //     './src/**/*.html',
  //     './src/**/*.ts'
  //   ],
  // },
  purge: [
    './src/**/*.html',
    './src/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
