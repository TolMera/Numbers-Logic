const isOdd = require('./isOdd');

function isPronic(n) {
    if (isOdd(n)) {
        return false;
    }

    const sqrt = Math.sqrt(n);
    if (Math.pow(sqrt, 2) === n) {
        // Pronic numbers will pass the above test.
        let x = 1;
        while (x <= sqrt) {
            let nx = n / x;
            if (
                (nx === x + 1)
                && (nx % 1 === 0)
            ) {
                return true;
            }
            x++;
        }
    }
    return false;
};

module.exports = isPronic;
