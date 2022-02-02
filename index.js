const P_number_theory = require('number-theory');
const P_numbers = require('numbers');
// const P_mathTools = require('math-tools');
const P_happyNumber = require('happy-number');
const ownCode = require('./ownCode');

class NumberTools {
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
    boolean = {
        getCenteredHexagonal: ownCode.getCenteredHexagonal.bind(this),
        getStar: ownCode.getStar.bind(this),
        getTetrahedral: ownCode.getTetrahedral.bind(this),

        hasIntRoot: ownCode.hasIntRoot.bind(this),

        isAbundant: this.isAbundant,
        isArithmetic: ownCode.isArithmetic.bind(this),
        isCenteredHexagonal: ownCode.isCenteredHexagonal.bind(this),
        isColumnDD: this.isColumnDD,
        isCompositeOfXPrimes: ownCode.isCompositeOfXPrimes.bind(this),
        isDeficient: this.isDeficient,
        isEvil: ownCode.isEvil.bind(this),
        isFriable: ownCode.isSmooth.bind(this),
        isHeptagonal: this.isHeptagonal,
        isHexagonal: this.isHexagonal,
        isInt: this.isInt,
        isKRough: ownCode.isKRough.bind(this),
        isLowerBand: this.isLowerBand,
        isMersennePrime: ownCode.isMersennePrime.bind(this),
        isNatural: ownCode.isNatural.bind(this),
        isOctagonal: this.isOctagonal,
        isPanarithmic: ownCode.isPractical.bind(this),
        isPentagonal: this.isPentagonal,
        isPerfect: this.isPerfect,
        isPolite: ownCode.isPolite.bind(this),
        isPowerOf2: ownCode.isPowerOf2.bind(this),
        isPowerSmooth: ownCode.isPowerSmooth.bind(this),
        isPractical: ownCode.isPractical.bind(this),
        isPrime: this.isPrime,
        isPrimePower: ownCode.isPrimePower.bind(this),
        isProbablyPrime: this.isProbablyPrime,
        isProductOfXPrime: ownCode.isProductOfXPrime.bind(this),
        isPronic: ownCode.isPronic.bind(this),
        isRectangular: ownCode.isPronic.bind(this),
        isRough: ownCode.isRough.bind(this),
        isRound: ownCode.isRound.bind(this),
        isRowDD: this.isRowDD,
        isSafePrime: ownCode.isSafePrime.bind(this),
        isSelf: ownCode.isSelf.bind(this),
        isSelfPrime: ownCode.isSelfPrime.bind(this),
        isSemiperfect: ownCode.isSemiperfect.bind(this),
        isSmooth: ownCode.isSmooth.bind(this),
        isSophieGermainPrime: ownCode.isSophieGermainPrime.bind(this),
        isSphenic: ownCode.isSphenic.bind(this),
        isSquare: this.isSquare,
        isStar: ownCode.isStar.bind(this),
        isStrictlyColumnDD: this.isStrictlyColumnDD,
        isStrictlyRowDD: this.isStrictlyRowDD,
        isTetrahedral: ownCode.isTetrahedral.bind(this),
        isTriangular: this.isTriangular,
        isUntouchable: ownCode.isUntouchable.bind(this),
        isUnusual: ownCode.isUnusual.bind(this),
        isUpperBand: this.isUpperBand,
        isWeird: ownCode.isWeird.bind(this),
    }

    comparison = {
        isMoreRound: ownCode.isMoreRound.bind(this)
    }

    getPoliteness(n) {
        return ownCode.getPoliteness(n).bind(this);
    }

    // - from P_happyNumber

    happy(n) { return P_happyNumber(n); }

