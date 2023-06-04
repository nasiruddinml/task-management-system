const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const buildPrettierCommand = () =>
  `npm run format`;

module.exports = {
  '*.{ts,tsx}': [buildEslintCommand],
  '*.{ts,tsx,scss,css}': [buildPrettierCommand],
};
