// Destructuring is a convenient way of extracting multiple values from data stored in
//  (possibly nested) objects and Arrays.
// It can be used in locations that receive data
//  (such as the left-hand side of an assignment).

//Object Destructuring

let Pokemon = { Water: "Squirtle", Grass: "Bulbasaur", Fire: "Charizard" };

let { Grass, Water } = Pokemon;

console.log(Water);

//even we can rename the object name while Destructuring

let Pokemon1 = { Water: "Squirtle", Grass: "Bulbasaur", Fire: "Charizard" };

let { Grass: Fighthingtype } = Pokemon1;

console.log(Fighthingtype);

//Array Destructuring

let RichestPersons = [
  "Bill Gates",
  "Jeff Bezos",
  "Amanico Ortega",
  "Charles koch"
];
let [x, y, ...z] = RichestPersons; //we cant use numbers or strings in left side of assign
console.log(x);
console.log(y);
console.log(z);

//Function Destructuring

function getData({ url, method = "post" }, callback) {
  callback(url, method);
}

getData({ url: "google.com" }, function(url, method) {
  console.log(url, method);
});

getData({ url: "Facebook.com", method: "put" }, function(url, method) {
  console.log(url, method);
});

//Nested objects Destructuring
let parentObject = {
  title: "InsideObject",
  childObject: {
    title: "InsideChildObject"
  }
};

let {
  title: changedTitle,
  childObject: { title: childTitle }
} = parentObject;

console.log(changedTitle);
console.log(childTitle);
