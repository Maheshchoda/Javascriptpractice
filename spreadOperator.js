// spreadOperator expands an array or any type of Expression

let basket = ['Grapes', 'Mangoes'];
let basket1 = [...basket, 'Pineapple', 'Goa'];
let basket2 = [ 'Apple', ...basket1, 'Strawberry'];

console.log(basket2);

//This is general method of passing the arguments

function Hotel(item, taste){
  console.log(`In Paradise ${item} is ${taste}`);
}

Hotel('Biriyani','Good');

//We can use the Spread opertor to split the array and pass as arguments to a function

function Hotell(item, taste){
  console.log(`In Paradise ${item} is ${taste}`);
}

let Feedback = ['Egg65','Not Bad'];

Hotell(...Feedback);
