//rest Operator collects the arguments that are passed to a function
// => (called FatArrow or Arrow )
// ... (called ellipsis)
// ? : ( called terenaryoperator or Elvisoperator)

function Names(name, ...params) {
  console.log(name, params);
}

Names("Mahesh", 3, 3, 5, 345, 3, "Kotesh");
