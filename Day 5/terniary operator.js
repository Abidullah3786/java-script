// terniary operator is the short cut for if else

function checkSign(num){
  return num > 0 ? "positive" : num < 0 ? "negative" : 0;
}

console.log(checkSign(-1));
console.log(checkSign(10));
console.log(checkSign(0));