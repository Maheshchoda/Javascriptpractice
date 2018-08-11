//String reverse with builtin Methods

const reverseOfString = (str) => {
    console.log(str.split('').reverse().join(''));
}
reverseOfString('Tajmahal');

//String reverse with for loop
const secondMethod = (str) => {
  // console.time('Myoperations');
  //  let newstr = '';
  //  for(let i = str.length-1; i >= 0; i--){
  //    newstr += str[i]; // newstr = newstr + str[i];
  //  }
  //  console.log(newstr);
  //  console.timeEnd('Myoperations');

  //another method with same logic

  let newstr = '';
  for(let x of str){
    newstr = x + newstr;
  }
  console.log(newstr);
}
secondMethod('Tajmahal');
