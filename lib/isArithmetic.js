const divisors = require('./divisors');
const sum = require('./sum');

function isArithmetic(n) {
    if (n === 0) {
        return false;
    }
    if (n === 1 || n < 0) {
        return true;
    }

    const divs = divisors(n)
    const mean = sum(divs) / divs.length;
    if (Number.isInteger(mean)) {
        return true;
    }
    return false;
};

module.exports = isArithmetic;
