const P_number_theory = require('number-theory');
const P_numbers = require('numbers');
const { factorsOf } = require("./factorsOf");
const { isPowerOf2, isSelf } = require("./ownCode");

const isPrime = (n) => {
    const factors = factorsOf(n);
    if (factors.length === 1 && factors[0].prime === n) return true;
    return false;
}

// https://en.wikipedia.org/wiki/Mersenne_prime
const isMersennePrime = (n) => {
    if (isPrime(n) && isPowerOf2(n + 1)) {
        return true;
    }
    return false;
};
// https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes
const isSophieGermainPrime = (n) => {
    if (isPrime(n) && isPrime(2 * n + 1)) {
        return true;
    }
    return false;
};
// https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes
const isSafePrime = (n) => {
    if (isPrime(n) && isPrime(0.5 * n - 1)) {
        return true;
    }
    return false;
};
const isSelfPrime = (n) => {
    if (isPrime(n) && isSelf(n)) {
        return true;
    }
    return false;
};
const isPrimePower = (n) => {
    // https://en.wikipedia.org/wiki/Prime_power
    // Every prime power (except powers of 2) has a primitive root
    // All prime powers are deficient numbers. A prime power pn is an n-almost prime. It is not known whether a prime power pn can be an amicable number. If there is such a number, then pn must be greater than 101500 and n must be greater than 1400. 
    for (let c = 1; c <= Math.sqrt(n); c++) {
        let root = Math.pow(n, 1 / c);
        if (P_numbers.basic.isInt(root)) {
            if (isPrime(root)) {
                return true;
            }
        }
    }
    return false;
};

const isProductOfXPrimes = (n, count) => {
    if (P_number_theory.primeFactors(n).length === count) {
        return true;
    }
    return false;
};

module.exports = {
    isPrime,
    isMersennePrime,
    isPrimePower,
    isProductOfXPrimes,
    isSafePrime,
    isSelfPrime,
    isSophieGermainPrime,
}
