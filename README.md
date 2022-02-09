# Numbers Logic

Numbers logic - a set of number tools.  Expanding on the work of several packages, for a list please see [Dependencies](https://www.npmjs.com/package/numbers-logic?activeTab=dependencies)

## Use Cases:

Data analysis, calculations and other math functions.

Exploring the number space in an easy to use way.

Server side or client side number operations

## Includes tools for:

* Basic calculations
* Calculus
* Matrix Operations
* Prime Numbers
* Statistics
* More...

A few things to note before using: JavaScript, like many languages, does not necessarily manage floating points as well as we'd all like it to.

For example, if adding decimals, the addition tool won't return the exact value.

In some functions precautions have been made to account for this, you can set an error bound, Anything in this will be considered an "acceptable outcome." - I plan to expand out the code so this solution covers all cases if I can not find a solution to handle decimals, floats and large numbers in Javascript.

## How to use:

With node, simply require it:
```js
const nl = require('numbers-logic');
```

## Functions:

Lets start wth some 'prime' examples

### We can check if a number is prime:
```js
nl.prime.simple(number);
```

### millerRabin primality check
```js
nl.prime.millerRabin(number);
```

### isPrime(n)
Determines if the given number is [prime](http://en.wikipedia.org/wiki/Prime_number). Note: this is a particularly slow method that uses full prime factorization to determine if the number is prime. For a faster method see the `miller` function below.
```js
nl.isPrime(7); // Returns true
nl.isPrime(48); // Returns false
```

### miller(n), isProbablyPrime(n)
Uses the determinisic [Miller-Rabin Primality Test](http://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test) to determine if the given number is prime. Works for all positive integers less than 341,550,071,728,321.
```js
nl.miller(17); // Returns true
nl.miller(284); // Returns false
```

### factor(n)
Determines the prime factorization for a given integer. For more information see Wikipedia's [Integer Factorization](http://en.wikipedia.org/wiki/Integer_factorization) entry.
```js
nl.factor(132);
/*
  Returns: [
    {  prime: 2, power: 2 },
    { prime: 3, power: 1 },
    { prime: 11, power: 1 }
  ]
*/
```

### primeFactors(n)
Computes a list of all prime factors for the given integer. Note: while this method fully computes the prime factorization of the integer, it only returns the primes and not the powers of the factorization. For full prime factorization please use `factor`.
```js
nl.primeFactors(18); // Returns [2, 3]
```

### [Mersenne Primes](https://en.wikipedia.org/wiki/Mersenne_prime)
```js
nl.isMersennePrime(number);
```

### [SophieGermainPrime](https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes)
```js
nl.isSophieGermainPrime(number);
```

### [Safe Prime](https://en.wikipedia.org/wiki/Safe_and_Sophie_Germain_primes)
```js
nl.isSafePrime(number);
```

### [Self Prime](https://en.wikipedia.org/wiki/Self_number#Self_primes)
```js
nl.isSelfPrime(number);
```

### [Prime Power](https://en.wikipedia.org/wiki/Prime_power)
```js
nl.isPrimePower(number);
```

### Is product of X Primes
This returns a true/false if the total number of factors that make up said number, equals test.  Useful if you want to do a calculation like a Sphenic number with higher dimensions.
```js
nl.isProductOfXPrimes(number, test);
```

### eulerPhi(n), totient(n)
Counts the positive integers less than a given number that are [co-prime](http://en.wikipedia.org/wiki/Coprime_integers) with the given number. For more information see the Wikipedia entry for [Euler's Totient Function](http://en.wikipedia.org/wiki/Euler%27s_totient_function).
```js
nl.eulerPhi(26); // Returns 12
```

### squareRootModPrime(n, p)
Uses the [Tonelli–Shanks algorithm](http://en.wikipedia.org/wiki/Tonelli%E2%80%93Shanks_algorithm) to determine a single square root in Z mod p.
```js
nl.squareRootModPrime(100, 19) // Returns 9
```

if we wanted to estimate the integral of sin(x) from -2 to 4, we could:
Use Riemann integrals (with 200 subdivisions)
```js
nl.calculus.Riemann(Math.sin, -2, 4, 200);
```

Or use adaptive simpson quadrature (with epsilon .0001)
```js
nl.calculus.adaptiveSimpson(Math.sin, -2, 4, .0001);
```

User-defined functions can be used too:
```js
var myFunc = function(x) {
  return 2*Math.pow(x,2) + 1;
}

nl.calculus.Riemann(myFunc, -2, 4, 200);
nl.calculus.adaptiveSimpson(myFunc, -2, 4, .0001);
```

Now say we wanted to run some matrix calculations:
We can add two matrices
```js
var array1 = [0, 1, 2];
var array2 = [3, 4, 5];

nl.matrix.addition(array1, array2);
```

We can transpose a matrix
```js
nl.matrix.transpose(array);
```

When working with vectors, treat them like single row matrices:
```js
var vector1 = [[1, 0, 0]];
```

The statistics tools include mean, median, mode, standard deviation, random sample generator, correlation, confidence intervals, t-test, chi-square, and more.
```js
nl.statistic.mean(array);
nl.statistic.median(array);
nl.statistic.mode(array);
nl.statistic.standardDev(array);
nl.statistic.randomSample(lower, upper, n);
nl.statistic.correlation(array1, array2);
```
For further documentation, check out [numbers.github.io](http://numbers.github.io/)

### divisors(n)
Determines all of the [divisors](http://en.wikipedia.org/wiki/Divisor) for a given number.
```js
nl.divisors(6); // Returns [1, 2, 3, 6]
```

### findDivisor(n)
Uses the [Pollard-Rho](http://en.wikipedia.org/wiki/Pollard%27s_rho_algorithm) integer factorization algorithm to quickly find a small divisor of the given number. Note: the divisor found need not be prime (as Pollar-Rho is a general integer factorization algorithm).
```js
nl.findDivisor(152); // Returns 8
```

### gcd(a, b)
Finds the [greatest common divisor](http://en.wikipedia.org/wiki/Greatest_common_divisor)
of two integers a and b.
```js
nl.gcd(84, 172); // Returns 4
```

### incMixed(tuple, bases)
Given a mixed-radix number and the bases for each digit, this determines the increment of the number. For more information, see Wikipedia's entry on [Mixed Radix](http://en.wikipedia.org/wiki/Mixed_radix) number systems.
```js
// A number representing a mixed-radix "clock" at 11:59 PM
var number = [59, 59, 23];

// The bases for each of the mixed radix digits (60 seconds to a minute,
// 60 minutes to an hour, 24 hours to a day).
var base = [60, 60, 24];

nl.incMixed(number, base); // Returns [0, 0, 0] (or midnight the next day)
```

### inverseMod(a, m)
Given an integer this function computes the [modular multiplicative inverse](http://en.wikipedia.org/wiki/Modular_multiplicative_inverse) to the given modulo.
```js
nl.inverseMod(14, 17); // Returns 11
```

### isAbundant(n)
Given an integer, returns a Boolean indicating whether it's an [abundant number](https://en.wikipedia.org/wiki/Abundant_number).
```js
nl.isAbundant(36); // Returns true
nl.isAbundant(35); // Returns false
```

### isDeficient(n)
Given an integer, returns a Boolean indicating whether it's a [deficient number](https://en.wikipedia.org/wiki/Deficient_number).
```js
nl.isDeficient(15); // Returns true
nl.isDeficient(12); // Returns false
```

### isHeptagonal(n)
Given an integer, returns a Boolean indicating whether it's a [heptagonal number](https://en.wikipedia.org/wiki/Heptagonal_number).
```js
nl.isHeptagonal(112); // Returns true
nl.isHeptagonal(175); // Returns false
```

### isHexagonal(n)
Given an integer, returns a Boolean indicating whether it's a [hexagonal number](https://en.wikipedia.org/wiki/Hexagonal_number).
```js
nl.isHexagonal(190); // Returns true
nl.isHexagonal(50); // Returns false
```

### isOctagonal(n)
Given an integer, returns a Boolean indicating whether it's an [octagonal number](https://en.wikipedia.org/wiki/Octagonal_number).
```js
nl.isOctagonal(65); // Returns true
nl.isOctagonal(50); // Returns false
```

### isPentagonal(n)
Given an integer, returns a Boolean indicating whether it's a [pentagonal number](https://en.wikipedia.org/wiki/Pentagonal_number).
```js
nl.isPentagonal(92); // Returns true
nl.isPentagona(50); // Returns false
```

### isPerfect(n)
Given an integer, returns a Boolean indicating whether it's a [perfect number](https://en.wikipedia.org/wiki/Perfect_number).
```js
nl.isPerfect(496); // Returns true
nl.isPerfect(200); // Returns false
```

### isSquare(n)
Given an integer, returns a Boolean indicating whether it's a [square number](https://en.wikipedia.org/wiki/Square_number).
```js
nl.isSquare(16); // Returns true
nl.isSquare(55); // Returns false
```

### isTriangular(n)
Given an integer, returns a Boolean indicating whether it's a [triangular number](https://en.wikipedia.org/wiki/Triangular_number).
```js
nl.isTriangular(21); // Returns true
nl.isTriangular(25); // Returns false
```

### jacobiSymbol(a, b)
Computes the [Jacobi Symbol](http://en.wikipedia.org/wiki/Jacobi_symbol) for the given numbers.
```js
nl.jacobiSymbol(928, 33); // returns 1
```

### lcm(a, b)
Finds the [least common multiple](https://en.wikipedia.org/wiki/Least_common_multiple) of two integers a and b.
```js
nl.lcm(4, 3); // Returns 12
```

### logMod(a, b, m)
Solves a discrete logarithm. For more information see the following:

* [Discrete Lograrithm](http://en.wikipedia.org/wiki/Discrete_logarithm)
* [Baby-step Giant-step algorithm](http://en.wikipedia.org/wiki/Baby-step_giant-step)

### mobius(n)
Compute the value of the [Möbius function](https://en.wikipedia.org/wiki/M%C3%B6bius_function) for n using naive factorization. The Möbius function is defined as 1 if n is a square-free integer with an even number of prime factors, -1 if square-free with an odd number of prime factors, and 0 if n has a squared prime factor.
```js
nl.mobius(30); // Returns -1
```

### mobiusRange(n1, n2[, primalityTest = miller])
Compute the value of the [Möbius function](https://en.wikipedia.org/wiki/M%C3%B6bius_function) for integers from n1 to n2 - 1 (inclusive) using a sieve method. Compared to `mobius`, this method still effectively factors each integer but is somewhat more efficient than factoring and computing each value individually. Numbers less than min(n1, sqrt(n2)) cannot be sieved implicitly during computation, so an explicit primality test must be performed. By default, the deterministic Miller-Rabin primality test is used, but any boolean primality test may optionally be provided.
```js
nl.mobiusRange(1000000, 1000005); // Returns [0, 1, -1, -1, 0]
```

### multiplyMod(a, b, m)
Multiplies the two given numbers mod the given modulus. See Wikipedia's entry on [Modular Arithmetic](http://en.wikipedia.org/wiki/Modular_arithmetic).
```js
nl.multiplyMod(928, 284, 18); // Returns 14
```

### powerMod(base, exponent, mod)
Computes the power of a base mod the given modulus. For more information see Wikipedia's entry on [Modular Exponentiation](http://en.wikipedia.org/wiki/Modular_exponentiation).
```js
nl.powerMod(567283, 2843, 776); // Returns 299
```

### primitiveRoot(m)
Computes the smallest primitive root for Z mod n, meaning a multiplicative generator for the group of units of Z mod n. For more information see Wikipedia's entry on [Primitive roots modulo n](http://en.wikipedia.org/wiki/Primitive_root_modulo_n).
```js
nl.primitiveRoot(1043); // Returns 7
```

### quadraticNonresidue(p)
Computes a quadratic nonresidue for the given number. For more information see Wikipedia's entry for [Quadratic Residues](http://en.wikipedia.org/wiki/Quadratic_residue).
```js
nl.quadraticNonresidue(777); // Returns 5
```

### randomPrimitiveRoot(m)
Find a random primitive root for Z mod n, meaning a multiplicative generator for the group of units of Z mod n. Unlike primitiveRoot, this function returns a random primitive root. For more information see Wikipedia's entry on [Primitive roots modulo n](http://en.wikipedia.org/wiki/Primitive_root_modulo_n).

### sieve(n)
Determines a list of prime numbers up to the given bound by performing the [Sieve of Eratosthenes](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).
```js
nl.sieve(10); // Returns [ 2, 3, 5, 7 ]
```

### squareRootMod(n, m)
Determines all square roots of a given number modulo the given modulus. For more information see Wikipedia's entry on [Quadratic Residues](http://en.wikipedia.org/wiki/Quadratic_residue).
```js
nl.squareRootMod(1023, 77); // Returns [76, 1]
```

### [Centered Hexagonal](https://en.wikipedia.org/wiki/Centered_hexagonal_number)
In mathematics and combinatorics, a centered hexagonal number, or hex number,[1][2] is a centered figurate number that represents a hexagon with a dot in the center and all other dots surrounding the center dot in a hexagonal lattice. 
```js
// Is number in sequence of Centered Hexagonal numbers? True/False
nl.isCenteredHexagonal(n);
// Gets the n-th element from the sequence of Centered Hexagonal numbers
nl.getCenteredHexagonal(1); // returns 1
nl.getCenteredHexagonal(2); // returns 7
nl.getCenteredHexagonal(3); // returns 19
```

### [Star Number](https://en.wikipedia.org/wiki/Star_number)
A star number is a centered figurate number a centered hexagram (six-pointed star), such as the Star of David, or the board Chinese checkers is played on. 
```js
// Is number in sequence of star numbers? True/False
nl.isStar(n); 
// Gets the n-th element from the sequence of star numbers
nl.getStar(1); // returns 1
nl.getStar(2); // returns 13
nl.getStar(3); // returns 37
```

### [Tetrahedral Numbers](https://en.wikipedia.org/wiki/Tetrahedral_number)
A tetrahedral number, or triangular pyramidal number, is a figurate number that represents a pyramid with a triangular base and three sides, called a tetrahedron.
```js
// Is number in squence of tetrahedral numbers? True/False
nl.isTetrahedral(n);
// Gets the n-th element from the sequence of tetrahedral numbers
nl.getTetrahedral(1); // returns 1
nl.getTetrahedral(2); // returns 4
nl.getTetrahedral(3); // returns 10
```

// Other functions
nl.getPoliteness
nl.hasIntRoot
nl.isArithmetic
nl.isEvil
nl.isFriable
nl.isHappy
nl.isKRough
nl.isMoreRound
nl.isNatural
nl.isOdious
nl.isPanarithmic
nl.isPolite
nl.isPowerOf2
nl.isPowerSmooth
nl.isPractical
nl.isPronic
nl.isRectangular
nl.isRough
nl.isRound
nl.isSelf
nl.isSemiperfect
nl.isSmooth
nl.isSphenic
nl.isUntouchable
nl.isUnusual
nl.isWeird
```

## License

[For the full license please read the full LICENSE.md ](https://github.com/TolMera/Numbers-Logic/blob/master/LICENSE.md)

#### License cliff notes:
Permission is hereby granted, free of charge, to any natural person obtaining a copy of this software and associated documentation files (the "Software"), to use or distribute copies of the Software, subject to the following conditions

You are required to release the source code of any program that you distribute that uses "Numbers Logic".

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND ...

#### The dependencies of this project carry their own licenses

We have done our best to make sure that we build ontop of open source un-restricted licenses, but it is your responsability to make sure you comply with the licenses of dependencies, and you agree to indemnify us against any usage by you.

## Contributing
Contributions of Code are welcome, however:

This project uses a custom license, it is not "OSS".  If you would like to contribute Open Source code, you may want to consider contributing it to one of the dependencies of this project (Depending if your new code is applicable to their project or not).  Alternatively you may wish to publish your own package and notify us, we will assess it for suitability, and include it if we deem it fit for purpose and in the interest of the project to do so.  The License you publish your works under will also impact if we can or can not include it in our own.

Alternately you can contact the Copyright holder (Details are available in the License)[https://github.com/TolMera/Numbers-Logic/blob/master/LICENSE.md]

## More documentation and help can be found at:

If you can't find something documented here, you're probably going to want to check out the packages I have derived functions from.  [Check the Dependencies of this project](https://www.npmjs.com/package/numbers-logic?activeTab=dependencies)

For numbers documentation, check out [numbers.github.io](http://numbers.github.io/)

For number-theory check out [their NPM page](https://www.npmjs.com/package/number-theory)

### This project stands on the shoulders of giants:

In no particular order:
* [The publisher of numbers: ~sjkaliski](https://www.npmjs.com/~sjkaliski)
* [The publisher of number-theory: ~rsandor](https://www.npmjs.com/~rsandor)
* Steve Kaliski - [@stevekaliski](http://twitter.com/stevekaliski)
* David Byrd - [@thebyrd](http://twitter.com/thebyrd)
* Ethan Resnick - [@studip101](http://twitter.com/studip101)
* Dakota St. Laurent - [@SaintDako](https://github.com/SaintDako)
* Kartik Talwar - [@KartikTalwar](https://github.com/KartikTalwar)
* [Ethan aka `altercation`](https://github.com/altercation)
* [Hrishikesh Paranjape aka `hrishikeshparanjape`](https://github.com/hrishikeshparanjape)
* [Greg Leppert aka `leppert`](https://github.com/leppert)
* [Lars-Magnus Skog aka `ralphtheninja`](https://github.com/ralphtheninja)
* [Tim Wood aka `codearachnid`](https://github.com/codearachnid)
* [Miles McCrocklin aka `milroc`](https://github.com/milroc)
* [Nate Kohari aka `nkohari`](https://github.com/nkohari)
* [Eric LaForce aka `elaforc`](https://github.com/elaforc)
* [btmills aka `btmills`](https://github.com/btmills)
* [swair shah aka `swairshah`](https://github.com/swairshah)
* [Jason Hutchinson aka `Zikes`](https://github.com/Zikes)
* [Philip I. Thomas aka `philipithomas`](https://github.com/philipithomas)
* [Brandon Benvie aka `Benvie`](https://github.com/Benvie)
* [Larry Battle aka `LarryBattle`](https://github.com/LarryBattle)