    // - from P_number_theory
    divisors(n) { return P_number_theory.divisors(n); }
    eulerPhi(n) { return P_number_theory.eulerPhi(n); }
    factor(n) { return P_number_theory.factor(n); }
    findDivisor(n) { return P_number_theory.findDivisor(n); }
    gcd(a, b) { return P_number_theory.gcd(a, b); }
    incMixed(tuple, bases) { return P_number_theory.incMixed(tuple, bases); }
    inverseMod(a, b) { return P_number_theory.inverseMod(a, b); }
    isAbundant(n) { return P_number_theory.isAbundant(n); }
    isDeficient(n) { return P_number_theory.isDeficient(n); }
    isHeptagonal(n) { return P_number_theory.isHeptagonal(n); }
    isHexagonal(n) { return P_number_theory.isHexagonal(n); }
    isOctagonal(n) { return P_number_theory.isOctagonal(n); }
    isPentagonal(n) { return P_number_theory.isPentagonal(n); }
    isPerfect(n) { return P_number_theory.isPerfect(n); }
    isPrime(n) { return P_number_theory.isPrime(n); }
    isProbablyPrime(n) { return P_number_theory.isProbablyPrime(n); }
    isSquare(n) { return P_number_theory.isSquare(n); }
    isTriangular(n) { return P_number_theory.isTriangular(n); }
    jacobiSymbol(a, b) { return P_number_theory.jacobiSymbol(a, b); }
    logMod(a, b, m) { return P_number_theory.logMod(a, b, m); }
    miller(n) { { return P_number_theory.miller(n); } }
    multiplyMod(a, b, m) { return P_number_theory.multiplyMod(a, b, m); }
    powerMod(base, exponent, mod) { return P_number_theory.powerMod(base, exponent, mod); }
    primeFactors(n) { return P_number_theory.primeFactors(n); }
    primitiveRoot(m) { return P_number_theory.primitiveRoot(m); }
    quadraticNonresidue(p) { return P_number_theory.quadraticNonresidue(p); }
    randomPrimitiveRoot(m) { return P_number_theory.randomPrimitiveRoot(m); }
    sieve(n) { return P_number_theory.sieve(n); }
    squareRootMod(n, m) { return P_number_theory.squareRootMod(n, m); }
    squareRootModPrime(n, p) { return P_number_theory.squareRootModPrime(n, p); }
    totient(n) { return P_number_theory.totient(n); }


    // - from P_numbers

    basic = {
        binomial(n, k) { return P_numbers.basic.binomial(n, k) },
        divMod(a, b) { return P_numbers.basic.divMod(a, b) },
        egcd(a, b) { return P_numbers.basic.egcd(a, b) },
        factorial(num) { return P_numbers.basic.factorial(num) },
        fallingFactorial(n, k) { return P_numbers.basic.fallingFactorial(n, k) },
        gcd(a, b) { return P_numbers.basic.gcd(a, b) },
        isInt(n) { return P_numbers.basic.isInt(n) },
        lcm(num1, num2) { return P_numbers.basic.lcm(num1, num2) },
        max(arr) { return P_numbers.basic.max(arr) },
        min(arr) { return P_numbers.basic.min(arr) },
        modInverse(a, m) { return P_numbers.basic.modInverse(a, m) },
        numbersEqual(first, second, epsilon) { return P_numbers.basic.numbersEqual(first, second, epsilon) },
        permutation(n, k) { return P_numbers.basic.permutation(n, k) },
        powerMod(a, b, m) { return P_numbers.basic.powerMod(a, b, m) },
        product(arr) { return P_numbers.basic.product(arr) },
        random(arr, quant, allowDuplicates) { return P_numbers.basic.random(arr, quant, allowDuplicates) },
        range(start, stop, step) { return P_numbers.basic.range(start, stop, step) },
        shuffle(array) { return P_numbers.basic.shuffle(array) },
        square(num) { return P_numbers.basic.square(num) },
        subtraction(arr) { return P_numbers.basic.subtraction(arr) },
        sum(arr) { return P_numbers.basic.sum(arr) }
    }

    calculus = {
        adaptiveSimpson(func, a, b, eps) { return P_numbers.calculus.adaptiveSimpson(func, a, b, eps) },
        LanczosGamma(num) { return P_numbers.calculus.LanczosGamma(num) },
        limit(func, point, approach) { return P_numbers.calculus.limit(func, point, approach) },
        MonteCarlo(func, N) { return P_numbers.calculus.MonteCarlo(func, N) },
        pointDiff(func, point) { return P_numbers.calculus.pointDiff(func, point) },
        Riemann(func, start, finish, n, sampler) { return P_numbers.calculus.Riemann(func, start, finish, n, sampler) },
        StirlingGamma(num) { return P_numbers.calculus.StirlingGamma(num) },
    }

    dsp = {
        fft(x) { return P_numbers.dsp.fft(x) },
        segment(arr, start, step) { return P_numbers.dsp.segment(arr, start, step) }
    }

    generate = {
        collatz(n, result) { return P_numbers.generate.collatz(n, result) },
        fibonacci(n) { return P_numbers.generate.fibonacci(n) }
    }

