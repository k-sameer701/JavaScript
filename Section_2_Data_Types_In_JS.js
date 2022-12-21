/* Section 2: DATA TYPES IN JS */

var myName = "Game of Thrones";
var myAge = 20;

//type of operator
console.log(typeof(myName));
console.log(typeof(myAge));

var iAm = true;
console.log(iAm);
console.log(typeof(iAm));

// DATA-TYPES PRACTICES

console.log(true - false);

// 10 + "20"    // It will concat   1020
// 9 - "5"      // BUG 1
// "Java" + "Script" // It will concat
// " " + " "
// " " + 0
// "King" - "Kind"  // NaN - NOT A NUMBER
// False = 0 and True = 1
// true + true      // 2
// true - true      // 0
// true + false     // 1
// true - false     // 1


// 🔥 INTERVIEW QUESTION 🔥
// DIFFERENCE B/W NULL AND UNDEFINED?

var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));    // BUG 2 (why null is an object)

var iAmStandby;
console.log(iAmStandby);
console.log(typeof(iAmStandby));

// 🔥 INTERVIEW QUESTION 🔥
// WHAT IS A NaN?
// Nan is a property of the global object
// In other words, it is a variable in a global scope.
// The inital value is of NaN is Not-A-Number.

var myPhoneNumber = 9876543210
var myNameH = "Hello ji"


// isNan will tell is it a number or not
console.log(isNaN(myPhoneNumber));
console.log(isNaN(myNameH));


if(isNaN(myNameH)){
    console.log("Please enter a valid number");
}

// New Practice
// NaN == NaN
// Number.Nan == Nan
// isNaN(NaN)
// isNaN(Number.NaN)
// Number.isNaN(NaN)

console.log(Number.isNaN(NaN));