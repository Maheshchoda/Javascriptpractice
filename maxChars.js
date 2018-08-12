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

MaxChars('Maheshe');
