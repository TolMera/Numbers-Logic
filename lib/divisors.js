const factorsOf = require('./factorsOf');
const getCountDivisors = require('./getCountDivisors');

function divisors(n) {
    const count = getCountDivisors(n);
    const origN = n;
    n = Math.abs(n);
    const factors = factorsOf(n);

    const dimensions = [];
    for (const index in factors) {
        const factor = factors[index];
        dimensions.push([]);
        for (let x = 0; x <= factor.power; x++) {
            dimensions[index].push(Math.pow(factor.prime, x));
        }
    }

    const divSet = new Set();
    again(dimensions, 0, divSet, 1);

    if (origN < 0) {
        for (const n of Array.from(divSet)) {
            divSet.add(n * -1);
        }
    }

    const divs = Array.from(divSet).sort((a, b) => a - b);

    if (divs.length !== count) {
        throw new Error(`There is a problem with the divisors function - Contact the publisher`);
    }
    return divs;
}

function again(dimensions, index, divs, sum) {
    if (!dimensions[index]) {
        divs.add(sum);
    } else {
        dimensions[index].forEach(v => {
            again(dimensions, index + 1, divs, sum * v);
        });
    }
}

module.exports = divisors;