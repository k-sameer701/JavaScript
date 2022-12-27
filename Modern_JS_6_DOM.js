// 👻 MODERN JAVASCRIPT LECTURE 6

// 😎 DOM in JavaScript 😎

// SECTION 1️⃣ : WINDOW VS DOCUMENT

// 1️⃣ Window is the main container or we can say the global object and any operation related to enitre browser window can be a part of window object.

// For Example : The history or to find the URL etc.

// 1️⃣ Whereas the DOM is the child of Window Objects

// 2️⃣ All the members like objects, methods or properties. If they are teh part of window object then we do not refer the window object. Since window is the global object so you do not have to write down window.

// - It will be figured out by the runtime.

// For Example
/*
1. window.screen or just screen is a small information about physical screen dimensions.
2. window.location giving the current URL
3. window.document or just document is the main object of the potentially visible object model/DOM.
*/
// 2️⃣ Where in the DOM we need to refer the document, if we want to use the document object, methods or properties.

// FOR Example : 
// document.getElementById()

// 3️⃣ Window has methods, properties and objects
// Ex setTimeOut() or setInterval() are the methods where as document is the object of the window and

// SECTION 2️⃣ : 
// ********************** DOM VS BOM *******************

/*
The DOM is the Document Object Model, which deals with the document, the HTML element themselves, e.g. document and all traversal you would do in it, events etc.

For Ex:
change the background color to red
document.body.style.background = "red";

The BOM is the Browser Object Model, which deals with browser component aside from the document, like history, location, navifator and screen (as well as some others that vary by browser) OR

In simple meaning all the window operations which comes under BOM are performed using BOM
*/

// Let's see more practical on History objects

// Functions alert / confirm / prompt are also a part of BOM :
// They are directly not related to the Document, but represent pure browser methods of communicating with the user .

alert(location.href);   // shows current URL
if(confirm("Want to visit ThapaTechnical?")) {
    location.href = "https://www.youtube.com/thapatechnical";       // redirect the 
} 


// SECTION 3️⃣ : NAVIGATE THROUGH DOM
/*
1: document.documentElement -> Returns the Element i.e. the root element of the document.
2: document.head
3: document.body
4. document.body.childNodes (include tab, enter and whiteSpace) list of the direct children only
5: document.children (without text nodes, only regular Elements)
6: document.childNodes.length
*/

// PRACTICE TIME
// How to check wheather an element has child nodes or not?
// We will use hasChildNodes()


// PRACTICE TIME
/* 

How to find the child in DOM tree
firstChild vs firstElementChild
lastChild vs lastElementChild
const data = document.body.firstElementChild;
undefined
data
data.firstElementChild
data.firstElementChild.firstElementChild
data.firstElementChild.firstElementChild.style.color="red"
vs
document.querySelector(."child-two").style.color = "Yello";

How to find or access the siblings
document.body.nextSibling
document.body.nextElementSibling
document.body.previousSibling
document.body.previousElementSibling
*/

// SECTION 4️⃣ : How to search Elements and the References
// We will see the new file

// 👻 INTERVIEW QUESTIONS :

// DIFFERENCE B/W getElementById and querySelector ?

//What is getElementById?
/*
Syntax : 
element = document.getElementById(id);

Returns a reference to the element by its ID.
If the element with the specified ID is not in the document, it will return null.
*/

// WHAT IS QUERY SELECTOR() ?
/*
Syntax :
element = document.querySelector(selector);

Returns the first element within the document that matches the specified group of selectors, or null if no matches are found.
*/

// FOR EXAMPLE
/*
getElementById vs querySelector : Similarities
*/
