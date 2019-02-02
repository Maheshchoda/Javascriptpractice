//Using the Object Oriented Programing paradigm

class Person {
  constructor(firstName, lastName, ssn, birthYear = null, address = null) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ssn = ssn;
    this.address = address;
    this.birthYear = birthYear;
  }
  get ssn() {
    return this.ssn;
  }

  get firstName() {
    return this.firstName;
  }
  get lastName() {
    return this.lastName;
  }
  get address() {
    return this.address;
  }
  get birthYear() {
    return this.birthYear;
  }
  toString() {
    return `Person(${this.firstName}, ${this.lastName})`;
  }
}

class Student extends Person() {
  constructor(firstName, lastName, ssn, school) {
    super(firstName, lastName, ssn, school);
    this.school = school;
  }
  get school() {
    return this.school;
  }
}

//Given a Person our task is to find all of their friends that live in the same country as this person.
//Also, given a student, your task is to find other student living in the same country
//and attending the same school.

//person class
peopleInSameCountry(friends){
  let result = [];
  for(let idx in friends){
    let friend = friends[idx];
    if(this.address.country === friend.address.country){
      result.push(friend);
    }
  }
  return result;
};

//Student class

peopleInSameCountryAndScholl(friends){
  let closeFriends = super.peopleInSameCountry(friends);
  let result = [];
  for (let idx in closeFriends){
    let friend = closeFriends[idx];
    if(friend.school === this.school){
      result.push(friend);
    }
  }
  return result;
}


//let create some data sets

const Mahesh = new Student('MaheshBabu', 'Choda', '12-32-2234', 'KMS')
const Rahesh = new Student('RaheshBabu', 'Bhoda', '12-33-2234', 'NIMS')
const Nahesh = new Student('NaheshBabu', 'Dhoda', '12-35-2234', 'NIMS')

//OOP uses the Student class to find all other students who attend the same school
Rahesh.studentsInSameCountry([Mahesh, Rajesh])

//The functional solution, on the other hand, breaks the problem
//into smaller functions

function Selector(country, school){
  return function(student){
    return student.address.country() === country && student.school() === school;
  }
}
