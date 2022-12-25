// 👻 MODERN JAVASCRIPT LECTURE 5

// 😎 Math Objects in JavaScript 😎

// The JavaScript kMath Object allows you to perform mathematical tasks on the numbers.

console.log(Math.PI);

// Math.round()
// Returns the value of x rounded to its nearest integer.

let num = 10.2565;
console.log(Math.round(num));

// Math.pow()
// Math.pow(x, y) returns the value of x to the power of y.
console.log(Math.pow(2, 3));

// Math.sqrt()
// Math.sqrt(x) returns the square root of x.

console.log(Math.sqrt(25));
console.log(Math.sqrt(81));
console.log(Math.sqrt(64));

// Math.abs()
// Math.abs(x) returns the absolute (positive) value of x

console.log(Math.abs(-55));
console.log(Math.abs(-55.5));
console.log(Math.abs(-955));

// Math.ceil()
// Math.ceil(x) returns the value of x rounded up to its nearest integer

console.log(Math.ceil(4.4));
console.log(Math.ceil(99.1));

// Math.floor()
// Math.floor(x) returns the value of x rounded down to its nearest integer.

console.log(Math.floor(4.7));
console.log(Math.floor(99.1));

// Math.min()
// Math.min() can be used to find the lowest value in list of arguments

console.log(Math.min(0, 150, 30, 20 ,-8, -200));

// Math.max()
// Math.max() can be used to find the mgreatest value in the list of arguments
console.log(Math.max(0, 150, 30, 20 ,-8, -200));

// Math.random()
// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).

console.log(Math.floor(Math.random()*10));

// Math.trunc()
// Math.trunc() method returns the integer part of number

console.log(Math.trunc(4.6));
console.log(Math.trunc(-99.1));

// PRACTICE TIME

/*
If the argument is a positibe number, Math.trunc() is equivalent to Math.floor(), otherwise Math.trunc() is equivalent to Math.ceil().
*/

