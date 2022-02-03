const P_number_theory = require('number-theory');
const P_numbers = require('numbers');
const { isPowerOf2, isSelf } = require("./ownCode");

const isCompositeOfXPrimes = (n, count) => {
    const factors = P_number_theory.factor(n);
    if (count === factors.length) {
        return true;
    }
    return false;
};
const isMersennePrime = (n) => {
    if (P_number_theory.isPrime(n) && isPowerOf2(n + 1)) {
        return true;
    }
    return false;
};
const isSophieGermainPrime = (n) => {
    if (P_number_theory.isPrime(n) && P_number_theory.isPrime(2 * n + 1)) {
        return true;
    }
    return false;
};
const isSafePrime = (n) => {
    if (P_number_theory.isPrime(n) && P_number_theory.isPrime(0.5 * n - 1)) {
        return true;
    }
    return false;
};
const isSelfPrime = (n) => {
    if (P_number_theory.isPrime(n) && isSelf(n)) {
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
            if (P_number_theory.isPrime(root)) {
                return true;
            }
        }
    }
    return false;
};
const isProductOfXPrimes = (n, x) => {
    if (P_number_theory.primeFactors(n).length === x) {
        return true;
    }
    return false;
};

module.exports = {
    isCompositeOfXPrimes,
    isMersennePrime,
    isPrimePower,
    isProductOfXPrimes,
    isSafePrime,
    isSelfPrime,
    isSophieGermainPrime,
}