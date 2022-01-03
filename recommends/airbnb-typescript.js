// module.exports = {
//   extends: ['airbnb-typescript', 'airbnb/hooks'],
//   rules: {
//     'import/no-extraneous-dependencies': 'off',
//     '@typescript-eslint/no-floating-promises': 'off',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-use-before-define': 'off',
//     'react/display-name': 'off',
//   },
// }

module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    // 'airbnb-base',
    // 'airbnb-typescript/base',
    // 'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:import/recommended',
    // 'plugin:import/typescript',
  ],
  rules: {
    // eslint-plugin-import
    'import/no-extraneous-dependencies': 'off',

    //
    // '@typescript-eslint/no-floating-promises': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    // 'react/display-name': 'off',
  },
};
