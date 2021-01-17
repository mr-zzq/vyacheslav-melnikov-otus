const fs = require('fs');
const nodePath = require('path');

const printLinesRecursively = require('./printer');

function tree(path = '.', options) {
  const rootDir = fs.readdirSync(path);
  const absoluteDirPath = nodePath.join(process.cwd(), path);

  process.stdout.write(`${absoluteDirPath}\n`);
  rootDir.forEach(printLinesRecursively(0, absoluteDirPath, '', options));
}

module.exports = tree;