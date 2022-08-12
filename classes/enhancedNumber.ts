import { divisors } from '../lib/divisors';
import { factorsOf } from '../lib/factorsOf';
import { getAliquotSum } from '../lib/getAliquotSum';
import { getCenteredHexagonal } from '../lib/getCenteredHexagonal';
import { getCountDivisors } from '../lib/getCountDivisors';
import { getIntRoot } from '../lib/getIntRoot';
import { getPoliteness } from '../lib/getPoliteness';
import { getStar } from '../lib/getStar';
import { getTetrahedral } from '../lib/getTetrahedral';
import { hasIntRoot } from '../lib/hasIntRoot';
import { isAbundant } from '../lib/isAbundant';
import { isArithmetic } from '../lib/isArithmetic';
import { isCenteredHexagonal } from '../lib/isCenteredHexagonal';
import { isEven } from '../lib/isEven';
import { isEvil } from '../lib/isEvil';
import { isHappy } from '../lib/isHappy';
import { isImpolite } from '../lib/isImpolite';
import { isMersennePrime } from '../lib/isMersennePrime';
import { isMoreRound } from '../lib/isMoreRound';
import { isNatural } from '../lib/isNatural';
import { isOdd } from '../lib/isOdd';
import { isOdious } from '../lib/isOdious';
import { isPerfect } from '../lib/isPerfect';
import { isPolite } from '../lib/isPolite';
import { isPowerOf2 } from '../lib/isPowerOf2';
import { isPowerSmooth } from '../lib/isPowerSmooth';
import { isPractical } from '../lib/isPractical';
import { isPrime } from '../lib/isPrime';
import { isPrimePower } from '../lib/isPrimePower';
import { isProductOfXPrimes } from '../lib/isProductOfXPrimes';
import { isPronic } from '../lib/isPronic';
import { isSad } from '../lib/isSad';
import { isSafePrime } from '../lib/isSafePrime';
import { isSelf } from '../lib/isSelf';
import { isSelfPrime } from '../lib/isSelfPrime';
import { isSemiperfect } from '../lib/isSemiperfect';
import { isSmooth } from '../lib/isSmooth';
import { isSophieGermainPrime } from '../lib/isSophieGermainPrime';
import { isSphenic } from '../lib/isSphenic';
import { isStar } from '../lib/isStar';
import { isSubsetSum } from '../lib/isSubsetSum';
import { isTetrahedral } from '../lib/isTetrahedral';
import { isUntouchable } from '../lib/isUntouchable';
import { isUnusual } from '../lib/isUnusual';
import { isWeird } from '../lib/isWeird';
import { isWhole } from '../lib/isWhole';
import { logX } from '../lib/logX';
import { mobius } from '../lib/mobius';
import { mobiusRange } from '../lib/mobiusRange';
import { semiperfectTest } from '../lib/semiperfectTest';
import { sieve } from '../lib/sieve';
import { sum } from '../lib/sum';

export interface EnhancedNumberType {
    readonly number: number;
    divisors: number;
    factorsOf: number[];
    getAliquotSum: unknown;
    getCenteredHexagonal: unknown;
    getCountDivisors: unknown;
    getIntRoot: number | false;
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

export class EnhancedNumber implements EnhancedNumberType {
    private _number: number;

    constructor(n: number | EnhancedNumberType) {
        if (n instanceof EnhancedNumber) {
            return n;
        }
        else if (instantiatedNumbers[n.toString()] !== undefined) {
            return instantiatedNumbers[n.toString()] as EnhancedNumberType;
        }
        this._number = n;
        instantiatedNumbers[n.toString()] = this;
        return this;
    }

    toString(): string {
        return this.number.toString();
    }

    toNumber(): number {
        return this.number.toNumber();
    }

    set number(v: never) {
        throw "base value of EnhancedNumber can not be changed, please instantiate a new instance of EnhancedNumber";
    }
    get number(): number {
        return this._number;
    }

    private _divisors: number[];
    set divisors(v: number[]) {
        this._divisors = v;
    }
    get divisors(): number[] {
        if (this._divisors === undefined) {
            this._divisors = divisors(this);
        }
        return this._divisors;
    }

    private _getStar: number;
    set getStar(v: number) {
        this._getStar = v;
    }
    get getStar(): number {
        if (this._getStar === undefined) {
            this._getStar = getStar(this);
        }
        return this._getStar;
    }

    private _isEvil: boolean;
    set isEvil(v: boolean) {
        this._isEvil = v;
    }
    get isEvil(): boolean {
        if (this._isEvil === undefined) {
            this._isEvil = isEvil(this);
        }
        return this._isEvil;
    }

