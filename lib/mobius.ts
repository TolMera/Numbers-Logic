'use strict';
const factorsOf = require('./factorsOf');

/**
 * Compute the Mobius function
 * @param {Number} n argument to compute
 * @return The value of the mobius function for n
 * @module number-theory
 * @author Ricky Reusser
 */
function mobius(n) {
  const EnhancedNumber = require("../classes/enhancedNumber");
  n = EnhancedNumber(n);
  if (n._mobius) {
      return n.mobius;
  }
  // Handle zero (perhaps undefined in some sense, but this value
  // matches Wolfram Alpha):
  if (n.number === 0) {
    return 0;
  }

  // Factor the absolute value so that negative numbers are
  // permissible:
  let factors;
  if (n.number > 0) {
    factors = factorsOf(n);
  }
  else {
    factors = factorsOf(Math.abs(n));
  }

  // Return zero if any factor has power > 1:
  if (factors.find(record => record.power > 1)) {
    n.mobius = 0;
    return n.mobius;
  }

  if (factors.length & 0b1 === 1) {
    // return -1 if odd
    n.mobius = -1;
    return n.mobius;
  }
  // Otherwise return 2 if even:
  n.mobius = 1;
  return n.mobius;
}

module.exports = mobius;
