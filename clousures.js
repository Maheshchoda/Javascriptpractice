//Closures
//any tasks involving callbacks, such as event handling or animations,
// would be significantly more complex without closures.
// such as providing support for private object variables, would be outright impossible

//clousres with the constutor function

function scoreCard() {
  let score = 0;//created a private variable
  console.log(`With the constructor function`);
  this.isPlaying = function() {
    score++;
    console.log(score);
    return score;
  }
}

var Mahesh = new scoreCard();

Mahesh.isPlaying();//return 1
Mahesh.isPlaying();//return 2
Mahesh.isPlaying();//return 3
Mahesh.isPlaying();//return 4

var Nikki  = new scoreCard();

Nikki.isPlaying();//return 1
Nikki.isPlaying();//return 2
Nikki.isPlaying();//return 3


//clousres with normal function return values

function ScoreCard(){
  let score = 0;
  console.log(`With the normal function definition and function expression`);
  return function(){
    score++;
    console.log(score);
    return score;
  }
}

const Pinkky = ScoreCard();
Pinkky();//returns 1
Pinkky();//returns 2
Pinkky();//returns 3

const Rosee = ScoreCard();
Rosee();//return 1
Rosee();//return 2
Rosee();//return 3

//If we try to access the private variable outside the scope
//its going to throw the error
// console.log(score); //undefined error
