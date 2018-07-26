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
