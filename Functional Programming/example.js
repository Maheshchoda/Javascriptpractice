//Example with imperative and functional programming approach

//Let us consider a case we need find the student details
// by Student Security Number and need to render in the browser

//Imperative style

function showStudent(ssn) {
  const student = db.get(ssn);
  if (student !== null) {
    document.querySelector(`#${elementId}`).innerHTML = `
    ${student.ssn},${student.firstName}, ${student.lastName}`;
  } else {
    throw new Error("Student not found!");
  }
}

showStudent(4434 - 334);

//The sideEffects of the above approach

//1) It interacts with an external variable(db) for data access because
//  the function signature doesn't declare 'this' parameter. At any point
//  in time this reference could become null or change from one call to
// the next, yielding completely different results and compramising the
// integrity of the program.

//2)The global variable elementId can change at any time, outside your control.
// -> HTML elements are directly modified. The HTML DOM document itself is
//    mutable, shared, global resource.

//3) It can potentially throw an error if the student isn't found, which causes the
// entire program stack to unwind and end abruptly.

//We will improve the above code to more FP later, as of now we can make two
// simple enhancements

// Seperate the long function into shorter functions, each with a single purpose.

//Reduce the number of side effects by explicitly defining all arguments needed
// for the function to carry out their job.

//find function need a reference to the object store and id of student to look up.
const find = curry(function(db, id) {
  const obj = db.get(id);
  if (obj === null) throw new Error("Object not found");
  return obj;
});

//convert a student object into comma seperated values
const csv = function(student) {
  `${student.ssn}, ${student.firstName}, ${student.lastName}`;
};

//to display a student details on the page, you need the
// elementId and student id

const append = curry(function(elementId, info) {
  document.querySelector(elementId).innerHTML = info;
});

//partially sets the HTML elementId to use in the function

const showStudent = run(append("#student-info"), csv, find(db));
showStudent(44430 - 23423);
