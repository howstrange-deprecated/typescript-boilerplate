// Configurações do eslint para fazer lint no codigo typescript
module.exports = {
  // Configuração de root
  root: true,
  // Ambiente de execução
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  // eslint parser para typescript
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  // Extensões de arquivos que serão analisados
  overrides: [
    {
      files: ['*.ts', '*.js'],
    }
  ],
  // plugins do eslint para typescript
  plugins: ['@typescript-eslint/eslint-plugin'],
  // extends do eslint para typescript
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  // Eslint ignora
  ignorePatterns: ['.eslintrc.js'],
  // Regras do eslint para typescript
  rules: {
    // Regras basicas
    indent: [
      'error',
      2
    ],
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'always'
    ],
    // regras avançadas
    'linebreak-style': [
      'error',
      'unix'
    ],
    // Regras do typescript
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};
