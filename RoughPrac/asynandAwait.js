// https://rallycoding.herokuapp.com/api/music_albums

function fetchImaeges() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchImaeges();

// async function fetchrRefactored() {
//   const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
//   const json = await res.json();
//   console.log(json);
// }
//
// fetchrRefactored();

//with arrow function

const fetchRefactored = async () => {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const json = await res.json();
  console.log(json);
};
fetchRefactored();
