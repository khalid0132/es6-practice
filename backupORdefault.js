function add(num1 = 10, num2 = 20) {
  return num1 + num2;
}
const total = add(15, 1); // num2 parameter dite jodi vule jai tokhon num2 er default hisebe parameter dea dewa..
console.log(total);

function multi(n1, n2=5){
  return n1 * n2;
}
const multiple = multi(3);
console.log(multiple);