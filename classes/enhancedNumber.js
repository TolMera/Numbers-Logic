
class EnhancedNumber {
    /* number type Number */
    constructor(n) {
        if (n instanceof EnhancedNumber) {
            return n;
        }
        this._number = n;
        return this;
    }

    set number(v) {
        throw "base value of EnhancedNumber can not be changed, please instantiate a new instance of EnhancedNumber";
    }
    get number() {
        return this._number;
    }

    set divisors(v) {
        this._divisors = v;
    }
    get divisors() {
        if (this._divisors === undefined) {
            const fn = require('../lib/divisors');
            this._divisors = fn(this);
        }
        return this._divisors;
    }

    set getStar(v) {
        this._getStar = v;
    }
    get getStar() {
        if (this._getStar === undefined) {
            const fn = require('../lib/getStar');
            this._getStar = fn(this);
        }
        return this._getStar;
    }

    set isEvil(v) {
        this._isEvil = v;
    }
    get isEvil() {
        if (this._isEvil === undefined) {
            const fn = require('../lib/isEvil');
            this._isEvil = fn(this);
        }
        return this._isEvil;
    }

    set isOdd(v) {
        this._isOdd = v;
    }
    get isOdd() {
        if (this._isOdd === undefined) {
            const fn = require('../lib/isOdd');
            this._isOdd = fn(this);
        }
        return this._isOdd;
    }

    set isPrime(v) {
        this._isPrime = v;
    }
    get isPrime() {
        if (this._isPrime === undefined) {
            const fn = require('../lib/isPrime');
            this._isPrime = fn(this);
        }
        return this._isPrime;
    }

    set isSafePrime(v) {
        this._isSafePrime = v;
    }
    get isSafePrime() {
        if (this._isSafePrime === undefined) {
            const fn = require('../lib/isSafePrime');
            this._isSafePrime = fn(this);
        }
        return this._isSafePrime;
    }

    set isStar(v) {
        this._isStar = v;
    }
    get isStar() {
        if (this._isStar === undefined) {
            const fn = require('../lib/isStar');
            this._isStar = fn(this);
        }
        return this._isStar;
    }

    set logX(v) {
        this._logX = v;
    }
    get logX() {
        if (this._logX === undefined) {
            const fn = require('../lib/logX');
            this._logX = fn(this);
        }
        return this._logX;
    }

    set factorsOf(v) {
        this._factorsOf = v;
    }
    get factorsOf() {
        if (this._factorsOf === undefined) {
            const fn = require('../lib/factorsOf');
            this._factorsOf = fn(this);
        }
        return this._factorsOf;
    }

    set getTetrahedral(v) {
        this._getTetrahedral = v;
    }
    get getTetrahedral() {
        if (this._getTetrahedral === undefined) {
            const fn = require('../lib/getTetrahedral');
            this._getTetrahedral = fn(this);
        }
        return this._getTetrahedral;
    }

    set isHappy(v) {
        this._isHappy = v;
    }
    get isHappy() {
        if (this._isHappy === undefined) {
            const fn = require('../lib/isHappy');
            this._isHappy = fn(this);
        }
        return this._isHappy;
    }

    set isOdious(v) {
        this._isOdious = v;
    }
    get isOdious() {
        if (this._isOdious === undefined) {
            const fn = require('../lib/isOdious');
            this._isOdious = fn(this);
        }
        return this._isOdious;
    }

    set isPrimePower(v) {
        this._isPrimePower = v;
    }
    get isPrimePower() {
        if (this._isPrimePower === undefined) {
            const fn = require('../lib/isPrimePower');
            this._isPrimePower = fn(this);
        }
        return this._isPrimePower;
    }

    set isSelf(v) {
        this._isSelf = v;
    }
    get isSelf() {
        if (this._isSelf === undefined) {
            const fn = require('../lib/isSelf');
            this._isSelf = fn(this);
        }
        return this._isSelf;
    }

    set isSubsetSum(v) {
        this._isSubsetSum = v;
    }
    get isSubsetSum() {
        if (this._isSubsetSum === undefined) {
            const fn = require('../lib/isSubsetSum');
            this._isSubsetSum = fn(this);
        }
        return this._isSubsetSum;
    }

    set mobius(v) {
        this._mobius = v;
    }
    get mobius() {
        if (this._mobius === undefined) {
            const fn = require('../lib/mobius');
            this._mobius = fn(this);
        }
        return this._mobius;
    }

    set getAliquotSum(v) {
        this._getAliquotSum = v;
    }
    get getAliquotSum() {
        if (this._getAliquotSum === undefined) {
            const fn = require('../lib/getAliquotSum');
            this._getAliquotSum = fn(this);
        }
        return this._getAliquotSum;
    }

    set hasIntRoot(v) {
        this._hasIntRoot = v;
    }
    get hasIntRoot() {
        if (this._hasIntRoot === undefined) {
            const fn = require('../lib/hasIntRoot');
            this._hasIntRoot = fn(this);
        }
        return this._hasIntRoot;
    }

