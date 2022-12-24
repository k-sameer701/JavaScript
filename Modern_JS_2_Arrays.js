// 👻 MODERN JAVASCRIPT LECTURE 2

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

var myFriendName = ["Vinod", "Anjali", "Maady", "King", "Hella"];
console.log(myFriendName.lastIndexOf("King"));

// Includes() -> Determinse wheather the array contains a value, returning true or false as appropriate.
var myFriendName = ["Vinod", "Anjali", "Maady", "King", "Hella"];
console.log(myFriendName.includes("King"));

// Array.prototype.find() -> arr.find(callback(element[, index[, array]])[,thisArg]) array satisfies the testing function, or undefined if not found. Only problem is that it return only one element.

const prices = [200, 300, 350, 400, 450, 500];

// Prices < 400

// Method 1
console.log(prices.find((currVal) => currVal > 1400));
// Method 2
const findElem = prices.find((currVal) => {
    return currVal < 400;
});
console.log(findElem);

// Array.prototype.findIndex() -> Returns the found index in the array, if an element in the array satisfies the testing function or -1 if not found.

const price = [200, 300, 350, 400, 450, 500];
console.log(price.findIndex((currVal) => currVal > 1400));


// Array.prototype.filter() -> Returns a new array containing all elements of the calling array for which the provided filtering fucntion return true.

const cost = [200, 300, 350, 400, 450, 500];
// price < 400
const newCost = cost.filter((elem, index) => {
    return elem < 400;
})
console.log(newCost);

// 3️⃣ HOW TO SORT AN ARRAY :

// Array.prototype.sort()

// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending , built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

const months = ['March', 'Jan', 'Feb', 'Dec', 'Nov'];
console.log(months.sort());

const array1 = [1, 30, 4, 21, 100000, 99];
console.log(array1.sort());

// 4️⃣ PERFORM CRUDE OPERATION :

// Array.prototype.push() -> The push() method adds one or more elements to the end of an array and returns the new length of the array.

const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('dog', 'cow')
console.log(animals);
console.log(count);

// Array.prototype.unshift() -> The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

// Example 1: 
const animal = ['pigs', 'goats', 'sheep'];
const ct = animal.unshift('dog', 'cow')
console.log(animal);
console.log(ct);

// Example 2:
const myNumber = [1, 2, 3, 4, 5];
myNumber.unshift(4, 6);
console.log(myNumber); 

// Array.prototype.pop() -> The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

const plants = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log(plants);
console.log(plants.pop());
console.log(plants);

// Array.prototype.shift() -> The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

const plant = ['broccoli', 'cauliflower', 'kale', 'tomato', 'cabbage'];
console.log(plant);
console.log(plant.shift());
console.log(plant);

// 🤯 CHALLENGE TIME: 🤯

// Array.prototype.splice() -> Adds and/or removes elemnts from an array.

/*
1: Add Dec at the end of an array?
2: What is the return value of splice method?
3: Update march to March (update)?
4: Delete June from an array?
*/

const month = ['Jan', 'march', 'April', 'June', 'July'];

// SOLUTION 1 :
const newMonth = month.splice(month.length, 0, 'Dec');
console.log(month);

// SOLUTION 2 :
console.log(newMonth);
// Returns the empty array.

// SOLUTION 3 :

// Method 1
const updateMonth = month.splice(1, 1, 'March');
console.log(month);

// Method 1
const indexOfMonth = month.indexOf('June');

if(indexOfMonth != -1){
    const updateMonth = month.splice(indexOfMonth, 1, 'june');
    console.log(month);
}
else{
    console.log("No such data is found");
}

// SOLUTION 4 :
const indexOfMonths = month.indexOf('June');
if(indexOfMonths != -1){
    const updateMonth = month.splice(indexOfMonths, 1);
    console.log(month);
    //console.log(updateMonth);
}
else{
    console.log("No such data is found");
}

// 5️⃣ MAP AND REDUCE METHOD

/*
Array.prototype.map() -> 
let newArray = arr.map(callback(currentValue[, index[, array]]){
    return element for newArray, after executing something
}[, thisArg]);
Returns a new Array containing the results of calling a function on evey element in this array.
*/

const array11 = [1, 4, 9, 16, 25];
// num > 9
let newArr = array11.map((curElem, index, arr) => {
    return curElem > 9;
})
console.log(array11);
console.log(newArr);



// It return new array without mutating the original array

// 🤯 CHALLENGE TIME: 🤯

/*

1. Find the square root of each element in an array ?
2. Multiply each element by 2 and return only those   elements which are greater than 10?
*/

// SOLUTION 1 : 
let array = [25, 36, 49, 64, 81];
let arrSqr = array.map((currElem) => {
    return Math.sqrt(currElem);
})
console.log(arrSqr);

// SOLUTION 2 : (we can use chainging methods)
let arr2 = [2, 3, 4, 6, 8];
let mulArr2 = arr2.map((mulElem) => {
    return mulElem * 2;
}).filter((mulElem) => {
    return mulElem > 10;
})
console.log(mulArr2);


// REDUCE METHOD :
/* 
Flatten an array means to convert the 3rd or 2nd array into a single dimensional array.

The reduce() method executes a reducer funciton (that you  provide) on each element of the array, resulting in single output value.

The reducer function takes four argument:
-> Accumulator
-> Current Value
-> Current Index
-> Source Array

*/

let arr3 = [5, 6, 2];
let sum = arr3.reduce((accumilator, sumElem, index, arr) => {
    return accumilator *= sumElem;
})
console.log(sum);

// HOW TO FLATTEN AN ARRAY
// Converting 2D and 3D arrray into one Dimenesional array

const arr4 = [['zone_1', 'zone_2'], 
              ['zone_3', 'zone_4'], 
              ['zone_5', 'zone_6'], 
              ['zone_7', 'zone_8']];

let flatArray = arr4.reduce((accum, currValue) => {
    return accum.concat(currValue);
})
console.log(flatArray);



