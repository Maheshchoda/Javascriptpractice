//We can invoke the functions in four ways
//1)Functions invovke as  a Function
//2)invovke as  a  Method
// 3)invovke as  a  constructor
//4)invovke with the apply and call

var name = `Mahesh`;
function firstMethod(){
  console.log(this.name);
  return this.name;
}
firstMethod();

//Invoke as a Method
//If we assign a function as a property to an object and we
//invoke that function we the help of that proerty is called method.
var ninja = {
  name1: `Naruto Uzumaki`,
  group1: function(){
    console.log(this.name1);//this context to refer to the object
    return this.name1;
  }
}
ninja.group1();
