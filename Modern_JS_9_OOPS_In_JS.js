// 👻 MODERN JAVASCRIPT LECTURE 9

// 😎 OOPS in JavaScript 😎

// 1️⃣ WHAT IS OBJECT LITERALS ?
/*
Object literal is simply a key:value pair data structure.   Storing variables and functions together in one container, we can prefer this as an Object
*/

// Object -> School Bag

// How to create object ?

// 1st Way : 
let bioData = {
    myName : "Drake", 
    myAge : 26,
    getData : function(){
        console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    }

}
bioData.getData();


// 2nd Way :
// No need to write functions as well after ES6
let bioData1 = {
    myName : {
        realName : "Nero",
        channelName : "Drake",
    }, 
    myAge : 26,
    getData(){
        console.log(`My name is ${bioData1.myName} and my age is ${bioData1.myAge}`);
    }

}
console.log(bioData1.myName.channelName);

// 2️⃣ WHAT IS THIS OBJECT ? 

/*
The definition of "this" object is that it contain the current context. The this object can have different values depending on where it is placed.


For Example :
console.log(this);
It refers to the current context and i.e. window global object.

Example 2
function myName() {
    console.log(this);
}
myName();

Example 3
let myName = "Drake";
function myName(){
    console.log(this.myName);
}
myName();

Example 4
const obj = {
    myAge : 26,
    myName(){
        console.log(this.myAge);
    }
}
obj.myName();

Example 5
This function will not work with arrow function because arrow

const obj ={
    myAge : 26,
    myName : () => {
        console.log(this);
    }
}
obj.myName();

*/

// Call method is used to call the method of another object or with call(), an object can use a method belonging to another object

// But as per other it is simply the way to use this keyword or aother object