const EnhancedNumber = require('../classes/enhancedNumber');
const divisors = require("./divisors");
const sum = require("./sum");

function getAliquotSum(n) {
    n = EnhancedNumber(n);
    if (n._getAliquotSum) {
        return n.getAliquotSum;
    }

    const divs = divisors(n);
    divs.pop();
    n.getAliquotSum = sum(divs);
    return n.getAliquotSum;
}

module.exports = getAliquotSum;
