var myGame = (function () {
    "use strict";

    // private variables

    var playerChoiceDisplay = document.getElementById("player_choice");
    var computerChoiceDisplay = document.getElementById("computer_choice");
    var resultDisplay = document.getElementById("result");

    var userChoice = "";
    var computerChoice = "";


    /* functions
    var myPrivateFunction; */

    var computerInput;
    var compare;
    var display;

    /* private functions
    myPrivateFunction = function() {

    };*/

    computerInput = function(){
        switch(Math.floor(Math.random()*3)){
            case 0:
                computerChoice = "Rock";
                break;
            case 1:
                computerChoice = "Paper";
                break;
            case 2:
                computerChoice = "Scissors";
        }
    };

    compare = function(){
        if(userChoice === computerChoice){
    resultDisplay.innerHTML = "Game is a tie!";

    } else if (userChoice === 'Paper' && computerChoice === 'Rock'){
        resultDisplay.innerHTML = "You win!";

    } else if (userChoice === 'Paper' && computerChoice === 'Scissors'){
        resultDisplay.innerHTML = "You loose!";

    } else if (userChoice === 'Scissors' && computerChoice === 'Rock'){
        resultDisplay.innerHTML = "You loose!";

    } else if (userChoice === 'Scissor' && computerChoice === 'Paper'){
        resultDisplay.innerHTML = "You win!";

    } else if (userChoice === 'Rock' && computerChoice === 'Paper'){
        resultDisplay.innerHTML = "You loose!";

    } else if (userChoice === 'Rock' && computerChoice === 'Scissors'){
        resultDisplay.innerHTML = "You win!";
    };

    display = function(){
        playerChoiceDisplay.innerHTML = userChoice;
        computerChoiceDisplay.innerHTML = computerChoice;
    }};

	return {

        /* public functions
        myPublicFunction: function(){

        } */

        play: function(){
            userChoice = this.id;
            computerInput();
            compare();
            display();
        }
	};

	// gameModule end //

})();

    var buttons = document.getElementsByClassName("button");
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', myGame.play);
    }
