import fs from "fs";

import { containsXOnes } from '../lib/containsXOnes';
import { divisors } from "../lib/divisors";
import { factorial } from '../lib/factorial';
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
import { isRound } from "../lib/isRound";
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

export interface IEnhancedNumber {
	readonly number: number;
	_containsXOnes: (boolean | undefined)[];
	_divisors: number[] | undefined;
	_factorial: number | undefined;
	_factorsOf: { prime: number; power: number }[] | undefined;
	_getAliquotSum: number | undefined;
	_getCenteredHexagonal: number | undefined;
	_getCountDivisors: number | undefined;
	_getIntRoot: number | boolean | undefined;
	_getPoliteness: number | undefined;
	_getStar: number | undefined;
	_getTetrahedral: number | undefined;
	_hasIntRoot: boolean | undefined;
	_isAbundant: boolean | undefined;
	_isArithmetic: boolean | undefined;
	_isEvil: boolean | undefined;
	_isHappy: { [k: string]: boolean | undefined };
	_isImpolite: boolean | undefined;
	_isMersennePrime: boolean | undefined;
	_isNatural: boolean | undefined;
	_isOdd: boolean | undefined;
	_isOdious: boolean | undefined;
	_isPerfect: boolean | undefined;
	_isPolite: boolean | undefined;
	_isPowerOf2: boolean | undefined;
	_isPractical: boolean | undefined;
	_isPrime: boolean | undefined;
	_isPrimePower: boolean | undefined;
	_isPronic: boolean | undefined;
	_isRound: { [k: string]: boolean | undefined };
	_isSad: { [k: string]: boolean | undefined };
	_isSafePrime: boolean | undefined;
	_isSelf: { [k: string]: boolean | undefined };
	_isSelfPrime: boolean | undefined;
	_isSemiperfect: boolean | undefined;
	_isSophieGermainPrime: boolean | undefined;
	_isSphenic: boolean | undefined;
	_isStar: boolean | undefined;
	_isTetrahedral: boolean | undefined;
	_isUntouchable: boolean | undefined;
	_isUnusual: boolean | undefined;
	_isWeird: boolean | undefined;
	_isWhole: boolean | undefined;
	_mobius: number | undefined;
	_number: number | undefined;
	_semiperfectTest: boolean | undefined;
	_sieve: number[] | undefined;

	// Getters and Setters
	containsXOnes: boolean;
	divisors: number[];
	factorial: number;
	factorsOf: { prime: number; power: number }[];
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

export function unknownIsEnhancedNumber(n: unknown): n is EnhancedNumber {
	return typeof n === "object" && n !== null && "number" in n;
}

export class EnhancedNumber implements IEnhancedNumber {
	[key: string]: any;
	_containsXOnes: (boolean | undefined)[] = [];
	_divisors: number[] | undefined = undefined;
	_factorial: number | undefined = undefined;
	_factorsOf: { prime: number; power: number }[] | undefined = undefined;
	_getAliquotSum: number | undefined = undefined;
	_getCenteredHexagonal: number | undefined = undefined;
	_getCountDivisors: number | undefined = undefined;
	_getIntRoot: number | boolean | undefined = undefined;
	_getPoliteness: number | undefined = undefined;
	_getStar: number | undefined = undefined;
	_getTetrahedral: number | undefined = undefined;
	_hasIntRoot: boolean | undefined = undefined;
	_isAbundant: boolean | undefined = undefined;
	_isArithmetic: boolean | undefined = undefined;
	_isCenteredHexagonal: boolean | undefined = undefined;
	_isEven: boolean | undefined = undefined;
	_isEvil: boolean | undefined = undefined;
	_isHappy: { [k: string]: boolean | undefined } = {};
	_isImpolite: boolean | undefined = undefined;
	_isMersennePrime: boolean | undefined = undefined;
	_isNatural: boolean | undefined = undefined;
	_isOdd: boolean | undefined = undefined;
	_isOdious: boolean | undefined = undefined;
	_isPerfect: boolean | undefined = undefined;
	_isPolite: boolean | undefined = undefined;
	_isPowerOf2: boolean | undefined = undefined;
	_isPractical: boolean | undefined = undefined;
	_isPrime: boolean | undefined = undefined;
	_isPrimePower: boolean | undefined = undefined;
	_isPronic: boolean | undefined = undefined;
	_isRound: { [k: string]: boolean | undefined } = {};
	_isSad: { [k: string]: boolean | undefined } = {};
	_isSafePrime: boolean | undefined = undefined;
	_isSelf: { [k: string]: boolean | undefined } = {};
	_isSelfPrime: boolean | undefined = undefined;
	_isSemiperfect: boolean | undefined = undefined;
	_isSophieGermainPrime: boolean | undefined = undefined;
	_isSphenic: boolean | undefined = undefined;
	_isStar: boolean | undefined = undefined;
	_isTetrahedral: boolean | undefined = undefined;
	_isUntouchable: boolean | undefined = undefined;
	_isUnusual: boolean | undefined = undefined;
	_isWeird: boolean | undefined = undefined;
	_isWhole: boolean | undefined = undefined;
	_mobius: number | undefined = undefined;
	_semiperfectTest: boolean | undefined = undefined;
	_sieve: number[] | undefined = undefined;

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

