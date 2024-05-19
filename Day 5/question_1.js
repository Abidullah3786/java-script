function checkPrime(num){
  let prime = true;
  for(let i = 2; i < (num / 2) + 1; i++){
    if(num % i == 0){
      prime = false;
    }
  }

  return prime;
}

console.log(checkPrime(9));
