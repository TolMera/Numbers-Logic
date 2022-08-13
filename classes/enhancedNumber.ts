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
import { isNatural } from '../lib/isNatural';
import { isOdd } from '../lib/isOdd';
import { isOdious } from '../lib/isOdious';
import { isPerfect } from '../lib/isPerfect';
import { isPolite } from '../lib/isPolite';
import { isPowerOf2 } from '../lib/isPowerOf2';
import { isPractical } from '../lib/isPractical';
import { isPrime } from '../lib/isPrime';
import { isPrimePower } from '../lib/isPrimePower';
import { isPronic } from '../lib/isPronic';
import { isSad } from '../lib/isSad';
import { isSafePrime } from '../lib/isSafePrime';
import { isSelf } from '../lib/isSelf';
import { isSelfPrime } from '../lib/isSelfPrime';
import { isSemiperfect } from '../lib/isSemiperfect';
import { isSophieGermainPrime } from '../lib/isSophieGermainPrime';
import { isSphenic } from '../lib/isSphenic';
import { isStar } from '../lib/isStar';
import { isTetrahedral } from '../lib/isTetrahedral';
import { isUntouchable } from '../lib/isUntouchable';
import { isUnusual } from '../lib/isUnusual';
import { isWeird } from '../lib/isWeird';
import { isWhole } from '../lib/isWhole';
import { mobius } from '../lib/mobius';
import { semiperfectTest } from '../lib/semiperfectTest';
import { sieve } from '../lib/sieve';

export interface EnhancedNumberType {
    readonly number: number;
    _number: number;
    _divisors: number[];
    _getStar: number;
    _isEvil: boolean;
    _isOdd: boolean;
    _isPrime: boolean;
    _isSafePrime: boolean;
    _isStar: boolean;
    _factorsOf: {prime: number, power: number}[];
    _getTetrahedral: number;
    _isHappy: boolean;
    _isOdious: boolean;
    _isPrimePower: boolean;
    _isSelf: boolean;
    _mobius: number;
    _getAliquotSum: number;
    _hasIntRoot: boolean;
    _isImpolite: boolean;
    _isPerfect: boolean;
    _isSelfPrime: boolean;
    _isTetrahedral: boolean;
    _getCenteredHexagonal: number;
    _isAbundant: boolean;
    _isKRough: boolean;
    _isPolite: boolean;
    _isPronic: boolean;
    _isSemiperfect: boolean;
    _isUntouchable: boolean;
    _getCountDivisors: number;
    _isArithmetic: boolean;
    _isMersennePrime: boolean;
    _isPowerOf2: boolean;
    _isUnusual: boolean;
    _semiperfectTest: boolean;
    _getIntRoot: number | boolean;
    _isRound: boolean;
    _isSophieGermainPrime: boolean;
    _isWeird: boolean;
    _sieve: number[];
    _getPoliteness: number;
    _isNatural: boolean;
    _isPractical: boolean;
    _isSad: boolean;
    _isSphenic: boolean;
    _isWhole: boolean;

    // Getters and Setters
    divisors: number[];
    factorsOf: {prime: number, power: number}[];
    getAliquotSum: number;
    getCenteredHexagonal: number;
    getCountDivisors: number;
    getIntRoot: number | boolean;
    getPoliteness: number;
    getStar: number;
    getTetrahedral: number;
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
    isNatural: boolean;
    isOdd: boolean;
    isOdious: boolean;
    isPerfect: boolean;
    isPolite: boolean;
    isPowerOf2: boolean;
    isPractical: boolean;
    isPrime: boolean;
    isPrimePower: boolean;
    isPronic: boolean;
    isRough: boolean;
    isRound: boolean;
    isSad: boolean;
    isSafePrime: boolean;
    isSelf: boolean;
    isSelfPrime: boolean;
    isSemiperfect: boolean;
    isSophieGermainPrime: boolean;
    isSphenic: boolean;
    isStar: boolean;
    isTetrahedral: boolean;
    isUntouchable: boolean;
    isUnusual: boolean;
    isWeird: boolean;
    isWhole: boolean;
    mobius: number;
    semiperfectTest: boolean;
    sieve: number[];

    // Functions
    toString: () => string;
    toNumber: () => number;
}

export function unknownIsEnhancedNumberType(n: unknown): n is EnhancedNumberType {
    return typeof n === 'object' && n !== null && 'number' in n;
}

export class EnhancedNumber implements EnhancedNumberType {
    _number: number;

