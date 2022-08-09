interface EnhancedNumberType extends number {
    readonly number: number;
    divisors: number;
    factorsOf: number[];
    getAliquotSum: unknown;
    getCenteredHexagonal: unknown;
    getCountDivisors: unknown;
    getIntRoot: unknown;
    getPoliteness: unknown;
    getStar: unknown;
    getTetrahedral: unknown;
    hasIntRoot: boolean;
    isAbundant: boolean;
    isArithmetic: boolean;
    isCenteredHexagonal: boolean;
    isEven: boolean;
    isEvil: boolean;
    isHappy: boolean;
    isImpolite: boolean;
    isKRough: boolean;
    isMersennePrime: boolean;
    isMoreRound: boolean;
    isNatural: boolean;
    isOdd: boolean;
    isOdious: boolean;
    isPerfect: boolean;
    isPolite: boolean;
    isPowerOf2: boolean;
    isPowerSmooth: boolean;
    isPractical: boolean;
    isPrime: boolean;
    isPrimePower: boolean;
    isProductOfXPrimes: boolean;
    isPronic: boolean;
    isRough: boolean;
    isRound: boolean;
    isSad: boolean;
    isSafePrime: boolean;
    isSelf: boolean;
    isSelfPrime: boolean;
    isSemiperfect: boolean;
    isSmooth: boolean;
    isSophieGermainPrime: boolean;
    isSphenic: boolean;
    isStar: boolean;
    isSubsetSum: boolean;
    isTetrahedral: boolean;
    isUntouchable: boolean;
    isUnusual: boolean;
    isWeird: boolean;
    isWhole: boolean;
    logX: unknown;
    mobius: unknown;
    mobiusRange: unknown;
    semiperfectTest: unknown;
    sieve: number[];
    sum: number;
}

class EnhancedNumber extends number {
    private _number: number;

    constructor(n: number) {
        if (n instanceof EnhancedNumber) {
            return n;
        }
        this._number = n;
        return this;
    }

    toString() {
        return this.number.toString();
    }

    toNumber() {
        return this.number.toNumber();
    }

    set number(v: never) {
        throw "base value of EnhancedNumber can not be changed, please instantiate a new instance of EnhancedNumber";
    }
    get number() {
        return this._number;
    }

    private _divisors: number;
    set divisors(v: number[]) {
        this._divisors = v;
    }
    get divisors() {
        if (this._divisors === undefined) {
            const fn = require('../lib/divisors');
            this._divisors = fn(this);
            return this._divisors;
        }
        return this._divisors;
    }

    private _getStar: number;
    set getStar(v: number) {
        this._getStar = v;
    }
    get getStar() {
        if (this._getStar === undefined) {
            const fn = require('../lib/getStar');
            this._getStar = fn(this);
            return this._getStar;
        }
        return this._getStar;
    }

    private _isEvil: boolean;
    set isEvil(v: boolean) {
        this._isEvil = v;
    }
    get isEvil() {
        if (this._isEvil === undefined) {
            const fn = require('../lib/isEvil');
            this._isEvil = fn(this);
            return this._isEvil;
        }
        return this._isEvil;
    }

    private _isOdd: boolean;
    set isOdd(v: boolean) {
        this._isOdd = v;
    }
    get isOdd() {
        if (this._isOdd === undefined) {
            const fn = require('../lib/isOdd');
            this._isOdd = fn(this);
            return this._isOdd;
        }
        return this._isOdd;
    }

    private _isPrime: boolean;
    set isPrime(v: boolean) {
        this._isPrime = v;
    }
    get isPrime() {
        if (this._isPrime === undefined) {
            const fn = require('../lib/isPrime');
            this._isPrime = fn(this);
            return this._isPrime;
        }
        return this._isPrime;
    }

    private _isSafePrime: boolean;
    set isSafePrime(v: boolean) {
        this._isSafePrime = v;
    }
    get isSafePrime() {
        if (this._isSafePrime === undefined) {
            const fn = require('../lib/isSafePrime');
            this._isSafePrime = fn(this);
            return this._isSafePrime;
        }
        return this._isSafePrime;
    }

