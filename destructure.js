// module-22_9

const person = {
  name: "Kallis",
  address: "South Africa",
  phone: 123456,
  age: 35,
  friends: ["jhony", "pollok", "sachin"],
};

const { address, phone, salary, age } = person;
// const phone = person.phone;
// const name = person.name;
console.log(age, salary, address, phone);

// array destructure
const names = ["khalid", "Rakib", "Mamun", "Raazu", "Babu"];
// const [bigFriend] = names;
// console.log(bigFriend);
const [bigFriend, ...restFriends] = names;
console.log(restFriends);

// complexObject
const myFriends = {
  name: "abc",
  //nested
  info: {
    address: "khulna",
    leader: "Lion",
    school: "Bania Khamar",
  },
};
const { leader, school } = myFriends.info;
console.log(leader, school);
