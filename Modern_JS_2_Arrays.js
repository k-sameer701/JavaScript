// 👻 MODERN JAVASCRIPT LECTURE 1

// 😎 Arrays in JavaScript 😎


//When we use var, we can stored only one value at a time.
var friend1 = 'Raj';
var friend2 = 'Karan';
var friend3 = 'Nero';

//When we feel like storing multiple values in one variable then instead of var, we will use an Array.

//In JavaScript, we have an Array class, and arrays are the prototype of this class.

// Example : 
var myFriends = new Array;
var myFriends = ['Raj', 'Karan', 'Nero'];

// 1️⃣ TRAVERSAL IN AN ARRAY

// Navigate through an array

// if we want to get the single data at a time also if we want to change the data
var myFriends = ['Raj', 'Karan', 'Nero'];
console.log(myFriends[1]);

// if we want to check the length of data
console.log(myFriends.length);

// we use for loops to nevigate
var myFriends = ['Raj', 'Karan', 'Nero'];
for(var i=0; i<myFriends.length; i++){
    console.log(myFriends[i]) ;
}


// After ES6 we have for...in and for..of loop too
var myFriends = ['Raj', 'Karan', 'Nero'];

// FOR IN -> PROVIDES INDEX OF ELEMENTS
for(let elements in myFriends){
    console.log(elements);
}

// FOR IN -> PROVIDES DATA OF ELEMENTS
for(let elements of myFriends){
    console.log(elements);
}

// Array.prototype.forEach() -> Calls a function for each elements in the array.
var myFriends = ['Raj', 'Karan', 'Nero'];
myFriends.forEach(function (element, index, array){
    console.log(element + " index : " + index + " " + array);
});

// FAT ARROW
myFriends.forEach((element, index, array) => {
    console.log(element + " index : " + index + " " + array);
});

// 2️⃣ SEARCHING AND FILTER IN AN ARRAY

// Array.prototype.indexOf() -> Return the first (least) index of an element within the array equal to an element, or -1 if none is found. It search the element form the 0th index number. It's case sensitive.

var myFriendNames = ["Vinod", "Anjali", "Maady", "King"];

console.log(myFriendNames.indexOf("Maady"));


// Array.prototype.lastIndexOf() -> Returns the last (greatest) index of an element within the array equal
//console.log(myFriendNames.lastindexOf("Anjali"));

var myFriendNames = ["Vinod", "Anjali", "Maady", "King"];
console.log(myFriendNames.lastIndexOf("King"));
