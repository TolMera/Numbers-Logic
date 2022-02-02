const isPrimePower = (n) => {
    // https://en.wikipedia.org/wiki/Prime_power
    // Every prime power (except powers of 2) has a primitive root
    // All prime powers are deficient numbers. A prime power pn is an n-almost prime. It is not known whether a prime power pn can be an amicable number. If there is such a number, then pn must be greater than 101500 and n must be greater than 1400. 

    for (let c = 1; c <= Math.sqrt(n); c++) {
        let root = Math.pow(n, 1 / c);
        if (this.isInt(root)) {
            if (this.isPrime(root)) {
                return true;
            }
        }
    }
    return false;
}

// Has an integer as a root power, 9 should have 3^3
const hasIntRoot = (n) => {
    if (n & 0b1 === 1) return true;

    for (let c = 3; c <= Math.sqrt(n); c++) {
        let root = Math.pow(n, 1 / c);
        if (this.isInt(root)) {
            return true;
        }
    }
    return false;
}

const isUnusual = (n) => {
    const primeFactors = this.primeFactors(n);
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
    if (this.isPerfect(n)) return true;

    if (n % 4 === 0 || n % 6 === 0) {
        // Every practical number is divisible by 4 or 6 (or both).
        const divisors = this.divisors(n);
        for (var i = 1; i < N; i++) {
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
    if (isPractical(n) && !isPowerOf2(n)) {
        return true;
    }

    if (this.isPerfect(n) || this.isAbundant(n)) {
        return SemiperfectTest(n)
    }
}

function SemiperfectTest(n) {
    let v = [];

    // find the divisors
    v = this.divisors(n);

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

        if (test) return true;
        result *= divCount + 1;
    }

    // If n odd prime still remains
    // then count it
    if (n > 2) {
        if (test) return true;
        result *= 2;
    }

    return result - 1;
}

const isPolite = (n) => {
    if (getPoliteness(n, true)) {
        return true;
    }
    return false;
}

const isHarshad = (n, b) => {
    // In mathematics, a harshad number (or Niven number) in a given number base is an integer that is divisible by the sum of its digits when written in that base. Harshad numbers in base n are also known as n-harshad (or n-Niven) numbers. Harshad numbers were defined by D. R. Kaprekar, a mathematician from India.[1] The word "harshad" comes from the Sanskrit harṣa (joy) + da (give), meaning joy-giver. The term "Niven number" arose from a paper delivered by Ivan M. Niven at a conference on number theory in 1977. 
    // This is a bit too much for me to work out right now.
}

const isEvil = (n) => {
    let bits = 0;
    for (const bit of parseInt(n).toString(2)) {
        if (bit === "1") {
            bits++;
        }
    }
    return bits > 0 && bits & 0b1 === 1;
}

const isOdious = (n) => {
    return !isEvil(n);
}

const isPowerOf2 = (n) => {
    return n & n - 1 === 0;
}

const isMersennePrime = (n) => {
    if (this.isPrime(n) && isPowerOf2(n + 1)) {
        return true;
    }
    return false;
}

const isSophieGermainPrime = (n) => {
    if (this.isPrime(n) && this.isPrime(2 * n + 1)) {
        return true;
    }
    return false;
}

const isSafePrime = (n) => {
    if (this.isPrime(n) && this.isPrime(0.5 * n - 1)) {
        return true;
    }
    return false;
}

const isWeird = (n) => {
    if (this.isAbundant(n) && !isSemiperfect(n)) {
        return true;
    }
    return false;
}

const isArithmetic = (n) => {
    if (this.isInt(this.statistic.mean(this.divisors(n)))) {
        return true;
    }
    return false;
}

const isCompositeOfXPrimes = (n, count) => {
    const factors = this.factors(n);
    if (count === factors.length) {
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
    const primeFactors = this.primeFactors(n);
    if (primeFactors.filter((value) => value > N).length === 0) {
        return true;
    }
    return false;
}

const isPowerSmooth = (n, N) => {
    const factors = this.factor(n).map((value) => Math.pow(value.prime, value.power));
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
    if (N === 2 && n > 0) return true;

    const primeFactors = this.primeFactors(n);
    if (primeFactors.filter((value) => value <= k).length === 0) {
        return true;
    }
    return false;
}

const isKRough = (n, k) => {
    return !isSmooth(n, k);
}

const isNatural = (n) => {
    if (n > 0 && this.isInt(n)) {
        return true;
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

const isSelfPrime = (n) => {
    if (this.isPrime(n) && isSelf(n)) {
        return true;
    }
    return false;
}

const isSphenic = (n) => {
    if (this.divisors(n).length === 8) {
        if (this.primeFactors(n).length === 3) {
            return true;
        }
    }
    return false;
}

const isProductOfXPrimes = (n, x) => {
    if (this.primeFactors(n).length === x) {
        return true;
    }
    return false;
}

const isTetrahedral = (n) => {
    let c = 1;
    while (true) {
        let nth = getTetrahedral(c);
        if (n === nth) return true;
        if (n < nth) return false;
        // if (n > nth) continue;
        c++;
    }
}

const getTetrahedral = (n) => {
    return (n * (n + 1) * (n + 2)) / 6;
}

const isCenteredHexagonal = (n) => {
    let c = 1;
    while (true) {
        let nth = getCenteredHexagonal(c);
        if (n === nth) return true;
        if (n < nth) return false;
        // if (n > nth) continue;
        c++;
    }
}

const getCenteredHexagonal = (n) => {
    return 3 * n * (n - 1) + 1;
}

const isStar = (n) => {
    let c = 1;
    while (true) {
        let nth = getStar(c);
        if (n === nth) return true;
        if (n < nth) return false;
        // if (n > nth) continue;
        c++;
    }
}

const getStar = (n) => {
    return 6 * n * (n - 1) + 1;
}

const isTetrahedral = (n) => {
    let c = 1;
    while (true) {
        let nth = getCenteredHexagonal(c);
        if (n === nth) return true;
        if (n < nth) return false;
        // if (n > nth) continue;
        c++;
    }
}

export {
    isCenteredHexagonal,
    isStar,
    getStar,
    getCenteredHexagonal,
    getTetrahedral,
    isTetrahedral,
    isProductOfXPrimes,
    isSphenic,
    isSelfPrime,
    isSelf,
    isNatural,
    isRough,
    isKRough,
    isSmooth,
    isPowerSmooth,
    isMoreRound,
    isRound,
    isCompositeOfXPrimes,
    isArithmetic,
    isWeird,
    isSophieGermainPrime,
    isSafePrime,
    isMersennePrime,
    isPowerOf2,
    isPrimePower,
    hasIntRoot,
    isUnusual,
    isUntouchable,
    isPractical,
    isPronic,
    isSemiperfect,
    getPoliteness,
    isPolite,
    isHarshad,
    isEvil,
    isOdious,
}
