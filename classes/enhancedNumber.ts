import { divisors } from "../lib/divisors";
import { factorsOf } from "../lib/factorsOf";
import { getAliquotSum } from "../lib/getAliquotSum";
import { getCenteredHexagonal } from "../lib/getCenteredHexagonal";
import { getCountDivisors } from "../lib/getCountDivisors";
import { getIntRoot } from "../lib/getIntRoot";
import { getPoliteness } from "../lib/getPoliteness";
import { getStar } from "../lib/getStar";
import { getTetrahedral } from "../lib/getTetrahedral";
import { hasIntRoot } from "../lib/hasIntRoot";
import { isAbundant } from "../lib/isAbundant";
import { isArithmetic } from "../lib/isArithmetic";
import { isCenteredHexagonal } from "../lib/isCenteredHexagonal";
import { isEven } from "../lib/isEven";
import { isEvil } from "../lib/isEvil";
import { isHappy } from "../lib/isHappy";
import { isImpolite } from "../lib/isImpolite";
import { isMersennePrime } from "../lib/isMersennePrime";
import { isNatural } from "../lib/isNatural";
import { isOdd } from "../lib/isOdd";
import { isOdious } from "../lib/isOdious";
import { isPerfect } from "../lib/isPerfect";
import { isPolite } from "../lib/isPolite";
import { isPowerOf2 } from "../lib/isPowerOf2";
import { isPractical } from "../lib/isPractical";
import { isPrime } from "../lib/isPrime";
import { isPrimePower } from "../lib/isPrimePower";
import { isPronic } from "../lib/isPronic";
import { isSad } from "../lib/isSad";
import { isSafePrime } from "../lib/isSafePrime";
import { isSelf } from "../lib/isSelf";
import { isSelfPrime } from "../lib/isSelfPrime";
import { isSemiperfect } from "../lib/isSemiperfect";
import { isSophieGermainPrime } from "../lib/isSophieGermainPrime";
import { isSphenic } from "../lib/isSphenic";
import { isStar } from "../lib/isStar";
import { isTetrahedral } from "../lib/isTetrahedral";
import { isUntouchable } from "../lib/isUntouchable";
import { isUnusual } from "../lib/isUnusual";
import { isWeird } from "../lib/isWeird";
import { isWhole } from "../lib/isWhole";
import { mobius } from "../lib/mobius";
import { semiperfectTest } from "../lib/semiperfectTest";
import { sieve } from "../lib/sieve";

export interface EnhancedNumberInterface {
	readonly number: number;
	_number: number | undefined;
	_divisors: number[] | undefined;
	_getStar: number | undefined;
	_isEvil: boolean | undefined;
	_isOdd: boolean | undefined;
	_isPrime: boolean | undefined;
	_isSafePrime: boolean | undefined;
	_isStar: boolean | undefined;
	_factorsOf: { prime: number; power: number }[] | undefined;
	_getTetrahedral: number | undefined;
	_isHappy: boolean | undefined;
	_isOdious: boolean | undefined;
	_isPrimePower: boolean | undefined;
	_isSelf: boolean | undefined;
	_mobius: number | undefined;
	_getAliquotSum: number | undefined;
	_hasIntRoot: boolean | undefined;
	_isImpolite: boolean | undefined;
	_isPerfect: boolean | undefined;
	_isSelfPrime: boolean | undefined;
	_isTetrahedral: boolean | undefined;
	_getCenteredHexagonal: number | undefined;
	_isAbundant: boolean | undefined;
	_isPolite: boolean | undefined;
	_isPronic: boolean | undefined;
	_isSemiperfect: boolean | undefined;
	_isUntouchable: boolean | undefined;
	_getCountDivisors: number | undefined;
	_isArithmetic: boolean | undefined;
	_isMersennePrime: boolean | undefined;
	_isPowerOf2: boolean | undefined;
	_isUnusual: boolean | undefined;
	_semiperfectTest: boolean | undefined;
	_getIntRoot: number | boolean | undefined;
	_isRound: boolean | undefined;
	_isSophieGermainPrime: boolean | undefined;
	_isWeird: boolean | undefined;
	_sieve: number[] | undefined;
	_getPoliteness: number | undefined;
	_isNatural: boolean | undefined;
	_isPractical: boolean | undefined;
	_isSad: boolean | undefined;
	_isSphenic: boolean | undefined;
	_isWhole: boolean | undefined;

