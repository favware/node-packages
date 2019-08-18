const config = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.eslint.json',
    jsx: true,
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: { jsx: true },
  },
  extends: [
    'plugin:jest/all',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
    commonjs: true,
  },
  rules: {

    // TypeScript
    '@typescript-eslint/indent': [ 'error', 2 ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/consistent-type-definitions': [
      'error',
      'type'
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
          Object: {
            message: 'Use object instead',
            fixWith: 'object',
          },
          '{}': {
            message: 'Use object instead',
            fixWith: 'object',
          },
          Array: null,
        },
      }
    ],
    '@typescript-eslint/func-call-spacing': [
      'error'
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-extra-parens': [
      'error',
      'functions'
    ],
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {allowStaticOnly: true}
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'off',
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    '@typescript-eslint/unbound-method': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@typescript-eslint/camelcase': [ 'error', { allow: [ 'api_key', 'app_id', 'show_alternative', 'store_link', 'grant_type' ] } ],

    // Jest Rules
    'jest/consistent-test-it': [ 'error', {fn: 'test'} ],
    'jest/no-hooks': 'off',
    'jest/lowercase-name': 'off',
    'jest/no-export': 'off',
    'jest/prefer-expect-assertions': 'off',
    'jest/no-if': 'off',
    'jest/prefer-inline-snapshots': 'off',
    'jest/expect-expect': [ 'error', { assertFunctionNames: [ 'expect', 'expectSaga', 'testSaga' ] } ],

    // Possible Errors
    'no-console': 'warn',
    'no-template-curly-in-string': 'error',
    'require-atomic-updates': 'off',

    // Best Practices
    'accessor-pairs': 'error',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'consistent-return': 'error',
    curly: [
      'error',
      'multi-line',
      'consistent'
    ],
    'default-case': 'error',
    'dot-location': [
      'error',
      'property'
    ],
    eqeqeq: [
      'error',
      'smart'
    ],
    'max-classes-per-file': [
      'error',
      3
    ],
    'no-alert': 'error',
    'no-caller': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: [
          'todo',
          'fixme'
        ],
        location: 'anywhere',
      }
    ],
    'prefer-promise-reject-errors': 'error',
    radix: [
      'error',
      'as-needed'
    ],
    'wrap-iife': 'error',
    yoda: 'error',

    // Strict Mode
    strict: [
      'error',
      'never'
    ],

    // Variables
    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-undef-init': 'error',

    // Node.js and CommonJS
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': 'error',
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',

    // Stylistic Issues
    'array-bracket-spacing': [
      'error',
      'always'
    ],
    'block-spacing': 'error',
    'brace-style': 'error',
    'capitalized-comments': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'always-multiline',
        imports: 'never',
        exports: 'never',
        functions: 'ignore',
      }
    ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': 'error',
    'eol-last': [
      'error',
      'never'
    ],
    'func-name-matching': 'error',
    'func-names': 'error',
    'func-style': [
      'error',
      'declaration',
      {allowArrowFunctions: true}
    ],
    'implicit-arrow-linebreak': 'error',
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'linebreak-style': 'warn',
    'lines-between-class-members': [
      'error',
      'always',
      {exceptAfterSingleLine: true}
    ],
    'max-len': [
      'warn',
      {
        code: 200,
        tabWidth: 2,
      }
    ],
    'max-statements-per-line': [
      'error',
      {max: 1}
    ],
    'new-cap': [ 'error', { capIsNewExceptionPattern: '^(?:[A-Z]+)_'} ],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': [
      'error',
      {enforceInMethodNames: true}
    ],
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 4,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 4,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 10,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 4,
        },
      }
    ],
    'one-var': [
      'error',
      {
        separateRequires: true,
        var: 'never',
        let: 'never',
        const: 'never',
      }
    ],
    'one-var-declaration-per-line': [
      'error',
      'always'
    ],
    'operator-linebreak': [
      'error',
      'after',
      {
        overrides: {
          '?': 'ignore',
          ':': 'ignore',
        },
      }
    ],
    'padded-blocks': [
      'error',
      'never'
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      }
    ],
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'as-needed',
      {numbers: true}
    ],
    quotes: [
      'error',
      'single'
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      }
    ],
    'semi-style': [
      'error',
      'last'
    ],
    'sort-vars': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      }
    ],
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'no-useless-computed-key': 'error',

    // ECMAScript 6
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'arrow-spacing': 'error',
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      }
    ],
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'template-curly-spacing': 'error',
    'yield-star-spacing': [
      'error',
      'after'
    ],
  },
};

module.exports = config;
export default config;