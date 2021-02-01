class Parent {
  constructor() {
    this.fatherName = "khalid";
  }
}

class Child extends Parent {
  constructor(babyName, age) {
    super();                              // parent use korle super() call korte hobe dite hobe
    this.name = babyName;
    this.age = age;
  }
  getFullName() {
    return this.fatherName + " " + this.name + " " + this.age + " "; // method
  }
}
const baby1 = new Child("safwaan", 7);
const baby2 = new Child("safreen", 6);
const baby3 = new Child("samreen", 2);
console.log(baby1);
console.log(baby2.getFullName());
console.log(baby3);