	// Getters and Setters
	divisors: number[] | undefined;
	factorsOf: { prime: number; power: number }[] | undefined;
	getAliquotSum: number | undefined;
	getCenteredHexagonal: number | undefined;
	getCountDivisors: number | undefined;
	getIntRoot: number | boolean | undefined;
	getPoliteness: number | undefined;
	getStar: number | undefined;
	getTetrahedral: number | undefined;
	hasIntRoot: boolean | undefined;
	isAbundant: boolean | undefined;
	isArithmetic: boolean | undefined;
	isCenteredHexagonal: boolean | undefined;
	isEven: boolean | undefined;
	isEvil: boolean | undefined;
	isHappy: boolean | undefined;
	isImpolite: boolean | undefined;
	isMersennePrime: boolean | undefined;
	isNatural: boolean | undefined;
	isOdd: boolean | undefined;
	isOdious: boolean | undefined;
	isPerfect: boolean | undefined;
	isPolite: boolean | undefined;
	isPowerOf2: boolean | undefined;
	isPractical: boolean | undefined;
	isPrime: boolean | undefined;
	isPrimePower: boolean | undefined;
	isPronic: boolean | undefined;
	isRound: boolean | undefined;
	isSad: boolean | undefined;
	isSafePrime: boolean | undefined;
	isSelf: boolean | undefined;
	isSelfPrime: boolean | undefined;
	isSemiperfect: boolean | undefined;
	isSophieGermainPrime: boolean | undefined;
	isSphenic: boolean | undefined;
	isStar: boolean | undefined;
	isTetrahedral: boolean | undefined;
	isUntouchable: boolean | undefined;
	isUnusual: boolean | undefined;
	isWeird: boolean | undefined;
	isWhole: boolean | undefined;
	mobius: number | undefined;
	semiperfectTest: boolean | undefined;
	sieve: number[] | undefined;

	// Functions
	toString: () => string | undefined;
	toNumber: () => number | undefined;
}

export function unknownIsEnhancedNumber(n: unknown): n is EnhancedNumber {
	return typeof n === "object" && n !== null && "number" in n;
}

export class EnhancedNumber implements EnhancedNumberInterface {
	_divisors: number[] | undefined = undefined;
	_getStar: number | undefined = undefined;
	_isEvil: boolean | undefined = undefined;
	_isOdd: boolean | undefined = undefined;
	_isPrime: boolean | undefined = undefined;
	_isSafePrime: boolean | undefined = undefined;
	_isStar: boolean | undefined = undefined;
	_factorsOf: { prime: number; power: number }[] | undefined = undefined;
	_getTetrahedral: number | undefined = undefined;
	_isHappy: boolean | undefined = undefined;
	_isOdious: boolean | undefined = undefined;
	_isPrimePower: boolean | undefined = undefined;
	_isSelf: boolean | undefined = undefined;
	_mobius: number | undefined = undefined;
	_getAliquotSum: number | undefined = undefined;
	_hasIntRoot: boolean | undefined = undefined;
	_isImpolite: boolean | undefined = undefined;
	_isPerfect: boolean | undefined = undefined;
	_isSelfPrime: boolean | undefined = undefined;
	_isTetrahedral: boolean | undefined = undefined;
	_getCenteredHexagonal: number | undefined = undefined;
	_isAbundant: boolean | undefined = undefined;
	_isPolite: boolean | undefined = undefined;
	_isPronic: boolean | undefined = undefined;
	_isSemiperfect: boolean | undefined = undefined;
	_isUntouchable: boolean | undefined = undefined;
	_getCountDivisors: number | undefined = undefined;
	_isArithmetic: boolean | undefined = undefined;
	_isMersennePrime: boolean | undefined = undefined;
	_isPowerOf2: boolean | undefined = undefined;
	_isUnusual: boolean | undefined = undefined;
	_semiperfectTest: boolean | undefined = undefined;
	_getIntRoot: number | boolean | undefined = undefined;
	_isCenteredHexagonal: boolean | undefined = undefined;
	_isRound: boolean | undefined = undefined;
	_isSophieGermainPrime: boolean | undefined = undefined;
	_isWeird: boolean | undefined = undefined;
	_sieve: number[] | undefined = undefined;
	_getPoliteness: number | undefined = undefined;
	_isEven: boolean | undefined = undefined;
	_isNatural: boolean | undefined = undefined;
	_isPractical: boolean | undefined = undefined;
	_isSad: boolean | undefined = undefined;
	_isSphenic: boolean | undefined = undefined;
	_isWhole: boolean | undefined = undefined;

