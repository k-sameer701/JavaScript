// 👻 MODERN JAVASCRIPT LECTURE 3

// 😎 Strings in JavaScript 😎

/*
A Javascript string is zero or more characters written
inside quotes. Javascript strings are used for storing and manipulating text. You can use single or double quotes. Strings can be used as primitives, from string literals, or as objects, using the string() constructor
*/

let myName = "Drake Raj";
let myChannelName = 'Nero Raj';

let ytName = new String("Nero Techncial");

console.log(myName);
console.log(ytName); 

// HOW TO FIND LENGTH OF STRING:
// string.prototype.length -> Reflects the length of the string.

let myName1 = "Dranke Raj";
console.log(myName1.length);

// 1️⃣ ESCAPE CHARACTERS (\) : 
let anySentence = "We are the so-called \"Viking\" from the north.";
console.log(anySentence);
// if you dont want to mess, simply use the alternate quotes.

let anySentence1 = 'We are the so-called "Viking" from the north.';
console.log(anySentence1);

// 2️⃣ FINDING A STRING IN A STRING 

// string.prototype.indexOf(searchValue [, formIndex])

// The indexOf() method returns the index of (the position of) the first occurenece of a specified text in a string.

const myBioData = 'I am technical Nero';
console.log(myBioData.indexOf("am"));

// JavaScript couts position from zero. 0 is the first position in a string, 1 is the second, 2 is the third.

// Stirng.prototype.lastIndexOf(searchValue [, fromIndex])
// Returns the index within the calling String objects of the last occurence of searchValue, or -1 if not found.
const myBioData1 = 'I am technical Nero';
console.log(myBioData1.lastIndexOf("am"));

// 3️⃣ SEARCHING A STRING IN A STRING  

// String.prototype.search(regexp)
// The search() method searches a string for a aspecified value and returns the position of the match

const myBioData2 = 'I am the Thapa Technical';
let sData = myBioData2.search("Thapa");
console.log(sData);

// The search() method cannot take a second start position argument. 

// 4️⃣ EXTRACTING STRING PARTS

// There are 3 methods for extracting a part of a String:

/* 
slice(start, end)
substring(start, end)
substr(start, length)
*/

/*
The slice() Method
slice() extracts a part of a string and returns the extracted part in a new String.

// The method takes 2 parameters : the start position, and the end position (end not included).
*/

var str = "Apple, Banana, Kiwi";
let res = str.slice(0, 4);
let res1 = str.slice(7, -2);
console.log(res);
console.log(res1);

// The slice() method selects the elements starting at the given start argument and ends at but does not include, the given end argument.

// NOTE : The original array will not be changed.

// REMEMBER : JavaScript counts positions from zero. First positions is 0.
 
// 🤯 CHALLENGE TIME: 🤯

/*
Display only 280 characters of a string like the one used in twitters?
*/
let myTweets = "l";
