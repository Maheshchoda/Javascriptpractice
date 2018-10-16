//In general we extract data from array

const Anime = [`Naruto Shipudden`, `One piece`, `One Punch man`, `Death Note`];

const Favourite = Anime[2];
const NotBad = Anime[0]; //syntax for extracting data

console.log(Favourite, NotBad);

//In ES2015
const [Good, Awesome] = Anime;
console.log(Good, Awesome);
const [, , , Nice] = Anime;
console.log(Nice);

//swapping variable with the ES2015 array destructuring

function swap() {
  return ([arguments[0], arguments[1]] = [arguments[1], arguments[0]]);
}

swap(2, 4);
console.log(swap(2, 4));
