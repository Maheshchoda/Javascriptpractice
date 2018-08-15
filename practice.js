//Write an algorithm to find the second largest element in the array
//For adding all Even and Odd
var assert = require('assert');
var EvenorOdd = (start, end) => {
   var even =0, odd= 0;
   for(i = start; i < end; i++){
     if(i % 2 === 0){
      even += i;
     }else if(i % 3 === 0){
       odd += i;
     }
   }
  console.log(even,odd);
}
var i =5;
assert( i === 6, `Yeah bro its true`);
