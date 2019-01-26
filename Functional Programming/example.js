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
