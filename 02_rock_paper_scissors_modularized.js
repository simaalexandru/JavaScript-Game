// The buttons
var buttons = document.getElementsByClassName("button"); // returning an array
for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
}
// Variables for display purposes
var playerChoiceDisplay = document.getElementById("player_choice"); // display player's choice
var computerChoiceDisplay = document.getElementById("computer_choice"); // display computer's choice
var resultDisplay = document.getElementById("result"); // display the game result

// other global variables
var computerChoice;
var userChoice;

// main function containing the game logic
function play(){
	userChoice = this.id; // registering the buttons id!   depends on the context that is used 
	//this in JavaScript in a function context (!) refer to the current owner of the event
	//if you use this in a function, you have to trace the owner of the function (play)
	computerInput();
	compare();
	display();	
}
//in JS this is used function context and object context
//when the function is called, it looks for the button ,   the button that is triggering the function becomes THIS 

//modulirizing your code - create kind of internal system 
//of dependent functions, global variables and functions that are collecting

//put the code in separate boxes and 

//we need an application based on those classes, methids, properties - asta e o interfata(iti zice ce sa faci)

function computerInput(){
	 //	buttons.sort();
	 //	return buttons[0];



	 switch(Math.floor(Math.random()*3)){ //returning a whole number beween 0 and 2
	   case 0: computerChoice = "Rock";
	   break; //breaks only if the one above is true
	   case 0: computerChoice = "Paper";
	   break;
	   case 0: computerChoice = "Scissors";
	   break;
	 } 
		
}

function compare(){
	 //game is draw
	 if( userChoice === computerChoice ){ // == equality , === equality and type comparison
        resultDisplay.innerHTML = 'Game is a draw';
	 } else if(userChoice === 'Paper' && computerChoice === 'Rock'){
		resultDisplay.innerHTML = 'You won !';
	 } else if(userChoice === 'Paper' && computerChoice === 'Scissors'){
		resultDisplay.innerHTML = 'You lost!';
	 } else if(userChoice === 'Scissors' && computerChoice === 'Rock'){
		resultDisplay.innerHTML = 'You lost!';
	 }else if(userChoice === 'Scissors' && computerChoice === 'Paper'){
		resultDisplay.innerHTML = 'You won!';
	 }else if(userChoice === 'Rock' && computerChoice === 'Paper'){
		resultDisplay.innerHTML = 'You lost!';
	 }else if(userChoice === 'Rock' && computerChoice === 'Scissors'){
		resultDisplay.innerHTML = 'You won!';
	 }
} 

function display(){
	 playerChoiceDisplay.innerHTML = userChoice ;
	 computerChoiceDisplay.innerHTML = computerChoice ; 
}