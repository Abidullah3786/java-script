// Property existence test, “in” operator
// Reading a non-existing property just returns undefined

let person = {}
person.name = person.name ?? "Abid";
console.log(person.name);


// there is a special syntax for checking key in an object
// "key" in object

let check = "name" in person;
console.log(check);


let car = { name: "corola" };

let key = "name";
console.log( key in user ); // true, property "name" exists


//---------------------------------------
// Why does the in operator exist? Isn’t it enough to compare against undefined?
let obj = {
  test: undefined
};
console.log( obj.test ); // it's undefined, so - no such property?
console.log( "test" in obj ); // true, the property does exist!