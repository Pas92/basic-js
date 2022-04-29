const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  console.log(arr);

  const array = [...arr];

  for(let i = 0; i < array.length; i++) {
    switch (array[i]) {
    case '--discard-next':
      array[i+1] = null;
      array[i] = null;
      break;
    case '--discard-prev':
      array[i - 1] = null;
      array[i] = null;
      break;
    case '--double-next':
      array[i] = array[i + 1];
      break;
    case '--double-prev':
      array[i] = array[i - 1];
      break;
    }
  }

  return array.filter(e => e);
  // return arr.map((e, i, array) => {
  //   switch(e) {
  //   case '--discard-next':
  //     array[i+1] = null;
  //     array[i] = null;
  //     break;
  //   case '--discard-prev':
  //     array[i - 1] = null;
  //     array[i] = null;
  //     break;
  //   case '--double-next':
  //     return array[i + 1];
  //   case '--double-prev':
  //     return array[i - 1];
  //   default: return e;    }
  // }).filter(e => e);
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  transform
};