    private _isStar: boolean;
    set isStar(v: boolean) {
        this._isStar = v;
    }
    get isStar() {
        if (this._isStar === undefined) {
            const fn = require('../lib/isStar');
            this._isStar = fn(this);
            return this._isStar;
        }
        return this._isStar;
    }

    private _logX: unknown;
    set logX(v) {
        this._logX = v;
    }
    get logX() {
        if (this._logX === undefined) {
            const fn = require('../lib/logX');
            this._logX = fn(this);
            return this._logX;
        }
        return this._logX;
    }

    private _factorsOf: number[];
    set factorsOf(v: number[]) {
        this._factorsOf = v;
    }
    get factorsOf() {
        if (this._factorsOf === undefined) {
            const fn = require('../lib/factorsOf');
            this._factorsOf = fn(this);
            return this._factorsOf;
        }
        return this._factorsOf;
    }

    private _getTetrahedral: unknown;
    set getTetrahedral(v) {
        this._getTetrahedral = v;
    }
    get getTetrahedral() {
        if (this._getTetrahedral === undefined) {
            const fn = require('../lib/getTetrahedral');
            this._getTetrahedral = fn(this);
            return this._getTetrahedral;
        }
        return this._getTetrahedral;
    }

    private _isHappy: boolean;
    set isHappy(v: boolean) {
        this._isHappy = v;
    }
    get isHappy() {
        if (this._isHappy === undefined) {
            const fn = require('../lib/isHappy');
            this._isHappy = fn(this);
            return this._isHappy;
        }
        return this._isHappy;
    }

    private _isOdious: boolean;
    set isOdious(v: boolean) {
        this._isOdious = v;
    }
    get isOdious() {
        if (this._isOdious === undefined) {
            const fn = require('../lib/isOdious');
            this._isOdious = fn(this);
            return this._isOdious;
        }
        return this._isOdious;
    }

    private _isPrimePower: boolean;
    set isPrimePower(v: boolean) {
        this._isPrimePower = v;
    }
    get isPrimePower() {
        if (this._isPrimePower === undefined) {
            const fn = require('../lib/isPrimePower');
            this._isPrimePower = fn(this);
            return this._isPrimePower;
        }
        return this._isPrimePower;
    }

    private _isSelf: boolean;
    set isSelf(v: boolean) {
        this._isSelf = v;
    }
    get isSelf() {
        if (this._isSelf === undefined) {
            const fn = require('../lib/isSelf');
            this._isSelf = fn(this);
            return this._isSelf;
        }
        return this._isSelf;
    }

    private _isSubsetSum: boolean;
    set isSubsetSum(v: boolean) {
        this._isSubsetSum = v;
    }
    get isSubsetSum() {
        if (this._isSubsetSum === undefined) {
            const fn = require('../lib/isSubsetSum');
            this._isSubsetSum = fn(this);
            return this._isSubsetSum;
        }
        return this._isSubsetSum;
    }

    private _mobius: unknown;
    set mobius(v) {
        this._mobius = v;
    }
    get mobius() {
        if (this._mobius === undefined) {
            const fn = require('../lib/mobius');
            this._mobius = fn(this);
            return this._mobius;
        }
        return this._mobius;
    }

    private _getAliquotSum: unknown;
    set getAliquotSum(v) {
        this._getAliquotSum = v;
    }
    get getAliquotSum() {
        if (this._getAliquotSum === undefined) {
            const fn = require('../lib/getAliquotSum');
            this._getAliquotSum = fn(this);
            return this._getAliquotSum;
        }
        return this._getAliquotSum;
    }

    private _hasIntRoot: boolean;
    set hasIntRoot(v: boolean) {
        this._hasIntRoot = v;
    }
    get hasIntRoot() {
        if (this._hasIntRoot === undefined) {
            const fn = require('../lib/hasIntRoot');
            this._hasIntRoot = fn(this);
            return this._hasIntRoot;
        }
        return this._hasIntRoot;
    }

    private _isImpolite: boolean;
    set isImpolite(v: boolean) {
        this._isImpolite = v;
    }
    get isImpolite() {
        if (this._isImpolite === undefined) {
            const fn = require('../lib/isImpolite');
            this._isImpolite = fn(this);
            return this._isImpolite;
        }
        return this._isImpolite;
    }

