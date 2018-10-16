//Generator function generates the sequence of values,but not all at once
//as normal function would, but on per request basis.

//We have to explicitly ask the generator for a new value and the Generator
//will respond with a value or notify us that it has no more value to produce

//What's more interesting is that, after a value is produced, a generator function
//does not end its execution. Instead a generator is merely suspend.
//Then when a request for another value comes along, the generator resumes where it left off

//A generator function is created with a function* declaration.
// When it is called, its body is not immediately executed.
//Instead, it returns a result is an object with a returned value and an indicator that tells us whether the generator has more values.
//Once it done the generator going to return the 'null' object with 'undefined' and done: true
// calling a generator doesn’t execute the generator function; instead it creates an object called an "iterator".

//A yield expression inside the function body defines a point at which execution can "suspend" and "resume".

//*****************Basics******************

function* Generator() {
  yield `First`;
  yield `Second`;
  yield `Third`;
  yield `Fourth`;
  yield `Fifth`;
}

const Gen = Generator();

console.log(`Generator Basics`);
console.log(Gen.next().value); //First  Done: false
console.log(Gen.next().value); //Second Done: false
console.log(Gen.next().value); //Third  Done: false
console.log(Gen.next().value); //Fourth  Done: false
console.log(Gen.next().value); //Fifth   Done: false
console.log(Gen.next().value); //undefined  Done: true

//Generator exercise to add the given n values

function* Sum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    yield (sum += arguments[i]);
  }
}

const Add = Sum(1, 2, 3, 1, 3);

console.log(`Adding with Generator function`);
console.log(Add.next().value); //1 done: false
console.log(Add.next().value); //3 done: false
console.log(Add.next().value); //6 done: false
console.log(Add.next().value); //7 done: false
console.log(Add.next().value); //10 done: false
console.log(Add.next().value); //undefined done: true

//ITERATING THE ITERATOR:--
function* gener() {
  yield `Hello`;
  yield `Hello1`;
  yield `Hello2`;
  yield `Hello3`;
}

const Iter = gener(); //we created the Iterator

console.log(`Iterator with forOf loop`);
for (let val of Iter) {
  console.log(val);
}

//Generating id's with the gernator functions which is damn cool

function* idGenerator() {
  let id = 0;
  while (true) {
    yield ++id;
  }
}

const idIterator = idGenerator();

console.log(`Id generator with Gernerator function`);
console.log(idIterator.next().value);
console.log(idIterator.next().value);
console.log(idIterator.next().value);
console.log(idIterator.next().value);

// YIELDING TO ANOTHER GENERATOR
// Just as we often call one standard function from another standard function,
// in certain cases we want to be able to delegate the execution of one generator to another.

function* gen1() {
  yield `From the gen1`;
  yield `From the gen1`;
  yield* gen2();
  yield `From the gen1`;
}

function* gen2() {
  yield `From the gen2`;
  yield `From the gen2`;
}

const Iterat = gen1();

console.log(`Yielding to the another generator`);
for (let val of Iterat) {
  console.log(val);
}

// Communicating with a generator:--
//  We can also send data to a generator, thereby achieving two-way communication!

// SENDING VALUES AS GENERATOR FUNCTION ARGUMENTS

function* Gen1(name) {
  const message = yield `Hello ${name}`;
  yield `Good Morning ${message} and  ${name}`;
}

const It1 = Gen1(`Mahesh`);

const result1 = It1.next();
const result2 = It1.next(`Rajesh`);

console.log(result1);
console.log(result2);

//Exploring the Generators Under the hood

//So Generator mainly goes through the four states
//1) """"Suspended start"""" :--  When the generator is created, it starts in this state.
//  None of the generator’s code is executed.
//2) """"""Executing"""""" :-- The state in which the code of the generator is executed.
// The execution continues either from the beginning or from where the generator was last suspended.
// A generator moves to this state when the matching iterator’s next method is called, and there exists code to be executed.

//3) """"Suspended yield"""" :-- During execution, when a generator reaches a yield expression,
// it creates a new object carrying the return value, yields it, and suspends its execution.
// This is the state in which the generator is paused and is waiting to continue its execution.

//4) """"Completed"""" :-— If during execution the generator either runs into a return statement or runs out of code to execute,
// the generator moves into this state.

//Sample code and explaining the states
function* NinjaGenerator() {
  yield "Hattori";
  yield "Yoshi";
}

const ninjaIterator = NinjaGenerator();
// Create a new generator in the Suspended start state.

const result1 = ninjaIterator.next();
// Activate generator. Move from Suspended
// start to Executing. Execute up to yield "Hattori" and pause. Move to the Suspended yield state.
// Return a new object: {value: "Hattori",done: false}.

const result2 = ninjaIterator.next();
// Reactivate generator. Move from Suspended
// yield to Executing. Execute up to yield "Yoshi" and pause. Move to the Suspended yield state.
//Return a new object: {value: "Yoshi",done: false}.

const result3 = ninjaIterator.next();
//  Reactivate generator. Move from Suspended yield to Executing.
// No more code to execute. Move to the Completed state.
// Return a new object: {value: undefined, done: true}.
