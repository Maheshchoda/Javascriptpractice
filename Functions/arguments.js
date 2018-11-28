"use strict"; //By using the strict mode we are eliminating the arguments alias
const assert = require("assert");

function infiltrate(person) {
  assert(person === "gardener", "The person is a gardener");
  assert(arguments[0] === "gardener", "The first argument is a gardener");
  arguments[0] = "ninja";
  console.log(person);
  console.log(arguments[0]);
  assert(person === "ninja", "The person is a ninja now");
  assert(arguments[0] === "ninja", "The first argument is a ninja");
  person = "gardener";
  assert(person === "gardener", "The person is a gardener once more");
  assert(arguments[0] === "gardener", "The first argument is a gardener again");
}
infiltrate("gardener");

//another example

// function sum() {
//   var result = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }
//   console.log(result);
// }
//
// sum(1, 2, 4, 5, 6);

//Another use case of the strict mode

function name() {
  console.log(this); // window as function context
}

function naame() {
  "use strict";
  console.log(this); //undefined as context
}
