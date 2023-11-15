import { writeFileSync } from 'fs';
import { Config as TJestConfig} from 'jest';

const dependencies = {
    "number-theory": "^1.1.0",
    "numbers": "^0.7.0"
};
const devDependencies = {
    "@types/jest": "^29.5.5",
    "advanced-testing-kit": "^1.0.0",
    "jest": "^29.7.0",
    "prettier": "^2.7.1",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.1",
    "tslib": "^2.4.0",
    "typescript": "^4.7.4"
}

const repository = {
    type: "git",
    url: "git://github.com/TolMera/Numbers-Logic"
};

const run = `npm run`;
const build = `${run} compile`;

const scripts = {
    compile: "tsc",

    pretty: "node ./node_modules/prettier/bin-prettier.js --write . --use-tabs --cache --cache-strategy metadata --ignore-unknown --loglevel=warn",

    "update:package": "ts-node package.ts",
    start: "ts-node ./build/index.js",
    runTest: "for file in ./build/testing/*.ts; do echo $file && time ts-node $file || exit 1; done;",
    runFile: "time ts-node",

    build,
    deploy: `${build} && ${run} test && npm login && npm publish`,
    deleteBuild: "rm -rf ./build && rm .tsbuildinfo",
    test: `${build} && ${run} runTest`,
    testOne: `${build} && ${run} runFile`,
    jest: `${build} && ${run} jest:test`,

    "jest:test": "jest",
    "list:depend": "jq '.dependencies' package.json",
    "list:devDepend": "jq '.devDependencies' package.json",
}

const files: string[] = [
    "build",
    "README.md",
    "LICENSE",
    "package.json"
];

const keywords:string[] = [
    "number",
    "numbers",
    "math",
    "theory",
    "abundant",
    "adaptive simpson",
    "addition",
    "affine",
    "arithmetic",
    "basic",
    "bates",
    "binomial",
    "box muller",
    "box muller transform",
    "calculus",
    "centered hexagonal",
    "col",
    "collatz",
    "column dd",
    "composite of x primes",
    "coprime",
    "correlation",
    "covariance",
    "deep copy",
    "deficient",
    "determinant",
    "distribution",
    "div mod",
    "divisors",
    "dotproduct",
    "dsp",
    "egcd",
    "euler phi",
    "evil",
    "exponential regression",
    "factor",
    "factorial",
    "factorization",
    "falling factorial",
    "fft",
    "fibonacci",
    "find divisor",
    "friable",
    "gauss jordan eliminate",
    "gcd",
    "generate",
    "happy",
    "has int root",
    "heptagonal",
    "hexagonal",
    "identity",
    "inc mixed",
    "int",
    "inverse",
    "inverse mod",
    "irwin hall",
    "irwin hall normal",
    "jacobi symbol",
    "k-rough",
    "krough",
    "lanczos gamma",
    "lcm",
    "limit",
    "linear regression",
    "log mod",
    "log normal",
    "lower band",
    "lup decomposition",
    "matrix",
    "matrix norm",
    "max",
    "mean",
    "median",
    "mersenne prime",
    "miller",
    "miller rabin",
    "min",
    "mod inverse",
    "mode",
    "monte carlo",
    "more round",
    "multiply",
    "multiply mod",
    "natural",
    "normal",
    "numbers equal",
    "octagonal",
    "panarithmic",
    "pentagonal",
    "perfect",
    "perfect power",
    "permutation",
    "point diff",
    "polite",
    "politeness",
    "power mod",
    "power of 2",
    "power smooth",
    "practical",
    "prime",
    "prime factors",
    "prime power",
    "primitive root",
    "probably prime",
    "product",
    "product of x prime",
    "pronic",
    "quadratic nonresidue",
    "quantile",
    "r squared",
    "r-squared",
    "random",
    "random primitive root",
    "range",
    "rectangular",
    "reorder cols",
    "reorder rows",
    "report",
    "reverse cols",
    "reverse rows",
    "riemann",
    "rotate",
    "rough",
    "round",
    "row add multiple",
    "row dd",
    "row reduce",
    "row scale",
    "row switch",
    "safe prime",
    "sample",
    "scalar",
    "scale",
    "segment",
    "self",
    "self prime",
    "semiperfect",
    "set generator",
    "shear",
    "shuffle",
    "sieve",
    "simple",
    "smooth",
    "sophie germain prime",
    "sphenic",
    "square",
    "square root mod",
    "square root mod prime",
    "standard dev",
    "star",
    "statistic",
    "stirling gamma",
    "strictly column d d",
    "strictly row d d",
    "subtraction",
    "sum",
    "tetrahedral",
    "totient",
    "transpose",
    "triangular",
    "untouchable",
    "unusual",
    "upper band",
    "vector norm",
    "weird",
    "zeros",
    "zigzag"
];

const jest: TJestConfig = {
    preset: "ts-jest",
};

const pkg = {
	name: "numbers-logic",
	author: "Bjorn Macintosh <bjorn.macintosh@gmail.com> (http://tolmera.com)",
	license: "custom",
	description: "Tools used to understand or work with numbers in Node.JS, Javascript and derivatives. ",
	version: "1.4.6",
	homepage: "https://github.com/TolMera/Numbers-Logic",
    repository,
    scripts,
    files,
    jest,
	main: "./build/index.js",
	man: "./readme.md",
    keywords,
    dependencies, devDependencies
}

const write = function() {
	writeFileSync('./package.json', JSON.stringify(pkg, null, 4));
}

write();
