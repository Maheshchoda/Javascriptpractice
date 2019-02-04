//Removing the array duplicate elements we will try three methods

const duplicateArray = ["🤗", 1, 2, 3, "🤗", 4, "🤗", 5];

console.log("duplicateArray is ", duplicateArray);

// *****************************************************************
//1) By using the ES6 Set

//A Set is a collection of values, where each value may occur only once.

const refiendArray1 = [...new Set(duplicateArray)];

console.log("By using the  Set method", refiendArray1);

// *****************************************************************
//2) By using the filter and indexof

const refiendArray2 = duplicateArray.filter((item, index) => {
  return duplicateArray.indexOf(item) === index;
});

console.log("By using the  Filter_indexOf method", refiendArray2);

// *****************************************************************
// 3) By using the reduce method

const refiendArray3 = duplicateArray.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item];
}, []);

console.log("By using reduce method", refiendArray3);

//ON the three above methods which is the most efficient one

//Any Guess????????????

//It is filter() method which gives the best performance in the sense of
// time complexity.

//To check the benchmarks of the above method please visit bellow link
//https://blog.usejournal.com/performance-of-javascript-array-ops-2690aed47a50
