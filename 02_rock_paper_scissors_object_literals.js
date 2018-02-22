// a module defined using object literal notation
// https://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

	
 
	var myGame = {
		// In object literal notation, an object is described as a set of comma-separated name/value pairs enclosed in curly braces.
		// Names inside the object may be either strings or identifiers that are followed by a colon.
		// object literals can contain properties and methods:
        
		//properties of the object
		playerChoiceDisplay : document.getElementById("player_choice"), // display player's choice
		computerChoiceDisplay : document.getElementById("computer_choice"),// display computer's choice
		resultDisplay : document.getElementById("result"), // display the game result

	    computerChoice: '',
		userChoice: '',
	
		
	    // a method 
		functionkey: function () {
			'use strict';
		},
		

		 computerInput : function (){
		
			switch(Math.floor(Math.random()*3)){ //returning a whole number beween 0 and 2
			  case 0: this.computerChoice = "Rock";
			  break; //breaks only if the one above is true
			  case 0:this. computerChoice = "Paper";
			  break;
			  case 0: this.computerChoice = "Scissors";
			  break;
			} 
			   
		},
		
		compare : function (){
		
			if( this.userChoice === this.computerChoice ){ // == equality , === equality and type comparison
				resultDisplay.innerHTML = 'Game is a draw';
			 } else if(this.userChoice === 'Paper' && this.computerChoice === 'Rock'){
				resultDisplay.innerHTML = 'You won !';
			 } else if(this.userChoice === 'Paper' && this.computerChoice === 'Scissors'){
				resultDisplay.innerHTML = 'You lost!';
			 } else if(this.userChoice === 'Scissors' && this.computerChoice === 'Rock'){
				resultDisplay.innerHTML = 'You lost!';
			 }else if(this.userChoice === 'Scissors' && this.computerChoice === 'Paper'){
				resultDisplay.innerHTML = 'You won!';
			 }else if(this.userChoice === 'Rock' && this.computerChoice === 'Paper'){
				resultDisplay.innerHTML = 'You lost!';
			 }else if(this.userChoice === 'Rock' && this.computerChoice === 'Scissors'){
				resultDisplay.innerHTML = 'You won!';
			 }
				   
		},
		
		display : function (){
		
			 this.playerChoiceDisplay.innerHTML = this.userChoice ;
			 this.computerChoiceDisplay.innerHTML = this.computerChoice ; 
		}
		
		///// module end /////
	};

	var buttons = document.getElementsByClassName("button"); // returning an array

    for (var i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener('click', play);
    }
	 //don t need to call a class, pass parameters, create the object
	 //you can just call the object 

	//main logic
	function play() {
		myGame.functionkey();
		myGame.userChoice = this.id; //reffers to the element that is triggering the function play
		myGame.computerInput();
		myGame.compare();
		myGame.display;
	}
