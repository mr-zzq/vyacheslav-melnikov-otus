const mri = require('mri');

const tree = require('./tree.js');

const argv = process.argv.slice(2);
const userOptions = mri(argv, {
  alias: {
    d: 'depth',
  },
});

const defaultOptions = {
  depth: Infinity,
};

const combinedOptions = Object.assign(defaultOptions, userOptions);

const rootPath = userOptions._[0];

tree(rootPath, combinedOptions);