/* Section 4: CONTROL STATEMENTS AND LOOPS IN JAVASCRIPT */

/* CONTROL STATEMENTS */

// 1️⃣ If...Else
// The if statements executes a statement if a specified condition is truthy. If the condition is falsy, another statement can be executed.

var tomr = "rain";
if(tomr == "rain"){
    console.log("Take a Raincoat");
}
else{
    console.log("No need to Take a Raincoat");
}

// 🤯 CHALLENGE TIME: 🤯
 
// Write a program that works out wheather if a given year is a leap year or not?

var year = 2020;
if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log("Its a leap year");    
}
else{
    console.log("Its not a leap year");
}

// What is truthy and falsy values in Javascript? 

// We have a total of 5 flasy values in Javascript i.e. 0, " ", undefined, null, NaN, false** is false anyway.

if(score = 0){
    console.log("Yay, We won the game 😀");
}
else{
    console.log("OMG, We loss the game 😭");
}

// 2️⃣ Conditinal (Ternray) Operator:
// The conditional Operator is the only javascript operator that takes operands.

var age = 17;
console.log((age >= 18) ? "You can vote" : "You cannot Vote");

// 3️⃣ Switch Statements
// Evalutes an expression, matching the expression's value to a case clause, and executes statements associated with that case.

// 1st Without break statement
// Find area?

var area = "circle";
var PI = 3.142, l = 5, b = 4, r = 3;

switch(area){
    case "circle":  console.log("Area of Circle: " + PI*r**2);
    break;
    case "triangle":    console.log("Area of Triangle: " + ((l*b)/2));
    break; 
    case "rectangle":   console.log("Area of Rectangle: " + (l*b));
    break;
    default: console.log("Please Enter a valid Data");
}

// break
// Termiates the current loop, switch or label statement and transfers program control to the statement following the terminated statement.

// 4️⃣ While Loop Statements
// The while statements creates a loop that executes a specified statement as long as the test condition evaluates to true.

var num = 0;
while(num <= 10) {
    console.log(num);
    num++;
}

//  5️⃣ Do-While Loop Statement

var num = 0;
do{
    console.log(num);
    num++;
}while(num <= 10);

// 6️⃣ For Loop Statement

for(var n=0; n<=10; n++){
    console.log(n);
}

// 🤯 CHALLENGE TIME: 🤯

// JavaScript pogram to print table for given number (8, 9, 12, 15) using for loop?

for( var i = 1; i < 11; i++){
    console.log("8 X " + i + " = " + 8*i);
}