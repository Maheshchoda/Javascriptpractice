//For every function it automatically pass two
//implicit  parameters they are the "this" and "arguments"
//"arguments"  is that we passed druring the function calling
//"this" is based on the function context (or)execution context
//Function context:- refers to how we are calling the Function

//We can call the function in four ways
//1) call as a function (! weird)
//2) call as a method
//3) call as a constructor
//4) calling the function with the call, apply and bind methods

//basically this is based on three things
//Global, implict binding, explicit binding

//Global and call as a Function

function display() {
  return this; //function context refers to the Global window
}

//call as a method and Global

const greet = {
  morning: this //function context refers to greet(Global)
  //why because greet is defied in the global context
};

//call as  a method and implict binding

const hello = {
  firstName: "Mahesh",
  sayHi: function() {
    return this.firstName; //going to return Mahesh
    //In implicit binding it going to refer the nearest parent
    //so function context is hello
  }
};

//nested implicit binding
const person = {
  firstName: "Mahesh",
  sayHi: function() {
    console.log(this.firstName); //for node execution
    return this.firstNamename;
  },
  bird: {
    parrot: function() {
      console.log(`My parrot name is ${this.firstName}`);
      return `My parrot name is ${this.firstName}`;
    }
  }
};

person.sayHi();
person.bird.parrot(); //return undefined
//because of parrot is in another object and there 'this' refers
//to bird we can overcome this problem with the Explicit binding

//Explicit binding is we are going to set the function context
//we can do it in three ways
//1)call 2)Apply 3)binding
//1)Call is going to take n of arguments
// and syntax is like call(thisArg, a, b, c, ........)
// thisArg refers to setting the function context

//2)Apply is goint to take two arguments
//and sytax is like apply(thisArg, [a, b, c, d, ....])
//the second argument is array

//Call and apply is going to invoke immediately after the call

const persoon = {
  firstName: "Mahesh",
  sayHi: function() {
    console.log(this.firstName); //for node execution
    return this.firstNamename;
  },
  bird: {
    parrot: function() {
      console.log(`My parrot name is ${this.firstName}`);
      return `My parrot name is ${this.firstName}`;
    }
  }
};

person.bird.parrot.call(persoon); //problem solved with call
person.bird.parrot.apply(persoon); //problem solved with apply

//Instead of nesting we can use it with syntactical sugar

const Male = {
  greet: function() {
    console.log(`Hello my name is ${this.name}`);
    return this.name;
  }
};

const Rajesh = {
  name: `Rajesh`
};
//now the fun

Male.greet.call(Rajesh); //we are not invoking the greet method

//Finally the Bind method

//we are going to use it when we are not sure about the agruments of a function
//with bind we can actually pause the function execution

function add(a, b, c, d) {
  console.log(a + b + c + d);
  return a + b + c + d;
}
var magic = add.bind(add, 1, 1, 1);
magic(1); //return 4

//we use bind for also to asynchronously
//we set the bind function and call it later
