const isOdd = require('./isOdd');

function isPronic(n) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);
    if (n._isPronic) {
        return n.isPronic;
    }

    if (isOdd(n.number)) {
        n.isPronic = false;
        return n.isPronic;
    }

    const sqrt = Math.sqrt(n.number);
    if (Math.pow(sqrt, 2) === n.number) {
        // Pronic numbers will pass the above test.
        let x = 1;
        while (x <= sqrt) {
            let nx = n.number / x;
            if (
                (nx === x + 1)
                && (nx % 1 === 0)
            ) {
                n.isPronic = true;
                return n.isPronic;
            }
            x++;
        }
    }
    n.isPronic = false;
    return n.isPronic;
};

module.exports = isPronic;
