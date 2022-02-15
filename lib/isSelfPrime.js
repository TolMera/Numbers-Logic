const isPrime = require("./isPrime");
const isSelf = require("./isSelf");

function isSelfPrime(n) {
    if (isPrime(n) && isSelf(n)) {
        return true;
    }
    return false;
};

module.exports = isSelfPrime;
