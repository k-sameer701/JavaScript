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

const myBioData = {
    myFName : 'DRAKE',
    myLName : 'THAPA',
    myAge : 26
}

// let age = myBioData.age;
// console.log(age);

let {myFName, myLName, myAge} = myBioData;
console.log(myAge);
