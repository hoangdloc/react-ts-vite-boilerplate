module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'standard-with-typescript',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    semi: ['error', 'always'],
    '@typescript-eslint/semi': 'off',
    'no-console': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        arrowParens: 'avoid',
        trailingComma: 'none',
        printWidth: 80,
        singleAttributePerLine: true,
        useTabs: false,
        tabWidth: 2,
        endOfLine: 'auto'
      }
    ]
  }
};