	// this should not need to be set - it should only be set in the constructor
	_number: number = 0;

	constructor(n: number | EnhancedNumber) {
		if (unknownIsEnhancedNumber(n)) {
			return n;
		} else if (instantiatedNumbers[n.toString()] !== undefined) {
			return instantiatedNumbers[n.toString()];
		}
		this._number = n;
		instantiatedNumbers[n.toString()] = this;

		return this;
	}

	toString(): string | undefined {
		return this.number !== undefined ? this.number.toString() : undefined;
	}

	toNumber(): number | undefined {
		return this.number;
	}

	set number(v: number) {
		throw "base value of EnhancedNumber can not be changed, please instantiate a new instance of EnhancedNumber";
	}
	get number(): number {
		return this._number;
	}

	set divisors(v: number[] | undefined) {
		this._divisors = v;
	}
	get divisors(): number[] | undefined {
		return this._divisors !== undefined
			? this._divisors
			: (this._divisors = divisors(this));
	}

	set getStar(v: number | undefined) {
		this._getStar = v;
	}
	get getStar(): number | undefined {
		return this._getStar !== undefined
			? this._getStar
			: (this._getStar = getStar(this));
	}

	set isEvil(v: boolean | undefined) {
		this._isEvil = v;
	}
	get isEvil(): boolean | undefined {
		return this._isEvil !== undefined
			? this._isEvil
			: (this._isEvil = isEvil(this));
	}

	set isOdd(v: boolean | undefined) {
		this._isOdd = v;
	}
	get isOdd(): boolean | undefined {
		return this._isOdd !== undefined
			? this._isOdd
			: (this._isOdd = isOdd(this));
	}

	set isPrime(v: boolean | undefined) {
		this._isPrime = v;
	}
	get isPrime(): boolean | undefined {
		return this._isPrime !== undefined
			? this._isPrime
			: (this._isPrime = isPrime(this));
	}

	set isSafePrime(v: boolean | undefined) {
		this._isSafePrime = v;
	}
	get isSafePrime(): boolean | undefined {
		return this._isSafePrime !== undefined
			? this._isSafePrime
			: (this._isSafePrime = isSafePrime(this));
	}

	set isStar(v: boolean | undefined) {
		this._isStar = v;
	}
	get isStar(): boolean | undefined {
		return this._isStar !== undefined
			? this._isStar
			: (this._isStar = isStar(this));
	}

	set factorsOf(v: { prime: number; power: number }[]) {
		this._factorsOf = v;
	}
	get factorsOf(): { prime: number; power: number }[] {
		return this._factorsOf !== undefined
			? this._factorsOf
			: (this._factorsOf = factorsOf(this));
	}

	set getTetrahedral(v: number | undefined) {
		this._getTetrahedral = v;
	}
	get getTetrahedral(): number | undefined {
		return this._getTetrahedral !== undefined
			? this._getTetrahedral
			: (this._getTetrahedral = getTetrahedral(this));
	}

	set isHappy(v: boolean | undefined) {
		this._isHappy = v;
	}
	get isHappy(): boolean | undefined {
		return this._isHappy !== undefined
			? this._isHappy
			: (this._isHappy = isHappy(this));
	}

	set isOdious(v: boolean | undefined) {
		this._isOdious = v;
	}
	get isOdious(): boolean | undefined {
		return this._isOdious !== undefined
			? this._isOdious
			: (this._isOdious = isOdious(this));
	}

	set isPrimePower(v: boolean | undefined) {
		this._isPrimePower = v;
	}
	get isPrimePower(): boolean | undefined {
		return this._isPrimePower !== undefined
			? this._isPrimePower
			: (this._isPrimePower = isPrimePower(this));
	}

	set isSelf(v: boolean | undefined) {
		this._isSelf = v;
	}
	get isSelf(): boolean | undefined {
		return this._isSelf !== undefined
			? this._isSelf
			: (this._isSelf = isSelf(this));
	}

