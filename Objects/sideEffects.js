//As javascript is dynamic, it have some side effects let's see

function person() {
  this.age = 21;
  this.good = true;
  person.prototype.isGood = () => { return good };
}

//If we invoke it as  a normal function it going to give us "undefined"

const Mahesh = person();
console.log(`Invoked as a normal function`);
console.log(Mahesh);

//So invoke with the "new" keyword which is going to intialize as object
//and assign to that constructor function

const Ramesh = new person();
console.log(`Invoked as a constructor`);
console.log(Ramesh);

//Lets take another scenario with same function name
  // with instance method and outside of a function with prototype

function sweets(){
  this.weight = 1;
  this.healthy = true;
  this.isHealthy = () => { return !this.healthy };
}

const IsmailFoodCourt = new sweets();
sweets.prototype.isHealthy = () => { return this.healthy };

console.log(IsmailFoodCourt.isHealthy());
