module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'airbnb-typescript', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react-refresh', 'react', '@typescript-eslint', 'import'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'no-console': 'warn',
    'quotes': ['error', 'single'],
    'linebreak-style': ['error', 'unix'],
    'react/jsx-filename-extension': [1, {
      'extensions': ['.tsx']
    }],
    'react/jsx-one-expression-per-line': 0,
    'react/forbid-prop-types': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'import/extensions': ['error', 'ignorePackages', {
      '': 'never',
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never'
    }],
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
  }
};