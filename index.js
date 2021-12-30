module.exports = {
  parser: "@babel/eslint-parser",
  extends: [].map((e) => require.resolve(e)),
  env: {
    node: true,
    browser: true,
  },
  parserOption: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  settings: {
    // eslint-plugin-react configuration: https://github.com/yannickcr/eslint-plugin-react#configuration
    react: {
      createClass: "createReactClass",
      pragma: "React",
      version: "detect",
    },
  },
  rules: {},
};
