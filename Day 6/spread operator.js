// spread operator can be used for copying an array
const months = ["jan", "feb", "march", "april", "may"];


// to copy an array
let copyMonths = months; // this method is wrong becuase copyMonths points to months
console.log("Months" + JSON.stringify(months));

months[0] = "potato";
copyMonths = [...months]; // this is the correct method which is called the spread operator
console.log("Copy Months: " + JSON.stringify(copyMonths));


// || PRACTICE QUESTIONS
// 1. Combining Arrays Using Spread Operator
  const arrayOne = [1, 2, 3];
  const arrayTwo = [4, 5, 6];
  const combinedArray = [...arrayOne, ...arrayTwo];

  console.log(combinedArray);


// 2. Copying an Array Using Spread Operator
  const actualArray = [1, 2, 3, 4];
  const copiedArray = [...actualArray];

// 3. Merging Objects Using Spread Operator
const obj1 = {a: 1, b: 2};
const obj2 = {x: 3, y: 4};
const mergedObj = {...obj1, ...obj2}; // { a: 1, b: 2, x: 3, y: 4 }


// Adding Elements to an Array Using Spread Operator

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(newNumbers);
console.log(numbers);