    constructor(n: number | EnhancedNumber) {
        if (unknownIsEnhancedNumberType(n)) {
            return n;
        }
        else if (instantiatedNumbers[n.toString()] !== undefined) {
            return instantiatedNumbers[n.toString()];
        }
        this._number = n;
        instantiatedNumbers[n.toString()] = this;
        return this;
    }

    toString(): string {
        return this.number.toString();
    }

    toNumber(): number {
        return this.number;
    }

    set number(v: number) {
        throw "base value of EnhancedNumber can not be changed, please instantiate a new instance of EnhancedNumber";
    }
    get number(): number {
        return this._number;
    }

    _divisors: number[];
    set divisors(v: number[]) {
        this._divisors = v;
    }
    get divisors(): number[] {
        if (this._divisors === undefined) {
            this._divisors = divisors(this);
        }
        return this._divisors;
    }

    _getStar: number;
    set getStar(v: number) {
        this._getStar = v;
    }
    get getStar(): number {
        if (this._getStar === undefined) {
            this._getStar = getStar(this);
        }
        return this._getStar;
    }

    _isEvil: boolean;
    set isEvil(v: boolean) {
        this._isEvil = v;
    }
    get isEvil(): boolean {
        if (this._isEvil === undefined) {
            this._isEvil = isEvil(this);
        }
        return this._isEvil;
    }

    _isOdd: boolean;
    set isOdd(v: boolean) {
        this._isOdd = v;
    }
    get isOdd(): boolean {
        if (this._isOdd === undefined) {
            this._isOdd = isOdd(this);
        }
        return this._isOdd;
    }

    _isPrime: boolean;
    set isPrime(v: boolean) {
        this._isPrime = v;
    }
    get isPrime(): boolean {
        if (this._isPrime === undefined) {
            this._isPrime = isPrime(this);
        }
        return this._isPrime;
    }

    _isSafePrime: boolean;
    set isSafePrime(v: boolean) {
        this._isSafePrime = v;
    }
    get isSafePrime(): boolean {
        if (this._isSafePrime === undefined) {
            this._isSafePrime = isSafePrime(this);
        }
        return this._isSafePrime;
    }

    _isStar: boolean;
    set isStar(v: boolean) {
        this._isStar = v;
    }
    get isStar(): boolean {
        if (this._isStar === undefined) {
            this._isStar = isStar(this);
        }
        return this._isStar;
    }

    _factorsOf: {prime: number, power: number}[];
    set factorsOf(v: {prime: number, power: number}[]) {
        this._factorsOf = v;
    }
    get factorsOf(): {prime: number, power: number}[] {
        if (this._factorsOf === undefined) {
            this._factorsOf = factorsOf(this);
        }
        return this._factorsOf;
    }

    _getTetrahedral: number;
    set getTetrahedral(v:number) {
        this._getTetrahedral = v;
    }
    get getTetrahedral():number {
        if (this._getTetrahedral === undefined) {
            this._getTetrahedral = getTetrahedral(this);
        }
        return this._getTetrahedral;
    }

    _isHappy: boolean;
    set isHappy(v: boolean) {
        this._isHappy = v;
    }
    get isHappy(): boolean {
        if (this._isHappy === undefined) {
            this._isHappy = isHappy(this);
        }
        return this._isHappy;
    }

    _isOdious: boolean;
    set isOdious(v: boolean) {
        this._isOdious = v;
    }
    get isOdious():boolean {
        if (this._isOdious === undefined) {
            this._isOdious = isOdious(this);
        }
        return this._isOdious;
    }

    _isPrimePower: boolean;
    set isPrimePower(v: boolean) {
        this._isPrimePower = v;
    }
    get isPrimePower():boolean {
        if (this._isPrimePower === undefined) {
            this._isPrimePower = isPrimePower(this);
        }
        return this._isPrimePower;
    }

    _isSelf: boolean;
    set isSelf(v: boolean) {
        this._isSelf = v;
    }
    get isSelf():boolean {
        if (this._isSelf === undefined) {
            this._isSelf = isSelf(this);
        }
        return this._isSelf;
    }

    _mobius: number;
    set mobius(v) {
        this._mobius = v;
    }
    get mobius() {
        if (this._mobius === undefined) {
            this._mobius = mobius(this);
        }
        return this._mobius;
    }

    _getAliquotSum: number;
    set getAliquotSum(v) {
        this._getAliquotSum = v;
    }
    get getAliquotSum() {
        if (this._getAliquotSum === undefined) {
            this._getAliquotSum = getAliquotSum(this);
        }
        return this._getAliquotSum;
    }

