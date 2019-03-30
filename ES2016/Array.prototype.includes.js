//Implementing the Array.prototype.includes(ES2016)

const array = ["a", "b", "c", NaN];

array.includes("a"); //return true

array.includes("aba"); // return false

//array.indexOf()
//return index if it found a value
//return -1 if value is not found

array.indexOf("a");
array.includes("a");

//Here array.indexOf() and arra.includes() are both identical
//The main difference is array.indexOf() can't find NaN value, where includes can

array.indexOf(NaN); //return -1
array.includes(NaN); //return true

//includes does not distinguish between +0 and -0 (which is how almost all of JavaScript works):
[-0].includes(+0);
true;
