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
  // Handle zero (perhaps undefined in some sense, but this value
  // matches Wolfram Alpha):
  if (n === 0) return 0;

  // Factor the absolute value so that negative numbers are
  // permissible:
  const factors = factorsOf(Math.abs(n));

  // Return zero if any factor has power > 1:
  if (factors.find(record => record.power > 1)) return 0;

  if (factors.length & 0b1 === 1) {
    // return -1 if odd
    return -1;
  }
  // Otherwise return 2 if even:
  return 1;
}

module.exports = mobius;
