/**
 * Default ESLint configuration for Favware projects
 * @example
 * ```json
 * {
 *   "extends": "@favware"
 * }
 * ```
 */
export const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    jsx: true,
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: { jsx: false }
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
    commonjs: true
  },
  rules: {
    // TypeScript
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/interface-name-prefix': ['error', { prefixWithI: 'never' }],
    '@typescript-eslint/no-for-in-array': 'warn',
    '@typescript-eslint/no-unnecessary-qualifier': 'warn',
    '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
    '@typescript-eslint/no-useless-constructor': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-includes': 'warn',
    '@typescript-eslint/unified-signatures': 'warn',

    // Best Practices
    eqeqeq: ['error', 'smart'],
    'no-else-return': 'warn',
    'no-eval': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-return-assign': 'error',
    'no-sequences': 'error',
    yoda: 'error',

    // ECMAScript 6
    'no-duplicate-imports': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error'
  }
};

module.exports = config;
export default config;
