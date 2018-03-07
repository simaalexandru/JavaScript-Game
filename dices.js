//global vars
var finalHumanScore =0;
var finalComputerScore = 0;
var newPlayer;
var Computer;


class Dice{
//we don't need any constructor, dices get values from roll()

//get/set for dices
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

//randomly provide 2 numbers
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
   this.score=0; //set score to 0, so super.roll()
  }

  get getName(){
    return this.name;
  }

  get getScore(){
    return this.score;
  }

roll(){
    //keeping functionality form the super class method
    super.roll();
    //plus returning the final score(dice1+ dice2)
    this.score= this.dice1 + this.dice2;
    return this.score;
  }

}



localStorage.setItem('name', 'playerName');

if (name) {
  alert("Welcome back, " + name;)
  localStorage.getItem('name', 'playerName');
 } else
playerName = prompt("Please enter your name");
localStorage.setItem(name, );
 }


 //prompt method (receive the username, stored in playerName )






  function humanRoll(newPlayer){
  if (playerName != null) {
   //new Player object
    //execute the function first, to get dice1,dice2 and score
    newPlayer.roll();
    document.getElementById("humanDice1").innerHTML = "First dice: " + newPlayer.first;
    document.getElementById("humanDice2").innerHTML = "Second dice: " + newPlayer.second;
    document.getElementById("humanResult").innerHTML = "Result: " + newPlayer.score;
   }
}


//function computerRoll() { }
//object cannot be instantiated inside a function
function computerRoll(Computer){
   Computer.roll();
   document.getElementById("computerDice1").innerHTML = "First dice: " + Computer.first;
   document.getElementById("computerDice2").innerHTML = "Second dice: " + Computer.second;
   document.getElementById("computerResult").innerHTML = "Result: " + Computer.score;
}

function compare(newPlayer, Computer){
	 if( newPlayer.getScore== Computer.getScore){
        message.innerHTML = 'Game is a draw';
	 } else if(newPlayer.getScore > Computer.getScore){
		   message.innerHTML =  'You won !';
    finalHumanScore ++;
  } else if(newPlayer.getScore < Computer.getScore){
	     	message.innerHTML = 'You lost !';
    finalComputerScore++;
  }
  document.getElementById("humanScore").innerHTML = "Your final score: " + finalHumanScore;
  document.getElementById("computerScore").innerHTML = "Computer's final score: " + finalComputerScore;
}


//creating the objects, outside the function
newPlayer=new Player(playerName);
Computer = new Player();


function display(newPlayer, Computer){
              humanRoll(newPlayer);
              computerRoll(Computer);
              compare(newPlayer, Computer);
}

display(newPlayer, Computer);
