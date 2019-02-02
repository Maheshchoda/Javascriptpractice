const string = "     long string       ";
console.log(string);
console.log(JSON.stringify(string.trimStart()));
console.log(JSON.stringify(string.trimEnd()));
console.log(JSON.stringify(string.trim()));
