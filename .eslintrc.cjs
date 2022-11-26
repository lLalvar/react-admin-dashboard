module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'react/function-component-definition': [
      'off',
      {
        namedComponents: null,
        unnamedComponents: null,
      },
    ],
    'no-unused-vars': 'warn',
    'react/no-array-index-key': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': [
      'off',
      {
        ignore: null,
        customValidators: null,
        skipUndeclared: null,
      },
    ],
  },
}
