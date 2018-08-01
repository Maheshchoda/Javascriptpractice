function passbyValue(x){
  console.log(x);
}
passbyValue(5);

function passbyReference(profile){
  console.log(profile.name);
}
let profile = {name: 'Mahesh'}
passbyReference(profile);

(function selfInvoking(){
  console.log('Hello');
})();
