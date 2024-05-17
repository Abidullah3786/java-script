/*
What is Array in JavaScript?
JavaScript Array is a data structure that allows you to store and organize multiple values
within a single variable. It is a versatile and dynamic object. It can hold various data types,
including numbers, strings, objects, and even other arrays.
Arrays in JavaScript are zero-indexed i.e. 
the first element is accessed with an index 0, 
the second element with an index of 1, and so forth.
*/


/*
You have two ways to create JavaScript Arrays: 
using the Array constructor or the shorthand array literal syntax, which is just square brackets. 
Arrays are flexible in size, so they can grow or shrink as you add or remove elements.
*/


// 1. Creating an Array using Array Literal
// Creating an empty array
let arr = [];
console.log(arr);

// Creating an array and initializing it with values
let names = ["HTML", "CSS", "Java Script"];
console.log(names);


// 2. Creating an array using array constructor (java script new keyword)
/*
The “Array Constructor” refers to a method of creating arrays by invoking the Array
constructor function. This approach allows for dynamic initialization and can be used
to create arrays with a specified length or elements.
*/

// declaration of an empty array 
// using array constructor
let arrayName = new Array();

// creating and intializing an array with values
let courses = new Array("HTML", "CSS", "Javascript", "React")
console.log(courses);


// initializing array while declaring
let nums = new Array(3);
nums[0] = 30
nums[1] = 60
nums[2] = 90


/*
Note: Both the above methods do exactly the same. 
Use the array literal method for efficiency, readability, and speed.
*/



// Strings immutability
var myStr = "---jello world";
    myStr[0] = "H";
    console.log(myStr);
