// let does not allow a variable to declare twice unlike var
var fname = "Abid";
console.log(fname);
var fname = "Uzair";
console.log(fname);

// but in the case of let it does not allow a variable to declare twice
// let lastName = "ullah";  /\/\/\/\/\/\/\/\/\/\
// let lastName = "ahmad";  \/\/\/\/\/\/\/\/\/\/

let i = "global scope";
if(true){
  let i = "block scope";
}

console.log(i);

var j = "global scope";
if(true){
  var j = "block scope";
}

console.log(j);

// note: in summary the let keyword is block scope and can not be declared again unlike var 