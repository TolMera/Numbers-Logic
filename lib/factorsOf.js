const sieve = require("./sieve");

function factorsOf(n) {
    const origNumber = n;
    n = Math.abs(n);
    const primesToN = sieve(n);
    const factors = [];
    
    for (var k = 0; k < primesToN.length && n > 1; k++) {
        const prime = primesToN[k];
        if (n % prime === 0) {
            const factor = { prime, power: 0 };
            while (n % prime === 0) {
                // The power could be calculated with P = Math.log(n) / Math.log(prime)
                factor.power++;
                n /= prime;
            }
            factors.push(factor);
        }
    }

    if (n > 1) {
        // Whatever remains, if it is not 1, must be prime
        factors.push({ prime: n, power: 1 });
    }

    if (origNumber < 0) {
        const negatives = [];
        for (const factor of factors) {
            negatives.push({...factor});
            negatives[negatives.length-1].prime *= -1;
        }
        factors.push(...negatives);
    }

    return factors;
};

module.exports = factorsOf;
