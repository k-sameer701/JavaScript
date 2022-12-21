/* Section 5: FUNCTIONS IN JAVASCRIPT */

// 1️⃣ Function Defination

// A function definition (also called as a function declaration, or function statement) consists of the function keyword, followed by:

// The name of the function
// A list of parameters to the function, enclosed in paranthesis and separated by commas. The javascript statement  that defines a function, enclosed in curly brackets, {...}.

function sum(){
    var a = 10, b = 20;
    var total = a + b;
    console.log(total);
}

// 2️⃣ Calling Fucntion
// Defining function does not execute it.   A Javascript function is executed when "something" invoks in it (calls it).

sum();

// 🤯 CHALLENGE TIME: 🤯

// 3️⃣ Function Parameter vs Function Arguments

// Function parameter are the names listed in the function's defination.
// Function Arguments are the real values passed to the function.

function sum1(a, b){
    //var a = 10, b = 20;
    var total = a + b;
    console.log(total);
}
sum1(20, 30);

// 🔥 INTERVIEW QUESTION 🔥

// Why functions ?
// You can reuse code: Define the code once and use it many times.  You can use the same code many times with different arguments, to produce differnet results.

// OR

// A function is a group of reusable code which can be called anywhere in your program. This eliminates the need of writing the same of code again and again.

// 4️⃣ Function Expressions

// Function expressions simply means create a function and put it into the variable.

function sum2(a, b){
    //var a = 10, b = 20;
    var total = a + b;
    console.log(total);
}
var funExp = sum2(20, 30);
funExp;

// 5️⃣ Return Keyword

// When JavaScript reaches a return statement, the function will stop executing.    Execution often compute a return value. The return value is "returned" back to the "caller".

function sum3(a, b){
    //var a = 10, b = 20;
    return total = a + b;
    //console.log(total);
}
var funExp1 = sum3(20, 30);
console.log("Sum of two numbers " + funExp1);

// 6️⃣ Anonymous Function

// A funciton expression is similar to and has the same syntax as a function declaration one can define "named" function expression (where the name of expression might be used in the call stack for example) or "Anonymous Expression" 

var fun = function(a, b){
    return total = a + b;
}
var sums1 = console.log(fun(5, 15));
//console.log("Sum of numbers: " + sums1);


