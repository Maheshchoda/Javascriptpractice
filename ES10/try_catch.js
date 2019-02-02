//try and catch binding in a traditional way

try {
  throw new Error("Hey the value of A is changed");
} catch (err) {
  console.log(err);
}

//Now we can do like
try {
  throw new Error("Hey the value of A is changed");
} catch {
  console.log("How you can chage like that! ha!");
}
