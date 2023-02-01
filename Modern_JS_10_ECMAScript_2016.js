// 👻 MODERN JAVASCRIPT LECTURE 10

// 😎 Features of ECMAScript 2016 also known as ES7 😎

// ➡️ DESTRUCTING IN ES6
/*
The destructing assignment syntax is Javascript expression that makes it poissible to unpack values from arrays, or properties from objects, into distinct variables.
*/

// ⭐ ARRAY DESTRUCTURING

// const myBioData = ['Drake', 'Nero', 26];


// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];
//console.log(myAge);

// let[myFName, myLName, myAge] = myBioData;
// console.log(myAge);

// We can add values too

// ⭐ OBJECT DESTRUCTURING

// const myBioData = {
//     myFName : 'DRAKE',
//     myLName : 'THAPA',
//     myAge : 26
// }

// let age = myBioData.age;
// console.log(age);

// let {myFName, myLName, myAge} = myBioData;
// console.log(myAge);

// ⭐ OBJECT PROPERTIES

// We can now use Dynamic Properties


// let myName = 'Drake';
// let myAge = 26;
// const myBio = {
//     myName : myName,
// }

// No need to write key and value, if both are same

// let myName = "Drake Raj";
// let myAge = 26;
// const myBio = {
//     myName : myName,
//      myAge : myAge
// }
// const myBio = {myName, myAge};
// console.log(myBio);

// ⭐ SPREAD OPERATOR :

// const colors = ['red', 'green', 'blue', 'white'];
// const myColors = ['red', 'green', 'blue', 'white', 'yellow', 'black'];

// 2nd Time add one more color on top and tell we need to write it again on myColor array to

// const myFavColors = [...colors, 'yellow', 'green', 'blue', 'white'];
// console.log(myFavColors);

// 🧑‍💻 ES7 FEATRUES :

// 1: Array include 
const colors = ['red', 'green', 'blue', 'white', 'pink'];
const isPresent = colors.includes('purple');
console.log(isPresent);

// 2: **
console.log(2**3);


// 🧑‍💻 ES8 FEATRUES :

// String padding
// Object.values()
// Object.entries()

const message = "My name is Drake";
console.log(message);
console.log(message.padStart(5));
console.log(message.padEnd(10));

const person = {name : 'FRED', age : 87};
console.log(Object.values(person));
console.log(Object.entries(person));