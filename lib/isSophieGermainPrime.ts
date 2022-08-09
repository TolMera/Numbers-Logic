const isPrime = require("./isPrime");

// https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes
function isSophieGermainPrime (n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isSophieGermainPrime) {
        return n.isSophieGermainPrime;
    }

    if (isPrime(n) && isPrime(2 * n.number + 1)) {
        n.isSophieGermainPrime = true;
        return n.isSophieGermainPrime;
    }
    n.isSophieGermainPrime = false;
    return n.isSophieGermainPrime;
}

module.exports = isSophieGermainPrime;
