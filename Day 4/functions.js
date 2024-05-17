// this code works like que

var arr = [1, 2, 3, 4, 5];

function nextInLine(arr, item){
  arr.push(item);
  item = arr.shift();
  return item;
}

// JSON.stringify converts an object to a string form
console.log("before: ", JSON.stringify(arr));
console.log("this item is remove: " + nextInLine(arr, 6));
console.log("after: " + JSON.stringify(arr));