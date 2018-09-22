//The primitive data type of javascript
// var, string, null, undefined, boolean

//The non primitive data type or compound or referencing values
//array, function, object

//implementation
//for Arrays
let oldFruits = ['Bannana', 'Apple', 'Grapes'];
// let freshFruits = oldFruits // general copy which by the means referencing
let  freshFruits= [...oldFruits]; // or freshFruits = Array.from(oldFruits);

oldFruits[1] = 'Pomegranate';
// freshFruits[2] = 'Watermellon';
console.log(oldFruits);
console.log(freshFruits);

//for Objects
//We can copy Objects we can three ways
// 1) Object.assign()
// 2) Object.freeze()
// 3) Object.seal()

let person = { name: `Mahesh`, age: 21};
// let person2 =person
let person2 = Object.assign({},person);
person2.name = 'Kotesh';

console.log(person);
console.log(person2);

//Object.freeze is another method where Freezed object is passed
//Syntax:-- Object.freeze(ObjectName);
//What is freeze method???
  //Actually, it’s just a method that doesn’t allow
  //us to add new properties to such object,
  // remove existing ones and change the current prototype of such object

const Bags = {
  skyBags: 'Good for Travelling',
  AmericanTourister: 'Good for BackPack',
  worst:{
    wildcraft: 'Worst for any kind'
  },
  good: {
    rebook: `It is good for workout`
  }
}

const Hari = Object.freeze(Bags);
console.log(Hari);
Hari.skyBags = 'It\'s Bad Dude';//new value assigned, but it's not going to effect
console.log(Hari);
// but that not case with the nested Object
Hari.worst.wildcraft = `I like it`;//value is going to be reassigned
console.log(Hari);
//In order to prevent that from reassigning
Object.freeze(Hari.good);
Hari.good.rebook = `It's not at all good`;//It's not going to be reassigned
console.log(Hari);


//Object.seal() is ????
          // With sealing, the situation is a little bit different.
          // We still can’t add new properties, delete existing ones
          //and every property becomes non-configurable but the values of properties can be changed



//We can check whether object is frozen or not by using following
//Object.isFrozen(objectName);

//***** delete *****
      //delete is an operator where we can delete the particular property

//Some useful methods how to check whether the input is array or not
//We can't use the typeof so there is builtIn method for that

const arr = ['Banana', 'Manoges', 'PineApple'];

//Syntax: -- Array.isArray(arryName);
console.log(Array.isArray(arr));
