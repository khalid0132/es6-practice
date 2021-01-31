// way to declare function######################################
// function doubleIt(num) {
//   return num * 2;
// }
// const result = doubleIt(7);
// console.log(result);

//###### another way to declare function####################
// const doubleIt = function myNum(num) {
//   return num * 2;
// };
// const result = doubleIt(15);
// console.log(result);

// arrow function WITH one or 2 parameter
// const doubleIt = (num) => num * 2;
const add = (num1 = 20, num2 = 30) => num1 + num2;
const result = add(3, 9);
// const result = doubleIt(40); // 80
console.log(result); //12

// return ta separtely likhe dekhlam. kaj kore perfectly
const khalid = (val1, val2) => {
  return val1 + val2;
};
const outVal = khalid(3, 4);
console.log(outVal); // 7

// no parameter or empty parameter
const give132 = () => 150;
const output = give132();
console.log(output); //150

// multiline arrow function but return separately.. likhthe hobe
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  const diff = num1 - num2;
  const resultMath = sum * diff;
  return resultMath;
};
const resultMaths = doMath(6, 4);
console.log(resultMaths); //20
