/*ComputerPlay will randomly generate a number and assign a value (Rock, Paper, or Scissors) to their nextMove based off the number */
function computerPlay () {
    let randomNumber = Math.floor(Math.random()*100);
    if (randomNumber <= 33) {
        computerSelection = `rock`;
    } else if (randomNumber <= 66) {
        computerSelection = `paper`;
    } else {
        computerSelection = `scissors`;
    }
    return computerSelection;
};

/*playRound will prompt the user to enter a valid move (case-insensitive) and store it in playerSelection, 
    if the user input is invalid it will give an error and re-prompt the question.
Once a valid response is inputed, it will execute computerPlay.
It will compare playerSelection to computerSelection with two IF statements and output the proper string to declare winner/loser/draw*/

function playRound(roundResult) {
    let playerPick = prompt(`Rock? Paper? or Scissors?`);
    let playerSelection = playerPick.toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection === `rock`) {
        if (computerSelection === 'rock') {
            roundResult = `Draw! Two Rocks`;
        } else if (computerSelection === `paper`) {
            roundResult = 'You Lose! Paper beats Rock'; 
        } else if (computerSelection === 'scissors'){
            roundResult = `You Win! Rock beats Scissors`;
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === 'rock') {
            roundResult = `You Win! Paper beats Rock`;
        } else if (computerSelection === `paper`) {
            roundResult = 'Draw! Two Papers'; 
        } else if (computerSelection === 'scissors'){
            roundResult = `You Lose! Scissors beats Paper`;
        }
    } else if (playerSelection === `scissors`) {
        if (computerSelection === 'rock') {
            roundResult = `You Lose! Rock beats Scissors`;
        } else if (computerSelection === `paper`) {
            roundResult = 'You Win! Scissors beats Paper'; 
        } else if (computerSelection === 'scissors'){
            roundResult = `Draw! Two Scissors`;
        }
    } else {
        alert("invalid input");
        return;
    }
    return roundResult;
};

alert(playRound());
