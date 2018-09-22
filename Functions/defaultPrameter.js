//To pass the default parameters
function grettings(msg, name){
  name = name || 'Mahesh';
  msg  = msg  || 'Morning';
 console.log(`Good ${msg} mr. ${name}`);
}

//In Es 2015 we can directly assing in default parameter in arguments itself
function grettings1(msg = 'Morning' , name = 'Mahesh'){
 console.log(`Good ${msg} mr. ${name}`);
}

grettings('Afternoon', 'Rajesh');

grettings1(undefined, 'Suresh');

//before ES6 the default parameters passed as
function friends(name1, name2, name3){
  name1 = typeof name1 === `undefined` ? `Prasath` : name3;
  name2 = typeof name2 === `undefined` ? `Arun` : name3;
  name3 = typeof name3 === `undefined` ? `Mishu` : name3;
  console.log(`${name1} ${name2} ${name3}`);
}
friends(`kotes`, `pilleas`, `ravopr`);
