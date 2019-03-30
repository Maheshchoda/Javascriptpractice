//Handling errors

async function asyncFunction() {
  try {
    await otherAsyncFunc();
  } catch (error) {
    console.log(error);
  }
}

//equivalent to:
function asyncFunction() {
  return otherAsyncFunc().catch(err => console.log(err));
}
