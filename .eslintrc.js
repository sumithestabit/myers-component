module.exports = {
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    'no-multiple-empty-lines': ['error', {
      'max': 1 ,
      'maxBOF': 0,
      'maxEOF': 0,
    }],
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
  },
};
