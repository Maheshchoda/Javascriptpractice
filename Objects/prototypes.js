//when we cerate a object how it's going to grab the properties from
//the class (or) the Constructor function

//First we need to look at the prototypes for that

const person = {
  name: `Mahesh`,
  age: 21,
  height: 5.9,
  wieght: 60
};

console.log(`playing with the prototypes`);
const Qualities = {
  isGood() {
    return `yeah he is Good boy`;
  }
};

Object.setPrototypeOf(person, Qualities); //Setting Qualities object as prototype to perosn

console.log(person.isGood()); //acessing the Qualities property

//Function prototype
//1)Every function has a prototype object that’s automatically
// set as the prototype of the objects created with that function.
//2)Every function, when created, gets a new prototype object.
// When we use a function as a constructor,
// the constructed object’s prototype is set to the function’s prototype.

console.log(`Working with function prototypes`);
function checkPrototype() {
  checkPrototype.prototype.work = () => {
    return `Yeah it's working`;
  };
}
checkPrototype.prototype.out = () => {
  return `Outside of checkPrototype()`;
};

const first = checkPrototype();
const second = new checkPrototype();

// console.log(first.work());//throw undefined error
console.log(second.work());
console.log(second.out());

//Prototype Chain

let First = {
  msg1: `I am from the first`
};

let Second = {
  msg2: `I am from the Second`
};

let Third = {
  msg3: `I am from the Third`
};

let Fourth = {
  msg4: `I am from the Fourth`
};

console.log(`Prototype chaining`);
Object.setPrototypeOf(First, Second);
Object.setPrototypeOf(Second, Third);
Object.setPrototypeOf(Third, Fourth);

console.log(First.msg4); //Acces to Fourth Object via from the first

//Object.setPrototypeOf() //to set the prototype
//Object.defineProperty() //to define the property
