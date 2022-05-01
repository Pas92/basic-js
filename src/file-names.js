const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let namesSet = new Set();
  let namesCounter = {};
  let ret = [];

  for(let e of names) {
    if(namesSet.has(e)) {
      namesCounter[e] = ++namesCounter[e];
      let newName = `${e}(${namesCounter[e]})`;
      ret.push(newName);
      namesSet.add(newName);
      namesCounter[newName] = 0;

    } else {
      namesSet.add(e);
      namesCounter[e] = 0;
      ret.push(e);
    }
  }

  return ret;
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
