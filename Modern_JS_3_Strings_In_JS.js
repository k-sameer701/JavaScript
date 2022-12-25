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
let myTweets = "laf sdf saf a adf as fsf df gsf gs gsd fgsdjfg khh ih iu iuk gutfytfhkjio   h jkh kh u j kh u i ji o io i h kjh u ";

let myActualTweet = myTweets.slice(0, 280);
console.log(myActualTweet);
console.log(myActualTweet.length); 

// THE SUBSTRING METHOD :

/* 
The substring() is similar to slice(). The difference is that substring() cannot accept negative indexes. 
*/

var str1 = "Apple, Banana, Kiwi";
let resp = str1.substring(8, -2);
console.log(resp);

// If we give a negative value then the charactersare counted from the 0th position. 

//  THE SUBSTR() METHOD :
// substr() is similar to slice().

/*
The difference is that the second parameter specifies the length of the extracted part. 
*/

var str2 = "Apple, Banana, Kiwi";
let resp1 = str.substr(-4);
console.log(resp1);

// 5️⃣ REPLACING STRING CONTENT () : 
// String.prototype.replace (searchFor, replaceWith)

// The replace() method replaces a specified value with another value in a string.

let myBioData3 = "I am Drake Nero";
let replace = myBioData3.replace('Nero', 'Raj');
console.log(replace);

// POINTS TO REMEMBER : 
/*
1. The replace() method does not change the string is called on. It returns a new string.
2. By default the replace() method replace replaces only the first match.
3. By default, the replace() method is case sensitive.
*/

// 6️⃣ EXTRACTING STRING CHARACTERS : 

// There are 3 methods for extracting string characters 
/*
1. charAt(position)
2. charCodeAt(positon)
3. Property Access  [ ]
*/ 

// 1. charAt() method : 
/*
The charAt() mthod returnthe character at a specified index (positoin) in a string. 
*/

let str4 = "HELLO WORLD";
console.log(str4.charAt(0));
//console.log(str4.charAt(5));

// 2. charCodeAt() method :
/*
The charCodeAt() method returns the unicode of the character at a specified index in a string:
The method returns a UTF-16 code.
(an integer between 0 and 65535).

/*
The Unicode Standard Provides a unique number for evey character, no matter the l=platform, device, appliciation, or langauge. UTF-8 is a popular UniCode encoding which has 88-but code units.
*/

var str6 = "HELLO  WORLD";
console.log(str6.charCodeAt(0));


// 🤯 CHALLENGE TIME: 🤯

// Return the UniCode of the last character in a string
let str5 = "HELLO  WORLD";
let lastChar = str5.length - 1;
console.log(str5.charCodeAt(lastChar));

// 3. Property Access
// ECMAScript 5 (2009) allows a property access [ ] on strings

var str7 = "HELLO WORLD";
console.log(str7[0]);

// 7️⃣ OTHER USEFUL  METHODS : 

// 1. Upper AND Lower Case Methods
let myName2 = "Drake New";
console.log(myName2.toUpperCase());
console.log(myName2.toLocaleLowerCase());

// 2. The Concat Methods :
// Concat method joins two or more strings

let fName = "Drake";
let lName = "Raj";
console.log(fName.concat(lName));
console.log(fName.concat(" ", lName));

// 3. String.trim()
// The trim() method removes whitespace from both sides of a string

var str8 = "        Hello World!        ";
console.log(str8.trim());

// 4. Converting a string into an Array
// A string can be converted to an array with the split() method.

var txt = "a,b,c,d,e";          // Stirng
console.log(txt.split(","));    // Split on commas
console.log(txt.split(" "));    // Split on spaces
console.log(txt.split("|"));    // Split on pipe