    private _isPerfect: boolean;
    set isPerfect(v: boolean) {
        this._isPerfect = v;
    }
    get isPerfect() {
        if (this._isPerfect === undefined) {
            const fn = require('../lib/isPerfect');
            this._isPerfect = fn(this);
            return this._isPerfect;
        }
        return this._isPerfect;
    }

    private _isProductOfXPrimes: unknown;
    set isProductOfXPrimes(v) {
        this._isProductOfXPrimes = v;
    }
    get isProductOfXPrimes() {
        if (this._isProductOfXPrimes === undefined) {
            const fn = require('../lib/isProductOfXPrimes');
            this._isProductOfXPrimes = fn(this);
            return this._isProductOfXPrimes;
        }
        return this._isProductOfXPrimes;
    }

    private _isSelfPrime: boolean;
    set isSelfPrime(v: boolean) {
        this._isSelfPrime = v;
    }
    get isSelfPrime() {
        if (this._isSelfPrime === undefined) {
            const fn = require('../lib/isSelfPrime');
            this._isSelfPrime = fn(this);
            return this._isSelfPrime;
        }
        return this._isSelfPrime;
    }

    private _isTetrahedral: boolean;
    set isTetrahedral(v: boolean) {
        this._isTetrahedral = v;
    }
    get isTetrahedral() {
        if (this._isTetrahedral === undefined) {
            const fn = require('../lib/isTetrahedral');
            this._isTetrahedral = fn(this);
            return this._isTetrahedral;
        }
        return this._isTetrahedral;
    }

    private _mobiusRange: unknown;
    set mobiusRange(v) {
        this._mobiusRange = v;
    }
    get mobiusRange() {
        if (this._mobiusRange === undefined) {
            const fn = require('../lib/mobiusRange');
            this._mobiusRange = fn(this);
            return this._mobiusRange;
        }
        return this._mobiusRange;
    }

    private _getCenteredHexagonal: unknown;
    set getCenteredHexagonal(v) {
        this._getCenteredHexagonal = v;
    }
    get getCenteredHexagonal() {
        if (this._getCenteredHexagonal === undefined) {
            const fn = require('../lib/getCenteredHexagonal');
            this._getCenteredHexagonal = fn(this);
            return this._getCenteredHexagonal;
        }
        return this._getCenteredHexagonal;
    }

    private _isAbundant: boolean;
    set isAbundant(v: boolean) {
        this._isAbundant = v;
    }
    get isAbundant() {
        if (this._isAbundant === undefined) {
            const fn = require('../lib/isAbundant');
            this._isAbundant = fn(this);
            return this._isAbundant;
        }
        return this._isAbundant;
    }

    private _isKRough: unknown;
    set isKRough(v: boolean) {
        throw "Search code for: b521f257-c885-5b59-9852-0c5324408822";
    }
    get isKRough() {
        throw "Search code for: 5620059f-ad6f-5f43-88ad-7c1adbc23c8b";
    }

    private _isPolite: boolean;
    set isPolite(v: boolean) {
        this._isPolite = v;
    }
    get isPolite() {
        if (this._isPolite === undefined) {
            const fn = require('../lib/isPolite');
            this._isPolite = fn(this);
            return this._isPolite;
        }
        return this._isPolite;
    }

    private _isPronic: boolean;
    set isPronic(v: boolean) {
        this._isPronic = v;
    }
    get isPronic() {
        if (this._isPronic === undefined) {
            const fn = require('../lib/isPronic');
            this._isPronic = fn(this);
            return this._isPronic;
        }
        return this._isPronic;
    }

    private _isSemiperfect: boolean;
    set isSemiperfect(v: boolean) {
        this._isSemiperfect = v;
    }
    get isSemiperfect() {
        if (this._isSemiperfect === undefined) {
            const fn = require('../lib/isSemiperfect');
            this._isSemiperfect = fn(this);
            return this._isSemiperfect;
        }
        return this._isSemiperfect;
    }

    private _isUntouchable: boolean;
    set isUntouchable(v: boolean) {
        this._isUntouchable = v;
    }
    get isUntouchable() {
        if (this._isUntouchable === undefined) {
            const fn = require('../lib/isUntouchable');
            this._isUntouchable = fn(this);
            return this._isUntouchable;
        }
        return this._isUntouchable;
    }

