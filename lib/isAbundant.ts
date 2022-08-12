const EnhancedNumber = require("../classes/enhancedNumber");
const getAliquotSum = require("./getAliquotSum");

// https://en.wikipedia.org/wiki/Abundant_number
export function isAbundant(n: number | EnhancedNumberType): boolean {
    n = new EnhancedNumber(n);
    if (n._isAbundant !== undefined) {
        return n.isAbundant;
    }

    // The smallest odd abundant number is 945.
    if (n.number === 1) {
        n.isAbundant = false;
        return n.isAbundant;
    }

    n.isAbundant = getAliquotSum(n) > n.number;
    return n.isAbundant;
};