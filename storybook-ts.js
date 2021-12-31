module.exports = {
  extends: ['./typescript'].map((e) => require.resolve(e)),
  rules: {
    // 'react/jsx-filename-extension': 'off',
    // 'import/extensions': 'off',
  },
};
