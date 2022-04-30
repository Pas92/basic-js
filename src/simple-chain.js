const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  addLink(value) {
    arguments.length ? this.chain.push(`( ${value} )`) : this.chain.push('( )');
    return this;
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  removeLink(position) {
    const chainLength = this.chain.length;
    if (typeof position === 'number' && position > 0 && position <= chainLength && position % position === 0) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }

    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  reverseChain() {
    this.chain.reverse();

    return this;
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  },
  finishChain() {
    const string = this.chain.join('~~');
    this.chain = [];
    return string;
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
