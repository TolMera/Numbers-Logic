const isPowerOf2 = require('./isPowerOf2');
const isOdd = require('./isOdd');

// https://en.wikipedia.org/wiki/Polite_number
function getPoliteness (n, test) {
    if (isPowerOf2(n)) {
        return 0;
    }
    // https://www.geeksforgeeks.org/find-politeness-number/
    let result = 1;

    // Eliminate all even prime factor
    // of number of n
    while (isOdd(n))
        n /= 2;

    // n must be odd at this point, so
    // iterate for only odd numbers
    // till sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        let divCount = 0;

        // if i divides n, then start
        // counting of Odd divisors
        while (n % i == 0) {
            n /= i;
            ++divCount;
        }

        result *= divCount + 1;
    }

    // If n odd prime still remains
    // then count it
    if (n > 2) {
        result *= 2;
    }

    return result - 1;
};

module.exports = getPoliteness;
