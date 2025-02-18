import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'linebreak-style': ['error', 'unix'], // Enforce UNIX line breaks
      'react/prop-types': 'off', // Disable prop-types rule for React (optional based on your preference)
      'react/react-in-jsx-scope': 'off', // No need to import React in scope (for React 17+)
      'jsx-a11y/anchor-is-valid': 'off', // Disable anchor link validation (optional)
      '@typescript-eslint/no-unused-vars': ['error'], // Disable unused variables rule for TypeScript
      '@typescript-eslint/explicit-function-return-type': ['off'], // Disable explicit return types (optional)
      '@typescript-eslint/explicit-module-boundary-types': ['off'], // Disable module boundary return type checks (optional)
      '@typescript-eslint/no-empty-function': ['off'], // Allow empty functions (optional)
      '@typescript-eslint/no-explicit-any': ['off'], // Allow explicit 'any' types (optional)
    },
  },
  // {
  //   plugins: ['check-file'],
  //   files: ['src/**/!(__tests__)/*'],
  //   rules: {
  //     'check-file/folder-naming-convention': [
  //       'error',
  //       {
  //         '**/*': 'KEBAB_CASE', // Enforce Kebab case for all folders
  //       },
  //     ],
  //   },
  // },
];