    matrix = {
        _check2DVector(point) { return P_numbers.matrix._check2DVector(point) },
        addition(arrA, arrB) { return P_numbers.matrix.addition(arrA, arrB) },
        affine(point, tx, ty) { return P_numbers.matrix.affine(point, tx, ty) },
        deepCopy(arr) { return P_numbers.matrix.deepCopy(arr) },
        determinant(m) { return P_numbers.matrix.determinant(m) },
        dotproduct(vectorA, vectorB) { return P_numbers.matrix.dotproduct(vectorA, vectorB) },
        GaussJordanEliminate(m, epsilon) { return P_numbers.matrix.GaussJordanEliminate(m, epsilon) },
        getCol(M, n) { return P_numbers.matrix.getCol(M, n) },
        identity(n) { return P_numbers.matrix.identity(n) },
        inverse(m) { return P_numbers.matrix.inverse(m) },
        isColumnDD(M) { return P_numbers.matrix.isColumnDD(M) },
        isLowerBand(M, p) { return P_numbers.matrix.isLowerBand(M, p) },
        isRowDD(M) { return P_numbers.matrix.isRowDD(M) },
        isSquare(arr) { return P_numbers.matrix.isSquare(arr) },
        isStrictlyColumnDD(M) { return P_numbers.matrix.isStrictlyColumnDD(M) },
        isStrictlyRowDD(M) { return P_numbers.matrix.isStrictlyRowDD(M) },
        isUpperBand(M, q) { return P_numbers.matrix.isUpperBand(M, q) },
        lupDecomposition(arr) { return P_numbers.matrix.lupDecomposition(arr) },
        matrixNorm(M, p) { return P_numbers.matrix.matrixNorm(M, p) },
        multiply(arrA, arrB) { return P_numbers.matrix.multiply(arrA, arrB) },
        reorderCols(M, L) { return P_numbers.matrix.reorderCols(M, L) },
        reorderRows(M, L) { return P_numbers.matrix.reorderRows(M, L) },
        reverseCols(M) { return P_numbers.matrix.reverseCols(M) },
        reverseRows(M) { return P_numbers.matrix.reverseRows(M) },
        rotate(point, degree, direction) { return P_numbers.matrix.rotate(point, degree, direction) },
        rowAddMultiple(m, from, to, scale) { return P_numbers.matrix.rowAddMultiple(m, from, to, scale) },
        rowReduce(m, epsilon) { return P_numbers.matrix.rowReduce(m, epsilon) },
        rowScale(m, row, scale) { return P_numbers.matrix.rowScale(m, row, scale) },
        rowSwitch(m, row1, row2) { return P_numbers.matrix.rowSwitch(m, row1, row2) },
        scalar(arr, val) { return P_numbers.matrix.scalar(arr, val) },
        scale(point, sx, sy) { return P_numbers.matrix.scale(point, sx, sy) },
        shear(point, k, direction) { return P_numbers.matrix.shear(point, k, direction) },
        subtraction(arrA, arrB) { return P_numbers.matrix.subtraction(arrA, arrB) },
        transpose(arr) { return P_numbers.matrix.transpose(arr) },
        vectorNorm(v, p) { return P_numbers.matrix.vectorNorm(v, p) },
        zeros(n, m) { return P_numbers.matrix.zeros(n, m) },
        zigzag(n, point, dir) { return P_numbers.matrix.zigzag(n, point, dir) }
    }

    prime = {
        coprime(a, b) { return P_numbers.prime.coprime(a, b) },
        factorization(num) { return P_numbers.prime.factorization(num) },
        getPerfectPower(n) { return P_numbers.prime.getPerfectPower(n) },
        getPrimePower(n) { return P_numbers.prime.getPrimePower(n) },
        millerRabin(n, k) { return P_numbers.prime.millerRabin(n, k) },
        sieve(n) { return P_numbers.prime.sieve(n) },
        simple(n) { return P_numbers.prime.simple(n) }
    }

    random = {
        bates(n, b, a) { return P_numbers.random.bates(n, b, a) },
        boxMullerTransform(mu, sigma) { return P_numbers.random.boxMullerTransform(mu, sigma) },
        irwinHall(n, sub) { return P_numbers.random.irwinHall(n, sub) },
        sample(lower, upper, n) { return P_numbers.random.sample(lower, upper, n) },
        setGenerator(fn) { return P_numbers.random.setGenerator(fn) },
        distribution: {
            bates(n, b, a) { return P_numbers.random.distribution.bates(n, b, a) },
            boxMuller(n, mu, sigma, rc) { return P_numbers.random.distribution.boxMuller(n, mu, sigma, rc) },
            irwinHall(n, m, sub) { return P_numbers.random.distribution.irwinHall(n, m, sub) },
            irwinHallNormal(n) { return P_numbers.random.distribution.irwinHallNormal(n) },
            logNormal(n, mu, sigma) { return P_numbers.random.distribution.logNormal(n, mu, sigma) },
            normal(n, mu, sigma) { return P_numbers.random.distribution.normal(n, mu, sigma) }
        }
    }

