const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


class DepthCalculator {
  count = 1;
  isEnd = false;
  calculateDepth (arr) {
    let ret = 1;
    let temp = JSON.parse(JSON.stringify(arr));

    while(true) {
      if (temp.find(e => e instanceof Array)) {
        ret++;
        temp = temp.flat();
      } else {
        break;
      }
    }

    return ret;
    // if (arr.find(e => e instanceof Array)) {
    //   this.count += 1;
    //   this.calculateDepth(arr.flat());
    // }
    
    // return this.count;
    // return this.count;
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }
}

module.exports = {
  DepthCalculator
};
