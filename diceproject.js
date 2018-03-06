var humanDice1 = document.getElementById("humanDice1");
var humanDice2 = document.getElementById("humanDice2");
var humanResult = document.getElementById("humanResult");
var computerDice1 = document.getElementById("computerDice1");
var computerDice2 = document.getElementById("computerDice2");
var computerResult = document.getElementById("computerResult");
var message = document.getElementById("message");


//class declaration
class Dice{
 constructor(dice1,dice2){
   this.dice1=dice1;
   this.dice2=dice2;
 }

static roll(){
   //setting the value of parameters
   //generate 2 random numbers(dice1+dice2)
   var firstValue=Math.floor((Math.random() * 6) + 1);
   var secondValue=Math.floor((Math.random() * 6) + 1);
   //return dice1,dice2
   return {
     firstDice: firstValue,
     secondDice: secondValue
   };
}

   get dice1(){
     return this.dice1;
   }

   set dice1(value1){
     this.dice1=value1;
   }

   get dice2(){
     return this.dice2;
   }

   set dice2(value2){
     this.dice2=value2;
   }
}

//player implements Dice
class Player extends Dice{
  constructor  (dice1, dice2, name){
    super(dice1, dice2);
     this.name=name;
   }

   get score(){
     return this.score;
   }

   set score(sum){
     this.score=sum;
   }


//adding dice1+dice2
  static finalScore(dice1,dice2){
    this.score= dice1+dice2;
    return this.score;
  }
}

var playerName = prompt("Please enter your name", "user");
if (playerName != null) {
    // document.getElementById("text").innerHTML ="lalalalalla";
    var currentPlayer=new Player(playerName);
    var pair1=new Dice();
    var diceValues=pair1.roll();
     document.getElementById("humanDice1").innerHTML = diceValues.firstDice;
   }



/*backup


var humanDice1 = document.getElementById("humanDice1");
var humanDice2 = document.getElementById("humanDice2");
var humanResult = document.getElementById("humanResult");
var computerDice1 = document.getElementById("computerDice1");
var computerDice2 = document.getElementById("computerDice2");
var computerResult = document.getElementById("computerResult");
var message = document.getElementById("message");

class Dice{

//constrctor don't needed
//at this time, we don't know dice1,dice2
//calculate this values with roll()

  get first(){
    return this.dice1;
  }

  set first(value1){
    this.dice1=value1;
  }

  get second(){
    return this.dice2;
  }

  set second(value2){
    this.dice2=value2;
  }

roll(){
   this.dice1 = Math.floor((Math.random() * 6) + 1);
   this.dice2 = Math.floor((Math.random() * 6) + 1);
}

}


class Player extends Dice {
   constructor(name){
  //takes the constructor from Dice class
  //super gives acces to dice1, dice2
   super();
   this.name = name;
  }

  get getName(){
    return this.name;
  }

roll(){
    //keeping functionality form the super class method
    super.roll();
    this.score= this.dice1 + this.dice2;
    return this.score;
  }

}

//prompt method
var playerName = prompt("Please enter your name", "user");
if (playerName != null) {
   //new Player object
    var newPlayer=new Player(playerName);
    humanDice1.innerHTML = userChoice ;
    console.log(newPlayer.roll(),newPlayer.first,newPlayer.second, newPlayer.getName);
   }

*/