	set mobius(v) {
		this._mobius = v;
	}
	get mobius() {
		return this._mobius !== undefined
			? this._mobius
			: (this._mobius = mobius(this));
	}

	set getAliquotSum(v) {
		this._getAliquotSum = v;
	}
	get getAliquotSum() {
		return this._getAliquotSum !== undefined
			? this._getAliquotSum
			: (this._getAliquotSum = getAliquotSum(this));
	}

	set hasIntRoot(v: boolean | undefined) {
		this._hasIntRoot = v;
	}
	get hasIntRoot(): boolean | undefined {
		return this._hasIntRoot !== undefined
			? this._hasIntRoot
			: (this._hasIntRoot = hasIntRoot(this));
	}

	set isImpolite(v: boolean | undefined) {
		this._isImpolite = v;
	}
	get isImpolite(): boolean | undefined {
		return this._isImpolite !== undefined
			? this._isImpolite
			: (this._isImpolite = isImpolite(this));
	}

	set isPerfect(v: boolean | undefined) {
		this._isPerfect = v;
	}
	get isPerfect(): boolean | undefined {
		return this._isPerfect !== undefined
			? this._isPerfect
			: (this._isPerfect = isPerfect(this));
	}

	set isSelfPrime(v: boolean | undefined) {
		this._isSelfPrime = v;
	}
	get isSelfPrime(): boolean | undefined {
		return this._isSelfPrime !== undefined
			? this._isSelfPrime
			: (this._isSelfPrime = isSelfPrime(this));
	}

	set isTetrahedral(v: boolean | undefined) {
		this._isTetrahedral = v;
	}
	get isTetrahedral(): boolean | undefined {
		return this._isTetrahedral !== undefined
			? this._isTetrahedral
			: (this._isTetrahedral = isTetrahedral(this));
	}

	set getCenteredHexagonal(v: number | undefined) {
		this._getCenteredHexagonal = v;
	}
	get getCenteredHexagonal(): number | undefined {
		return this._getCenteredHexagonal !== undefined
			? this._getCenteredHexagonal
			: (this._getCenteredHexagonal = getCenteredHexagonal(this));
	}

	set isAbundant(v: boolean | undefined) {
		this._isAbundant = v;
	}
	get isAbundant(): boolean | undefined {
		return this._isAbundant !== undefined
			? this._isAbundant
			: (this._isAbundant = isAbundant(this));
	}

	set isPolite(v: boolean | undefined) {
		this._isPolite = v;
	}
	get isPolite(): boolean | undefined {
		return this._isPolite !== undefined
			? this._isPolite
			: (this._isPolite = isPolite(this));
	}

	set isPronic(v: boolean | undefined) {
		this._isPronic = v;
	}
	get isPronic(): boolean | undefined {
		return this._isPronic !== undefined
			? this._isPronic
			: (this._isPronic = isPronic(this));
	}

	set isSemiperfect(v: boolean | undefined) {
		this._isSemiperfect = v;
	}
	get isSemiperfect(): boolean | undefined {
		return this._isSemiperfect !== undefined
			? this._isSemiperfect
			: (this._isSemiperfect = isSemiperfect(this));
	}

	set isUntouchable(v: boolean | undefined) {
		this._isUntouchable = v;
	}
	get isUntouchable(): boolean | undefined {
		return this._isUntouchable !== undefined
			? this._isUntouchable
			: (this._isUntouchable = isUntouchable(this));
	}

	set getCountDivisors(v: number | undefined) {
		this._getCountDivisors = v;
	}
	get getCountDivisors(): number | undefined {
		return this._getCountDivisors !== undefined
			? this._getCountDivisors
			: (this._getCountDivisors = getCountDivisors(this));
	}

	set isArithmetic(v: boolean | undefined) {
		this._isArithmetic = v;
	}
	get isArithmetic(): boolean | undefined {
		return this._isArithmetic !== undefined
			? this._isArithmetic
			: (this._isArithmetic = isArithmetic(this));
	}

	set isMersennePrime(v: boolean | undefined) {
		this._isMersennePrime = v;
	}
	get isMersennePrime(): boolean | undefined {
		return this._isMersennePrime !== undefined
			? this._isMersennePrime
			: (this._isMersennePrime = isMersennePrime(this));
	}

