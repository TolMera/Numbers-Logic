/*
    Number Theory has not been updated on NPM since 2016, however there are more recent changes on github.
    I've copied a few files that have been updated on github, and put them in here.
*/
let TP_number_theory = require('number-theory');
let TF_mobius = require('./lib/mobius');
let TF_mobius_range = require('./lib/mobius-range');
TP_number_theory.mobius = TF_mobius;
TP_number_theory.mobiusRange = TF_mobius_range;
const P_number_theory = TP_number_theory;
delete (TP_number_theory, TF_mobius, TF_mobius_range);

const P_numbers = require('numbers');
const happy = require('./lib/happy');

// const P_mathTools = require('math-tools');
// const P_numberjs = require('number.js');

const primes = require('./primes');
const geometric = require('./geometric');
const ownCode = require('./lib/ownCode');

const NumberTools = {
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
    bools: {
        isCompositeOfXPrimes: primes.isCompositeOfXPrimes,
        isMersennePrime: primes.isMersennePrime,
        isPrimePower: primes.isPrimePower,
        isProductOfXPrimes: primes.isProductOfXPrimes,
        isSafePrime: primes.isSafePrime,
        isSelfPrime: primes.isSelfPrime,
        isSophieGermainPrime: primes.isSophieGermainPrime,
    
        getStar: geometric.getStar,
        getTetrahedral: geometric.getTetrahedral,
        getCenteredHexagonal: geometric.getCenteredHexagonal,
        isCenteredHexagonal: geometric.isCenteredHexagonal,
        isStar: geometric.isStar,
        isTetrahedral: geometric.isTetrahedral,


        getCenteredHexagonal: ownCode.getCenteredHexagonal,
        getStar: ownCode.getStar,
        getTetrahedral: ownCode.getTetrahedral,

        hasIntRoot: ownCode.hasIntRoot,

        isHappy: happy,

        isAbundant: P_number_theory.isAbundant,
        isArithmetic: ownCode.isArithmetic,
        isDeficient: P_number_theory.isDeficient,
        isEvil: ownCode.isEvil,
        isFriable: ownCode.isSmooth,
        isHeptagonal: P_number_theory.isHeptagonal,
        isHexagonal: P_number_theory.isHexagonal,
        isKRough: ownCode.isKRough,
        isNatural: ownCode.isNatural,
        isOctagonal: P_number_theory.isOctagonal,
        isOdious: ownCode.isOdious,
        isPanarithmic: ownCode.isPractical,
        isPentagonal: P_number_theory.isPentagonal,
        isPerfect: P_number_theory.isPerfect,
        isPolite: ownCode.isPolite,
        isPowerOf2: ownCode.isPowerOf2,
        isPowerSmooth: ownCode.isPowerSmooth,
        isPractical: ownCode.isPractical,
        isPrime: P_number_theory.isPrime,
        isProbablyPrime: P_number_theory.isProbablyPrime,
        isPronic: ownCode.isPronic,
        isRectangular: ownCode.isPronic,
        isRough: ownCode.isRough,
        isRound: ownCode.isRound,
        isSelf: ownCode.isSelf,
        isSemiperfect: ownCode.isSemiperfect,
        isSmooth: ownCode.isSmooth,
        isSphenic: ownCode.isSphenic,
        isSquare: P_number_theory.isSquare,
        isTriangular: P_number_theory.isTriangular,
        isUntouchable: ownCode.isUntouchable,
        isUnusual: ownCode.isUnusual,
        isWeird: ownCode.isWeird,

        isColumnDD: P_numbers.matrix.isColumnDD,
        isInt: P_numbers.basic.isInt,
        isLowerBand: P_numbers.matrix.isLowerBand,
        isRowDD: P_numbers.matrix.isRowDD,
        isStrictlyColumnDD: P_numbers.matrix.isStrictlyColumnDD,
        isStrictlyRowDD: P_numbers.matrix.isStrictlyRowDD,
        isUpperBand: P_numbers.matrix.isUpperBand,
    },

    comparison: {
        isMoreRound: ownCode.isMoreRound
    },

    getPoliteness: ownCode.getPoliteness,

    // - from P_number_theory
    divisors: P_number_theory.divisors,
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
    isPrime: P_number_theory.isPrime,
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
    sieve: P_number_theory.sieve,
    squareRootMod: P_number_theory.squareRootMod,
    squareRootModPrime: P_number_theory.squareRootModPrime,
    totient: P_number_theory.totient,
    mobius: P_number_theory.mobius,
    mobiusRange: P_number_theory.mobiusRange,

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
        // sieve: P_numbers.prime.sieve,
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
    bates: P_numbers.random.bates,
    bates: P_numbers.random.distribution.bates,
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
    irwinHall: P_numbers.random.distribution.irwinHall,
    irwinHall: P_numbers.random.irwinHall,
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
    // powerMod: P_numbers.basic.powerMod,
    product: P_numbers.basic.product,
    quantile: P_numbers.statistic.quantile,
    random: P_numbers.basic.random,
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
    // sieve: P_numbers.prime.sieve,
    simple: P_numbers.prime.simple,
    square: P_numbers.basic.square,
    standardDev: P_numbers.statistic.standardDev,
    StirlingGamma: P_numbers.calculus.StirlingGamma,
    subtraction: P_numbers.basic.subtraction,
    subtraction: P_numbers.matrix.subtraction,
    sum: P_numbers.basic.sum,
    transpose: P_numbers.matrix.transpose,
    vectorNorm: P_numbers.matrix.vectorNorm,
    zeros: P_numbers.matrix.zeros,
    zigzag: P_numbers.matrix.zigzag,
}

module.exports = {
    NumberTools
}
