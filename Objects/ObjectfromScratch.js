//Objects:--
// In JavaScript, objects are collections of named properties with values.

//Example:--
const person = {
  name: `Mahesh`,
  age: 21,
  height: 5.9,
  weight: 60
};
console.log(`person properties before deletion`);
console.log(person);
//As javascript is a dynamic language it's easy
//to "delete" a property or "assign" a new property as shown it below

console.log(`person properties after deletion`);
delete person.name;
console.log(person);

console.log(`After changing the property`);
person.age = 0;
console.log(person);

//As we are developing software we mostly try to "reuse" the code.
//One form of reuse and also helps organize our programs is "Inheritance"
//In javascript we implement Inheritance with prototyping.

const Mahesh = { height: 4.5 };
const Rajesh = { weight: 60 };

Object.setPrototypeOf(Mahesh, Rajesh); //set prototype of Rajesh to Mahesh
//we can check it with "in" operator
console.log(`weight` in Mahesh);

//How a constructor function is intializing a object

//Let us take the example below which will show the difference between
//normal function call
//and the constructor function call
console.log(`How the hell that contructor function is instantiting the Object`);
function Person() {
  Person.prototype.isGood = function() {
    //every function have prototype object
    return true;
  };
}

//call as function
const Saurabh = Person();
console.log(`Calling as a function`);
console.log(Saurabh);

//call as constructor
const Yash = new Person();
console.log(`Calling as a constructor`);
console.log(Yash.isGood()); //return a object

// NOTE: Every function, when created, gets a new "prototype object".
// When we use a function as a "constructor", the constructed object’s prototype is set to the function’s prototype.

//There's going to be two type of properties when we invoke as a constructor
//Instace properties and(created directly)
//prototype properties(created with prototype)

//what if we define the both properties with same name which one is going to take precedence
//Example:--

function Ninja() {
  this.Weapon = true;
  this.haveWeapon = function() {
    return !this.Weapon;
  };
}
console.log(`instance and prototype properties`);
Ninja.prototype.haveWeapon = function() {
  return this.Weapon;
};

let Jackie = new Ninja();
console.log(Jackie.haveWeapon());

// If a property can be found on the instance itself, the prototype isn’t even consulted!
//So instance property take precedence
