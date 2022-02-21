const logX = require("./logX");
const sieve = require("./sieve");

function isPrimePower(n) {
    // https://en.wikipedia.org/wiki/Prime_power
    // Every prime power (except powers of 2) has a primitive root
    // All prime powers are deficient numbers.
    // A prime power pn is an n-almost prime.
    // It is not known whether a prime power pn can be an amicable number.
    // If there is such a number, then pn must be greater than 101500 and n must be greater than 1400. 

    if (n <= 1) {
        return false;
    }

    let theSieve = sieve(n);
    if (theSieve.includes(n)) {
        return true;
    }
    theSieve = theSieve.filter(v => v <= Math.sqrt(n));

    let x = 1;
    while (theSieve.length > 0) {
        const theLog = logX(n, x);
        if (theSieve.indexOf(x) > -1) {
            // This is not going to be exactly accurate, but should be able to get within a very tight margin.
            if (Math.pow(x, Math.round(theLog)) === n) {
                return true;
            }
        }
        theSieve = theSieve.filter(v => v >= x);
        x++;
    }
    return false;
};

module.exports = isPrimePower;
