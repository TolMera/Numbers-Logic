/*
    Number Theory has not been updated on NPM since 2016, however there are more recent changes on github.
    I've copied a few files that have been updated on github, and put them in here.
*/
import * as TP_number_theory from 'number-theory';
import { mobius } from './lib/mobius';
import { mobiusRange } from './lib/mobiusRange';
const P_number_theory = TP_number_theory;
import * as P_numbers from 'numbers';
import { isHappy } from './lib/isHappy';
import { isSad } from './lib/isSad';
import { getCenteredHexagonal } from './lib/getCenteredHexagonal';
import { getStar } from './lib/getStar';
import { getTetrahedral } from './lib/getTetrahedral';
import { isMersennePrime } from './lib/isMersennePrime';
import { isPrimePower } from './lib/isPrimePower';
import { isProductOfXPrimes } from './lib/isProductOfXPrimes';
import { isSafePrime } from './lib/isSafePrime';
import { isSelfPrime } from './lib/isSelfPrime';
import { isSophieGermainPrime } from './lib/isSophieGermainPrime';
import { isCenteredHexagonal } from './lib/isCenteredHexagonal';
import { isStar } from './lib/isStar';
import { isTetrahedral } from './lib/isTetrahedral';
import { hasIntRoot } from './lib/hasIntRoot';
import { isArithmetic } from './lib/isArithmetic';
import { isEvil } from './lib/isEvil';
import { isSmooth as isFriable } from './lib/isSmooth';
import { isKRough } from './lib/isKRough';
import { isNatural } from './lib/isNatural';
import { isOdious } from './lib/isOdious';
import { isPractical as isPanarithmic } from './lib/isPractical';
import { isPolite } from './lib/isPolite';
import { isImpolite } from './lib/isImpolite';
import { isPowerOf2 } from './lib/isPowerOf2';
import { isPowerSmooth } from './lib/isPowerSmooth';
import { isPractical } from './lib/isPractical';
import { isPronic } from './lib/isPronic';
import { isPronic as isRectangular } from './lib/isPronic';
import { isRough } from './lib/isRough';
import { isRound } from './lib/isRound';
import { isSelf } from './lib/isSelf';
import { isSemiperfect } from './lib/isSemiperfect';
import { isSmooth } from './lib/isSmooth';
import { isSphenic } from './lib/isSphenic';
import { isUntouchable } from './lib/isUntouchable';
import { isUnusual } from './lib/isUnusual';
import { isWeird } from './lib/isWeird';
import { isPrime } from './lib/isPrime';
import { isMoreRound } from './lib/isMoreRound';
import { getPoliteness } from './lib/getPoliteness';
import { divisors } from './lib/divisors';
import {sieve} from './lib/sieve';

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

        isAbundant: P_number_theory.isAbundant,
        isDeficient: P_number_theory.isDeficient,
        isHeptagonal: P_number_theory.isHeptagonal,
        isHexagonal: P_number_theory.isHexagonal,
        isOctagonal: P_number_theory.isOctagonal,
        isPentagonal: P_number_theory.isPentagonal,
        isPerfect: P_number_theory.isPerfect,
        isPrime,
        isProbablyPrime: P_number_theory.isProbablyPrime,
        isSquare: P_number_theory.isSquare,
        isTriangular: P_number_theory.isTriangular,

        isColumnDD: P_numbers.matrix.isColumnDD,
        isInt: P_numbers.basic.isInt,
        isLowerBand: P_numbers.matrix.isLowerBand,
        isRowDD: P_numbers.matrix.isRowDD,
        isStrictlyColumnDD: P_numbers.matrix.isStrictlyColumnDD,
        isStrictlyRowDD: P_numbers.matrix.isStrictlyRowDD,
        isUpperBand: P_numbers.matrix.isUpperBand,
    },

    comparison: {
        isMoreRound,
    },

    mobius,
    mobiusRange,
    getPoliteness,

    // - from P_number_theory
    divisors,
    eulerPhi: P_number_theory.eulerPhi,
    factor: P_number_theory.factor,
    findDivisor: P_number_theory.findDivisor,
    gcd: P_number_theory.gcd,
    incMixed: P_number_theory.incMixed,
    inverseMod: P_number_theory.inverseMod,
    isAbundant: P_number_theory.isAbundant,
    isDeficient: P_number_theory.isDeficient,
    isHeptagonal: P_number_theory.isHeptagonal,
    isHexagonal: P_number_theory.isHexagonal,
    isOctagonal: P_number_theory.isOctagonal,
    isPentagonal: P_number_theory.isPentagonal,
    isPerfect: P_number_theory.isPerfect,
    isPrime,
    isProbablyPrime: P_number_theory.isProbablyPrime,
    isSquare: P_number_theory.isSquare,
    isTriangular: P_number_theory.isTriangular,
    jacobiSymbol: P_number_theory.jacobiSymbol,
    logMod: P_number_theory.logMod,
    miller: P_number_theory.isProbablyPrime,
    multiplyMod: P_number_theory.multiplyMod,
    powerMod: P_number_theory.powerMod,
    primeFactors: P_number_theory.primeFactors,
    primitiveRoot: P_number_theory.primitiveRoot,
    quadraticNonresidue: P_number_theory.quadraticNonresidue,
    randomPrimitiveRoot: P_number_theory.randomPrimitiveRoot,
    sieve,
    squareRootMod: P_number_theory.squareRootMod,
    squareRootModPrime: P_number_theory.squareRootModPrime,
    totient: P_number_theory.totient,

    // - from P_numbers

    basic: {
        binomial: P_numbers.basic.binomial,
        divMod: P_numbers.basic.divMod,
        egcd: P_numbers.basic.egcd,
        factorial: P_numbers.basic.factorial,
        fallingFactorial: P_numbers.basic.fallingFactorial,
        // gcd: P_numbers.basic.gcd,
        isInt: P_numbers.basic.isInt,
        lcm: P_numbers.basic.lcm,
        max: P_numbers.basic.max,
        min: P_numbers.basic.min,
        modInverse: P_numbers.basic.modInverse,
        numbersEqual: P_numbers.basic.numbersEqual,
        permutation: P_numbers.basic.permutation,
        // powerMod: P_numbers.basic.powerMod,
        product: P_numbers.basic.product,
        random: P_numbers.basic.random,
        range: P_numbers.basic.range,
        shuffle: P_numbers.basic.shuffle,
        square: P_numbers.basic.square,
        subtraction: P_numbers.basic.subtraction,
        sum: P_numbers.basic.sum,
    },

    calculus: {
        adaptiveSimpson: P_numbers.calculus.adaptiveSimpson,
        LanczosGamma: P_numbers.calculus.LanczosGamma,
        limit: P_numbers.calculus.limit,
        MonteCarlo: P_numbers.calculus.MonteCarlo,
        pointDiff: P_numbers.calculus.pointDiff,
        Riemann: P_numbers.calculus.Riemann,
        StirlingGamma: P_numbers.calculus.StirlingGamma,
    },

    dsp: {
        fft: P_numbers.dsp.fft,
        segment: P_numbers.dsp.segment,
    },

    generate: {
        collatz: P_numbers.generate.collatz,
        fibonacci: P_numbers.generate.fibonacci,
    },

    matrix: {
        _check2DVector: P_numbers.matrix._check2DVector,
        addition: P_numbers.matrix.addition,
        affine: P_numbers.matrix.affine,
        deepCopy: P_numbers.matrix.deepCopy,
        determinant: P_numbers.matrix.determinant,
        dotproduct: P_numbers.matrix.dotproduct,
        GaussJordanEliminate: P_numbers.matrix.GaussJordanEliminate,
        getCol: P_numbers.matrix.getCol,
        identity: P_numbers.matrix.identity,
        inverse: P_numbers.matrix.inverse,
        isColumnDD: P_numbers.matrix.isColumnDD,
        isLowerBand: P_numbers.matrix.isLowerBand,
        isRowDD: P_numbers.matrix.isRowDD,
        // isSquare: P_numbers.matrix.isSquare,
        isStrictlyColumnDD: P_numbers.matrix.isStrictlyColumnDD,
        isStrictlyRowDD: P_numbers.matrix.isStrictlyRowDD,
        isUpperBand: P_numbers.matrix.isUpperBand,
        lupDecomposition: P_numbers.matrix.lupDecomposition,
        matrixNorm: P_numbers.matrix.matrixNorm,
        multiply: P_numbers.matrix.multiply,
        reorderCols: P_numbers.matrix.reorderCols,
        reorderRows: P_numbers.matrix.reorderRows,
        reverseCols: P_numbers.matrix.reverseCols,
        reverseRows: P_numbers.matrix.reverseRows,
        rotate: P_numbers.matrix.rotate,
        rowAddMultiple: P_numbers.matrix.rowAddMultiple,
        rowReduce: P_numbers.matrix.rowReduce,
        rowScale: P_numbers.matrix.rowScale,
        rowSwitch: P_numbers.matrix.rowSwitch,
        scalar: P_numbers.matrix.scalar,
        scale: P_numbers.matrix.scale,
        shear: P_numbers.matrix.shear,
        subtraction: P_numbers.matrix.subtraction,
        transpose: P_numbers.matrix.transpose,
        vectorNorm: P_numbers.matrix.vectorNorm,
        zeros: P_numbers.matrix.zeros,
        zigzag: P_numbers.matrix.zigzag,
    },

    prime: {
        coprime: P_numbers.prime.coprime,
        factorization: P_numbers.prime.factorization,
        getPerfectPower: P_numbers.prime.getPerfectPower,
        getPrimePower: P_numbers.prime.getPrimePower,
        millerRabin: P_numbers.prime.millerRabin,
        simple: P_numbers.prime.simple,
    },

    random: {
        bates: P_numbers.random.bates,
        boxMullerTransform: P_numbers.random.boxMullerTransform,
        irwinHall: P_numbers.random.irwinHall,
        sample: P_numbers.random.sample,
        setGenerator: P_numbers.random.setGenerator,
        distribution: {
            bates: P_numbers.random.distribution.bates,
            boxMuller: P_numbers.random.distribution.boxMuller,
            irwinHall: P_numbers.random.distribution.irwinHall,
            irwinHallNormal: P_numbers.random.distribution.irwinHallNormal,
            logNormal: P_numbers.random.distribution.logNormal,
            normal: P_numbers.random.distribution.normal,
        }
    },

    statistic: {
        correlation: P_numbers.statistic.correlation,
        covariance: P_numbers.statistic.covariance,
        exponentialRegression: P_numbers.statistic.exponentialRegression,
        linearRegression: P_numbers.statistic.linearRegression,
        mean: P_numbers.statistic.mean,
        median: P_numbers.statistic.median,
        mode: P_numbers.statistic.mode,
        quantile: P_numbers.statistic.quantile,
        report: P_numbers.statistic.report,
        rSquared: P_numbers.statistic.rSquared,
        standardDev: P_numbers.statistic.standardDev,
    },

    _check2DVector: P_numbers.matrix._check2DVector,
    adaptiveSimpson: P_numbers.calculus.adaptiveSimpson,
    addition: P_numbers.matrix.addition,
    affine: P_numbers.matrix.affine,
    binomial: P_numbers.basic.binomial,
    boxMuller: P_numbers.random.distribution.boxMuller,
    boxMullerTransform: P_numbers.random.boxMullerTransform,
    collatz: P_numbers.generate.collatz,
    coprime: P_numbers.prime.coprime,
    correlation: P_numbers.statistic.correlation,
    covariance: P_numbers.statistic.covariance,
    deepCopy: P_numbers.matrix.deepCopy,
    determinant: P_numbers.matrix.determinant,
    divMod: P_numbers.basic.divMod,
    dotproduct: P_numbers.matrix.dotproduct,
    egcd: P_numbers.basic.egcd,
    exponentialRegression: P_numbers.statistic.exponentialRegression,
    factorial: P_numbers.basic.factorial,
    factorization: P_numbers.prime.factorization,
    fallingFactorial: P_numbers.basic.fallingFactorial,
    fft: P_numbers.dsp.fft,
    fibonacci: P_numbers.generate.fibonacci,
    GaussJordanEliminate: P_numbers.matrix.GaussJordanEliminate,
    // gcd: P_numbers.basic.gcd,
    getCol: P_numbers.matrix.getCol,
    getPerfectPower: P_numbers.prime.getPerfectPower,
    getPrimePower: P_numbers.prime.getPrimePower,
    identity: P_numbers.matrix.identity,
    inverse: P_numbers.matrix.inverse,
    irwinHallNormal: P_numbers.random.distribution.irwinHallNormal,
    isColumnDD: P_numbers.matrix.isColumnDD,
    isInt: P_numbers.basic.isInt,
    isLowerBand: P_numbers.matrix.isLowerBand,
    isRowDD: P_numbers.matrix.isRowDD,
    // isSquare: P_numbers.matrix.isSquare,
    isStrictlyColumnDD: P_numbers.matrix.isStrictlyColumnDD,
    isStrictlyRowDD: P_numbers.matrix.isStrictlyRowDD,
    isUpperBand: P_numbers.matrix.isUpperBand,
    LanczosGamma: P_numbers.calculus.LanczosGamma,
    lcm: P_numbers.basic.lcm,
    limit: P_numbers.calculus.limit,
    linearRegression: P_numbers.statistic.linearRegression,
    logNormal: P_numbers.random.distribution.logNormal,
    lupDecomposition: P_numbers.matrix.lupDecomposition,
    matrixNorm: P_numbers.matrix.matrixNorm,
    max: P_numbers.basic.max,
    mean: P_numbers.statistic.mean,
    median: P_numbers.statistic.median,
    millerRabin: P_numbers.prime.millerRabin,
    min: P_numbers.basic.min,
    mode: P_numbers.statistic.mode,
    modInverse: P_numbers.basic.modInverse,
    MonteCarlo: P_numbers.calculus.MonteCarlo,
    multiply: P_numbers.matrix.multiply,
    normal: P_numbers.random.distribution.normal,
    numbersEqual: P_numbers.basic.numbersEqual,
    permutation: P_numbers.basic.permutation,
    pointDiff: P_numbers.calculus.pointDiff,
    product: P_numbers.basic.product,
    quantile: P_numbers.statistic.quantile,
    range: P_numbers.basic.range,
    reorderCols: P_numbers.matrix.reorderCols,
    reorderRows: P_numbers.matrix.reorderRows,
    report: P_numbers.statistic.report,
    reverseCols: P_numbers.matrix.reverseCols,
    reverseRows: P_numbers.matrix.reverseRows,
    Riemann: P_numbers.calculus.Riemann,
    rotate: P_numbers.matrix.rotate,
    rowAddMultiple: P_numbers.matrix.rowAddMultiple,
    rowReduce: P_numbers.matrix.rowReduce,
    rowScale: P_numbers.matrix.rowScale,
    rowSwitch: P_numbers.matrix.rowSwitch,
    rSquared: P_numbers.statistic.rSquared,
    sample: P_numbers.random.sample,
    scalar: P_numbers.matrix.scalar,
    scale: P_numbers.matrix.scale,
    segment: P_numbers.dsp.segment,
    setGenerator: P_numbers.random.setGenerator,
    shear: P_numbers.matrix.shear,
    shuffle: P_numbers.basic.shuffle,
    simple: P_numbers.prime.simple,
    square: P_numbers.basic.square,
    standardDev: P_numbers.statistic.standardDev,
    StirlingGamma: P_numbers.calculus.StirlingGamma,
    sum: P_numbers.basic.sum,
    transpose: P_numbers.matrix.transpose,
    vectorNorm: P_numbers.matrix.vectorNorm,
    zeros: P_numbers.matrix.zeros,
    zigzag: P_numbers.matrix.zigzag,
}