    _hasIntRoot: boolean;
    set hasIntRoot(v: boolean) {
        this._hasIntRoot = v;
    }
    get hasIntRoot():boolean {
        if (this._hasIntRoot === undefined) {
            this._hasIntRoot = hasIntRoot(this);
        }
        return this._hasIntRoot;
    }

    _isImpolite: boolean;
    set isImpolite(v: boolean) {
        this._isImpolite = v;
    }
    get isImpolite():boolean {
        if (this._isImpolite === undefined) {
            this._isImpolite = isImpolite(this);
        }
        return this._isImpolite;
    }

    _isPerfect: boolean;
    set isPerfect(v: boolean) {
        this._isPerfect = v;
    }
    get isPerfect():boolean {
        if (this._isPerfect === undefined) {
            this._isPerfect = isPerfect(this);
        }
        return this._isPerfect;
    }

    _isSelfPrime: boolean;
    set isSelfPrime(v: boolean) {
        this._isSelfPrime = v;
    }
    get isSelfPrime():boolean {
        if (this._isSelfPrime === undefined) {
            this._isSelfPrime = isSelfPrime(this);
        }
        return this._isSelfPrime;
    }

    _isTetrahedral: boolean;
    set isTetrahedral(v: boolean) {
        this._isTetrahedral = v;
    }
    get isTetrahedral():boolean {
        if (this._isTetrahedral === undefined) {
            this._isTetrahedral = isTetrahedral(this);
        }
        return this._isTetrahedral;
    }

    _getCenteredHexagonal: number;
    set getCenteredHexagonal(v: number) {
        this._getCenteredHexagonal = v;
    }
    get getCenteredHexagonal():number {
        if (this._getCenteredHexagonal === undefined) {
            this._getCenteredHexagonal = getCenteredHexagonal(this);
        }
        return this._getCenteredHexagonal;
    }

    _isAbundant: boolean;
    set isAbundant(v: boolean) {
        this._isAbundant = v;
    }
    get isAbundant():boolean {
        if (this._isAbundant === undefined) {
            this._isAbundant = isAbundant(this);
        }
        return this._isAbundant;
    }

    _isKRough: boolean;
    set isKRough(v: boolean) {
        throw "Search code for: b521f257-c885-5b59-9852-0c5324408822";
    }
    get isKRough(): boolean {
        throw "Search code for: 5620059f-ad6f-5f43-88ad-7c1adbc23c8b";
    }
    set isRough(v: boolean) {
        this._isKRough = v;
    }
    get isRough():boolean {
        return this._isKRough;
    }

    _isPolite: boolean;
    set isPolite(v: boolean) {
        this._isPolite = v;
    }
    get isPolite():boolean {
        if (this._isPolite === undefined) {
            this._isPolite = isPolite(this);
        }
        return this._isPolite;
    }

    _isPronic: boolean;
    set isPronic(v: boolean) {
        this._isPronic = v;
    }
    get isPronic():boolean {
        if (this._isPronic === undefined) {
            this._isPronic = isPronic(this);
        }
        return this._isPronic;
    }

    _isSemiperfect: boolean;
    set isSemiperfect(v: boolean) {
        this._isSemiperfect = v;
    }
    get isSemiperfect():boolean {
        if (this._isSemiperfect === undefined) {
            this._isSemiperfect = isSemiperfect(this);
        }
        return this._isSemiperfect;
    }

    _isUntouchable: boolean;
    set isUntouchable(v: boolean) {
        this._isUntouchable = v;
    }
    get isUntouchable():boolean {
        if (this._isUntouchable === undefined) {
            this._isUntouchable = isUntouchable(this);
        }
        return this._isUntouchable;
    }

    _getCountDivisors: number;
    set getCountDivisors(v:number) {
        this._getCountDivisors = v;
    }
    get getCountDivisors():number {
        if (this._getCountDivisors === undefined) {
            this._getCountDivisors = getCountDivisors(this);
        }
        return this._getCountDivisors;
    }

    _isArithmetic: boolean;
    set isArithmetic(v: boolean) {
        this._isArithmetic = v;
    }
    get isArithmetic():boolean {
        if (this._isArithmetic === undefined) {
            this._isArithmetic = isArithmetic(this);
        }
        return this._isArithmetic;
    }

    _isMersennePrime: boolean;
    set isMersennePrime(v: boolean) {
        this._isMersennePrime = v;
    }
    get isMersennePrime():boolean {
        if (this._isMersennePrime === undefined) {
            this._isMersennePrime = isMersennePrime(this);
        }
        return this._isMersennePrime;
    }

