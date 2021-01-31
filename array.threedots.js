const age1 = [22, 23, 24];
const age2 = [25, 26, 27, 28];
const age3 = [29, 30];

// const allAges = age1.concat(age2).concat(age3).concat([31]);
// console.log(allAges);

const allAges = [...age1, ...age2, ...age3, 31];
console.log(allAges);

// maximum inside an array

const numbers = [200, 400, 170, 280, 320];
const maximum = Math.max(...numbers); // ... bad dea dile output NaN dekhai...
console.log(maximum);
