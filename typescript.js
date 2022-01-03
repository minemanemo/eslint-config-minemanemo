module.exports = {
  extends: [
    // airbnb + react
    './recommends/airbnb-typescript',
    './recommends/prettier',
    './recommends/next',
  ].map((e) => require.resolve(e)),
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  rules: {},
};
