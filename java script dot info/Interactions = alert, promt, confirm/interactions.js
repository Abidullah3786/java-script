let name = prompt("Enter your name", "John doe");
let isAdult = confirm("are you 18+");
if(isAdult){
  alert(`Welcome ${name}`);
}
else{
  alert(`${name} you are not allowed to use this site`)
}