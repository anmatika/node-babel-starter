module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    mocha: true,
    jest: true,
  },
  globals: {
    expect: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [__dirname],
      },
    },
  },
  plugins: ['prettier'],
  extends: ['strongloop'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
  },
};