	public toString(): string {
		return this.number.toString();
	}

	public toNumber(): number {
		return this.number;
	}

	public set number(v: number) {
		throw "base value of EnhancedNumber can not be changed, please instantiate a new instance of EnhancedNumber";
	}
	public get number(): number {
		return this._number;
	}

	public set containsXOnes(v: boolean) {
		throw "containsXOnes can not be set like this";
	}
	public get containsXOnes(): boolean {
		return this._containsXOnes[8] !== undefined
			? this._containsXOnes[8]
			: (this._containsXOnes[8] = containsXOnes(this, 8));
	}

	public set divisors(v: number[]) {
		this._divisors = v;
	}
	public get divisors(): number[] {
		return this._divisors !== undefined
			? this._divisors
			: (this._divisors = divisors(this));
	}


	public set factorial(v: number) {
		this._factorial = v;
	}
	public get factorial(): number {
		return this._factorial !== undefined
			? this._factorial
			: (this._factorial = factorial(this));
	}

	public set getStar(v: number) {
		this._getStar = v;
	}
	public get getStar(): number {
		return this._getStar !== undefined
			? this._getStar
			: (this._getStar = getStar(this));
	}

	public set isEvil(v: boolean) {
		this._isEvil = v;
	}
	public get isEvil(): boolean {
		return this._isEvil !== undefined
			? this._isEvil
			: (this._isEvil = isEvil(this));
	}

	public set isOdd(v: boolean) {
		this._isOdd = v;
	}
	public get isOdd(): boolean {
		return this._isOdd !== undefined
			? this._isOdd
			: (this._isOdd = isOdd(this));
	}

	public set isPrime(v: boolean) {
		this._isPrime = v;
	}
	public get isPrime(): boolean {
		return this._isPrime !== undefined
			? this._isPrime
			: (this._isPrime = isPrime(this));
	}

	public set isSafePrime(v: boolean) {
		this._isSafePrime = v;
	}
	public get isSafePrime(): boolean {
		return this._isSafePrime !== undefined
			? this._isSafePrime
			: (this._isSafePrime = isSafePrime(this));
	}

	public set isStar(v: boolean) {
		this._isStar = v;
	}
	public get isStar(): boolean {
		return this._isStar !== undefined
			? this._isStar
			: (this._isStar = isStar(this));
	}

	public set factorsOf(v: { prime: number; power: number }[]) {
		this._factorsOf = v;
	}
	public get factorsOf(): { prime: number; power: number }[] {
		return this._factorsOf !== undefined
			? this._factorsOf
			: (this._factorsOf = factorsOf(this));
	}

	public set getTetrahedral(v: number) {
		this._getTetrahedral = v;
	}
	public get getTetrahedral(): number {
		return this._getTetrahedral !== undefined
			? this._getTetrahedral
			: (this._getTetrahedral = getTetrahedral(this));
	}

	public set isHappy(v: boolean) {
		throw "isHappy can not be set like this";
	}
	public get isHappy(): boolean {
		return this._isHappy?.[10] !== undefined
			? this._isHappy[10]
			: (this._isHappy[10] = isHappy(this, 10));
	}

	public set isOdious(v: boolean) {
		this._isOdious = v;
	}
	public get isOdious(): boolean {
		return this._isOdious !== undefined
			? this._isOdious
			: (this._isOdious = isOdious(this));
	}

	public set isPrimePower(v: boolean) {
		this._isPrimePower = v;
	}
	public get isPrimePower(): boolean {
		return this._isPrimePower !== undefined
			? this._isPrimePower
			: (this._isPrimePower = isPrimePower(this));
	}

	public set isSelf(v: boolean) {
		throw "isSelf can not be set like this";
	}
	public get isSelf(): boolean {
		return this._isSelf?.[10] !== undefined
			? this._isSelf[10]
			: (this._isSelf[10] = isSelf(this, 10));
	}

