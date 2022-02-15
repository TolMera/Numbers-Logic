const P_number_theory = require('number-theory');
const divisors = require('./divisors');
const isPowerOf2 = require('./isPowerOf2');
const isSubsetSum = require("./isSubsetSum");


function isPractical(n) {
    if (n === 0)
        return false;
    if (n === 1 || n === 2)
        return true;

    // Every power of two is also a practical number
    if (isPowerOf2(n))
        return true;

    // Every even perfect number is also a practical number
    if (P_number_theory.isPerfect(n))
        return true;

    if (n % 4 === 0 || n % 6 === 0) {
        // Every practical number is divisible by 4 or 6 (or both).
        const divs = divisors(n);
        for (var i = 1; i < n; i++) {
            if (!isSubsetSum(divs, divs.length, i)) {
                return false;
            }
        }
        return true;
    }

    return false;
};

exports.isPractical = isPractical;
