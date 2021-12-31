module.exports = {
  overrides: [
    {
      extends: ['./airbnb-typescript'].map((e) => require.resolve(e)),
      rules: {
        'import/no-anonymous-default-export': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
      files: ['./**/*.stories.tsx'],
    },
  ],
};
