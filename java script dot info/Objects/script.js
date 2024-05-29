// Empty objects
const objectConstructor = new Object();
const objectLiteral = {};



// We can add, remove and read files from it at any time.

// let user = {};

// // set
// user["likes birds"] = true;

// // get
// alert(user["likes birds"]); // true

// // delete
// delete user["likes birds"];

// -------------------------------------------------

let user = {
  name: "Abid",
  age: 22,
}
user["degree"] = "computer science";

let key = prompt("What do you want to know about the user", "name");
alert(user[key]); //The dot notation cannot be used in a similar way: undefined


delete user.degree; // delete user["degree"];



// Computed properties
// We can use square brackets in an object literal, when creating an object. That’s called computed properties.
let fruit = prompt("Which fruit to buy", "apple");

const bag = {
  [fruit]: 5,
}

alert("You will recive " + bag[fruit] + " " + fruit +  " soon");

// --------------------------------------------------


let fruitReused = 'apple';
let bagReused = {
  [fruitReused + 'Computers']: 5 // bag.appleComputers = 5
};

function makeUser(name, age){
  name, // same as name: name
  age   // same as age: age
}



/*
there are no limitations on property names. They can be any strings or symbols 
(a special type for identifiers, to be covered later).

Other types are automatically converted to strings.

For instance, a number 0 becomes a string "0" when used as a property key:
*/

