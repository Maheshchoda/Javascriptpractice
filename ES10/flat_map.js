//we do know the array mapping method map
//example

const result = [1, 2, 3].map(x => {
  return [x, x * x];
});

console.log(result);
//Output:- [ [ 1, 1 ], [ 2, 4 ], [ 3, 9 ] ]

//If we want the result as flat we can use flatmap

const result2 = [1, 2, 3].flatMap(x => {
  return [x, x * x];
});
console.log(result2);
//Output:- [1, 1, 2, 4, 3, 9]