    private _getCountDivisors: unknown;
    set getCountDivisors(v) {
        this._getCountDivisors = v;
    }
    get getCountDivisors() {
        if (this._getCountDivisors === undefined) {
            const fn = require('../lib/getCountDivisors');
            this._getCountDivisors = fn(this);
            return this._getCountDivisors;
        }
        return this._getCountDivisors;
    }

    private _isArithmetic: boolean;
    set isArithmetic(v: boolean) {
        this._isArithmetic = v;
    }
    get isArithmetic() {
        if (this._isArithmetic === undefined) {
            const fn = require('../lib/isArithmetic');
            this._isArithmetic = fn(this);
            return this._isArithmetic;
        }
        return this._isArithmetic;
    }

    private _isMersennePrime: boolean;
    set isMersennePrime(v: boolean) {
        this._isMersennePrime = v;
    }
    get isMersennePrime() {
        if (this._isMersennePrime === undefined) {
            const fn = require('../lib/isMersennePrime');
            this._isMersennePrime = fn(this);
            return this._isMersennePrime;
        }
        return this._isMersennePrime;
    }

    private _isPowerOf2: boolean;
    set isPowerOf2(v: boolean) {
        this._isPowerOf2 = v;
    }
    get isPowerOf2() {
        if (this._isPowerOf2 === undefined) {
            const fn = require('../lib/isPowerOf2');
            this._isPowerOf2 = fn(this);
            return this._isPowerOf2;
        }
        return this._isPowerOf2;
    }


    set isRough(v: boolean) {
        this.isKRough = v;
    }
    get isRough() {
        return this.isKRough;
    }

    private _isSmooth: boolean;
    set isSmooth(v: boolean) {
        this._isSmooth = v;
    }
    get isSmooth() {
        if (this._isSmooth === undefined) {
            const fn = require('../lib/isSmooth');
            this._isSmooth = fn(this);
            return this._isSmooth;
        }
        return this._isSmooth;
    }

    private _isUnusual: boolean;
    set isUnusual(v: boolean) {
        this._isUnusual = v;
    }
    get isUnusual() {
        if (this._isUnusual === undefined) {
            const fn = require('../lib/isUnusual');
            this._isUnusual = fn(this);
            return this._isUnusual;
        }
        return this._isUnusual;
    }

    private _semiperfectTest: boolean;
    set semiperfectTest(v: boolean) {
        this._semiperfectTest = v;
    }
    get semiperfectTest() {
        if (this._semiperfectTest === undefined) {
            const fn = require('../lib/semiperfectTest');
            this._semiperfectTest = fn(this);
            return this._semiperfectTest;
        }
        return this._semiperfectTest;
    }

    private _getIntRoot: unknown;
    set getIntRoot(v) {
        this._getIntRoot = v;
    }
    get getIntRoot() {
        if (this._getIntRoot === undefined) {
            const fn = require('../lib/getIntRoot');
            this._getIntRoot = fn(this);
            return this._getIntRoot;
        }
        return this._getIntRoot;
    }

    private isCenteredHexagonal: boolean;
    set isCenteredHexagonal(v: boolean) {
        this._isCenteredHexagonal = v;
    }
    get isCenteredHexagonal() {
        if (this._isCenteredHexagonal === undefined) {
            const fn = require('../lib/isCenteredHexagonal');
            this._isCenteredHexagonal = fn(this);
            return this._isCenteredHexagonal;
        }
        return this._isCenteredHexagonal;
    }

    private _isMoreRound: unknown;
    set isMoreRound(v: boolean) {
        this._isMoreRound = v;
    }
    get isMoreRound() {
        if (this._isMoreRound === undefined) {
            const fn = require('../lib/isMoreRound');
            this._isMoreRound = fn(this);
            return this._isMoreRound;
        }
        return this._isMoreRound;
    }

    private _isPowerSmooth: boolean;
    set isPowerSmooth(v: boolean) {
        this._isPowerSmooth = v;
    }
    get isPowerSmooth() {
        if (this._isPowerSmooth === undefined) {
            const fn = require('../lib/isPowerSmooth');
            this._isPowerSmooth = fn(this);
            return this._isPowerSmooth;
        }
        return this._isPowerSmooth;
    }

