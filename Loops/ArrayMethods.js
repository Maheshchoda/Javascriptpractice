//Advanced Array methods
//Iterating (or)Traversing 1)forEach(return undefined)
//Mapping   2)Map(Creates a new Array of Same length and return the Array)
//finding 3)Filter(Create a new Array and return the boolean value)
//Testing   4)some
//Testing   5)Every
//Agregating   6)Reduce(take input the callback function and optional parameter)

//****   forEach ********

//forEach : --(always going to return undefined)
// It's going to Iterate through an array.
//Runs a callback on each value in the array

//Syntax forEach: --
//arrayname.forEach(callbackFunction(value, index, anArray){
//It's going to iterate based on the size of array
//})
//callbackFunction accepts three parameters value, index and array here order is crucial

//Example:--
const Names = [`Saurabh`, `Krishna`, `Yash Damani`, `Sid`, `Sara`];
console.log(`For Each Iterator`);
Names.forEach(function(val, ind, arr) {
  console.log(val, ind, arr);
});

//exercise take input an array and divide by 2 every value

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function numFinder() {
  let newArray = [];
  Numbers.forEach(function(val) {
    newArray.push(val / 2);
  });
  console.log(newArray);
}

numFinder();

// ********     Map      ************
//Map:-- (It return a new Array of same Length)
//1) Creates a new Array
//2) It Iterates through Array
//4) Runs a callback for each value in that Array
//5) Adds the result of that callback function to the new Array
//6) Returns the new Array

//Exercise:- Take input an array and multiply with 2

const MultipliedNumbers = Numbers.map(function(val) {
  return val * 2;
});

console.log(`Working with the Map`);
console.log(MultipliedNumbers);

// ******      Filter      *********
//Filter: --(Always going to return Boolean value)
//1) Creates new Array
//2) Iterates through Array
//3) Runs a callback on each value in the Array
//4) If the callback function return 'True' that value will be added to new Array.
//5) If the callback function return 'False' that value will be ignored from the new Array.

//Exercise:-
const Friends = [
  { name: `Prasanth Korsapati` },
  { name: `Tulluri Jack` },
  { name: `Hari` },
  { name: `Purna` },
  { name: `Kolli Gopi` },
  { name: `Phani` }
];

//New array with the characters more that 4
const BestFriends = Friends.filter(function(val, ind, arr) {
  return val.name.length > 10;
});
console.log(`Filter Method`);
console.log(BestFriends);

//******** some *************
//SOME:---(It's going to return boolean value

//1) Iterate through an Array
//2) Runs a callback on each value in that Array
//3) If the callback returns ture for at least one single value, return true
//4) Otherwise False

//Example:---

const Customer = [
  { month: `January`, bought: false },
  { month: `February`, bought: false },
  { month: `March`, bought: false },
  { month: `April`, bought: false }
];
const Customer1 = [...Customer, { month: `May`, bought: true }];

//To find whether a custome bought Groceris from us in the last four months

function findOut(Customer) {
  let Bought = Customer.some(function(val) {
    return val.bought === true;
  });
  Bought === true
    ? console.log(`Yeah, he bought it`)
    : console.log(`No he didn't bought`);
}
console.log(`Working with the Some method`);
findOut(Customer);
findOut(Customer1);

//******** Every *************
//Every:---(It's going to return boolean value
//(Even if one condition is true the entire callback going to return true))
//(Even if one condition is false the entire callback going to return false))

//1) Iterate through an Array
//2) Runs a callback on each value in that Array
//3) If the callback returns false for at least one single value, return false
//4) Otherwise true

//Example:-
//To find whether employee take a leave in past four months

const Employer = [
  { month: `January`, leave: false },
  { month: `February`, leave: false },
  { month: `March`, leave: false },
  { month: `April`, leave: false }
];

// const Employer1 = Employer.map(val => Object.assign({}, val));
//  (or)
const Employer1 = Employer.map(val => ({ ...val }));
Employer1[0].leave = true;

console.log(`Working with the Every method`);
function leaveCheck(employ) {
  let Employ = employ.every(function(val) {
    return val.leave === false;
  });
  Employ === true
    ? console.log(`He attended the whole month`)
    : console.log(`He taken leave`);
}

leaveCheck(Employer);
leaveCheck(Employer1);

// **********   Reduce      ****************
//Reduce:---
//1) Accepts a "callback function" and an "optional second parameter"
//2) Iterates through an array
//3) Runs a callback on each value in the Array
//4) The first parameter to the callback is either the first value in the array
// or the optional second parameter
//5) The first parameter to the callback is often called as "accumulator"
//6) The returned value from the callback becomes the value of accumulator

//Syntax:---
// array.reduce(callback(accumulator, nextValue, index, array){

// }, optional second parameter)

let Choclates = [1, 2, 3, 4, 5, 1, 1, 3, 5, 9];

//Reduce method without passing optional parameter, so the first value of array
// is going to act like accumulator

function NoOfChoclates() {
  console.log(`Without passing optional parameter`);
  let Choclate = Choclates.reduce(function(acumlator, nextValue) {
    console.log(acumlator + nextValue);
    return acumlator + nextValue;
  });
}
NoOfChoclates();

function NoOfChoclatess() {
  console.log(`With passing optional parameter`);
  let Choclate = Choclates.reduce(function(acumlator, nextValue) {
    console.log(acumlator + nextValue);
    return acumlator + nextValue;
  }, 10);
}
NoOfChoclatess();

//exercise

function sumOfOdd(arr) {
  console.log(`Exercise with the Reduce method`);
  const result = arr.reduce(function(accumulator, nextvalue) {
    if (nextvalue % 2 !== 0) {
      accumulator += nextvalue;
    }
    return accumulator;
  }, 0);
  console.log(result);
}
sumOfOdd(Choclates);