    set isImpolite(v) {
        this._isImpolite = v;
    }
    get isImpolite() {
        if (this._isImpolite === undefined) {
            const fn = require('../lib/isImpolite');
            this._isImpolite = fn(this);
        }
        return this._isImpolite;
    }

    set isPerfect(v) {
        this._isPerfect = v;
    }
    get isPerfect() {
        if (this._isPerfect === undefined) {
            const fn = require('../lib/isPerfect');
            this._isPerfect = fn(this);
        }
        return this._isPerfect;
    }

    set isProductOfXPrimes(v) {
        this._isProductOfXPrimes = v;
    }
    get isProductOfXPrimes() {
        if (this._isProductOfXPrimes === undefined) {
            const fn = require('../lib/isProductOfXPrimes');
            this._isProductOfXPrimes = fn(this);
        }
        return this._isProductOfXPrimes;
    }

    set isSelfPrime(v) {
        this._isSelfPrime = v;
    }
    get isSelfPrime() {
        if (this._isSelfPrime === undefined) {
            const fn = require('../lib/isSelfPrime');
            this._isSelfPrime = fn(this);
        }
        return this._isSelfPrime;
    }

    set isTetrahedral(v) {
        this._isTetrahedral = v;
    }
    get isTetrahedral() {
        if (this._isTetrahedral === undefined) {
            const fn = require('../lib/isTetrahedral');
            this._isTetrahedral = fn(this);
        }
        return this._isTetrahedral;
    }

    set mobiusRange(v) {
        this._mobiusRange = v;
    }
    get mobiusRange() {
        if (this._mobiusRange === undefined) {
            const fn = require('../lib/mobiusRange');
            this._mobiusRange = fn(this);
        }
        return this._mobiusRange;
    }

    set getCenteredHexagonal(v) {
        this._getCenteredHexagonal = v;
    }
    get getCenteredHexagonal() {
        if (this._getCenteredHexagonal === undefined) {
            const fn = require('../lib/getCenteredHexagonal');
            this._getCenteredHexagonal = fn(this);
        }
        return this._getCenteredHexagonal;
    }

    set isAbundant(v) {
        this._isAbundant = v;
    }
    get isAbundant() {
        if (this._isAbundant === undefined) {
            const fn = require('../lib/isAbundant');
            this._isAbundant = fn(this);
        }
        return this._isAbundant;
    }

    _isKRough = {};

    set isKRough(v) {
        throw "Search code for: b521f257-c885-5b59-9852-0c5324408822";
    }
    get isKRough() {
        throw "Search code for: 5620059f-ad6f-5f43-88ad-7c1adbc23c8b";
    }

    set isPolite(v) {
        this._isPolite = v;
    }
    get isPolite() {
        if (this._isPolite === undefined) {
            const fn = require('../lib/isPolite');
            this._isPolite = fn(this);
        }
        return this._isPolite;
    }

    set isPronic(v) {
        this._isPronic = v;
    }
    get isPronic() {
        if (this._isPronic === undefined) {
            const fn = require('../lib/isPronic');
            this._isPronic = fn(this);
        }
        return this._isPronic;
    }

    set isSemiperfect(v) {
        this._isSemiperfect = v;
    }
    get isSemiperfect() {
        if (this._isSemiperfect === undefined) {
            const fn = require('../lib/isSemiperfect');
            this._isSemiperfect = fn(this);
        }
        return this._isSemiperfect;
    }

    set isUntouchable(v) {
        this._isUntouchable = v;
    }
    get isUntouchable() {
        if (this._isUntouchable === undefined) {
            const fn = require('../lib/isUntouchable');
            this._isUntouchable = fn(this);
        }
        return this._isUntouchable;
    }

    set getCountDivisors(v) {
        this._getCountDivisors = v;
    }
    get getCountDivisors() {
        if (this._getCountDivisors === undefined) {
            const fn = require('../lib/getCountDivisors');
            this._getCountDivisors = fn(this);
        }
        return this._getCountDivisors;
    }

    set isArithmetic(v) {
        this._isArithmetic = v;
    }
    get isArithmetic() {
        if (this._isArithmetic === undefined) {
            const fn = require('../lib/isArithmetic');
            this._isArithmetic = fn(this);
        }
        return this._isArithmetic;
    }

    set isMersennePrime(v) {
        this._isMersennePrime = v;
    }
    get isMersennePrime() {
        if (this._isMersennePrime === undefined) {
            const fn = require('../lib/isMersennePrime');
            this._isMersennePrime = fn(this);
        }
        return this._isMersennePrime;
    }

    set isPowerOf2(v) {
        this._isPowerOf2 = v;
    }
    get isPowerOf2() {
        if (this._isPowerOf2 === undefined) {
            const fn = require('../lib/isPowerOf2');
            this._isPowerOf2 = fn(this);
        }
        return this._isPowerOf2;
    }

    set isRough(v) {
        this.isKRough = v;
    }
    get isRough() {
        return this.isKRough;
    }

    set isSmooth(v) {
        this._isSmooth = v;
    }
    get isSmooth() {
        if (this._isSmooth === undefined) {
            const fn = require('../lib/isSmooth');
            this._isSmooth = fn(this);
        }
        return this._isSmooth;
    }