    private _isOdd: boolean;
    set isOdd(v: boolean) {
        this._isOdd = v;
    }
    get isOdd(): boolean {
        if (this._isOdd === undefined) {
            this._isOdd = isOdd(this);
        }
        return this._isOdd;
    }

    private _isPrime: boolean;
    set isPrime(v: boolean) {
        this._isPrime = v;
    }
    get isPrime(): boolean {
        if (this._isPrime === undefined) {
            this._isPrime = isPrime(this);
        }
        return this._isPrime;
    }

    private _isSafePrime: boolean;
    set isSafePrime(v: boolean) {
        this._isSafePrime = v;
    }
    get isSafePrime(): boolean {
        if (this._isSafePrime === undefined) {
            this._isSafePrime = isSafePrime(this);
        }
        return this._isSafePrime;
    }

    private _isStar: boolean;
    set isStar(v: boolean) {
        this._isStar = v;
    }
    get isStar(): boolean {
        if (this._isStar === undefined) {
            this._isStar = isStar(this);
        }
        return this._isStar;
    }

    private _logX: unknown;
    set logX(v) {
        this._logX = v;
    }
    get logX() {
        if (this._logX === undefined) {
            this._logX = logX(this);
        }
        return this._logX;
    }

    private _factorsOf: number[];
    set factorsOf(v: number[]) {
        this._factorsOf = v;
    }
    get factorsOf(): number[] {
        if (this._factorsOf === undefined) {
            this._factorsOf = factorsOf(this);
        }
        return this._factorsOf;
    }

    private _getTetrahedral: number;
    set getTetrahedral(v:number) {
        this._getTetrahedral = v;
    }
    get getTetrahedral():number {
        if (this._getTetrahedral === undefined) {
            this._getTetrahedral = getTetrahedral(this);
        }
        return this._getTetrahedral;
    }

    private _isHappy: boolean;
    set isHappy(v: boolean) {
        this._isHappy = v;
    }
    get isHappy(): boolean {
        if (this._isHappy === undefined) {
            this._isHappy = isHappy(this);
        }
        return this._isHappy;
    }

    private _isOdious: boolean;
    set isOdious(v: boolean) {
        this._isOdious = v;
    }
    get isOdious():boolean {
        if (this._isOdious === undefined) {
            this._isOdious = isOdious(this);
        }
        return this._isOdious;
    }

    private _isPrimePower: boolean;
    set isPrimePower(v: boolean) {
        this._isPrimePower = v;
    }
    get isPrimePower():boolean {
        if (this._isPrimePower === undefined) {
            this._isPrimePower = isPrimePower(this);
        }
        return this._isPrimePower;
    }

    private _isSelf: boolean;
    set isSelf(v: boolean) {
        this._isSelf = v;
    }
    get isSelf():boolean {
        if (this._isSelf === undefined) {
            this._isSelf = isSelf(this);
        }
        return this._isSelf;
    }

    private _isSubsetSum: boolean;
    set isSubsetSum(v: boolean) {
        this._isSubsetSum = v;
    }
    get isSubsetSum():boolean {
        if (this._isSubsetSum === undefined) {
            this._isSubsetSum = isSubsetSum(this);
        }
        return this._isSubsetSum;
    }

    private _mobius: unknown;
    set mobius(v) {
        this._mobius = v;
    }
    get mobius() {
        if (this._mobius === undefined) {
            this._mobius = mobius(this);
        }
        return this._mobius;
    }

    private _getAliquotSum: unknown;
    set getAliquotSum(v) {
        this._getAliquotSum = v;
    }
    get getAliquotSum() {
        if (this._getAliquotSum === undefined) {
            this._getAliquotSum = getAliquotSum(this);
        }
        return this._getAliquotSum;
    }

    private _hasIntRoot: boolean;
    set hasIntRoot(v: boolean) {
        this._hasIntRoot = v;
    }
    get hasIntRoot():boolean {
        if (this._hasIntRoot === undefined) {
            this._hasIntRoot = hasIntRoot(this);
        }
        return this._hasIntRoot;
    }

    private _isImpolite: boolean;
    set isImpolite(v: boolean) {
        this._isImpolite = v;
    }
    get isImpolite():boolean {
        if (this._isImpolite === undefined) {
            this._isImpolite = isImpolite(this);
        }
        return this._isImpolite;
    }

    private _isPerfect: boolean;
    set isPerfect(v: boolean) {
        this._isPerfect = v;
    }
    get isPerfect():boolean {
        if (this._isPerfect === undefined) {
            this._isPerfect = isPerfect(this);
        }
        return this._isPerfect;
    }

    private _isProductOfXPrimes: boolean;
    set isProductOfXPrimes(v):boolean {
        this._isProductOfXPrimes = v;
    }
    get isProductOfXPrimes():boolean {
        if (this._isProductOfXPrimes === undefined) {
            this._isProductOfXPrimes = isProductOfXPrimes(this);
        }
        return this._isProductOfXPrimes;
    }

