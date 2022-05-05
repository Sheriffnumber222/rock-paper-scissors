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

function playRound() {
    let playerPick = prompt(`Rock? Paper? or Scissors?`);
    let playerSelection = playerPick.toLowerCase();
    let computerSelection = computerPlay();
    if (playerSelection === `rock`) {
        if (computerSelection === 'rock') {
            alert(`Draw! Two Rocks`);
            roundResult = 0;
        } else if (computerSelection === `paper`) {
            alert(`You Lose! Paper beats Rock`);
            roundResult = -1;
        } else if (computerSelection === 'scissors'){
            alert(`You Win! Rock beats Scissors`);
            roundResult = 1;
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            alert(`You Win! Paper beats Rock`);
            roundResult = 1;
        } else if (computerSelection === `paper`) {
            alert(`Draw! Two Papers`); 
            roundResult = 0;
        } else if (computerSelection === 'scissors'){
            alert(`You Lose! Scissors beats Paper`);
            roundResult = -1;
        }
    } else if (playerSelection === `scissors`) {
        if (computerSelection === 'rock') {
            alert(`You Lose! Rock beats Scissors`);
            roundResult = -1;
        } else if (computerSelection === `paper`) {
            alert(`You Win! Scissors beats Paper`); 
            roundResult = 1;
        } else if (computerSelection === `scissors`){
            alert(`Draw! Two Scissors`);
            roundResult = 0;
        }
    } else {
        alert(`invalid input`);
        roundResult = 99;
    }
    return roundResult;
};

/*game() will create a loop that lets the user play 5 rounds against the computer.
    If the user enteres a invalid input it will not count as a round.
    The game will keep score and report a winner or loser at the end.*/
function game(totalScore = 0) {
    for (let i = 0; i < 5; i++) {
        playRound();
        if (roundResult === 99) {
            i--;
            totalScore -= 99;
        }
    totalScore += roundResult;
    console.log(totalScore);
    }
    if (totalScore > 0) {
        alert('YOU ARE A WINNER!');
    } else if (totalScore < 0) {
        alert('YOU ARE A LOSER!');
    } else {
        alert('GAME DRAW! BORING!!!');
    }
} 

game();