	public set mobius(v) {
		this._mobius = v;
	}
	public get mobius() {
		return this._mobius !== undefined
			? this._mobius
			: (this._mobius = mobius(this));
	}

	public set getAliquotSum(v) {
		this._getAliquotSum = v;
	}
	public get getAliquotSum() {
		return this._getAliquotSum !== undefined
			? this._getAliquotSum
			: (this._getAliquotSum = getAliquotSum(this));
	}

	public set hasIntRoot(v: boolean) {
		this._hasIntRoot = v;
	}
	public get hasIntRoot(): boolean {
		return this._hasIntRoot !== undefined
			? this._hasIntRoot
			: (this._hasIntRoot = hasIntRoot(this));
	}

	public set isImpolite(v: boolean) {
		this._isImpolite = v;
	}
	public get isImpolite(): boolean {
		return this._isImpolite !== undefined
			? this._isImpolite
			: (this._isImpolite = isImpolite(this));
	}

	public set isPerfect(v: boolean) {
		this._isPerfect = v;
	}
	public get isPerfect(): boolean {
		return this._isPerfect !== undefined
			? this._isPerfect
			: (this._isPerfect = isPerfect(this));
	}

	public set isSelfPrime(v: boolean) {
		this._isSelfPrime = v;
	}
	public get isSelfPrime(): boolean {
		return this._isSelfPrime !== undefined
			? this._isSelfPrime
			: (this._isSelfPrime = isSelfPrime(this));
	}

	public set isTetrahedral(v: boolean) {
		this._isTetrahedral = v;
	}
	public get isTetrahedral(): boolean {
		return this._isTetrahedral !== undefined
			? this._isTetrahedral
			: (this._isTetrahedral = isTetrahedral(this));
	}

	public set getCenteredHexagonal(v: number) {
		this._getCenteredHexagonal = v;
	}
	public get getCenteredHexagonal(): number {
		return this._getCenteredHexagonal !== undefined
			? this._getCenteredHexagonal
			: (this._getCenteredHexagonal = getCenteredHexagonal(this));
	}

	public set isAbundant(v: boolean) {
		this._isAbundant = v;
	}
	public get isAbundant(): boolean {
		return this._isAbundant !== undefined
			? this._isAbundant
			: (this._isAbundant = isAbundant(this));
	}

	public set isPolite(v: boolean) {
		this._isPolite = v;
	}
	public get isPolite(): boolean {
		return this._isPolite !== undefined
			? this._isPolite
			: (this._isPolite = isPolite(this));
	}

	public set isPronic(v: boolean) {
		this._isPronic = v;
	}
	public get isPronic(): boolean {
		return this._isPronic !== undefined
			? this._isPronic
			: (this._isPronic = isPronic(this));
	}

	public set isSemiperfect(v: boolean) {
		this._isSemiperfect = v;
	}
	public get isSemiperfect(): boolean {
		return this._isSemiperfect !== undefined
			? this._isSemiperfect
			: (this._isSemiperfect = isSemiperfect(this));
	}

	public set isUntouchable(v: boolean) {
		this._isUntouchable = v;
	}
	public get isUntouchable(): boolean {
		return this._isUntouchable !== undefined
			? this._isUntouchable
			: (this._isUntouchable = isUntouchable(this));
	}

	public set getCountDivisors(v: number) {
		this._getCountDivisors = v;
	}
	public get getCountDivisors(): number {
		return this._getCountDivisors !== undefined
			? this._getCountDivisors
			: (this._getCountDivisors = getCountDivisors(this));
	}

	public set isArithmetic(v: boolean) {
		this._isArithmetic = v;
	}
	public get isArithmetic(): boolean {
		return this._isArithmetic !== undefined
			? this._isArithmetic
			: (this._isArithmetic = isArithmetic(this));
	}

	public set isMersennePrime(v: boolean) {
		this._isMersennePrime = v;
	}
	public get isMersennePrime(): boolean {
		return this._isMersennePrime !== undefined
			? this._isMersennePrime
			: (this._isMersennePrime = isMersennePrime(this));
	}

	public set isPowerOf2(v: boolean) {
		this._isPowerOf2 = v;
	}
	public get isPowerOf2(): boolean {
		return this._isPowerOf2 !== undefined
			? this._isPowerOf2
			: (this._isPowerOf2 = isPowerOf2(this));
	}

	public set isUnusual(v: boolean) {
		this._isUnusual = v;
	}
	public get isUnusual(): boolean {
		return this._isUnusual !== undefined
			? this._isUnusual
			: (this._isUnusual = isUnusual(this));
	}

