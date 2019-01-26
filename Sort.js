//Sorting the array using only one for loop

function Sort(array) {
  for (var i = 1; i < array.length; ) {
    if (arguments[1] < arguments[0]) {
      temp = arguments[i];
      arguments[i] = arguments[i - 1];
      arguments[i - 1] = temp;
    }
    if (array[i] < array[i - 1]) {
      var temp = array[i];
      array[i] = array[i - 1];
      array[i - 1] = temp;
      i--;
    } else {
      i++;
    }
  }
  return array;
}

const array = [5, 3, 2, 4, 1, 0];
console.log(Sort(array));
