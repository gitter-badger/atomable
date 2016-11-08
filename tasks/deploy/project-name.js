'use strict';

module.exports = () => {
  try {
    return require('./package.json').name;
  }
  catch (err) {
    return process.cwd().split(/[\\/]/g).pop();
  }
};