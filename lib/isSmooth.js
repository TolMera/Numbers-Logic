const isRough = require("./isRough");

// const factorsOf = require("./factorsOf");

const isSmooth = (n, k) => {
    return !isRough(n, k);
};

module.exports = isSmooth;
