const P_number_theory = require('number-theory');
const P_numbers = require('numbers');

// Has an integer as a root power, 9 should have 3^3
const hasIntRoot = (n) => {
    for (let c = 2; c <= Math.sqrt(n); c++) {
        let root = Math.pow(n, 1 / c);
        if (P_numbers.basic.isInt(root)) {
            return true;
        }
    }
    return false;
}

const getIntRoot = (n) => {
    for (let c = 2; c <= Math.sqrt(n); c++) {
        let root = Math.pow(n, 1 / c);
        if (P_numbers.basic.isInt(root)) {
            return c;
        }
    }
    return false;
}

const isUnusual = (n) => {
    const primeFactors = P_number_theory.primeFactors(n);
    if (Math.max(...primeFactors) > Math.sqrt(n)) {
        return true;
    }
    return false;
}

const isUntouchable = (n) => {
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
}

const isPractical = (n) => {
    if (n === 0) return false;
    if (n === 1 || n === 2) return true;

    // Every power of two is also a practical number
    if (isPowerOf2(n)) return true;

    // Every even perfect number is also a practical number
    if (P_number_theory.isPerfect(n)) return true;

    if (n % 4 === 0 || n % 6 === 0) {
        // Every practical number is divisible by 4 or 6 (or both).
        const divisors = P_number_theory.divisors(n);
        for (var i = 1; i < n; i++) {
            if (!isSubsetSum(divisors, divisors.length, i)) {
                return false;
            }
        }
        return true;
    }

    return false;
}

const isPronic = (n) => {
    for (var i = 0; i <= parseInt(Math.sqrt(n)); i++) {
        if (n == i * (i + 1)) {
            return true;
        }
    }

    return false;
}

// This one is too complicated for me to follow.  It needs a better explanation
function isSubsetSum(set, n, sum) {
    // The value of subset[i][j] will be true if
    // there is a subset of set[0..j-1] with sum
    // equal to i
    var subset = Array.from(Array(n + 1), () => Array(sum + 1));

    // If sum is 0, then answer is true
    for (var i = 0; i <= n; i++) {
        subset[i][0] = true;
    }

    // If sum is not 0 and set is empty,
    // then answer is false
    for (var i = 1; i <= sum; i++) {
        subset[0][i] = false;
    }

    // Fill the subset table in bottom up manner
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= sum; j++) {
            if (j < set[i - 1]) { subset[i][j] = subset[i - 1][j]; }
            if (j >= set[i - 1]) { subset[i][j] = subset[i - 1][j] || subset[i - 1][j - set[i - 1]]; }
        }
    }
    return subset[n][sum];
}

const isSemiperfect = (n) => {
    if (n <= 1) return false;

    if (isPractical(n) && !isPowerOf2(n)) {
        return true;
    }

    if (P_number_theory.isPerfect(n) || P_number_theory.isAbundant(n)) {
        return SemiperfectTest(n)
    }
    return false;
}

function SemiperfectTest(n) {
    if (n === 0) return false;
    let v = [];

    // find the divisors
    v = P_number_theory.divisors(n);

    // sorting the vector
    v.sort(function (a, b) { return a - b; });

    let r = v.length;

    // subset to check if no
    // is semiperfect
    let subset = new Array(r + 1);
    for (let i = 0; i < r + 1; i++) {
        subset[i] = new Array(n + 1);
        for (let j = 0; j < n + 1; j++) {
            subset[i][j] = false;
        }
    }

    // initialising 1st column to true
    for (let i = 0; i <= r; i++)
        subset[i][0] = true;

    // initializing 1st row except
    // zero position to 0
    for (let i = 1; i <= n; i++)
        subset[0][i] = false;

    // loop to find whether the
    // number is semiperfect
    for (let i = 1; i <= r; i++) {
        for (let j = 1; j <= n; j++) {
            // calculation to check if the
            // number can be made by
            // summation of divisors
            if (j < v[i - 1])
                subset[i][j] = subset[i - 1][j];
            else {
                subset[i][j] = subset[i - 1][j] ||
                    subset[i - 1][j - v[i - 1]];
            }
        }
    }

    // If not possible to make the
    // number by any combination of divisors
    if ((subset[r][n]) == false)
        return false;
    else
        return true;
}

