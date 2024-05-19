// https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/#what-is-the-arrow-function-syntax
/*
When you declare a function with the arrow function syntax, 
you need to assign the declaration to a variable so that the
function has a name.
*/

const myFunction = (name) => {
  console.log(`hello ${name}, I am an arrow function`);
}
myFunction("Abid");

/*
Usually, a function is never changed after the declaration, 
so we use the const keyword instead of let.
*/

// when you have exactly one parameter you can also remove the paranthesis
const intro = name => {
  return `hello ${name}, I am an arrow function`;
}

let slogan = intro("Abid");
console.log(slogan);


function sum(a, b) {
  return a + b;
}

/*
When you write the function above using the arrow function syntax, 
you need to remove the curly brackets and the return keyword:
*/

const addition = (a, b) => a + b;

/*
If you didn’t remove the return keyword, then JavaScript will throw an 
error, saying an opening curly bracket { is expected.
*/


/*
if the number of arguments passed in are unknown then we can use the 
spread operator using ...
*/

const multiply = (...abc) => {
  let index = 0;
  let product = 1;
  while(index < abc.length){
    product *= abc[index];
    index++;
  }
  return product;
}

console.log(multiply(2,3,4,5))



// |||||    theroy questions    |||||
// What is the syntax to declare a function using the arrow function syntax?
// const functionName = (parameters) => {
//   // function body
// }

// Why do we assign the arrow function declaration to a variable?
// answer: because the arrow has no name so we need to call it later thats why we assign it to a variable to use later.a

// Why is the const keyword preferred over let when declaring a function?
// answer: because the function is written once at declaration time, and we cannot change or assign a function
// so thats why const is preffered over let when declaring a function.

// How can you simplify an arrow function that has exactly one parameter?
// answer: the paranthesis around the parameter can be removed
//  const functionName = parameter => { funtion body }

// What must you remove from an arrow function if you choose to use an implicit return?
// the curley braces from the function body
// example: const functionName = (a, b) => a + b;

  