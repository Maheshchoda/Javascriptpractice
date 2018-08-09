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
