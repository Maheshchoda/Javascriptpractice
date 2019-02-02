//Expect the output

var arr = [1, 2, 3, 4];
function processArr() {
  function multipleBy10(val) {
    i = 10;
    return val * i;
  }
  for (var i = 0; i < arr.length; i++) {
    arr[i] = multipleBy10(arr[i]);
  }

  return arr;
}
processArr();
