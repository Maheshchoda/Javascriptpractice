//check wheteher given string is palindrome or // not

const Palindrome = (str) => {
  str = str.toLowerCase();
  let newstr = '';
  for(let x of str){
    newstr = x + newstr;
  }
  if(newstr === str){
    console.log(`The given string ${str} is a palindrome`);
  }else{
    console.log(`It's not a palindrome`);
  }
}

Palindrome('Mahesh');
Palindrome('Maham');
