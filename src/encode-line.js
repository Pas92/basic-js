const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let ret = '';
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    if(str[i] === str[i + 1]) {
      counter++;
    } else {
      ret = counter === 1 ? `${ret}${str[i]}` :`${ret}${counter}${str[i]}`;
      counter = 1;
    }
  }

  return ret;
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
