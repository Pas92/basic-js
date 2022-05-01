const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let min = s1.split('').sort().join('');
  let max = s2.split('').sort().join('');

  let counter = 0;

  if(min.length > max.length) {
    [min, max] = [max, min];
  }

  while(max.length) {
    if (min.includes(max[0])) {
      counter++;
      max = max.substring(1);
      min = min.substring(1);
    } else {
      max = max.substring(1);
    }
  }

  return counter;
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
