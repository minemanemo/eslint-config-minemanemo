module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['./airbnb-typescript', './prettier', './next'].map((e) => require.resolve(e)),
  env: {
    node: true,
    browser: true,
  },
  rules: {},
}
