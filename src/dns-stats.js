const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if(!domains.length) return {};
  let sortArr = domains
    .map(e => `.${e.split('.').reverse().join('.')}`)
    .sort((a, b) => a.length - b.length);
  
  let primaryDomain = sortArr[0].split('.')[1];
  sortArr.unshift(`.${primaryDomain}`);
  let retObj = {};
  console.log(sortArr);

  for (let i = 0; i < sortArr.length; i++) {
    let count = 0;

    for (let j = i; j < sortArr.length; j++) {
      if (sortArr[j].includes(sortArr[i])) {
        count++;
      }
    }

    if(i === 0) {
      retObj[sortArr[i]] = count - 1;
    } else {
      retObj[sortArr[i]] = count;
    }

  }

  return retObj;
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
