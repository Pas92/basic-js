const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let rows = matrix.length;
  let columns = matrix[0].length;
  let isSum = true;

  console.log(rows);
  console.log(columns);

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < rows; j++) {
      console.log(matrix[j][i]);
      if(matrix[j][i] === 0) {
        isSum = false;
      } else if (isSum){
        sum += matrix[j][i];
      }
    }
    isSum = true;
  }

  return sum;
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  getMatrixElementsSum
};
