const fs = require('fs');
const exec = require('child_process').exec;

const log = (message) =>
  console.log(`atomable: ${message}`);

/**
 * () copies source files recursively to destination omiting js and es
 */
module.exports = (tmp) => {
  return new Promise((resolve, reject) => {
    exec('npm install --production', {
      cwd: tmp
    }, (error, stdout, stderr) => {
      if (error) {
        reject(err);
      }
      resolve();
    });
  });
};