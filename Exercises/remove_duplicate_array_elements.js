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
