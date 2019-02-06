//Reverse of a Number

const reverseOfaNumber = (num) => {
  if(typeof num === 'number'){
     let reversed = parseInt(num.toString().split('').reverse().join(''));
      reversed = reversed * Math.sign(num);
      console.log(reversed);
   }else{
   console.log(`Please enter a number`);
  }
}
reverseOfaNumber(2343);
reverseOfaNumber(7000);
reverseOfaNumber(-23434);
reverseOfaNumber(-00002);
reverseOfaNumber('You Entered a String');

//[a, b] = [b, a]
