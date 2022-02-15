const isPowerOf2 = require("./isPowerOf2");

// https://en.wikipedia.org/wiki/Polite_number
function isPolite  (n)  {
    return isPowerOf2(n);
};

exports.isPolite = isPolite;
