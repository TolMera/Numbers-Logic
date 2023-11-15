[![Node.js CI](https://github.com/TolMera/Numbers-Logic/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/TolMera/Numbers-Logic/actions/workflows/node.js.yml)

# Numbers Logic

Numbers logic - a set of number tools. Expanding on the work of several packages, for a list please see [Dependencies](https://www.npmjs.com/package/numbers-logic?activeTab=dependencies)

## Use Cases:

Data analysis, calculations and other math functions.

Exploring the number space in an easy to use way.

Server side or client side number operations

## Includes tools for:

- Basic calculations
- Calculus
- Matrix Operations
- Prime Numbers
- Statistics
- More...

A few things to note before using: JavaScript, like many languages, does not necessarily manage floating points as well as we'd all like it to.

For example, if adding decimals, the addition tool won't return the exact value.

In some functions precautions have been made to account for this, you can set an error bound, Anything in this will be considered an "acceptable outcome." - I plan to expand out the code so this solution covers all cases if I can not find a solution to handle decimals, floats and large numbers in Javascript.

## How to use:

With node, simply require it:

```js
const nl = require("numbers-logic");
```

## Functions:

### isPrime(number)

Determines if the given number is [prime](http://en.wikipedia.org/wiki/Prime_number).
Uses a very efficient sieve function, and should be fast.
Note: this full prime factorization to determine if the number is prime. You might get a faster result using the `miller` function below.

```js
nl.isPrime(7); // Returns true
nl.isPrime(48); // Returns false
```

### factor(number)

Determines the prime factorization for a given integer. For more information see Wikipedia's [Integer Factorization](http://en.wikipedia.org/wiki/Integer_factorization) entry.

```js
nl.factorsOf(132);
/*
  Returns: [
    {  prime: 2, power: 2 },
    { prime: 3, power: 1 },
    { prime: 11, power: 1 }
  ]
*/
```

### primeFactors(number)

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

This returns a true/false if the total number of factors that make up said number, equals test. Useful if you want to do a calculation like a Sphenic number with higher dimensions.

```js
nl.isProductOfXPrimes(number, test);
```

### divisors(number)

Determines all of the [divisors](http://en.wikipedia.org/wiki/Divisor) for a given number.

```js
nl.divisors(6); // Returns [1, 2, 3, 6]
```

### isAbundant(number)

Given an integer, returns a Boolean indicating whether it's an [abundant number](https://en.wikipedia.org/wiki/Abundant_number).

```js
nl.isAbundant(36); // Returns true
nl.isAbundant(35); // Returns false
```

### isPerfect(number)

Given an integer, returns a Boolean indicating whether it's a [perfect number](https://en.wikipedia.org/wiki/Perfect_number).

```js
nl.isPerfect(496); // Returns true
nl.isPerfect(200); // Returns false
```

### logMod(a, b, m)

Solves a discrete logarithm. For more information see the following:

- [Discrete Lograrithm](http://en.wikipedia.org/wiki/Discrete_logarithm)
- [Baby-step Giant-step algorithm](http://en.wikipedia.org/wiki/Baby-step_giant-step)

### mobius(number)

Compute the value of the [Möbius function](https://en.wikipedia.org/wiki/M%C3%B6bius_function) for n using naive factorization. The Möbius function is defined as 1 if n is a square-free integer with an even number of prime factors, -1 if square-free with an odd number of prime factors, and 0 if n has a squared prime factor.

```js
nl.mobius(30); // Returns -1
```

### mobiusRange(n1, n2[, primalityTest = miller])

Compute the value of the [Möbius function](https://en.wikipedia.org/wiki/M%C3%B6bius_function) for integers from n1 to n2 - 1 (inclusive) using a sieve method. Compared to `mobius`, this method still effectively factors each integer but is somewhat more efficient than factoring and computing each value individually. Numbers less than min(n1, sqrt(n2)) cannot be sieved implicitly during computation, so an explicit primality test must be performed. By default, the deterministic Miller-Rabin primality test is used, but any boolean primality test may optionally be provided.

```js
nl.mobiusRange(1000000, 1000005); // Returns [0, 1, -1, -1, 0]
```

### randomPrimitiveRoot(m)

Find a random primitive root for Z mod n, meaning a multiplicative generator for the group of units of Z mod n. Unlike primitiveRoot, this function returns a random primitive root. For more information see Wikipedia's entry on [Primitive roots modulo n](http://en.wikipedia.org/wiki/Primitive_root_modulo_n).

### sieve(number)

Determines a list of prime numbers up to the given number by performing the [Sieve of Eratosthenes](http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes).
Supports: Very large numbers upto `Number.MAX_SAFE_INTEGER` (Function is able to go much further, but that's a limitation of JS native Number)

```js
nl.sieve(10); // Returns [ 2, 3, 5, 7 ]
```

### [Centered Hexagonal](https://en.wikipedia.org/wiki/Centered_hexagonal_number)

In mathematics and combinatorics, a centered hexagonal number, or hex number,[1][2] is a centered figurate number that represents a hexagon with a dot in the center and all other dots surrounding the center dot in a hexagonal lattice.

```js
// Is number in sequence of Centered Hexagonal numbers? True/False
nl.isCenteredHexagonal(number);
// Gets the n-th element from the sequence of Centered Hexagonal numbers
nl.getCenteredHexagonal(1); // returns 1
nl.getCenteredHexagonal(2); // returns 7
nl.getCenteredHexagonal(3); // returns 19
```

### [Star Number](https://en.wikipedia.org/wiki/Star_number)

A star number is a centered figurate number a centered hexagram (six-pointed star), such as the Star of David, or the board Chinese checkers is played on.

```js
// Is number in sequence of star numbers? True/False
nl.isStar(number);
// Gets the n-th element from the sequence of star numbers
nl.getStar(1); // returns 1
nl.getStar(2); // returns 13
nl.getStar(3); // returns 37
```

### [Tetrahedral Numbers](https://en.wikipedia.org/wiki/Tetrahedral_number)

A tetrahedral number, or triangular pyramidal number, is a figurate number that represents a pyramid with a triangular base and three sides, called a tetrahedron.

```js
// Is number in squence of tetrahedral numbers? True/False
nl.isTetrahedral(number);
// Gets the n-th element from the sequence of tetrahedral numbers
nl.getTetrahedral(1); // returns 1
nl.getTetrahedral(2); // returns 4
nl.getTetrahedral(3); // returns 10
```

### [Polite, Impolite and Politeness](https://en.wikipedia.org/wiki/Polite_number)

In number theory, a polite number is a positive integer that can be written as the sum of two or more consecutive positive integers. A positive integer which is not polite is called impolite. The impolite numbers are exactly the powers of two, and the polite numbers are the natural numbers that are not powers of two.

Polite numbers have also been called staircase numbers because the Young diagrams which represent graphically the partitions of a polite number into consecutive integers (in the French notation of drawing these diagrams) resemble staircases.

```js
nl.getPoliteness(number);
nl.isPolite(number);
nl.isImpolite(number);
```

### (EVIL numbers)[https://en.wikipedia.org/wiki/Evil_number]

In number theory, an evil number is a non-negative integer that has an even number of 1s in its binary expansion. These numbers give the positions of the zero values in the Thue–Morse sequence, and for this reason they have also been called the Thue–Morse set. Non-negative integers that are not evil are called odious numbers.

```js
nl.isEvil(n);
nl.isOdious(n);
```

### (Happy numbers)[https://en.wikipedia.org/wiki/Happy_number}

A happy number is a number which eventually reaches 1 when replaced by the sum of the square of each digit.
Sad numbers never reach 1, instead eventually entering a loop.

```js
nl.isHappy(n);
nl.isSad(n);
```

### [Powers of 2](https://en.wikipedia.org/wiki/Power_of_two)

Power of two is a number of the form 2n where n is an integer, that is, the result of exponentiation with number two as the base and integer n as the exponent.

```js
nl.isPowerOf2(n);
```

### [Arithmetic numbers](https://en.wikipedia.org/wiki/Arithmetic_number)

In number theory, an arithmetic number is an integer for which the average of its positive divisors is also an integer [...](https://en.wikipedia.org/wiki/Arithmetic_number)

```js
nl.isArithmetic;
```

### [Natural Numbers](https://en.wikipedia.org/wiki/Natural_number)

These are the numbers we use for counting, like 0, 1, 2, 3, 4...
Some definitions, including the standard ISO 80000-2, begin the natural numbers with 0, corresponding to the non-negative integers 0, 1, 2, 3, ..., whereas others start with 1, corresponding to the positive integers 1, 2, 3...

We have elected to follow ISO standards, and begin this range from 0.
You can alternately use `isWhole` which begins from 1.

```js
nl.isNatural(n);
nl.isWhole(n);
```

### [Pronic numbers](https://en.wikipedia.org/wiki/Pronic_number)

A pronic number is a number which is the product of two consecutive integers, that is, a number of the form n(n + 1). The study of these numbers dates back to Aristotle. They are also called oblong numbers, heteromecic numbers, or rectangular numbers; however, the term "rectangular number" has also been applied to the composite numbers.

```js
nl.isPronic(n);
nl.isRectangular(n);
```

### [Smooth or Friable numbers](https://en.wikipedia.org/wiki/Smooth_number)

In number theory, an n-smooth (or n-friable) number is an integer whose prime factors are all less than or equal to n. For example, a 7-smooth number is a number whose every prime factor is at most 7, so 49 = 72 and 15750 = 2 × 32 × 53 × 7 are both 7-smooth, while 11 and 702 = 2 × 33 × 13 are not 7-smooth. The term seems to have been coined by Leonard Adleman. Smooth numbers are especially important in cryptography, which relies on factorization of integers. The 2-smooth numbers are just the powers of 2, while 5-smooth numbers are known as regular numbers.

```js
nl.isFriable(n);
nl.isSmooth(n);

// https://en.wikipedia.org/wiki/Smooth_number#Powersmooth_numbers
nl.isPowerSmooth(n);
```

### [Rough numbers](https://en.wikipedia.org/wiki/Rough_number)

A k-rough number, as defined by Finch in 2001 and 2003, is a positive integer whose prime factors are all greater than or equal to k. k-roughness has alternately been defined as requiring all prime factors to strictly exceed k

```js
nl.isKRough(n);
nl.isRough(n);
```

### [Round numbers](https://en.wikipedia.org/wiki/Round_number)

A round number is an integer that ends with one or more "0"s (zero-digit) in a given base.[1] So, 590 is rounder than 592, but 590 is less round than 600.

```js
nl.isRound(n, base);

// Want to know if one number is more smooth than another?
// Want to compare if numbers are smoother in one base than another?
nl.isMoreRound(n1, n2, base1, base2);
```

### [Sphenic numbers](https://en.wikipedia.org/wiki/Sphenic_number)

In number theory, a sphenic number is a positive integer that is the product of three distinct prime numbers.

```js
nl.isSphenic(n);
```

### [Practical or Panarithmic numbers](https://en.wikipedia.org/wiki/Practical_number)

In number theory, a practical number or panarithmic number is a positive integer n such that all smaller positive integers can be represented as sums of distinct divisors of n.

```js
nl.isPanarithmic(n);
nl.isPractical(n);
```

### [Semiperfect numbers](https://en.wikipedia.org/wiki/Semiperfect_number)

In number theory, a semiperfect number or pseudoperfect number is a natural number n that is equal to the sum of all or some of its proper divisors. A semiperfect number that is equal to the sum of all its proper divisors is a perfect number.

```js
nl.isSemiperfect(n);
```

### [Self numbers](https://en.wikipedia.org/wiki/Self_number)

A self number, Colombian number or Devlali number in a given number base b is a natural number that cannot be written as the sum of any other natural number n and the individual digits of n.

```js
nl.isSelf(n, base); // IMPORTANT: Currently only works in base 10
```

### [Untouchable Number](https://en.wikipedia.org/wiki/Untouchable_number)

An untouchable number is a positive integer that cannot be expressed as the sum of all the proper divisors of any positive integer (including the untouchable number itself). That is, these numbers are not in the image of the aliquot sum function.

```js
nl.isUntouchable(n);
```

### [Weird numbers](https://en.wikipedia.org/wiki/Weird_number)

The sum of the proper divisors (divisors including 1 but not itself) of the number is greater than the number, but no subset of those divisors sums to the number itself.

```js
nl.isWeird(n);
```

### [Unusual numbers](https://en.wikipedia.org/wiki/Unusual_number)

Read the wiki article, it's foramtted to display this information better than I can do here.
All prime numbers are unusual.

```js
nl.isUnusual(n);
```

### Integer Root

Tests if the number has a `degree` of root that returns a whole number result.
For instance, { 9^(1/3) = 3 } || cuberoot(9)

```js
nl.hasIntRoot(n); // returns if a number has a whole root true/false
nl.getIntRoot(n); // returns the root `degree` that wholy roots the number
nl.getIntRoot(n); // returns 3
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

This project uses a custom license, it is not "OSS". If you would like to contribute Open Source code, you may want to consider contributing it to one of the dependencies of this project (Depending if your new code is applicable to their project or not). Alternatively you may wish to publish your own package and notify us, we will assess it for suitability, and include it if we deem it fit for purpose and in the interest of the project to do so. The License you publish your works under will also impact if we can or can not include it in our own.

Alternately you can contact the Copyright holder (Details are available in the License)[https://github.com/TolMera/Numbers-Logic/blob/master/LICENSE.md]

## More documentation and help can be found at:

If you can't find something documented here, you're probably going to want to check out the packages I have derived functions from. [Check the Dependencies of this project](https://www.npmjs.com/package/numbers-logic?activeTab=dependencies)

For numbers documentation, check out [numbers.github.io](http://numbers.github.io/)

For number-theory check out [their NPM page](https://www.npmjs.com/package/number-theory)

### This project stands on the shoulders of giants:

In no particular order:

- [The publisher of numbers: ~sjkaliski](https://www.npmjs.com/~sjkaliski)
- [The publisher of number-theory: ~rsandor](https://www.npmjs.com/~rsandor)
- Steve Kaliski - [@stevekaliski](http://twitter.com/stevekaliski)
- David Byrd - [@thebyrd](http://twitter.com/thebyrd)
- Ethan Resnick - [@studip101](http://twitter.com/studip101)
- Dakota St. Laurent - [@SaintDako](https://github.com/SaintDako)
- Kartik Talwar - [@KartikTalwar](https://github.com/KartikTalwar)
- [Ethan aka `altercation`](https://github.com/altercation)
- [Hrishikesh Paranjape aka `hrishikeshparanjape`](https://github.com/hrishikeshparanjape)
- [Greg Leppert aka `leppert`](https://github.com/leppert)
- [Lars-Magnus Skog aka `ralphtheninja`](https://github.com/ralphtheninja)
- [Tim Wood aka `codearachnid`](https://github.com/codearachnid)
- [Miles McCrocklin aka `milroc`](https://github.com/milroc)
- [Nate Kohari aka `nkohari`](https://github.com/nkohari)
- [Eric LaForce aka `elaforc`](https://github.com/elaforc)
- [btmills aka `btmills`](https://github.com/btmills)
- [swair shah aka `swairshah`](https://github.com/swairshah)
- [Jason Hutchinson aka `Zikes`](https://github.com/Zikes)
- [Philip I. Thomas aka `philipithomas`](https://github.com/philipithomas)
- [Brandon Benvie aka `Benvie`](https://github.com/Benvie)
- [Larry Battle aka `LarryBattle`](https://github.com/LarryBattle)
