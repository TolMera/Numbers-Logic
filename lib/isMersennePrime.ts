const isPowerOf2 = require('./isPowerOf2');
const isPrime = require('./isPrime');


// https://en.wikipedia.org/wiki/Mersenne_prime
function isMersennePrime(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isMersennePrime) {
        return n.isMersennePrime;
    }

    if (isPrime(n) && isPowerOf2(n + 1)) {
        n.isMersennePrime = true;
        return n.isMersennePrime;
    }
    n.isMersennePrime = false;
    return n.isMersennePrime;
}

module.exports = isMersennePrime;
