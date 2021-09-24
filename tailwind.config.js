const plugin = require('tailwindcss/plugin');

module.exports = {
  // purge: ['./src/**/*.html', './src/**/*.js'],
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        primary: '#725EFF',
        dark: '#19212B',
        purple: '#4E3EB1',
        grey: '#EBEDF1',
      },
      fontFamily: {
        header: 'appd_sans_tighterregular',
        body: 'appd_sans_tighterlight',
        light: 'appd_sans_tighterlight',
        medium: 'appd_sans_tightermedium',
        bold: 'appd_sans_tighterbold',
        heavy: 'appd_sans_tighterheavy',
      },
      fontSize: {
        h1: '4.8rem',
        h2: '2.8rem',
        h3: '2rem',
        h4: '1.6rem',
        18: '1.8rem',
        14: '1.4rem',
      },
      letterSpacing: {
        tightest: '-0.1em',
      },
      borderRadius: {
        6: '0.6rem',
      },
      maxHeight: {
        500: '50rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        'h1, h2, h3, h4, h5': {
          lineHeight: config('theme.lineHeight.tight'),
        },
      });
    }),
  ],
};
