// The ECMAScript 2017 feature “Async Functions” was proposed by Brian Terlson.

// The following variants of async functions exist. Note the keyword async everywhere.
//
// Async function declarations: async function foo() {}
// Async function expressions: const foo = async function () {};
// Async method definitions: let obj = { async foo() {} }
// Async arrow functions: const foo = async () => {};

// Async functions always return Promises

// Fulfilling the Promise of an async function:

async function asyncFunction() {
  return "Hello There from asyncFunction";
}

asyncFunction().then(msg => {
  console.log(msg);
});

// Rejecting the Promise of an async function:

async function asyncFunctioon() {
  throw new Error("Error!");
}

asyncFunctioon().catch(err => console.log(err));
