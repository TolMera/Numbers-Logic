const divisors = require('./divisors');
const factorsOf = require('./factorsOf');

function isSphenic(n) {
    if (n <= 0) {
        return false;
    }
    if (n === 1) {
        return false;
    }

    if (divisors(n).length === 8) {
        if (factorsOf(n).length === 3) {
            return true;
        }
    }
    return false;
};

module.exports = isSphenic;
