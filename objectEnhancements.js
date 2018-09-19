//objects got enhanced in the recent version

const firstName = 'Mahesh';
const lastName = 'choda';

//grabbing the values from the global scope
const person = {
  firstName,
   lastName
 };
console.log(person);

//comming to the object methods

const Mahesh = {
  age: 20,
  height: 5.9,
  isGood() {
    console.log(`Ah Ah He is a bad boy`);
  }
}
Mahesh.isGood();

//computed property names

const hero = `Minion`;
const movie = {};

movie[hero] = `I am Banana da`;//computing the values using ES5
console.log(movie);
console.log(movie.Minion);

const anotherMovie = {
  [hero] : `I am Potato da`//computing the value using ES2015
}

console.log(anotherMovie.Minion);

//Destructuring : --
       //Extracting values from the data stored in
       //Objects and Arrays

const Stationary = {
     pen : `SketchPen`,
     pencil: `PenPencil`,
     scale: `LargeScale`
}

//In general if want to reassign we are going to do in this manner

const Pilot = Stationary.pen;
const Apsara = Stationary.pencil;
const Natraj = Stationary.scale;

console.log(Pilot, Apsara, Natraj);

//Object Destructuring

var Furniture = {
  wood: `Computer Table`,
  iron: `Computer Chair`
}

//if we want to copy to the variable we do like this in general

var wood = Furniture.wood;
var iron = Furniture.iron;
console.log(wood, iron);
//But with object Destructuring we can do like

var { wood, iron} = Furniture;
console.log(wood, iron);

//If we want to change the variable that gets assigned SketchPen
//presnetKey: newUpdateKey
var { wood: woood, iron: iroon} = Furniture;
console.log(woood, iroon);

//passing object as parameter to function with Destructuring

function Cricket({batsman, bowler}) {//function definition with destrucrued object
  console.log([batsman, bowler])
  return [batsman, bowler];//square brackets for evaluating two or more keys
}

const India = { //creating an object
  batsman: 'KL. Rahul',
  bowler: 'Bhuvaneshwar Kumar'
}

Cricket(India);//functionName(ObjectName)
