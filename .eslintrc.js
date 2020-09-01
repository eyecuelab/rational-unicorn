const [OFF, WARN, ERROR] = [0, 1, 2];
​
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'airbnb',
    'plugin:import/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'import',
    'react-hooks',
    'jsx-a11y',
  ],
  rules: {
    // import
    'import/no-extraneous-dependencies': ERROR,
​
    // react
    'react/destructuring-assignment': OFF,
    'react/jsx-filename-extension': [ERROR, { extensions: ['.js'] }],
    'react/jsx-one-expression-per-line': OFF,
    'react/prop-types': [
      ERROR,
      {
        skipUndeclared: true,
      },
    ],
​
    // react-hooks
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ERROR,
​
    // jsx-a11y
    'jsx-a11y/anchor-is-valid': [ERROR, {
      components: [],
    }],
​
    // base
    'arrow-parens': [ERROR, 'always'],
    camelcase: OFF,
    'class-methods-use-this': OFF,
    'comma-dangle': [
      ERROR,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'function-paren-newline': [ERROR, 'consistent'],
    'implicit-arrow-linebreak': OFF,
    'lines-between-class-members': [
      ERROR,
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-len': [
      ERROR,
      {
        code: 120,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'no-console': [
      ERROR,
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-plusplus': OFF,
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'styled-components',
            message: 'Please import from styled-components/macro.',
          },
        ],
        patterns: ['!styled-components'],
      },
    ],
    'no-use-before-define': [
      ERROR,
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'object-curly-newline': [ERROR, { consistent: true }],
    'operator-linebreak': [
      ERROR,
      'before',
      {
        overrides: {
          '=': 'after',
        },
      },
    ],
    radix: [ERROR, 'as-needed'],
    'space-before-function-paren': [
      ERROR,
      {
        anonymous: 'ignore',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'valid-jsdoc': [
      WARN,
      {
        prefer: {
          arg: 'param',
          argument: 'param',
          class: 'constructor',
          return: 'returns',
          virtual: 'abstract',
        },
        preferType: {
          Boolean: 'boolean',
          Number: 'number',
          object: 'Object',
          String: 'string',
        },
      },
    ],
  },
};