const array = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]];

console.log(array.flat());
console.log(array.flat().flat());
console.log(
  array
    .flat()
    .flat()
    .flat()
);
console.log(
  array
    .flat()
    .flat()
    .flat()
    .flat()
);

//we can specify the levels that how many nested arrays we want
//to flat

array.flat(2); //flat the array by two levels

array.flat(Infinity); //flat's the all nested array to one array