    set isUnusual(v) {
        this._isUnusual = v;
    }
    get isUnusual() {
        if (this._isUnusual === undefined) {
            const fn = require('../lib/isUnusual');
            this._isUnusual = fn(this);
        }
        return this._isUnusual;
    }

    set semiperfectTest(v) {
        this._semiperfectTest = v;
    }
    get semiperfectTest() {
        if (this._semiperfectTest === undefined) {
            const fn = require('../lib/semiperfectTest');
            this._semiperfectTest = fn(this);
        }
        return this._semiperfectTest;
    }

    set getIntRoot(v) {
        this._getIntRoot = v;
    }
    get getIntRoot() {
        if (this._getIntRoot === undefined) {
            const fn = require('../lib/getIntRoot');
            this._getIntRoot = fn(this);
        }
        return this._getIntRoot;
    }

    set isCenteredHexagonal(v) {
        this._isCenteredHexagonal = v;
    }
    get isCenteredHexagonal() {
        if (this._isCenteredHexagonal === undefined) {
            const fn = require('../lib/isCenteredHexagonal');
            this._isCenteredHexagonal = fn(this);
        }
        return this._isCenteredHexagonal;
    }

    set isMoreRound(v) {
        this._isMoreRound = v;
    }
    get isMoreRound() {
        if (this._isMoreRound === undefined) {
            const fn = require('../lib/isMoreRound');
            this._isMoreRound = fn(this);
        }
        return this._isMoreRound;
    }

    set isPowerSmooth(v) {
        this._isPowerSmooth = v;
    }
    get isPowerSmooth() {
        if (this._isPowerSmooth === undefined) {
            const fn = require('../lib/isPowerSmooth');
            this._isPowerSmooth = fn(this);
        }
        return this._isPowerSmooth;
    }

    _isRound = {};

    set isRound(v) {
        throw "Search code for: b521f257-c885-5b59-9852-0c5324408822";
    }
    get isRound() {
        throw "Search code for: 5620059f-ad6f-5f43-88ad-7c1adbc23c8b";
    }

    set isSophieGermainPrime(v) {
        this._isSophieGermainPrime = v;
    }
    get isSophieGermainPrime() {
        if (this._isSophieGermainPrime === undefined) {
            const fn = require('../lib/isSophieGermainPrime');
            this._isSophieGermainPrime = fn(this);
        }
        return this._isSophieGermainPrime;
    }

    set isWeird(v) {
        this._isWeird = v;
    }
    get isWeird() {
        if (this._isWeird === undefined) {
            const fn = require('../lib/isWeird');
            this._isWeird = fn(this);
        }
        return this._isWeird;
    }

    set sieve(v) {
        this._sieve = v;
    }
    get sieve() {
        if (this._sieve === undefined) {
            const fn = require('../lib/sieve');
            this._sieve = fn(this);
        }
        return this._sieve;
    }

    set getPoliteness(v) {
        this._getPoliteness = v;
    }
    get getPoliteness() {
        if (this._getPoliteness === undefined) {
            const fn = require('../lib/getPoliteness');
            this._getPoliteness = fn(this);
        }
        return this._getPoliteness;
    }

    set isEven(v) {
        this._isEven = v;
    }
    get isEven() {
        if (this._isEven === undefined) {
            const fn = require('../lib/isEven');
            this._isEven = fn(this);
        }
        return this._isEven;
    }

    set isNatural(v) {
        this._isNatural = v;
    }
    get isNatural() {
        if (this._isNatural === undefined) {
            const fn = require('../lib/isNatural');
            this._isNatural = fn(this);
        }
        return this._isNatural;
    }

    set isPractical(v) {
        this._isPractical = v;
    }
    get isPractical() {
        if (this._isPractical === undefined) {
            const fn = require('../lib/isPractical');
            this._isPractical = fn(this);
        }
        return this._isPractical;
    }

    set isSad(v) {
        this._isSad = v;
    }
    get isSad() {
        if (this._isSad === undefined) {
            const fn = require('../lib/isSad');
            this._isSad = fn(this);
        }
        return this._isSad;
    }

    set isSphenic(v) {
        this._isSphenic = v;
    }
    get isSphenic() {
        if (this._isSphenic === undefined) {
            const fn = require('../lib/isSphenic');
            this._isSphenic = fn(this);
        }
        return this._isSphenic;
    }

    set isWhole(v) {
        this._isWhole = v;
    }
    get isWhole() {
        if (this._isWhole === undefined) {
            const fn = require('../lib/isWhole');
            this._isWhole = fn(this);
        }
        return this._isWhole;
    }

    set sum(v) {
        this._sum = v;
    }
    get sum() {
        if (this._sum === undefined) {
            const fn = require('../lib/sum');
            this._sum = fn(this);
        }
        return this._sum;
    }
}

module.exports = function (n) {
    // TODO: If someone passes in an `n` that has been passed before, we should create a copy of the origional `n`
    // with any meta that is known about that n, so any subsequent calls will be faster still.
    if (n instanceof EnhancedNumber) {
        return n;
    }
    return new EnhancedNumber(n);
}
