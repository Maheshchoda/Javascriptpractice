//write a program to add the numbers from 1 to the given number // NOTE:

//This is O(n) time complexity

const sumofNumbers = (n) => {
  let sum = 0;
  for(let i = 0; i <= n; i++){
    sum += i;
  }
  return sum;
}

//let t1 = performance.now();
console.log(sumofNumbers(100));
//let t2 = performance.now();
//console.log(`The time take is ${(t2-t1)/1000} seconds`);//To calculate the performance

//This is O(1) time complexity

const SumofNumbers = n => n * (n + 1) / 2;

console.log(SumofNumbers(100));
