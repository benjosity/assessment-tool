const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.js',
      './dist/**/*.html',
      './dist/**/*.js',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        primary: '#FE5B78',
      },
      fontFamily: {
        header: 'CircularXX Bold',
        body: 'CircularXX',
        thin: 'CircularXX Thin',
        light: 'CircularXX Light',
        medium: 'CircularXX Medium',
        bold: 'CircularXX Medium',
        black: 'CircularXX Black',
        xblack: 'CircularXX ExtraBlack',
      },
      fontSize: {
        h1: '9.6rem',
        h2: '4rem',
        h3: '3rem',
        h4: '2rem',
        24: '2.4rem',
        14: '1.4rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        a: {
          textDecoration: 'none',
          transition: '0.4s ease',
        },
        'a:hover': {
          color: config('theme.textColor.primary'),
        },
        'h1, h2, h3, h4, h5': {
          lineHeight: config('theme.lineHeight.tight'),
        },
      });
    }),
  ],
};
