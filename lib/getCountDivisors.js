const factorsOf = require('./factorsOf');

const getCountDivisors = (n) => {
    const origN = n;
    n = Math.abs(n);
    // https://www2.math.upenn.edu/~deturck/m170/wk2/numdivisors.html
    const factors = factorsOf(n);
    const powers = factors.map(factor => factor.power);
    let divisors = 1;
    for (const num of powers) {
        divisors *= num + 1;
    }
    if (origN < 0) {
        divisors *= 2;
    }
    return divisors;
};

module.exports = getCountDivisors;