// 👻 MODERN JAVASCRIPT LECTURE 4

// 😎 Date AND Time in JavaScript 😎
/*
JavaScript Date objects represents a single moment in time in a platform-independent format. Date objects contain a Number that represents a milliseconds since 1 January 1970 UTC.
*/

// 1️⃣ Creating Date Objects :
// There are 4 ways to create a new date objects:

/*
new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
// It takes 7 arguments
new Date(milliseconds)
// We cannot avoid month section
new Date(date string)   
*/

// new Date()
// Date objects are created with the new Date() cnostructor.

let currDate = new Date();
console.log(currDate);

console.log(new Date());
console.log(new Date().toLocaleString());   
// 9/11/2019, 1:25:01 PM
console.log(new Date().toString());     
// Wed Sep 11 2019 13:25:01 GMT+0700


// Date.now()
// Returns the numeric value corresponding to the current time-the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC

console.log(Date.now());

// new Date(year, month, ....)
// 7 numbers specify year, month, day, hour, minute, seconds, miiliseconds (in that order)

// NOTE : JavaScripts counts months from 0 to 11.

// January is 0, December is 11.

var d = new Date(2018, 11, 24, 10, 33, 30, 0);
console.log(d.toLocaleString());

// new Date(date Stirng)
// new Date(date Stirng) creates a new date object form a date string.

var d1 = new Date("October 13, 2014  11:13:00");
console.log(d1.toLocaleString());

// new Date(milliseconds)
// new Date(Milliseconds) creates a new date object as zero time plus milliseconds

var d2 = new Date(0);
console.log(d2.toLocaleString());
var d3 = new Date(1609574531435);
console.log(d3.toLocaleString());
var d4 = new Date(86400000*2);
console.log(d4.toLocaleString());

// 2️⃣ Dates Method's
const  curDate = new Date();

// HOW TO GET THE INDIVIDUAL DATE:
console.log(curDate.toLocaleString());
console.log(curDate.getFullYear());
console.log(curDate.getMonth());
console.log(curDate.getDate());
console.log(curDate.getDay());

// HOW TO SET THE INDIVIDUAL DATE:

console.log(curDate.setFullYear(2022, 10, 5));
console.log(curDate.setMonth(10));
console.log(curDate.setDate(5));
console.log(curDate.toLocaleString());

// 3️⃣ TIME METHOD's
const curTime = new Date();

// HOW TO GET THE INDIVIDUAL TIME

console.log(curTime.getTime());
// The getTime() methods returns the number of milliseconds 
console.log(curTime.getHours());
// The getHours() method returns the hours of a date as a number
console.log(curTime.getMinutes());
console.log(curTime.getSeconds());
console.log(curTime.getMilliseconds());

// HOW TO SET THE INDIVIDUAL TIME:

let curTime1 = new Date();
// console.log(curTime1.setTime());
console.log(curTime1.setHours(5));
console.log(curTime1.setMinutes(5));
console.log(curTime1.setSeconds(5));
console.log(curTime1.setMilliseconds(5));

// PRACTICE TIME : 

new Date().toLocaleTimeString();    // 11:18:48 AM
new Date().toLocaleDateString();    // 11/16/2015
new Date().toLocaleString();        // 11/16/2015, 11:18:48 AM