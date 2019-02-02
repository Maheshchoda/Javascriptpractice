//first we look at Object.entries() which gives the
//the keys and value pairs

const student = {
  name: "Mahesh",
  age: 21,
  height: 5.9,
  weight: "Not stable"
};

console.log(Object.entries(student));

const result = Object.entries(student);
//Output:-
// [["name", "Mahesh"], ["age", 21], ["height", 5.9], ["weight", "Not stable"]];

//what if we want to get back the normal object
//here it comes the formEntries which gives the original object back

console.log(Object.fromEntries(result));
