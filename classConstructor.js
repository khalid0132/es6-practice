// class Student {
//   constructor(stuId, stuName) {
//     this.id = stuId;
//     this.name = stuName;
//   }
// }

// const student1 = new Student(29, "Khalid");
// const student2 = new Student(25, "Jesmin");
// const student3 = new Student(20, "Maria");
// console.log(student1, student2, student3);

class University {
  constructor(uniName, uniPlace, uniId) {
    this.Name = uniName;
    this.Place = uniPlace;
    this.Id = uniId;
  }
}

const uniName1 = new University("Stockholm University", "Sweden", 1910);
const uniName2 = new University("Jönköping University", "Sweden", 1990);
const uniName3 = new University("Gävle University", "Sweden", 1980);
console.log(uniName1, uniName2, uniName3);
