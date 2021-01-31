// khubi powerful holo template ja ak line or multi line ke just `` er vitor likhe huge kaj kora jae

const fName = "Khalid";
const lName = "Saifullah";
const fullName = fName + " " + lName + " lives in Stockholm"; //koto + sign dea kora lagche but es6 a khub easy. look the next line
console.log(fullName);

const fullName2 = `${fName} ${lName} lives in Stockholm, Sweden`; // es6 template
console.log(fullName2);

const fullName3 = `${fName} ${200 + 300} lives in Stockholm, Sweden`; // es6 template any kind of summation works here also
console.log(fullName3);

// jodi multiLine likhte chai tobe o `` es6 template use kore multiline likhte pari
const multiLine = "Khalid\n" + "lives\n" + "in Stockholm"; // old version
console.log(multiLine);

// now use `` es6 template to show multiline
const multiLine1 = `Khalid 
lives
in Stockholm`;
console.log(multiLine1);
