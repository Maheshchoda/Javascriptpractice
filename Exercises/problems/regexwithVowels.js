function vowels(str){
  const regex = /[aeiou]/gi;
  if(regex.test(str)) {
    console.log(regex.test(str));
    console.log(`The given string is having vowels`);
  }else{
    console.log(`NO vowels`);
  }
}

vowels('mAhesh');
