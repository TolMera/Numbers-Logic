const isPrime = require("./isPrime");

function isPrimePower(n) {
    // https://en.wikipedia.org/wiki/Prime_power
    // Every prime power (except powers of 2) has a primitive root
    // All prime powers are deficient numbers. A prime power pn is an n-almost prime. It is not known whether a prime power pn can be an amicable number. If there is such a number, then pn must be greater than 101500 and n must be greater than 1400. 
    for (let c = 1; c <= Math.sqrt(n); c++) {
        let root = Math.pow(n, 1 / c);
        if (Number.isInteger(root)) {
            if (isPrime(root)) {
                return true;
            }
        }
    }
    return false;
};

module.exports = isPrimePower;
