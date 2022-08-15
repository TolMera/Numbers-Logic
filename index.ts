/*
    Number Theory has not been updated on NPM since 2016, however there are more recent changes on github.
    I've copied a few files that have been updated on github, and put them in here.
*/
import {
	isAbundant,
	isDeficient,
	isHeptagonal,
	isHexagonal,
	isOctagonal,
	isPentagonal,
	isPerfect,
	isProbablyPrime,
	isSquare,
	isTriangular,
	eulerPhi,
	factor,
	findDivisor,
	gcd,
	incMixed,
	inverseMod,
	jacobiSymbol,
	logMod,
	multiplyMod,
	powerMod,
	primeFactors,
	primitiveRoot,
	quadraticNonresidue,
	randomPrimitiveRoot,
	squareRootMod,
	squareRootModPrime,
	totient,
} from "number-theory";
import { mobius } from "./lib/mobius";
import { mobiusRange } from "./lib/mobiusRange";
import {
	matrix,
	basic,
	calculus,
	dsp,
	generate,
	prime,
	random,
	statistic,
} from "numbers";
import { isHappy } from "./lib/isHappy";
import { isSad } from "./lib/isSad";
import { getCenteredHexagonal } from "./lib/getCenteredHexagonal";
import { getStar } from "./lib/getStar";
import { getTetrahedral } from "./lib/getTetrahedral";
import { isMersennePrime } from "./lib/isMersennePrime";
import { isPrimePower } from "./lib/isPrimePower";
import { isProductOfXPrimes } from "./lib/isProductOfXPrimes";
import { isSafePrime } from "./lib/isSafePrime";
import { isSelfPrime } from "./lib/isSelfPrime";
import { isSophieGermainPrime } from "./lib/isSophieGermainPrime";
import { isCenteredHexagonal } from "./lib/isCenteredHexagonal";
import { isStar } from "./lib/isStar";
import { isTetrahedral } from "./lib/isTetrahedral";
import { hasIntRoot } from "./lib/hasIntRoot";
import { isArithmetic } from "./lib/isArithmetic";
import { isEvil } from "./lib/isEvil";
import { isSmooth as isFriable } from "./lib/isSmooth";
import { isKRough } from "./lib/isKRough";
import { isNatural } from "./lib/isNatural";
import { isOdious } from "./lib/isOdious";
import { isPractical as isPanarithmic } from "./lib/isPractical";
import { isPolite } from "./lib/isPolite";
import { isImpolite } from "./lib/isImpolite";
import { isPowerOf2 } from "./lib/isPowerOf2";
import { isPowerSmooth } from "./lib/isPowerSmooth";
import { isPractical } from "./lib/isPractical";
import { isPronic } from "./lib/isPronic";
import { isPronic as isRectangular } from "./lib/isPronic";
import { isRough } from "./lib/isRough";
import { isRound } from "./lib/isRound";
import { isSelf } from "./lib/isSelf";
import { isSemiperfect } from "./lib/isSemiperfect";
import { isSmooth } from "./lib/isSmooth";
import { isSphenic } from "./lib/isSphenic";
import { isUntouchable } from "./lib/isUntouchable";
import { isUnusual } from "./lib/isUnusual";
import { isWeird } from "./lib/isWeird";
import { isPrime } from "./lib/isPrime";
import { isMoreRound } from "./lib/isMoreRound";
import { getPoliteness } from "./lib/getPoliteness";
import { divisors } from "./lib/divisors";
import { sieve } from "./lib/sieve";

