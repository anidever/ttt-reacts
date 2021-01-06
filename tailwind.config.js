module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      cursor: {
        pointer: 'pointer',
      },
      fontFamily: {
        mono: 'Comic Sans MS',
      },
    },
  },
  variants: {},
  plugins: [],
};
