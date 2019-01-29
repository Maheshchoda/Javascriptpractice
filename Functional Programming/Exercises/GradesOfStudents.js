//Write a program that computes the average grade for students who
//have enrolled in more than one class. Given array of data

let enrollment = [
  { enrolled: 2, grade: 100 },
  { enrolled: 2, grade: 80 },
  { enrolled: 1, grade: 89 }
];

//Imperative approach might look like this

let totalGrades = 0;
let totoalStudentsFound = 0;
for (let i = 0; i < enrollment.length; i++) {
  let student = enrollment[i];
  if (student !== null) {
    if (student.enrolled > 1) {
      totalGrades += student.grade;
      totoalStudentsFound++;
    }
  }
}

const average = totalGrades / totoalStudentsFound;

console.log(average);

//Now lets try functional approach using the loadash library

_.chain(enorllment)
  .filter(student => student.enrolled > 1)
  .pluck("grade")
  .average()
  .value(); //kicks of the execution of operations in the chain