export const index = {
	/*
    Things I would like the package to support

    Equidigital Numbers
    Extravagant Numbers
    Mersenne Prime Exponents
    Lucky Numbers
    Self Numbers <<< Don't like it, it's only base 10.
    isHarshad or isNiven
    */

	// Mine
	getCenteredHexagonal,
	getStar,
	getTetrahedral,
	bools: {
		isMersennePrime,
		isPrimePower,
		isProductOfXPrimes,
		isSafePrime,
		isSelfPrime,
		isSophieGermainPrime,

		isCenteredHexagonal,
		isStar,
		isTetrahedral,

		hasIntRoot,
		isArithmetic,
		isEvil,
		isFriable,
		isKRough,
		isNatural,
		isOdious,
		isPanarithmic,
		isPolite,
		isImpolite,
		isPowerOf2,
		isPowerSmooth,
		// TODO: Create function for ultrafriable - https://en.wikipedia.org/wiki/Smooth_number#Powersmooth_numbers
		isPractical,
		isPronic,
		isRectangular,
		isRough,
		isRound,
		isSelf,
		isSemiperfect,
		isSmooth,
		isSphenic,
		isUntouchable,
		isUnusual,
		isWeird,

		isHappy,
		isSad,

		isAbundant: isAbundant,
		isDeficient: isDeficient,
		isHeptagonal: isHeptagonal,
		isHexagonal: isHexagonal,
		isOctagonal: isOctagonal,
		isPentagonal: isPentagonal,
		isPerfect: isPerfect,
		isPrime,
		isProbablyPrime: isProbablyPrime,
		isSquare: isSquare,
		isTriangular: isTriangular,

		isColumnDD: matrix.isColumnDD,
		isInt: basic.isInt,
		isLowerBand: matrix.isLowerBand,
		isRowDD: matrix.isRowDD,
		isStrictlyColumnDD: matrix.isStrictlyColumnDD,
		isStrictlyRowDD: matrix.isStrictlyRowDD,
		isUpperBand: matrix.isUpperBand,
	},

	comparison: {
		isMoreRound,
	},

	mobius,
	mobiusRange,
	getPoliteness,

	// - from P_number_theory
	divisors,
	eulerPhi: eulerPhi,
	factor: factor,
	findDivisor: findDivisor,
	gcd: gcd,
	incMixed: incMixed,
	inverseMod: inverseMod,
	isAbundant: isAbundant,
	isDeficient: isDeficient,
	isHeptagonal: isHeptagonal,
	isHexagonal: isHexagonal,
	isOctagonal: isOctagonal,
	isPentagonal: isPentagonal,
	isPerfect: isPerfect,
	isPrime,
	isProbablyPrime: isProbablyPrime,
	isSquare: isSquare,
	isTriangular: isTriangular,
	jacobiSymbol: jacobiSymbol,
	logMod: logMod,
	miller: isProbablyPrime,
	multiplyMod: multiplyMod,
	powerMod: powerMod,
	primeFactors: primeFactors,
	primitiveRoot: primitiveRoot,
	quadraticNonresidue: quadraticNonresidue,
	randomPrimitiveRoot: randomPrimitiveRoot,
	sieve,
	squareRootMod: squareRootMod,
	squareRootModPrime: squareRootModPrime,
	totient: totient,

	// - from P_numbers

	basic: {
		binomial: basic.binomial,
		divMod: basic.divMod,
		egcd: basic.egcd,
		factorial: basic.factorial,
		fallingFactorial: basic.fallingFactorial,
		// gcd: P_numbers.basic.gcd,
		isInt: basic.isInt,
		lcm: basic.lcm,
		max: basic.max,
		min: basic.min,
		modInverse: basic.modInverse,
		numbersEqual: basic.numbersEqual,
		permutation: basic.permutation,
		// powerMod: P_numbers.basic.powerMod,
		product: basic.product,
		random: basic.random,
		range: basic.range,
		shuffle: basic.shuffle,
		square: basic.square,
		subtraction: basic.subtraction,
		sum: basic.sum,
	},

	calculus: {
		adaptiveSimpson: calculus.adaptiveSimpson,
		LanczosGamma: calculus.LanczosGamma,
		limit: calculus.limit,
		MonteCarlo: calculus.MonteCarlo,
		pointDiff: calculus.pointDiff,
		Riemann: calculus.Riemann,
		StirlingGamma: calculus.StirlingGamma,
	},

	dsp: {
		fft: dsp.fft,
		segment: dsp.segment,
	},

	generate: {
		collatz: generate.collatz,
		fibonacci: generate.fibonacci,
	},

	matrix: {
		_check2DVector: matrix._check2DVector,
		addition: matrix.addition,
		affine: matrix.affine,
		deepCopy: matrix.deepCopy,
		determinant: matrix.determinant,
		dotproduct: matrix.dotproduct,
		GaussJordanEliminate: matrix.GaussJordanEliminate,
		getCol: matrix.getCol,
		identity: matrix.identity,
		inverse: matrix.inverse,
		isColumnDD: matrix.isColumnDD,
		isLowerBand: matrix.isLowerBand,
		isRowDD: matrix.isRowDD,
		// isSquare: P_numbers.matrix.isSquare,
		isStrictlyColumnDD: matrix.isStrictlyColumnDD,
		isStrictlyRowDD: matrix.isStrictlyRowDD,
		isUpperBand: matrix.isUpperBand,
		lupDecomposition: matrix.lupDecomposition,
		matrixNorm: matrix.matrixNorm,
		multiply: matrix.multiply,
		reorderCols: matrix.reorderCols,
		reorderRows: matrix.reorderRows,
		reverseCols: matrix.reverseCols,
		reverseRows: matrix.reverseRows,
		rotate: matrix.rotate,
		rowAddMultiple: matrix.rowAddMultiple,
		rowReduce: matrix.rowReduce,
		rowScale: matrix.rowScale,
		rowSwitch: matrix.rowSwitch,
		scalar: matrix.scalar,
		scale: matrix.scale,
		shear: matrix.shear,
		subtraction: matrix.subtraction,
		transpose: matrix.transpose,
		vectorNorm: matrix.vectorNorm,
		zeros: matrix.zeros,
		zigzag: matrix.zigzag,
	},

	prime: {
		coprime: prime.coprime,
		factorization: prime.factorization,
		getPerfectPower: prime.getPerfectPower,
		getPrimePower: prime.getPrimePower,
		millerRabin: prime.millerRabin,
		simple: prime.simple,
	},

	random: {
		bates: random.bates,
		boxMullerTransform: random.boxMullerTransform,
		irwinHall: random.irwinHall,
		sample: random.sample,
		setGenerator: random.setGenerator,
		distribution: {
			bates: random.distribution.bates,
			boxMuller: random.distribution.boxMuller,
			irwinHall: random.distribution.irwinHall,
			irwinHallNormal: random.distribution.irwinHallNormal,
			logNormal: random.distribution.logNormal,
			normal: random.distribution.normal,
		},
	},

	statistic: {
		correlation: statistic.correlation,
		covariance: statistic.covariance,
		exponentialRegression: statistic.exponentialRegression,
		linearRegression: statistic.linearRegression,
		mean: statistic.mean,
		median: statistic.median,
		mode: statistic.mode,
		quantile: statistic.quantile,
		report: statistic.report,
		rSquared: statistic.rSquared,
		standardDev: statistic.standardDev,
	},

	_check2DVector: matrix._check2DVector,
	adaptiveSimpson: calculus.adaptiveSimpson,
	addition: matrix.addition,
	affine: matrix.affine,
	binomial: basic.binomial,
	boxMuller: random.distribution.boxMuller,
	boxMullerTransform: random.boxMullerTransform,
	collatz: generate.collatz,
	coprime: prime.coprime,
	correlation: statistic.correlation,
	covariance: statistic.covariance,
	deepCopy: matrix.deepCopy,
	determinant: matrix.determinant,
	divMod: basic.divMod,
	dotproduct: matrix.dotproduct,
	egcd: basic.egcd,
	exponentialRegression: statistic.exponentialRegression,
	factorial: basic.factorial,
	factorization: prime.factorization,
	fallingFactorial: basic.fallingFactorial,
	fft: dsp.fft,
	fibonacci: generate.fibonacci,
	GaussJordanEliminate: matrix.GaussJordanEliminate,
	// gcd: P_numbers.basic.gcd,
	getCol: matrix.getCol,
	getPerfectPower: prime.getPerfectPower,
	getPrimePower: prime.getPrimePower,
	identity: matrix.identity,
	inverse: matrix.inverse,
	irwinHallNormal: random.distribution.irwinHallNormal,
	isColumnDD: matrix.isColumnDD,
	isInt: basic.isInt,
	isLowerBand: matrix.isLowerBand,
	isRowDD: matrix.isRowDD,
	// isSquare: P_numbers.matrix.isSquare,
	isStrictlyColumnDD: matrix.isStrictlyColumnDD,
	isStrictlyRowDD: matrix.isStrictlyRowDD,
	isUpperBand: matrix.isUpperBand,
	LanczosGamma: calculus.LanczosGamma,
	lcm: basic.lcm,
	limit: calculus.limit,
	linearRegression: statistic.linearRegression,
	logNormal: random.distribution.logNormal,
	lupDecomposition: matrix.lupDecomposition,
	matrixNorm: matrix.matrixNorm,
	max: basic.max,
	mean: statistic.mean,
	median: statistic.median,
	millerRabin: prime.millerRabin,
	min: basic.min,
	mode: statistic.mode,
	modInverse: basic.modInverse,
	MonteCarlo: calculus.MonteCarlo,
	multiply: matrix.multiply,
	normal: random.distribution.normal,
	numbersEqual: basic.numbersEqual,
	permutation: basic.permutation,
	pointDiff: calculus.pointDiff,
	product: basic.product,
	quantile: statistic.quantile,
	range: basic.range,
	reorderCols: matrix.reorderCols,
	reorderRows: matrix.reorderRows,
	report: statistic.report,
	reverseCols: matrix.reverseCols,
	reverseRows: matrix.reverseRows,
	Riemann: calculus.Riemann,
	rotate: matrix.rotate,
	rowAddMultiple: matrix.rowAddMultiple,
	rowReduce: matrix.rowReduce,
	rowScale: matrix.rowScale,
	rowSwitch: matrix.rowSwitch,
	rSquared: statistic.rSquared,
	sample: random.sample,
	scalar: matrix.scalar,
	scale: matrix.scale,
	segment: dsp.segment,
	setGenerator: random.setGenerator,
	shear: matrix.shear,
	shuffle: basic.shuffle,
	simple: prime.simple,
	square: basic.square,
	standardDev: statistic.standardDev,
	StirlingGamma: calculus.StirlingGamma,
	sum: basic.sum,
	transpose: matrix.transpose,
	vectorNorm: matrix.vectorNorm,
	zeros: matrix.zeros,
	zigzag: matrix.zigzag,
};
