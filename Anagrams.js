function anagramOrNot(str1, str2){
  return strSort(str1) === strSort(str2);
}

function strSort(str){
  return str.replace(/[^\s]/g,'').toLowerCase().split('').sort().join('');
}

anagramOrNot('Mahesh', 'Hamshe');
