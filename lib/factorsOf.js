const EnhancedNumber = require('../classes/enhancedNumber');
const sieve = require("./sieve");

function factorsOf(n) {
    n = EnhancedNumber(n);
    if (n._factorsOf) {
        return Array.from(n.factorsOf);
    }
    
    mutableN = n.number;
    mutableN = Math.abs(mutableN);

    const primesToN = sieve(n);
    const factors = [];

    for (var k = 0; k < primesToN.length && mutableN > 1; k++) {
        const prime = primesToN[k];
        if (mutableN % prime === 0) {
            const factor = { prime, power: 0 };
            while (mutableN % prime === 0) {
                // The power could be calculated with P = Math.log(n) / Math.log(prime)
                factor.power++;
                mutableN /= prime;
            }
            factors.push(factor);
        }
    }

    if (mutableN > 1) {
        // Whatever remains, if it is not 1, must be prime
        factors.push({ prime: mutableN, power: 1 });
    }

    if (n.number < 0) {
        const negatives = [];
        for (const factor of factors) {
            negatives.push({ ...factor });
            negatives[negatives.length - 1].prime *= -1;
        }
        factors.push(...negatives);
    }

    n.factorsOf = factors;
    return Array.from(n.factorsOf);
};

module.exports = factorsOf;
