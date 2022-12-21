/* Section 3: ARITHMETIC OPERATORS IN JAVASCRIPT */

console.log(5+20);

// 1️⃣ Assignment Operator 
// An Assignment Operator assigns a value to its left opereand based on the values of its rigth operand. The simple assignment  operator is equal(=)

var x = 5;
var y = 5;
 console.log("is both the x and y are equal or not" + x == y);

 // 2️⃣ Arithmetic Operators
 // An aithmetic operator takes numerical vaues (either literals or variables) as their operands and return a single numerical value.

 console.log(3+3);
 console.log(10-5);
 console.log(20/5);
 console.log(5*6);

 console.log("Remainder Operator" + 81%8);

//  3️⃣ Increment and Decrement Operator
//   Operator: x++ or ++x
//   If used postfix, with operator after operand(for example, x++), the increment operator increments and returns the value before incrementing.

//   If used prefix, with operator before operand(for example, ++x), the increment operator increments and returns the value after incrementing.

var num = 15;
var newNum = num++;
console.log(num);
console.log(newNum);

// Postfix increment operator means the expression is evaluated first using the original value of the varivale and the variable is incremented (increased).

// If used prefix, with operaot before operand(for example, ++x), the increment operator increments and return the value after incrementing.

var number = 15;
var newNumber = ++number;
console.log(number);
console.log(newNumber);

// Prefix increment operator means the vairavle in incrementd first then the expression is evaluated using the new values of the variable.

// 4️⃣ Comparison Operator
// A comparison operator compares its operands and returns a logical value based on wheather the comparison is true.

var a = 30;
var b = 10;

// Equal (==)
console.log(a==b);

// Not Equal(!=)
console.log(a!=b);

// Greater than (>)
console.log(a>b);

// Greater than or Equal (>=)
console.log(a>=b);

// Less than (<)
console.log(a<b);

// Less than or equal(<=)
console.log(a<=b);


// 5️⃣ Logical Operator
// Logical operators are typically used with Boolean (Logical) values when they are, they return a Boolean value.

var r = 30;
var t = -20;



// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of operand is true if all of its operands are true.

console.log(t>r && r>t);

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for set of operands is true if and only if one or more of its operands is true.
console.log(t>r || r>t);

// Logical Not (!)
// The logical Not (!) operator (logical complement, negation) takes truth to falsity and vice - versa.

console.log(!(r>0) || (t<0));

// 6️⃣ String Concatenation
// The concatenation operator (+)  concatenates two string values together, returning another string that is the union of the two operand strings.

console.log("Hello World");

console.log("Hello " + "World");

var myName = "Drake";
console.log(myName + " Raj");

// 🤯 CHALLENGE TIME: 🤯

// What will be the output of 3**3?
console.log(3**3);      // 27 -> 3*3*3

// What will be the output, when we add a number and a string?
console.log(5 + "King");    // 5King
console.log(5 - "King");    // NaN

// Write a program to swap two numbers? 
var a = 5;
var b = 10;
var temp = a;
a = b;
b = temp;
console.log(a + " " + b );

// Write a program to swap two numbers without using  a third variable?
var a = 5;
var b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a + " " + b);

// 🔥 INTERVIEW QUESTION 🔥

// Difference between == vs === ?

var num1 = 5;
var num2 = '5';

console.log(typeof(num1));
console.log(typeof(num2));

console.log(num1 == num2);
// == : It will only check the value assigned to the variables.

console.log(num1 === num2);
// === : It will check the values assigned to the variavbles as well as the return type of the variables.