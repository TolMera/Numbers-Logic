const isPrime = require("./isPrime");

// https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes
function isSophieGermainPrime (n) {
    if (isPrime(n) && isPrime(2 * n + 1)) {
        return true;
    }
    return false;
}

module.exports = isSophieGermainPrime;
