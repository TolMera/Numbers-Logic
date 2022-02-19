const divisors = require("./divisors");
const sum = require("./sum");

function getAliquotSum(n) {
    const divs = divisors(n);
    divs.pop();
    return sum(divs);
}

module.exports = getAliquotSum;
