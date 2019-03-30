// Handling a single asynchronous result:

async function asyncFunction() {
  const result = await otherAsyncFunc();
  console.log(result);
}

//equivalent to

function asyncFunction() {
  return otherAsyncFunc().then(result => console.log(result));
}

// Handling multiple asynchronous results sequentially:

async function asyncFunction() {
  const result1 = await otherAsyncFunc();
  console.log(result1);
  const result2 = await otherAsyncFunc2();
  console.log(result2);
}

//equivalent to

function asyncFunction() {
  return otherAsyncFunc()
    .then(result => {
      console.log(result);
      return otherAsyncFunc2();
    })
    .then(result => console.log(result));
}

// Handling multiple asynchronous results in parallel:

async function asyncFunction() {
  const [result1, result2] = await Promise.all([
    otherAsyncFunc(),
    otherAsyncFunc2()
  ]);
  console.log(result1, result2);
}

//Equivalent to
// function asyncFunc() {
//     return Promise.all([
//         otherAsyncFunc1(),
//         otherAsyncFunc2(),
//     ])
//     .then([result1, result2] => {
//         console.log(result1, result2);
//     });
// }
