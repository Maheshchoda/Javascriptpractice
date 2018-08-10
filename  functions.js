function Callback(){
  console.log(`Hello from the Msg`);
}

function HigherOrder(call){
  call();
  console.log(`Hello from the User`);
}

HigherOrder(Callback);

//Callback function is a function which passed into a function as
// a parameter and then invoked by that function

//HigherOrder function is a function that which accepts
//callback as a parameter

//We use callbacks in React, Advanced Array methods, Ajax

//With the help of callback we can make code more reusable
function greet(name, format){
  console.log(`Hello Mr.${format(name)}`);
}

function toupperCase(name){
  return name.toUpperCase();
}

greet('rajesh', toupperCase);

//callbacks with Anonymous function

function greet1(name, formatter){
  console.log(`Hello my name is ${formatter(name)}`);
}

greet1('KariHmaA', function(name) {
  return name.toUpperCase();
});

greet1('KarIShma', function(name) {
  return name.toLowerCase();
});

//Functions as first class objects

function funname () {}//literals

//object passing as a argument to function

function ninja(hide){
  hide.show = `This is from Ninja Function`;
}
ninja({});

//passed as argument to other functions

function message(Greet){
  Greet();
}

message(function(){});

//What's the difference between the arguments and parameter

// ■ A parameter is a variable that we list as part of a function definition.
// ■ An argument is a value that we pass to the function when we invoke it.
//A function’s parameter list and its argument list can be different lengths:
// – Unassigned parameters evaluate as undefined.
// – Extra arguments aren’t bound to parameter names.
