module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'warn',
    // Opcional: permitir JSX en .tsx
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
