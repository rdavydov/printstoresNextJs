const path = require('path');
const withLess = require('@zeit/next-less');

module.exports = {
  distDir: 'build',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
