// A variable without datatype can be accessed every (global)
// like secondGlobal on line 8 is accesed inside another function on line 13

var global = 5;

function myFunc(a, b){
  global += a + b;
  secondGlobal = 20;
  return global;
}

function myFuncTwo(a, b){
  secondGlobal += a + b;
  return secondGlobal;
}

function fun(){
  secondGlobal = 20;
}

// var result = myFunc(5, 10);
// console.log(result);

fun();
    result = myFuncTwo(10, 20);
console.log(result);