    statistic = {
        correlation(arrX, arrY) { return P_numbers.statistic.correlation(arrX, arrY) },
        covariance(set1, set2) { return P_numbers.statistic.covariance(set1, set2) },
        exponentialRegression(arrY) { return P_numbers.statistic.exponentialRegression(arrY) },
        linearRegression(arrX, arrY) { return P_numbers.statistic.linearRegression(arrX, arrY) },
        mean(arr) { return P_numbers.statistic.mean(arr) },
        median(arr) { return P_numbers.statistic.median(arr) },
        mode(arr) { return P_numbers.statistic.mode(arr) },
        quantile(arr, k, q) { return P_numbers.statistic.quantile(arr, k, q) },
        report(array) { return P_numbers.statistic.report(array) },
        rSquared(source, regression) { return P_numbers.statistic.rSquared(source, regression) },
        standardDev(arr) { return P_numbers.statistic.standardDev(arr) }
    }

    sum(arr) { return this.basic.sum(arr) }
    subtraction(arr) { return this.basic.subtraction(arr) }
    product(arr) { return this.basic.product(arr) }
    square(num) { return this.basic.square(num) }
    binomial(n, k) { return this.basic.binomial(n, k) }
    factorial(num) { return this.basic.factorial(num) }
    gcd(a, b) { return this.basic.gcd(a, b) }
    lcm(num1, num2) { return this.basic.lcm(num1, num2) }
    random(arr, quant, allowDuplicates) { return this.basic.random(arr, quant, allowDuplicates) }
    shuffle(array) { return this.basic.shuffle(array) }
    max(arr) { return this.basic.max(arr) }
    min(arr) { return this.basic.min(arr) }
    range(start, stop, step) { return this.basic.range(start, stop, step) }
    isInt(n) { return this.basic.isInt(n) }
    divMod(a, b) { return this.basic.divMod(a, b) }
    powerMod(a, b, m) { return this.basic.powerMod(a, b, m) }
    egcd(a, b) { return this.basic.egcd(a, b) }
    modInverse(a, m) { return this.basic.modInverse(a, m) }
    numbersEqual(first, second, epsilon) { return this.basic.numbersEqual(first, second, epsilon) }
    fallingFactorial(n, k) { return this.basic.fallingFactorial(n, k) }
    permutation(n, k) { return this.basic.permutation(n, k) }
    pointDiff(func, point) { return this.calculus.pointDiff(func, point) }
    Riemann(func, start, finish, n, sampler) { return this.calculus.Riemann(func, start, finish, n, sampler) }
    adaptiveSimpson(func, a, b, eps) { return this.calculus.adaptiveSimpson(func, a, b, eps) }
    limit(func, point, approach) { return this.calculus.limit(func, point, approach) }
    StirlingGamma(num) { return this.calculus.StirlingGamma(num) }
    LanczosGamma(num) { return this.calculus.LanczosGamma(num) }
    MonteCarlo(func, N) { return this.calculus.MonteCarlo(func, N) }
    segment(arr, start, step) { return this.dsp.segment(arr, start, step) }
    fft(x) { return this.dsp.fft(x) }
    fibonacci(n) { return this.generate.fibonacci(n) }
    collatz(n, result) { return this.generate.collatz(n, result) }
    _check2DVector(point) { return this.matrix._check2DVector(point) }
    deepCopy(arr) { return this.matrix.deepCopy(arr) }
    isSquare(arr) { return this.matrix.isSquare(arr) }
    addition(arrA, arrB) { return this.matrix.addition(arrA, arrB) }
    subtraction(arrA, arrB) { return this.matrix.subtraction(arrA, arrB) }
    scalar(arr, val) { return this.matrix.scalar(arr, val) }
    transpose(arr) { return this.matrix.transpose(arr) }
    identity(n) { return this.matrix.identity(n) }
    dotproduct(vectorA, vectorB) { return this.matrix.dotproduct(vectorA, vectorB) }
    multiply(arrA, arrB) { return this.matrix.multiply(arrA, arrB) }
    determinant(m) { return this.matrix.determinant(m) }
    lupDecomposition(arr) { return this.matrix.lupDecomposition(arr) }
    rotate(point, degree, direction) { return this.matrix.rotate(point, degree, direction) }
    scale(point, sx, sy) { return this.matrix.scale(point, sx, sy) }
    shear(point, k, direction) { return this.matrix.shear(point, k, direction) }
    affine(point, tx, ty) { return this.matrix.affine(point, tx, ty) }
    rowScale(m, row, scale) { return this.matrix.rowScale(m, row, scale) }
    rowSwitch(m, row1, row2) { return this.matrix.rowSwitch(m, row1, row2) }
    rowAddMultiple(m, from, to, scale) { return this.matrix.rowAddMultiple(m, from, to, scale) }
    GaussJordanEliminate(m, epsilon) { return this.matrix.GaussJordanEliminate(m, epsilon) }
    rowReduce(m, epsilon) { return this.matrix.rowReduce(m, epsilon) }
    inverse(m) { return this.matrix.inverse(m) }
    getCol(M, n) { return this.matrix.getCol(M, n) }
    reorderRows(M, L) { return this.matrix.reorderRows(M, L) }
    reorderCols(M, L) { return this.matrix.reorderCols(M, L) }
    reverseRows(M) { return this.matrix.reverseRows(M) }
    reverseCols(M) { return this.matrix.reverseCols(M) }
    zeros(n, m) { return this.matrix.zeros(n, m) }
    zigzag(n, point, dir) { return this.matrix.zigzag(n, point, dir) }
    vectorNorm(v, p) { return this.matrix.vectorNorm(v, p) }
    matrixNorm(M, p) { return this.matrix.matrixNorm(M, p) }
    isUpperBand(M, q) { return this.matrix.isUpperBand(M, q) }
    isLowerBand(M, p) { return this.matrix.isLowerBand(M, p) }
    isRowDD(M) { return this.matrix.isRowDD(M) }
    isStrictlyRowDD(M) { return this.matrix.isStrictlyRowDD(M) }
    isColumnDD(M) { return this.matrix.isColumnDD(M) }
    isStrictlyColumnDD(M) { return this.matrix.isStrictlyColumnDD(M) }
    simple(n) { return this.prime.simple(n) }
    factorization(num) { return this.prime.factorization(num) }
    millerRabin(n, k) { return this.prime.millerRabin(n, k) }
    sieve(n) { return this.prime.sieve(n) }
    coprime(a, b) { return this.prime.coprime(a, b) }
    getPerfectPower(n) { return this.prime.getPerfectPower(n) }
    getPrimePower(n) { return this.prime.getPrimePower(n) }
    setGenerator(fn) { return this.random.setGenerator(fn) }
    sample(lower, upper, n) { return this.random.sample(lower, upper, n) }
    boxMullerTransform(mu, sigma) { return this.random.boxMullerTransform(mu, sigma) }
    irwinHall(n, sub) { return this.random.irwinHall(n, sub) }
    bates(n, b, a) { return this.random.bates(n, b, a) }
    normal(n, mu, sigma) { return this.random.distribution.normal(n, mu, sigma) }
    logNormal(n, mu, sigma) { return this.random.distribution.logNormal(n, mu, sigma) }
    boxMuller(n, mu, sigma, rc) { return this.random.distribution.boxMuller(n, mu, sigma, rc) }
    irwinHall(n, m, sub) { return this.random.distribution.irwinHall(n, m, sub) }
    irwinHallNormal(n) { return this.random.distribution.irwinHallNormal(n) }
    bates(n, b, a) { return this.random.distribution.bates(n, b, a) }
    mean(arr) { return this.statistic.mean(arr) }
    median(arr) { return this.statistic.median(arr) }
    mode(arr) { return this.statistic.mode(arr) }
    quantile(arr, k, q) { return this.statistic.quantile(arr, k, q) }
    report(array) { return this.statistic.report(array) }
    standardDev(arr) { return this.statistic.standardDev(arr) }
    correlation(arrX, arrY) { return this.statistic.correlation(arrX, arrY) }
    rSquared(source, regression) { return this.statistic.rSquared(source, regression) }
    exponentialRegression(arrY) { return this.statistic.exponentialRegression(arrY) }
    linearRegression(arrX, arrY) { return this.statistic.linearRegression(arrX, arrY) }
    covariance(set1, set2) { return this.statistic.covariance(set1, set2) }
}

export default NumberTools;
export {
    NumberTools
}