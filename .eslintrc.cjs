// .eslintrc.cjs
const js = require('@eslint/js')
const tseslint = require('typescript-eslint')

module.exports = tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    ignores: ['dist', 'node_modules'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      import: require('eslint-plugin-import-x'),
      n: require('eslint-plugin-n'),
      promise: require('eslint-plugin-promise'),
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
    },
    extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React moderno
      'react/react-in-jsx-scope': 'off',

      // TS moderno
      '@typescript-eslint/no-unused-vars': ['warn'],

      // Imports ordenados
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
)
