const isPerfect = require('./isPerfect');
const divisors = require('./divisors');
const isPowerOf2 = require('./isPowerOf2');
const isSubsetSum = require("./isSubsetSum");

function isPractical(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isPractical) {
        return n.isPractical;
    }

    if (n === 0) {
        n.isPractical = false;
        return n.isPractical;
    }
    if (n === 1 || n === 2) {
        n.isPractical = true;
        return n.isPractical;
    }

    // Every power of two is also a practical number
    if (isPowerOf2(n)) {
        n.isPractical = true;
        return n.isPractical;
    }

    // Every even perfect number is also a practical number
    if (isPerfect(n)) {
        n.isPractical = true;
        return n.isPractical;
    }

    if (n % 4 === 0 || n % 6 === 0) {
        // Every practical number is divisible by 4 or 6 (or both).
        const divs = divisors(n);
        for (var i = 1; i < n.number; i++) {
            if (!isSubsetSum(divs, divs.length, i)) {
                n.isPractical = false;
                return n.isPractical;
            }
        }
        n.isPractical = true;
        return n.isPractical;
    }

    n.isPractical = false;
    return n.isPractical;
};

module.exports = isPractical;
