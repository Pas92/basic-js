const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [];
  let arr = `${n}`.split('');

  for(let i = 0; i < arr.length; i++) {
    let num = [...arr];
    num.splice(i, 1);
    numbers.push(+num.join(''));
  }

  return numbers.sort((a, b) => a - b).pop();
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
