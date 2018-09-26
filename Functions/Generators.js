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

//A yield expression inside the function body defines a point at which execution can suspend and resume.

//*****************Basics******************

function* Generator(){
  yield `First`;
  yield `Second`;
  yield `Third`;
  yield `Fourth`;
  yield `Fifth`;
}

const Gen = Generator();

console.log(`Generator Basics`);
console.log(Gen.next().value);//First  Done: false
console.log(Gen.next().value);//Second Done: false
console.log(Gen.next().value);//Third  Done: false
console.log(Gen.next().value);//Fourth  Done: false
console.log(Gen.next().value);//Fifth   Done: false
console.log(Gen.next().value);//undefined  Done: true

//Generator exercise to add the given n values

function* Sum() {
  let sum = 0;
  for(let i = 0; i < arguments.length; i++) {
    yield sum += arguments[i];
  }
}

const Add = Sum(1,2,3,1,3);

console.log(`Adding with Generator function`);
console.log(Add.next().value);//1 done: false
console.log(Add.next().value);//3 done: false
console.log(Add.next().value);//6 done: false
console.log(Add.next().value);//7 done: false
console.log(Add.next().value);//10 done: false
console.log(Add.next().value);//undefined done: true
