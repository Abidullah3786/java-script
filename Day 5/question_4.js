function Fib(term){
  let firstTerm = 0;
  let secondTerm = 1;
  let series = [];
  while(true){
    if(firstTerm <= term){
      series.push(firstTerm);
      let temp = firstTerm;
      firstTerm = secondTerm;
      secondTerm += temp;
    }
    else{
      break;
    }
  }

  return series;
}

console.log(Fib(21));