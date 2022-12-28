// 👻 MODERN JAVASCRIPT LECTURE 1

// 😎 Features of ECMAScript 2015 also known as ES6 😎

// 1️⃣ LET VS CONST VS VAR

var myName1 = "Drake Nero";
console.log(myName1);
myName1 = "Sam Raj";
console.log(myName1);

let myName2 = "Drake Nero";
console.log(myName2);
myName2 = "Sam Raj";
console.log(myName2);

// const myName3 = "Drake Nero";
// console.log(myName3);
// myName3 = "Sam Raj";
// console.log(myName3);

function biodata(){
    var myFirstName = "Drake";
    console.log(myFirstName);

    if(true){
        var myLastName = "Nero";
        console.log("Inner " + myLastName);
        console.log("Inner " + myFirstName);
    }
    console.log("InnerOuter " + myLastName);
}
biodata();

// var -> Function Scope
// let and const -> Blocl Scope 



// 2️⃣ Template Literals (Template Strigs)

// JavaScript program to print table for given number (8) ?

for( var num = 1; num < 11; num++){
    //console.log("8 X " + num + " = " + 8*num);
    tableOf = 12;
    console.log(`${tableOf} * ${num} = ${tableOf * num}`);
}


// 3️⃣ Default Parameters

// Default functions parameters allow named parameters to be initialized with default values if no values or undefined is passed.

function mult(a, b=5){
    return a*b;
}
console.log(mult(5, 3));


// 6️⃣ Fat Arrow Function

// 👻 Normal way of writing a function

console.log(sum1());

function sum1(){
    let a = 5; b=6;
    let sum1 = a + b;
    return `the sum of the two number is ${sum1}`;
}

// 👻 How to convert in into Fat Arrow Function

// This sybole "=>" is called Fat Arrow

// Method 1️⃣ 
const sum2 = () => {
    let a = 5; b = 6;
    let sum2 = a+b;
    return `the sum of the two number is ${sum2}`;
}
console.log(sum2());

// Method 2️⃣ 
const sum3 = () => `the sum of the two number is ${(a=5)+(b=6)}`;
console.log(sum3());