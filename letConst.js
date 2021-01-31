const numbers = [12, 24];
numbers[1] = 44; // arrayr vitorer value jodi change kori tobe const er output a probe´lem dekhabe na.
numbers.push(33); // push pop sobi kaj korbe but jodi arekta name er array use kori tobei error..next line a dekho
//  numbers = ["khalid", "safwaan"];
console.log(numbers);

// but jodi amon hoe tobe error dekhabe
const hubby = "Salman";
// const hubby = "Omar";
console.log(hubby);

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
  console.log(i); // console log } er baire holei error dekhabe, coz let er value baire leak hobe na
}
