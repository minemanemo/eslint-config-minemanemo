module.exports = {
  extends: ['./recommends/airbnb', './recommends/prettier', './recommends/next'].map((e) =>
    require.resolve(e),
  ),
  env: {
    node: true,
    browser: true,
  },
  settings: {},
  rules: {},
}
