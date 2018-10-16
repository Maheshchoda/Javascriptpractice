//https://javascript.info/promise-basics
//There is a problem with the javascript that it is Single threaded.
//which means it's going to do one work at a time.
//Single threaded:--
      //1) Code Execution is linear.
      //2) Code that is running cannot be interrupted by something else going on in the program.
//We overcome this problem with the help Callback
//and Callback is having some issues, so it evolved
//into "promises", "async", and "async and await"

//Callback:--
  //A callback function is a function that is passed into
  //another function as a parameter and then invoked by that function.

//Where we can use callback ????? Some examples are
  //Advanced Array Methods
  // Browser Events
  //Ajax Requests
  //React Development

function callback(){
  console.log(`Hello from the "Callback" baby`);
}

function HigherOrder(callback){
  console.log(`I am going to call the "callback function"`);
  callback();//2) and then invoked in that function.
  console.log(`Back to the  "HighOrder function"`);
}

HigherOrder(callback);//1)callback passed as a parameter to HigherOder function.

//HigherOder function: --
  //HigherOrder function is a kind of function that which accepts callback
  // as a prameter to that function.

//The Event Loop:----
  //1)Event loop is a functionality in the javascript runtime that checks
       //the QUEUE when the stack is empty.
 //2)If the Stack is empty, the front of the queue is placed in the stack.


// Understanding the problems with simple callbacks: ---
   // 1)We use asynchronous code because we don’t want to block the execution of our application
            // (thereby disappointing our users) while long-running tasks are executing.
    //2) Currently, we solve this problem with callbacks:
      // To a long-running task we provide a function, a callback that’s invoked when the task is finally done.


//The main problems of using the callbacks is following:--
   //1)difficult error handling.
   //2)performing sequences of steps is tricky.(leads to  “pyramid of doom”)
   //3)performing a number of steps in parallel is also tricky.


//Promises:--
  //A promise is a placeholder for a value that we don’t have now but will have later;
     // it’s a guarantee that we’ll eventually know the result of an asynchronous computation.
      // If we make good on our promise, our result will be a value. If a problem occurs, our result will be an error,
        // an excuse for why we couldn’t deliver.

//Diving deep into promises:--
   //A promise is an object that serves as a placeholder for a result of an asynchronous task.

//Promises have mainly three states:--
  //unresolved state
     //1)Pending (starting state)
  //Resolved states
    //2)Fullfiled (promise is resolved, and then we get data.)
    //3)Rejected  (promise is rejected, and reason for the error.)

  //A promise can't switch states(a promise can’t go from fulfilled to rejected or vice versa))
//Some tips about the Promises:--
    //Calling the Promise constructor immediately invokes the passed-in function.
    //The Promise then method is used to set up a callback that will be called when the promise resolves.


report("At code start");
var ninjaDelayedPromise = new Promise((resolve, reject) => {
  report("ninjaDelayedPromise executor");
// Calling the Promise constructor immediately invokes the passed-in function.
     setTimeout(() => {
    report("Resolving ninjaDelayedPromise");
    resolve("Hattori");
}, 500); });
// We’ll resolve this promise as successful after a 500ms timeout expires.
assert(ninjaDelayedPromise !== null, "After creating ninjaDelayedPromise");
ninjaDelayedPromise.then(ninja => {
  assert(ninja === "Hattori",
 });
"ninjaDelayedPromise resolve handled with Hattori");
// The Promise then method is used to set up a callback that will be called when the promise resolves, in our case when the timeout expires.
// Working with promises
// 151
const ninjaImmediatePromise = new Promise((resolve, reject) => {
  report("ninjaImmediatePromise executor. Immediate resolve.");
  resolve("Yoshi");
});


ninjaImmediatePromise.then(ninja => {
  assert(ninja === "Yoshi",
         "ninjaImmediatePromise resolve handled with Yoshi");
// Creates a new promise that gets immediately resolved
  });
report("At code end");
//ninjaImmediatePromise’s then method to register a call- back that will be executed when the promise successfully resolves.
// But our promise is already settled;
// does this mean that the success callback will be immediately called or that it will be ignored? The answer is neither.
   //Promises are designed to deal with asynchronous actions, so the JavaScript engine always resorts to asynchronous handling,
   // to make the promise behavior predictable.
   // The engine does this by executing the then callbacks after all the code in the current step of the event loop is executed


//We can handle the error in two ways

const promise = new Promise((resolve, reject) => {
  reject("Explicitly reject a promise!");
});
promise.then(
  () => fail("Happy path, won't be called!"),
  error => pass("A promise was explicitly rejected!")
);
// A promise can be explicitly rejected by calling the passed-in reject function.
// If a promise is rejected, the second, error, callback is invoked.
        // (or)
var promise = new Promise((resolve, reject) => {
  reject("Explicitly reject a promise!");
});
promise.then(() => fail("Happy path, won't be called!")) .catch(() => pass("Promise was also rejected"));
        // Instead of supplying the second, error, callback, we can chain in the catch method, and pass to it the error callback. The
        // end result is the same


//By using .then we get the both scenarios resolve and reject
//if we want only sucess scenarios .then(() => success)
//if we want only failure scenarios .then(null, () => failure) //we need to pass it as second argument
//or we can achieve the above line with .catch()//which result the same
