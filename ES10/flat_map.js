//we do know the array mapping method map
//example

const result = [1, 2, 3].map(x => {
  return [x, x * x];
});

console.log(result);
//Output:- [ [ 1, 1 ], [ 2, 4 ], [ 3, 9 ] ]

//now if we want to flatten the array into single level
//we can use array.flat() method and obtain the result

//what if we want to achieve the both results in one go
//Now answer is the flatmap

const result2 = [1, 2, 3].flatMap(x => {
  return [x, x * x];
});
console.log(result2);
//Output:- [1, 1, 2, 4, 3, 9]