	set isPowerOf2(v: boolean | undefined) {
		this._isPowerOf2 = v;
	}
	get isPowerOf2(): boolean | undefined {
		return this._isPowerOf2 !== undefined
			? this._isPowerOf2
			: (this._isPowerOf2 = isPowerOf2(this));
	}

	set isUnusual(v: boolean | undefined) {
		this._isUnusual = v;
	}
	get isUnusual(): boolean | undefined {
		return this._isUnusual !== undefined
			? this._isUnusual
			: (this._isUnusual = isUnusual(this));
	}

	set semiperfectTest(v: boolean | undefined) {
		this._semiperfectTest = v;
	}
	get semiperfectTest(): boolean | undefined {
		return this._semiperfectTest !== undefined
			? this._semiperfectTest
			: (this._semiperfectTest = semiperfectTest(this));
	}

	set getIntRoot(v: number | boolean) {
		this._getIntRoot = v;
	}
	get getIntRoot(): number | boolean {
		return this._getIntRoot !== undefined
			? this._getIntRoot
			: (this._getIntRoot = getIntRoot(this));
	}

	set isCenteredHexagonal(v: boolean | undefined) {
		this._isCenteredHexagonal = v;
	}
	get isCenteredHexagonal(): boolean | undefined {
		return this._isCenteredHexagonal !== undefined
			? this._isCenteredHexagonal
			: (this._isCenteredHexagonal = isCenteredHexagonal(this));
	}

	set isRound(v: boolean | undefined) {
		throw "Search code for: b521f257-c885-5b59-9852-0c5324408822";
	}
	get isRound(): boolean | undefined {
		throw "Search code for: 5620059f-ad6f-5f43-88ad-7c1adbc23c8b";
	}

	set isSophieGermainPrime(v: boolean | undefined) {
		this._isSophieGermainPrime = v;
	}
	get isSophieGermainPrime(): boolean | undefined {
		return this._isSophieGermainPrime !== undefined
			? this._isSophieGermainPrime
			: (this._isSophieGermainPrime = isSophieGermainPrime(this));
	}

	set isWeird(v: boolean | undefined) {
		this._isWeird = v;
	}
	get isWeird(): boolean | undefined {
		return this._isWeird !== undefined
			? this._isWeird
			: (this._isWeird = isWeird(this));
	}

	set sieve(v: number[] | undefined) {
		this._sieve = v;
	}
	get sieve(): number[] | undefined {
		return this._sieve !== undefined
			? this._sieve
			: (this._sieve = sieve(this));
	}

	set getPoliteness(v: number | undefined) {
		this._getPoliteness = v;
	}
	get getPoliteness(): number | undefined {
		return this._getPoliteness !== undefined
			? this._getPoliteness
			: (this._getPoliteness = getPoliteness(this));
	}

	set isEven(v: boolean | undefined) {
		this._isEven = v;
	}
	get isEven(): boolean | undefined {
		return this._isEven !== undefined
			? this._isEven
			: (this._isEven = isEven(this));
	}

	set isNatural(v: boolean | undefined) {
		this._isNatural = v;
	}
	get isNatural(): boolean | undefined {
		return this._isNatural !== undefined
			? this._isNatural
			: (this._isNatural = isNatural(this));
	}

	set isPractical(v: boolean | undefined) {
		this._isPractical = v;
	}
	get isPractical(): boolean | undefined {
		return this._isPractical !== undefined
			? this._isPractical
			: (this._isPractical = isPractical(this));
	}

	set isSad(v: boolean | undefined) {
		this._isSad = v;
	}
	get isSad(): boolean | undefined {
		return this._isSad !== undefined
			? this._isSad
			: (this._isSad = isSad(this));
	}

	set isSphenic(v: boolean | undefined) {
		this._isSphenic = v;
	}
	get isSphenic(): boolean | undefined {
		return this._isSphenic !== undefined
			? this._isSphenic
			: (this._isSphenic = isSphenic(this));
	}

	set isWhole(v: boolean | undefined) {
		this._isWhole = v;
	}
	get isWhole(): boolean | undefined {
		return this._isWhole !== undefined
			? this._isWhole
			: (this._isWhole = isWhole(this));
	}
}

export const instantiatedNumbers: { [k: string]: EnhancedNumber } = {};
