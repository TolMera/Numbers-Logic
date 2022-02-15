const isOdd = require("./isOdd");

function isEvil (n) {
    let bits = 0;
    for (const bit of parseInt(n).toString(2)) {
        if (bit === "1") {
            bits++;
        }
    }
    return bits > 0 && isOdd(bits);
};

exports.isEvil = isEvil;
