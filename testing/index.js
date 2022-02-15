/* 
    Testing using atk22 (Advanced Test Kit 2022)
*/

const nl = require('../index');

// Load testing suite
const atk = require('advanced-testing-kit');

// Load generators
const generators = require('../node_modules/advanced-testing-kit/lib/numberGenerators')
index();
process.exit();
/* 

*/
function index() {
    // atk.makeTests(nl.bools.isCenteredHexagonal, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isStar, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isTetrahedral, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isHappy, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isSad, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isArithmetic, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isEvil, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isImpolite, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isKRough, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.comparison.isMoreRound, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isNatural, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isOdious, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isPolite, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isPowerOf2, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isPowerSmooth, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isPractical, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isPronic, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isRough, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isRound, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isSelf, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    // atk.makeTests(nl.bools.isSemiperfect, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    atk.makeTests(nl.bools.isSmooth, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isSphenic, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    // atk.makeTests(nl.bools.isUntouchable, {returns: [], inputs: [{type: Number, generator: generators.safeRandomArithmeticInteger}], advanced: []})();
    atk.makeTests(nl.bools.isUnusual, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isWeird, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isMersennePrime, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isPrime, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isPrimePower, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isProductOfXPrimes, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isSafePrime, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isSelfPrime, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.isSophieGermainPrime, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    /* atk.makeTests(nl.bools.isAbundant, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isDeficient, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isHeptagonal, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isHexagonal, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isOctagonal, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isPentagonal, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isPerfect, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isProbablyPrime, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isSquare, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.bools.isTriangular, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.isInt, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.isColumnDD, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.isLowerBand, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.isRowDD, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.isSquare, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.isStrictlyColumnDD, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.isStrictlyRowDD, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.isUpperBand, {returns: [], inputs: [], advanced: []})(); */

    atk.makeTests(nl.getCenteredHexagonal, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.getStar, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.getTetrahedral, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.getPoliteness, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.bools.hasIntRoot, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();
    atk.makeTests(nl.sieve, { returns: [], inputs: [{ type: Number, generator: generators.safeRandomArithmeticInteger }], advanced: [] })();

    /* 
    atk.makeTests(nl.divisors, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.eulerPhi, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.factor, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.findDivisor, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.gcd, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.incMixed, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.inverseMod, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.jacobiSymbol, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.logMod, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.multiplyMod, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.powerMod, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.primeFactors, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.primitiveRoot, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.quadraticNonresidue, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.randomPrimitiveRoot, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.squareRootMod, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.squareRootModPrime, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.totient, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.binomial, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.divMod, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.egcd, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.factorial, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.fallingFactorial, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.gcd, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.lcm, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.max, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.min, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.modInverse, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.numbersEqual, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.permutation, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.powerMod, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.product, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.random, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.range, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.shuffle, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.square, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.subtraction, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.basic.sum, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.calculus.adaptiveSimpson, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.calculus.LanczosGamma, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.calculus.limit, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.calculus.MonteCarlo, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.calculus.pointDiff, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.calculus.Riemann, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.calculus.StirlingGamma, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.dsp.fft, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.dsp.segment, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.generate.collatz, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.generate.fibonacci, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix._check2DVector, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.addition, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.affine, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.deepCopy, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.determinant, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.dotproduct, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.GaussJordanEliminate, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.getCol, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.identity, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.inverse, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.lupDecomposition, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.matrixNorm, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.multiply, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.reorderCols, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.reorderRows, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.reverseCols, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.reverseRows, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.rotate, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.rowAddMultiple, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.rowReduce, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.rowScale, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.rowSwitch, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.scalar, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.scale, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.shear, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.subtraction, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.transpose, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.vectorNorm, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.zeros, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.matrix.zigzag, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.prime.coprime, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.prime.factorization, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.prime.getPerfectPower, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.prime.getPrimePower, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.prime.millerRabin, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.prime.sieve, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.prime.simple, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.bates, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.boxMullerTransform, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.distribution.bates, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.distribution.boxMuller, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.distribution.irwinHall, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.distribution.irwinHallNormal, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.distribution.logNormal, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.distribution.normal, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.irwinHall, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.sample, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.random.setGenerator, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.correlation, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.covariance, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.exponentialRegression, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.linearRegression, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.mean, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.median, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.mode, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.quantile, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.report, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.rSquared, {returns: [], inputs: [], advanced: []})();
    atk.makeTests(nl.statistic.standardDev, {returns: [], inputs: [], advanced: []})();
    */
}
