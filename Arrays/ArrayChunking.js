//Given an array and chunk size, divide the array into many array

const arrayChunking = (array, chunk) => {
  let chunked = [];
  for(let val of array){
    chunked.push(val);
  }
  console.log(chunked);
}

let array = [2, 3, 4, 23, 33];
arrayChunking(array, 2);