    private _isSelfPrime: boolean;
    set isSelfPrime(v: boolean) {
        this._isSelfPrime = v;
    }
    get isSelfPrime():boolean {
        if (this._isSelfPrime === undefined) {
            this._isSelfPrime = isSelfPrime(this);
        }
        return this._isSelfPrime;
    }

    private _isTetrahedral: boolean;
    set isTetrahedral(v: boolean) {
        this._isTetrahedral = v;
    }
    get isTetrahedral():boolean {
        if (this._isTetrahedral === undefined) {
            this._isTetrahedral = isTetrahedral(this);
        }
        return this._isTetrahedral;
    }

    private _mobiusRange: unknown;
    set mobiusRange(v) {
        this._mobiusRange = v;
    }
    get mobiusRange() {
        if (this._mobiusRange === undefined) {
            this._mobiusRange = mobiusRange(this);
        }
        return this._mobiusRange;
    }

    private _getCenteredHexagonal: unknown;
    set getCenteredHexagonal(v) {
        this._getCenteredHexagonal = v;
    }
    get getCenteredHexagonal() {
        if (this._getCenteredHexagonal === undefined) {
            this._getCenteredHexagonal = getCenteredHexagonal(this);
        }
        return this._getCenteredHexagonal;
    }

    private _isAbundant: boolean;
    set isAbundant(v: boolean) {
        this._isAbundant = v;
    }
    get isAbundant():boolean {
        if (this._isAbundant === undefined) {
            this._isAbundant = isAbundant(this);
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
    get isPolite():boolean {
        if (this._isPolite === undefined) {
            this._isPolite = isPolite(this);
        }
        return this._isPolite;
    }

    private _isPronic: boolean;
    set isPronic(v: boolean) {
        this._isPronic = v;
    }
    get isPronic():boolean {
        if (this._isPronic === undefined) {
            this._isPronic = isPronic(this);
        }
        return this._isPronic;
    }

    private _isSemiperfect: boolean;
    set isSemiperfect(v: boolean) {
        this._isSemiperfect = v;
    }
    get isSemiperfect():boolean {
        if (this._isSemiperfect === undefined) {
            this._isSemiperfect = isSemiperfect(this);
        }
        return this._isSemiperfect;
    }

    private _isUntouchable: boolean;
    set isUntouchable(v: boolean) {
        this._isUntouchable = v;
    }
    get isUntouchable():boolean {
        if (this._isUntouchable === undefined) {
            this._isUntouchable = isUntouchable(this);
        }
        return this._isUntouchable;
    }

    private _getCountDivisors: number;
    set getCountDivisors(v):number {
        this._getCountDivisors = v;
    }
    get getCountDivisors():number {
        if (this._getCountDivisors === undefined) {
            this._getCountDivisors = getCountDivisors(this);
        }
        return this._getCountDivisors;
    }

    private _isArithmetic: boolean;
    set isArithmetic(v: boolean) {
        this._isArithmetic = v;
    }
    get isArithmetic():boolean {
        if (this._isArithmetic === undefined) {
            this._isArithmetic = isArithmetic(this);
        }
        return this._isArithmetic;
    }

    private _isMersennePrime: boolean;
    set isMersennePrime(v: boolean) {
        this._isMersennePrime = v;
    }
    get isMersennePrime():boolean {
        if (this._isMersennePrime === undefined) {
            this._isMersennePrime = isMersennePrime(this);
        }
        return this._isMersennePrime;
    }

    private _isPowerOf2: boolean;
    set isPowerOf2(v: boolean) {
        this._isPowerOf2 = v;
    }
    get isPowerOf2():boolean {
        if (this._isPowerOf2 === undefined) {
            this._isPowerOf2 = isPowerOf2(this);
        }
        return this._isPowerOf2;
    }

    private _isKRough: boolean;
    set isRough(v: boolean) {
        this._isKRough = v;
    }
    get isRough():boolean {
        return this._isKRough;
    }

    private _isSmooth: boolean;
    set isSmooth(v: boolean) {
        this._isSmooth = v;
    }
    get isSmooth():boolean {
        if (this._isSmooth === undefined) {
            this._isSmooth = isSmooth(this);
        }
        return this._isSmooth;
    }

    private _isUnusual: boolean;
    set isUnusual(v: boolean) {
        this._isUnusual = v;
    }
    get isUnusual():boolean {
        if (this._isUnusual === undefined) {
            this._isUnusual = isUnusual(this);
        }
        return this._isUnusual;
    }

    private _semiperfectTest: boolean;
    set semiperfectTest(v: boolean) {
        this._semiperfectTest = v;
    }
    get semiperfectTest():boolean {
        if (this._semiperfectTest === undefined) {
            this._semiperfectTest = semiperfectTest(this);
        }
        return this._semiperfectTest;
    }

    private _getIntRoot: number;
    set getIntRoot(v): number {
        this._getIntRoot = v;
    }
    get getIntRoot():number {
        if (this._getIntRoot === undefined) {
            this._getIntRoot = getIntRoot(this);
        }
        return this._getIntRoot;
    }

    private isCenteredHexagonal: boolean;
    set isCenteredHexagonal(v: boolean) {
        this._isCenteredHexagonal = v;
    }
    get isCenteredHexagonal():boolean {
        if (this._isCenteredHexagonal === undefined) {
            this._isCenteredHexagonal = isCenteredHexagonal(this);
        }
        return this._isCenteredHexagonal;
    }

    private _isMoreRound: boolean;
    set isMoreRound(v: boolean) {
        this._isMoreRound = v;
    }
    get isMoreRound():boolean {
        if (this._isMoreRound === undefined) {
            this._isMoreRound = isMoreRound(this);
        }
        return this._isMoreRound;
    }

    private _isPowerSmooth: boolean;
    set isPowerSmooth(v: boolean) {
        this._isPowerSmooth = v;
    }
    get isPowerSmooth():boolean {
        if (this._isPowerSmooth === undefined) {
            this._isPowerSmooth = isPowerSmooth(this);
        }
        return this._isPowerSmooth;
    }

    private _isRound: boolean;
    set isRound(v: boolean) {
        throw "Search code for: b521f257-c885-5b59-9852-0c5324408822";
    }
    get isRound():boolean {
        throw "Search code for: 5620059f-ad6f-5f43-88ad-7c1adbc23c8b";
    }

    private _isSophieGermainPrime: boolean;
    set isSophieGermainPrime(v: boolean) {
        this._isSophieGermainPrime = v;
    }
    get isSophieGermainPrime():boolean {
        if (this._isSophieGermainPrime === undefined) {
            this._isSophieGermainPrime = isSophieGermainPrime(this);
        }
        return this._isSophieGermainPrime;
    }

    private _isWeird: boolean;
    set isWeird(v: boolean) {
        this._isWeird = v;
    }
    get isWeird():boolean {
        if (this._isWeird === undefined) {
            this._isWeird = isWeird(this);
        }
        return this._isWeird;
    }

    private _sieve: number[];
    set sieve(v:number[]) {
        this._sieve = v;
    }
    get sieve():number[] {
        if (this._sieve === undefined) {
            this._sieve = sieve(this);
        }
        return this._sieve;
    }

    private _getPoliteness: number;
    set getPoliteness(v: number) {
        this._getPoliteness = v;
    }
    get getPoliteness():number {
        if (this._getPoliteness === undefined) {
            this._getPoliteness = getPoliteness(this);
        }
        return this._getPoliteness;
    }

    private isEven: boolean;
    set isEven(v: boolean) {
        this._isEven = v;
    }
    get isEven():boolean {
        if (this._isEven === undefined) {
            this._isEven = isEven(this);
        }
        return this._isEven;
    }

    private _isNatural: boolean;
    set isNatural(v: boolean) {
        this._isNatural = v;
    }
    get isNatural():boolean {
        if (this._isNatural === undefined) {
            this._isNatural = isNatural(this);
        }
        return this._isNatural;
    }

    private _isPractical: boolean;
    set isPractical(v: boolean) {
        this._isPractical = v;
    }
    get isPractical():boolean {
        if (this._isPractical === undefined) {
            this._isPractical = isPractical(this);
        }
        return this._isPractical;
    }

    private _isSad: boolean;
    set isSad(v: boolean) {
        this._isSad = v;
    }
    get isSad():boolean {
        if (this._isSad === undefined) {
            this._isSad = isSad(this);
        }
        return this._isSad;
    }

    private _isSphenic: boolean;
    set isSphenic(v: boolean) {
        this._isSphenic = v;
    }
    get isSphenic():boolean {
        if (this._isSphenic === undefined) {
            this._isSphenic = isSphenic(this);
        }
        return this._isSphenic;
    }

    private _isWhole: boolean;
    set isWhole(v: boolean) {
        this._isWhole = v;
    }
    get isWhole():boolean {
        if (this._isWhole === undefined) {
            this._isWhole = isWhole(this);
        }
        return this._isWhole;
    }

    // This does not make sense, why would sum be a property of the enhanced number type?  The sum of the number is the number itself.
    private _sum: number;
    set sum(v: number) {
        this._sum = v;
    }
    get sum():number {
        if (this._sum === undefined) {
            this._sum = sum(this);
        }
        return this._sum;
    }
}

export const instantiatedNumbers: { [k: string]: EnhancedNumberType | undefined } = {};
