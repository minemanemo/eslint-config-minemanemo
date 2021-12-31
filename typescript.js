module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['./recommends/airbnb-typescript', './recommends/prettier', './recommends/next'].map(
    (e) => require.resolve(e),
  ),
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {},
};
