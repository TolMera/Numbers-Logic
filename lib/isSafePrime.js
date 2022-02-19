const isPrime = require("./isPrime");

// https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes
function isSafePrime(n) {
    if (isPrime(n) && isPrime((n / 2) - 1)) {
        return true;
    }
    return false;
}

module.exports = isSafePrime;
