 const triangle = {
  alpha: 90,
  beta: 30,
  gama: 60
 }

 /*
 let angleOne = triangle.alpha;
 let anglTwo = triangle.beta;
 let angleThree = triangle.gama;
 */

 let {alpha : angleOne, beta : anglTwo, gama : angleThree} = triangle;

//  nested destructuring
const Tempratur = {
  today: {min: 30, max: 40},
  yesterday: {min: 31, max: 36}
}

// to assign the maximum temperature to maxOfTdy
const {today: {max: maxOfTdy}} = Tempratur;
console.log(maxOfTdy);
