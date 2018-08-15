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

let person = { name: `Mahesh`, age: 21};
// let person2 =person
let person2 = Object.assign({},person);
person2.name = 'Kotesh';

console.log(person);
console.log(person2);
