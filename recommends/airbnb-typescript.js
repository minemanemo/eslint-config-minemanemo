module.exports = {
  extends: ['airbnb', 'airbnb-typescript', 'plugin:import/recommended', 'plugin:import/typescript'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    // '@typescript-eslint/no-floating-promises': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // 'react/display-name': 'off',
  },
};
