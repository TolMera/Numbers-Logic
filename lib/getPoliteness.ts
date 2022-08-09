const EnhancedNumber = require('../classes/enhancedNumber');
const isPowerOf2 = require('./isPowerOf2');
const isEven = require('./isEven');

// https://en.wikipedia.org/wiki/Polite_number
function getPoliteness(n) {
    n = EnhancedNumber(n);
    if (n._getPoliteness) {
        return n.getPoliteness;
    }

    if (isPowerOf2(n)) {
        return 0;
    }
    // https://www.geeksforgeeks.org/find-politeness-number/
    let result = 1;

    // Eliminate all even prime factor
    // of number of n
    let mutableN = n.number;
    while (isEven(mutableN)) {
        mutableN /= 2;
    }

    // n must be odd at this point, so
    // iterate for only odd numbers
    // till sqrt(n)
    for (let i = 3; i * i <= mutableN; i += 2) {
        let divCount = 0;

        // if i divides n, then start
        // counting of Odd divisors
        while (mutableN % i == 0) {
            mutableN /= i;
            ++divCount;
        }

        result *= divCount + 1;
    }

    // If n odd prime still remains
    // then count it
    if (mutableN > 2) {
        result *= 2;
    }

    n.getPoliteness = result - 1;
    return n.getPoliteness;
};

module.exports = getPoliteness;
