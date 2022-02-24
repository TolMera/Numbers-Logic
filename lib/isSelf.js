// for (let x = 0; x < 100; x++) { if (isSelf(x)) console.log(x); }
function isSelf(n, base = 10) {
    const EnhancedNumber = require("../classes/enhancedNumber");
    n = EnhancedNumber(n);

    /*
    Nope, I don't get it.
    if (n === 0) return false;
    // I think 1 is always a self number in any base
    const subSelfNumbers = [1];
    const subSelfNumbersBitFlags = 1;
    for (let c = 2; c <= n; c++) {
        // b is a natural number that cannot be written as the sum of any other natural number n
        // and the individual digits of n.
        let sum = 0;
        for (let digit of parseInt(c, 10).toString(base)) {
            sum += parseInt(digit, base);
        }
        if (sum === c) continue;

        // Can c be built from adding the numbers in subSelfNumbers together in any order
        // If yes, then it's NOT a self number.
        let flagSize = subSelfNumbersBitFlags;
        let secondSum;
        while (flagSize-- !== 0) {
            let flags = flagSize.toString(2);
            secondSum = 0;
            for (let index in flags) {
                if (flags[index] === '1') {
                    secondSum += subSelfNumbers[index];
                }
                if (secondSum > c) {
                    break;
                }
            }
            if (secondSum = c) {
                break;
            }
        }
        if (secondSum !== c) {
            subSelfNumbers.push(c);
            subSelfNumbersBitFlags = subSelfNumbersBitFlags << 1;
            subSelfNumbersBitFlags |= 1;

            if (c === n) {
                return true;
            }
        }
    }
    return false;
    */
    //    I don't like that this is base 10 only
    function getSum(n) {
        let sum = 0;
        while (n != 0) {
            sum = sum + n % 10;
            n = parseInt(n / 10);
        }
        return sum;
    }

    for (let m = 1; m <= n.number; m++) {
        if (m + getSum(m) === n.number)
            return false;
    }
    return true;
};

module.exports = isSelf;
