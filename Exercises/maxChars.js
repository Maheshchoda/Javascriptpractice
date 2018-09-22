//Find out the repeated characters in the given string

const MaxChars = (str) => {
  let charMap = {};
  let maxNum = 0;
  let maxChar = '';
  if(typeof str === 'string'){
    for(let char of str){
     !charMap[char] ? charMap[char] = 1 : charMap[char]++;
    }
   for(let char in charMap){
     if(charMap[char] > maxNum){
       maxNum = charMap[char];
       maxChar = char;
     }
   }
   console.log(maxChar, maxNum);
  }else{
    console.log(`Please enter a string`);
  }
}

//Another method for counting the number of characters and take the input
//only numbers and alphabets no special characters
//Test cases: for selecting only the characters and the numbers
var charCount = (str) => {
  var charSet = {};
  var char = 0;
  str = str.toLowerCase().replace(/[\W_]/g,'');
  for(var i = 0; i < str.length; i++){
     char = str[i];
    !charSet[char] ? charSet[char] = 1 : charSet[char]++;
  }
  console.log(charSet);
}
charCount('I Love You');

MaxChars('Maheshe');
