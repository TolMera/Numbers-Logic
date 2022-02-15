const isPowerOf2 = require('./isPowerOf2');
const isPrime = require('./isPrime');


// https://en.wikipedia.org/wiki/Mersenne_prime
function isMersennePrime(n) {
    if (isPrime(n) && isPowerOf2(n + 1)) {
        return true;
    }
    return false;
}

module.exports = isMersennePrime;
