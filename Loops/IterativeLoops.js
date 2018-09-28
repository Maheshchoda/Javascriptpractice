//forOf loop is used only for Arrays
//We can't use forOf loop for objects, because forOf loop is implemented using
// the Symbol.iterator function which is introduced in es2015

const Anime = [`One punch man`, `One piece`, `Naruto Shipdden`, `Beyblade`];

console.log(`Implementing "for of" Loop in Arrays`);
for( let val of Anime) {
  console.log(val);
}

//forIn loops can be used both in the Array and Objects
//In Array it's going to given the index of the Array
//In Object it's going to give the key

console.log(`Implementing "for in" Loop in Arrays`);
for(let val in Anime){
  console.log(val);
}

const Address  = { city: `Ongole`, colony: `Bagyanagr`};

console.log(`Implementing "for in" Loop in Objects`);
for (let val in Address) {
  console.log(val);
  console.log(Address[val]);
}

//This all boring stuff is upto ES15
//In ES2017 they introduced three things Object.keys(), Object.values, Object.entries

//Object.keys()
//It's going to take the input an Object and return the array of keys

const keys = Object.keys(Address);
console.log(`using the Object.keys() method`);
console.log(keys);

//Object.values()
//It's going to take the input an Object and return the array of values

const values = Object.values(Address);
console.log(`using the Object.values() method`);
console.log(values);

//Object.entries()
//It's going to take the input an Object and return the array of both values and keys
//Give array in the form of Array of Arrays
//i.e, [[key, value], [key, value]];

const entries = Object.entries(Address);
console.log(`using the Object.values() method`);
console.log(entries);