    set isRound(v) {
        throw "Search code for: b521f257-c885-5b59-9852-0c5324408822";
    }
    get isRound() {
        throw "Search code for: 5620059f-ad6f-5f43-88ad-7c1adbc23c8b";
    }

    private _isSophieGermainPrime: boolean;
    set isSophieGermainPrime(v: boolean) {
        this._isSophieGermainPrime = v;
    }
    get isSophieGermainPrime() {
        if (this._isSophieGermainPrime === undefined) {
            const fn = require('../lib/isSophieGermainPrime');
            this._isSophieGermainPrime = fn(this);
            return this._isSophieGermainPrime;
        }
        return this._isSophieGermainPrime;
    }

    private _isWeird: boolean;
    set isWeird(v: boolean) {
        this._isWeird = v;
    }
    get isWeird() {
        if (this._isWeird === undefined) {
            const fn = require('../lib/isWeird');
            this._isWeird = fn(this);
            return this._isWeird;
        }
        return this._isWeird;
    }

    private _sieve: unknown;
    set sieve(v) {
        this._sieve = v;
    }
    get sieve() {
        if (this._sieve === undefined) {
            const fn = require('../lib/sieve');
            this._sieve = fn(this);
            return this._sieve;
        }
        return this._sieve;
    }

    private _getPoliteness: number;
    set getPoliteness(v: number) {
        this._getPoliteness = v;
    }
    get getPoliteness() {
        if (this._getPoliteness === undefined) {
            const fn = require('../lib/getPoliteness');
            this._getPoliteness = fn(this);
            return this._getPoliteness;
        }
        return this._getPoliteness;
    }

    private isEven: boolean;
    set isEven(v: boolean) {
        this._isEven = v;
    }
    get isEven() {
        if (this._isEven === undefined) {
            const fn = require('../lib/isEven');
            this._isEven = fn(this);
            return this._isEven;
        }
        return this._isEven;
    }

    private _isNatural: boolean;
    set isNatural(v: boolean) {
        this._isNatural = v;
    }
    get isNatural() {
        if (this._isNatural === undefined) {
            const fn = require('../lib/isNatural');
            this._isNatural = fn(this);
            return this._isNatural;
        }
        return this._isNatural;
    }

    private _isPractical: boolean;
    set isPractical(v: boolean) {
        this._isPractical = v;
    }
    get isPractical() {
        if (this._isPractical === undefined) {
            const fn = require('../lib/isPractical');
            this._isPractical = fn(this);
            return this._isPractical;
        }
        return this._isPractical;
    }

    private _isSad: boolean;
    set isSad(v: boolean) {
        this._isSad = v;
    }
    get isSad() {
        if (this._isSad === undefined) {
            const fn = require('../lib/isSad');
            this._isSad = fn(this);
            return this._isSad;
        }
        return this._isSad;
    }

    private _isSphenic: boolean;
    set isSphenic(v: boolean) {
        this._isSphenic = v;
    }
    get isSphenic() {
        if (this._isSphenic === undefined) {
            const fn = require('../lib/isSphenic');
            this._isSphenic = fn(this);
            return this._isSphenic;
        }
        return this._isSphenic;
    }

    private _isWhole: boolean;
    set isWhole(v: boolean) {
        this._isWhole = v;
    }
    get isWhole() {
        if (this._isWhole === undefined) {
            const fn = require('../lib/isWhole');
            this._isWhole = fn(this);
            return this._isWhole;
        }
        return this._isWhole;
    }

    // This does not make sense, why would sum be a property of the enhanced number type?  The sum of the number is the number itself.
    private _sum: number;
    set sum(v: number) {
        this._sum = v;
    }
    get sum() {
        if (this._sum === undefined) {
            const fn = require('../lib/sum');
            this._sum = fn(this);
            return this._sum;
        }
        return this._sum;
    }
}

const instantiatedNumbers: { [k: string]: EnhancedNumberType | undefined } = {};

module.exports = function (n: number | EnhancedNumberType) {
    if (n instanceof EnhancedNumber) {
        return n;
    }
    else if (instantiatedNumbers[n.toString()]) {
        return instantiatedNumbers[n.toString()];
    }
    instantiatedNumbers[n.toString()] = new EnhancedNumber(n);
    return instantiatedNumbers[n.toString()];
}
