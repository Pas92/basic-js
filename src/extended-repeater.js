const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = `${str}`;
  let addition = options.addition !== undefined ? `${options.addition}` : '';
  let separator = options.separator ? `${options.separator}` : '+';
  let additionSeparator = options.additionSeparator ? `${options.additionSeparator}` : '|';

  let repeatTimes = typeof options.repeatTimes === 'number' ? options.repeatTimes : 1;
  let additionRepeatTimes = typeof options.additionRepeatTimes === 'number' ? options.additionRepeatTimes : 1;

  let fullString = `${string}${addition}`;

  for (let i = 1; i < additionRepeatTimes; i++) {
    fullString = `${fullString}${additionSeparator}${addition}`;
  }

  let result = fullString;

  for (let i = 1; i < repeatTimes; i++) {
    result = `${result}${separator}${fullString}`;
  }

  return result;

  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
}

module.exports = {
  repeater
};
