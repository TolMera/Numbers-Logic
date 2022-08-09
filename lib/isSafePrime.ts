const isPrime = require("./isPrime");

// https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes
function isSafePrime(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isSafePrime) {
        return n.isSafePrime;
    }

    if (isPrime(n) && isPrime((n.number / 2) - 1)) {
        n.isSafePrime = true;
        return n.isSafePrime;
    }
    n.isSafePrime = false;
    return n.isSafePrime;
}

module.exports = isSafePrime;
