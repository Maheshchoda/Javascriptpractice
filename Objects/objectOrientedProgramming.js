//The main idea behind the Object oriented programming is // to
//*** reduce code duplication
//and improve redability through class

//Before class we implemented object oriented in ES5

const assert = require('assert');

function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName  = lastName;
  this.checkIt   = function (){
    return this;
  }
  return `Hello Mr.${firstName}.${lastName}`;
}

const Saurabh = new person('Saurabh', 'Wadwha');

assert(Saurabh.checkIt() === Saurabh, `Yeah bro your assumption is true`);
console.log(Saurabh);

//In ES2015 the above code looks like

class secondPerson {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.checkIt = function () {
      return this;
    }
  }
}

const Yash = new secondPerson('Yash', 'Damani');
console.log(Yash);

//Explanation for above example
//Inside the class keyword we are using the special function
//called the constructor
//Constructor(from above example):-
            //Constructor is a special name of function
            //This function is going to run when the class is invoked using the new keyword
            //In oop when we invoke or create a object from class then we called it as
                          //instantiation (or) creation of instance

//If we want to created a method and use the properties of previous function
//functionname.prototype.property
//In ES5
function FirstPerson(firstName, lastName){
  this.firstName = firstName;
  this.lastName  = lastName;
}
 //creating method for above function

FirstPerson.prototype.age = function () {
  console.log(`Hello my name is ${firstName} and my age is 23`);
  return `Hello my name is ${firstName} and my age is 23`;
}
FirstPerson.prototype.height = 5.9;

const Krishna = new FirstPerson('Krishna', 'SaiCharan');
console.log(Krishna.height);
console.log(Krishna);
//We are setting the properties dynamically

//The above code is ES2015

class thirdPerson{
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName  = lastName;
  }
    interests() { //we are placing the prototype methods inside of class
      return `I am intersted to watch anime`;
  }
}

const Mahesh = new thirdPerson('Mahesh', 'Choda');
console.log(Mahesh.interests());
console.log(Mahesh);


//Inheritance with ES5

function Dog(name){
  this.name = name;
}
Dog.prototype.bark(){
  return `${name} is Barking.`
} 
function Cat(name){
  this.name = name;
}

Cat.prototype = Object.create(Dog.prototype);

console.log(Cat.name);
