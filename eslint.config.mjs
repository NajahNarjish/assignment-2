import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'error',
      'no-undef': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-unused-expressions': 'error',
      'prefer-constant': 'error',
    },
    globals: {
      process: 'readonly',
    },
  },
);
