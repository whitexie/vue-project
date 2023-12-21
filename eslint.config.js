const antfu = require('@antfu/eslint-config').default

const restrictedSyntaxJs = ['LabeledStatement', 'WithStatement']

module.exports = antfu(
  {
    vue: true,
  },
  {
    languageOptions: {
      globals: {
        API: 'readonly',
        $: 'readonly',
        _: 'readonly',
        upminiid: 'readonly',
      },
    },
    rules: {
      'unicorn/filename-case': 'off',
      'unicorn/explicit-length-check': 'off',
      'unicorn/no-array-push-push': 'off',
      'no-restricted-syntax': ['error', ...restrictedSyntaxJs],
      'import/no-default-export': 'off',
      'no-console': 'warn',
      'no-undef': ['error'],
      'curly': 'off',
      'vue/block-order': 'off',
      'vue/no-deprecated-slot-attribute': 'off',
      'ts/no-invalid-this': 'off',
      'vue/no-v-for-template-key-on-child': 'off',
      'vue/custom-event-name-casing': 'off',
      'vue/no-deprecated-v-bind-sync': 'off',
      'vue/no-mutating-props': [
        'error',
        {
          shallowOnly: true,
        },
      ],
      'style/semi': 'off',
      'semi': [2, 'always'],
    },
    files: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.jsx'],
  },
  {
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    files: ['src/**/*.spec.js'],
  },
)
