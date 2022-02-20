const isRough = require("./isRough");

// const factorsOf = require("./factorsOf");

const isSmooth = (n, k) => {
    return !isRough(n, k);
    // const primeFactors = factorsOf(n);
    // if (primeFactors.filter((value) => value.prime > k).length > 0) {
    //     return true;
    // }
    // return false;
};

module.exports = isSmooth;
