const path = require('path');

const buildEslintCommand = (filenames) =>
  `npm run lint`;

const buildPrettierCommand = () =>
  `npm run format`;

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand],
  '*.{ts,tsx,scss,css}': [buildPrettierCommand],
};
