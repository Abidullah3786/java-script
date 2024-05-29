let schedule = {}


// function isEmpty(obj){
//   for(let key in obj){
//     // if the loop has started then there is a property
//     return false;
//   }
//   return true;
// }

// another way
function isEmpty(obj){
  let keys = Object.keys(obj);
  if(keys.length == 0) return true;
  return false;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";

console.log(isEmpty(schedule));

