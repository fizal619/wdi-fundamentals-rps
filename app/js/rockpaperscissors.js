////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    switch(playerMove){
        //Testing cases of the player's moves
        case "rock":
            switch(computerMove){
                case "scissors":
                    winner="player";
                    break;
                case "paper":
                    winner="computer";
                    break;
                case "rock":
                    winner="tie";
                    break;
            }
            break;
        case "scissors":
            switch(computerMove){
                case "scissors":
                    winner="tie";
                    break;
                case "paper":
                    winner="player";
                    break;
                case "rock":
                    winner="computer";
                    break;
            }
            break;
        case "paper":
            switch(computerMove){
                case "scissors":
                    winner="computer";
                    break;
                case "paper":
                    winner="tie";
                    break;
                case "rock":
                    winner="player";
                    break;
            }
            break;
        default:
            console.log('Please type a valid command.');
            winner = '';
    }   
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove;
    var computerMove;
    var winner;
    // This function should continue to play Rock Paper Scissors until either the
    // player or the computer has won five times.
    // After each 'round', display some text in the console indicating who played
    // what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    while(playerWins <= 4 && computerWins <= 4){
        console.log('Please type your move: ');
        playerMove = getPlayerMove();
        computerMove = getComputerMove();
        winner = getWinner(playerMove,computerMove);
        
        switch (winner){
            case 'player':
                playerWins +=1;
                console.log('The winner is the ' + winner);
                console.log('Player chose: ' + playerMove + '; Computer chose: ' + computerMove + ";");
                console.log('The score is currently ' + playerWins + ' to ' + computerWins + ' (Player to Computer).');
                console.log('');
                break;
            case 'computer':
                computerWins +=1;
                console.log('The winner is the ' + winner);
                console.log('Player chose: ' + playerMove + '; Computer chose: ' + computerMove + ";");
                console.log('The score is currently ' + playerWins + ' to ' + computerWins + ' (Player to Computer).');
                    console.log('');
                break;
            default:
                console.log('The result was a draw');
                console.log('Player chose: ' + playerMove + '; Computer chose: ' + computerMove + ";");
                console.log('The score is currently ' + playerWins + ' to ' + computerWins + ' (Player to Computer).');
                console.log('');
                break;
        }
        
    }
    
    if(playerWins==5){
        console.log('Congrats on beating the Browser!');
    }else{
        console.log('Sorry, but the Browser won.');
    }
    
    return [playerWins, computerWins];
}

