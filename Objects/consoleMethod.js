// The Console object provides access to the browser's debugging console.

const array = [211, 12341, 1234, 1, 234, 123, 4, 1234, 1, 23412];

// Formating the console Output

// Specifier          Output
//
// %s                 Formats the value as a string
// %i or %d           Formats the value as an integer
// %f                 Formats the value as a floating point value
// %o                 Formats the value as an expandable DOM element
// %O                 Formats the value as an expandable JavaScript object
// %c                 Applies CSS style rules to the output string as specified by the second parameter

// %c Applies CSS style rules to the output string as specified by the second parameter
array.forEach(x =>
  console.log("%c%d", "color:green;font-size:30px;font-family:sans-serif", x)
);

console.log(
  "%cMahesh%cCHODA%cis %ca %c_______ ",
  "color:blue",
  "color:green",
  "color:red",
  ""
);

//console.groupCollapsed()
//    creates a collapsed group of entries that can be expanded through
//    the disclosure button in order to reveal all the entries performed after
//    this method is invoked;

array.forEach(x =>
  console.groupCollapsed(
    "%c%d",
    "color:green;font-size:30px;font-family:sans-serif",
    x
  )
);

// console.group(): creates an expanded group of entries that can be collapsed in
// order to hide the entries after this method is invoked.

array.forEach(x =>
  console.group("%c%d", "color:green;font-size:30px;font-family:sans-serif", x)
);

//other print methods

// console.info – small informative icon (i) appears on the left side of the printed
//                 string(s) or object(s).console.error();

console.info();

// console.warn – small warning icon (!) appears on the left side. In some browsers,
//                the background of the log is yellow.
console.warn();

console.timeStamp(); //not standard

// console.trace – outputs the current stack trace or displays the same output as the
//                 log method if invoked in the global scope.
console.trace();

// Tabulating values - console.table()

// In most environments, console.table() can be used to display objects and arrays in a tabular format.

console.table(["Hello", "GoodMorning"]);

var personArr = [
  {
    personId: 123,
    name: "Jhon",
    city: "Melbourne",
    phoneNo: "1234567890"
  },
  {
    personId: 124,
    name: "Amelia",
    city: "Sydney",
    phoneNo: "1234567890"
  },
  {
    personId: 125,
    name: "Emily",
    city: "Perth",
    phoneNo: "1234567890"
  },
  {
    personId: 126,
    name: "Abraham",
    city: "Perth",
    phoneNo: "1234567890"
  }
];
console.table(personArr);
console.table(personArr, ["name", "personId"]);
