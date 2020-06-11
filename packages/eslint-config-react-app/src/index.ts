/**
 * Standard ESLint config for Favware projects using React + TypeScript
 * @example
 * ```json
 * {
 *   "extends": "@favware/eslint-config-react-app"
 * }
 * ```
 */
export const config = {
  root: true,
  extends: ['@favware', 'plugin:import/typescript'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: { jsx: true },
    jsx: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Overwriting config from @favware/eslint-config to better suite React applications
    'no-invalid-this': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
        filter: {
          regex: '^(?:VariableDeclarator|AssignmentExpression)$',
          match: false
        }
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'property',
        modifiers: ['readonly'],
        format: ['PascalCase']
      },
      {
        selector: 'enumMember',
        format: ['PascalCase']
      },
      {
        selector: 'typeLike',
        format: ['PascalCase']
      }
    ],

    // Implement desired rules that also get set by eslint-config-react-app
    'no-extra-label': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: true }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ],
        allowSamePrecedence: false
      }
    ],
    'no-multi-str': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message:
          'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting'
      },
      {
        object: 'System',
        property: 'import',
        message:
          'Please use import() instead. More info: https://facebook.github.io/create-react-app/docs/code-splitting'
      }
    ],
    'getter-return': 'warn',

    // Configure eslint-plugin-import
    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-webpack-loader-syntax': 'error',

    // Configure eslint-plugin-react
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true
      }
    ],
    'react/jsx-no-comment-textnodes': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-children-prop': 'warn',
    'react/no-access-state-in-setstate': 'warn',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/no-this-in-sfc': 'warn',
    'react/no-typos': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'error',
    'react/style-prop-object': 'warn',
    'react/void-dom-elements-no-children': 'warn',

    // Configure eslint-plugin-jsx-a11y
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/alt-text': 'warn',
    'jsx-a11y/anchor-has-content': 'warn',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref']
      }
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': 'warn',
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-role': [
      'warn',
      {
        ignoreNonDOM: true
      }
    ],
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/heading-has-content': 'warn',
    'jsx-a11y/iframe-has-title': 'warn',
    'jsx-a11y/img-redundant-alt': 'warn',
    'jsx-a11y/no-access-key': 'warn',
    'jsx-a11y/no-distracting-elements': 'warn',
    'jsx-a11y/no-redundant-roles': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    'jsx-a11y/scope': 'warn',

    // Configure eslint-plugin-react-hooks
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error'
  }
};

module.exports = config;
export default config;
