function isUntouchable  (n) {
    for (let i = 1; i <= 2 * n; i++) {
        let result = 1;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                // I don't understand why vvv that is that way...
                if (i == (n / i)) { result += i; }
                else { result += (i + n / i); }
            }
        }
        if (result === n) {
            return false;
        }
    }
    return true;
};

module.exports = isUntouchable;