	public set semiperfectTest(v: boolean) {
		this._semiperfectTest = v;
	}
	public get semiperfectTest(): boolean {
		return this._semiperfectTest !== undefined
			? this._semiperfectTest
			: (this._semiperfectTest = semiperfectTest(this));
	}

	public set getIntRoot(v: number | boolean) {
		this._getIntRoot = v;
	}
	public get getIntRoot(): number | boolean {
		return this._getIntRoot !== undefined
			? this._getIntRoot
			: (this._getIntRoot = getIntRoot(this));
	}

	public set isCenteredHexagonal(v: boolean) {
		this._isCenteredHexagonal = v;
	}
	public get isCenteredHexagonal(): boolean {
		return this._isCenteredHexagonal !== undefined
			? this._isCenteredHexagonal
			: (this._isCenteredHexagonal = isCenteredHexagonal(this));
	}

	public set isRound(v: boolean) {
		throw "isRound can not be set like this";
	}
	public get isRound(): boolean {
		return this._isRound?.[10] !== undefined
			? this._isRound[10]
			: (this._isRound[10] = isRound(this, 10));
	}

	public set isSophieGermainPrime(v: boolean) {
		this._isSophieGermainPrime = v;
	}
	public get isSophieGermainPrime(): boolean {
		return this._isSophieGermainPrime !== undefined
			? this._isSophieGermainPrime
			: (this._isSophieGermainPrime = isSophieGermainPrime(this));
	}

	public set isWeird(v: boolean) {
		this._isWeird = v;
	}
	public get isWeird(): boolean {
		return this._isWeird !== undefined
			? this._isWeird
			: (this._isWeird = isWeird(this));
	}

	public set sieve(v: number[]) {
		this._sieve = v;
	}
	public get sieve(): number[] {
		return this._sieve !== undefined
			? this._sieve
			: (this._sieve = sieve(this));
	}

	public set getPoliteness(v: number) {
		this._getPoliteness = v;
	}
	public get getPoliteness(): number {
		return this._getPoliteness !== undefined
			? this._getPoliteness
			: (this._getPoliteness = getPoliteness(this));
	}

	public set isEven(v: boolean) {
		this._isEven = v;
	}
	public get isEven(): boolean {
		return this._isEven !== undefined
			? this._isEven
			: (this._isEven = isEven(this));
	}

	public set isNatural(v: boolean) {
		this._isNatural = v;
	}
	public get isNatural(): boolean {
		return this._isNatural !== undefined
			? this._isNatural
			: (this._isNatural = isNatural(this));
	}

	public set isPractical(v: boolean) {
		this._isPractical = v;
	}
	public get isPractical(): boolean {
		return this._isPractical !== undefined
			? this._isPractical
			: (this._isPractical = isPractical(this));
	}

	public set isSad(v: boolean) {
		throw "isSad can not be set like this";
	}
	public get isSad(): boolean {
		return this._isSad?.[10] !== undefined
			? this._isSad[10]
			: (this._isSad[10] = isSad(this, 10));
	}

	public set isSphenic(v: boolean) {
		this._isSphenic = v;
	}
	public get isSphenic(): boolean {
		return this._isSphenic !== undefined
			? this._isSphenic
			: (this._isSphenic = isSphenic(this));
	}

	public set isWhole(v: boolean) {
		this._isWhole = v;
	}
	public get isWhole(): boolean {
		return this._isWhole !== undefined
			? this._isWhole
			: (this._isWhole = isWhole(this));
	}
}

export const instantiatedNumbers: { [k: string]: EnhancedNumber } = {};
export function backupComputations(inputN: number | EnhancedNumber): void {
	const n = new EnhancedNumber(inputN);
	const fs = require("fs");

	const en = {
		...n,
		// Don't save the Sieve, it's too big, and since it exists on every number, it's wasteful.
		_sieve: undefined,
	};
	fs.appendFileSync("computedNumbers.json", `"${n}": ${JSON.stringify(en)},\n`);
}

let tempComputedNumbers;
try {
	tempComputedNumbers = JSON.parse(
		fs.readFileSync("computedNumbers.json", "utf8")
	);
} catch (e) {
	tempComputedNumbers = {};
}
const computedNumbers = tempComputedNumbers;

export function restoreComputations(inputN: number): void {
	for (const key of Object.keys(computedNumbers[inputN])) {
		if (key[0] == "_" && computedNumbers[inputN][key] !== undefined) {
			new EnhancedNumber(inputN)[key] = computedNumbers[inputN][key];
		}
	}
}
