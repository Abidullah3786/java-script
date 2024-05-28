// The idea is that we pass a function and expect it to be “called back” later if necessary
// A Function Expression is created when the execution reaches it and is usable only from that moment.
// A Function Declaration can be called earlier than it is defined.

/*
Write a function called doSomething that takes a callback function as an argument and logs 
"Doing something..." to the console. After that, it should execute the callback function.
*/

function doSomething(fun){
  console.log("Doing something...");
  fun();
}

function callbackOrWhatever(){
  console.log("Hi i am passed inside another as call back");
}

doSomething(callbackOrWhatever);


//--------------------------------------------------


function delayedGreeting(fun){
  setTimeout(fun, 1000);
}

function greet(){
  console.log("Hello, World!");
}

delayedGreeting(greet);






// Summary
// Functions are values. They can be assigned, copied or declared in any place of the code.
// If the function is declared as a separate statement in the main code flow, that’s called a “Function Declaration”.
// If the function is created as a part of an expression, it’s called a “Function Expression”.
// Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
// Function Expressions are created when the execution flow reaches them.