    _isPowerOf2: boolean;
    set isPowerOf2(v: boolean) {
        this._isPowerOf2 = v;
    }
    get isPowerOf2():boolean {
        if (this._isPowerOf2 === undefined) {
            this._isPowerOf2 = isPowerOf2(this);
        }
        return this._isPowerOf2;
    }

    _isUnusual: boolean;
    set isUnusual(v: boolean) {
        this._isUnusual = v;
    }
    get isUnusual():boolean {
        if (this._isUnusual === undefined) {
            this._isUnusual = isUnusual(this);
        }
        return this._isUnusual;
    }

    _semiperfectTest: boolean;
    set semiperfectTest(v: boolean) {
        this._semiperfectTest = v;
    }
    get semiperfectTest():boolean {
        if (this._semiperfectTest === undefined) {
            this._semiperfectTest = semiperfectTest(this);
        }
        return this._semiperfectTest;
    }

    _getIntRoot: number | boolean;
    set getIntRoot(v: number | boolean) {
        this._getIntRoot = v;
    }
    get getIntRoot():number | boolean {
        if (this._getIntRoot === undefined) {
            this._getIntRoot = getIntRoot(this);
        }
        return this._getIntRoot;
    }

    _isCenteredHexagonal: boolean;
    set isCenteredHexagonal(v: boolean) {
        this._isCenteredHexagonal = v;
    }
    get isCenteredHexagonal():boolean {
        if (this._isCenteredHexagonal === undefined) {
            this._isCenteredHexagonal = isCenteredHexagonal(this);
        }
        return this._isCenteredHexagonal;
    }

    _isRound: boolean;
    set isRound(v: boolean) {
        throw "Search code for: b521f257-c885-5b59-9852-0c5324408822";
    }
    get isRound():boolean {
        throw "Search code for: 5620059f-ad6f-5f43-88ad-7c1adbc23c8b";
    }

    _isSophieGermainPrime: boolean;
    set isSophieGermainPrime(v: boolean) {
        this._isSophieGermainPrime = v;
    }
    get isSophieGermainPrime():boolean {
        if (this._isSophieGermainPrime === undefined) {
            this._isSophieGermainPrime = isSophieGermainPrime(this);
        }
        return this._isSophieGermainPrime;
    }

    _isWeird: boolean;
    set isWeird(v: boolean) {
        this._isWeird = v;
    }
    get isWeird():boolean {
        if (this._isWeird === undefined) {
            this._isWeird = isWeird(this);
        }
        return this._isWeird;
    }

    _sieve: number[];
    set sieve(v:number[]) {
        this._sieve = v;
    }
    get sieve():number[] {
        if (this._sieve === undefined) {
            this._sieve = sieve(this);
        }
        return this._sieve;
    }

    _getPoliteness: number;
    set getPoliteness(v: number) {
        this._getPoliteness = v;
    }
    get getPoliteness():number {
        if (this._getPoliteness === undefined) {
            this._getPoliteness = getPoliteness(this);
        }
        return this._getPoliteness;
    }

    _isEven: boolean;
    set isEven(v: boolean) {
        this._isEven = v;
    }
    get isEven():boolean {
        if (this._isEven === undefined) {
            this._isEven = isEven(this);
        }
        return this._isEven;
    }

    _isNatural: boolean;
    set isNatural(v: boolean) {
        this._isNatural = v;
    }
    get isNatural():boolean {
        if (this._isNatural === undefined) {
            this._isNatural = isNatural(this);
        }
        return this._isNatural;
    }

    _isPractical: boolean;
    set isPractical(v: boolean) {
        this._isPractical = v;
    }
    get isPractical():boolean {
        if (this._isPractical === undefined) {
            this._isPractical = isPractical(this);
        }
        return this._isPractical;
    }

    _isSad: boolean;
    set isSad(v: boolean) {
        this._isSad = v;
    }
    get isSad():boolean {
        if (this._isSad === undefined) {
            this._isSad = isSad(this);
        }
        return this._isSad;
    }

    _isSphenic: boolean;
    set isSphenic(v: boolean) {
        this._isSphenic = v;
    }
    get isSphenic():boolean {
        if (this._isSphenic === undefined) {
            this._isSphenic = isSphenic(this);
        }
        return this._isSphenic;
    }

    _isWhole: boolean;
    set isWhole(v: boolean) {
        this._isWhole = v;
    }
    get isWhole():boolean {
        if (this._isWhole === undefined) {
            this._isWhole = isWhole(this);
        }
        return this._isWhole;
    }
}

export const instantiatedNumbers: { [k: string]: EnhancedNumber } = {};