// https://en.wikipedia.org/wiki/Polite_number
const getPoliteness = (n, test) => {
    if (isPowerOf2(n)) {
        return 0;
    }
    // https://www.geeksforgeeks.org/find-politeness-number/
    let result = 1;

    // Eliminate all even prime factor
    // of number of n
    while (n & 0b1 === 1)
        n /= 2;

    // n must be odd at this point, so
    // iterate for only odd numbers
    // till sqrt(n)
    for (let i = 3; i * i <= n; i += 2) {
        let divCount = 0;

        // if i divides n, then start
        // counting of Odd divisors
        while (n % i == 0) {
            n /= i;
            ++divCount;
        }

        result *= divCount + 1;
    }

    // If n odd prime still remains
    // then count it
    if (n > 2) {
        result *= 2;
    }

    return result - 1;
}

// https://en.wikipedia.org/wiki/Polite_number
const isPolite = (n) => {
    return isPowerOf2(n);
}

const isImpolite = (n) => {
    return !isPolite(n);
}

const isEvil = (n) => {
    let bits = 0;
    for (const bit of parseInt(n).toString(2)) {
        if (bit === "1") {
            bits++;
        }
    }
    return bits > 0 && (bits & 0b1) === 1;
}

const isOdious = (n) => {
    return !isEvil(n);
}

const isPowerOf2 = (n) => {
    return (n & n - 1) === 0;
}

const isWeird = (n) => {
    if (n <= 0) return false;
    if (P_number_theory.isAbundant(n) && !isSemiperfect(n)) {
        return true;
    }
    return false;
}

const isArithmetic = (n) => {
    if (n === 0) return false;
    if (n === 1) return true;

    // Can't get divisors of 0
    if (P_numbers.basic.isInt(P_numbers.statistic.mean(P_number_theory.divisors(n)))) {
        return true;
    }
    return false;
}

const isRound = (n, base = 10) => {
    const numberInBase = Number(n).toString(base);
    if (Array.from(numberInBase).reverse()[0] === "0") {
        return true;
    }
    return false;
}

const isMoreRound = (n1, n2, base1 = 10, base2 = 10) => {
    const n1InBase = Number(n1).toString(base1);
    const n2InBase = Number(n1).toString(base2);
    const n1string = Array.from(n1InBase).reverse()[0];
    const n2string = Array.from(n2InBase).reverse()[0];

    for (let c = 0; c < n1string.length; c++) {
        if (n1string[c] === '0' && n2string === '0') continue;
        if (n1string[c] === '0' && n2string !== '0') {
            return 1;
        }
        if (n1string[c] !== '0' && n2string === '0') {
            return -1;
        }
        break;
    }
    return 0;
}

const isSmooth = (n, N) => {
    const primeFactors = P_number_theory.primeFactors(n);
    if (primeFactors.filter((value) => value > N).length === 0) {
        return true;
    }
    return false;
}

const isPowerSmooth = (n, N) => {
    const factors = P_number_theory.factor(n).map((value) => Math.pow(value.prime, value.power));
    if (factors.filter((v) => v > N).length === 0) {
        return true;
    }
    return false;
}

const isRough = (n, k) => {
    // Every odd positive integer is 3-rough.
    if (n & 0b1 === 1 && k < 3) {
        return true;
    }

    // Every positive integer is 2-rough, since all its prime factors, being prime numbers, exceed 1.
    if (k === 2 && n > 0) return true;

    const primeFactors = P_number_theory.primeFactors(n);
    if (primeFactors.filter((value) => value <= k).length === 0) {
        return true;
    }
    return false;
}

const isKRough = (n, k) => {
    return !isSmooth(n, k);
}

const isNatural = (n) => {
    // https://en.wikipedia.org/wiki/ISO_80000-2
    // ISO80000 makes 0 an natural number

    if (P_numbers.basic.isInt(n)) {
        return true;
    }
    return false;
}

const isWhole = (n) => {
    if (n > 0) {
        return isNatural(n);
    }
    return false;
}

// for (let x = 0; x < 100; x++) { if (isSelf(x)) console.log(x); }
const isSelf = (n, base = 10) => {
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

    for (let m = 1; m <= n; m++) {
        if (m + getSum(m) == n)
            return false;
    }
    return true;
}

const isSphenic = (n) => {
    if (n <= 0) return false;
    if (n === 1) return false;

    if (P_number_theory.divisors(n).length === 8) {
        if (P_number_theory.primeFactors(n).length === 3) {
            return true;
        }
    }
    return false;
}

module.exports = {
    isKRough,
    getPoliteness,
    hasIntRoot,
    getIntRoot,
    isArithmetic,
    isWhole,
    isEvil,
    isMoreRound,
    isNatural,
    isOdious,
    isPolite,
    isImpolite,
    isPowerOf2,
    isPowerSmooth,
    isPractical,
    isPronic,
    isRough,
    isRound,
    isSelf,
    isSemiperfect,
    isSmooth,
    isSphenic,
    isUntouchable,
    isUnusual,
    isWeird,
}
