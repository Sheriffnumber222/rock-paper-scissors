const roundResultsMessage = document.querySelector(`#round-results-message`);
const playerScoreMessage = document.querySelector('#player-score');
const computerScoreMessage = document.querySelector(`#computer-score`);
const gameEndMessage = document.querySelector(`#game-end`);
let playerScore = 0;
let computerScore = 0;

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
function playRound(playerSelection) {
    
    /* Stop function and display the end screen once the game is over */
    if (playerScore === 5) {
        gameEndMessage.innerHTML = `Congrats! You win the game!!!`;
        return;
    } else if (computerScore === 5) {
        gameEndMessage.innerHTML = `Sorry! You lose the game!!!`;
        return;
    }

    let computerSelection = computerPlay();
    if (playerSelection === `rock`) {
        if (computerSelection === 'rock') {
            roundResultsMessage.innerHTML = `Draw! Two Rocks`;
        } else if (computerSelection === `paper`) {
            roundResultsMessage.innerHTML = `You Lose! Paper beats Rock`;
            computerScore++;
        } else if (computerSelection === 'scissors'){
            roundResultsMessage.innerHTML = `You Win! Rock beats Scissors`;
            playerScore++;
        }
    } else if (playerSelection === `paper`) {
        if (computerSelection === `rock`) {
            roundResultsMessage.innerHTML = `You Win! Paper beats Rock`;
            playerScore++;
        } else if (computerSelection === `paper`) {
            roundResultsMessage.innerHTML = `Draw! Two Papers`; 
        } else if (computerSelection === 'scissors'){
            roundResultsMessage.innerHTML = `You Lose! Scissors beats Paper`;
            computerScore++;
        }
    } else if (playerSelection === `scissors`) {
        if (computerSelection === 'rock') {
            roundResultsMessage.innerHTML = `You Lose! Rock beats Scissors`;
            computerScore++;
        } else if (computerSelection === `paper`) {
            roundResultsMessage.innerHTML = `You Win! Scissors beats Paper`; 
            playerScore++;
        } else if (computerSelection === `scissors`){
            roundResultsMessage.innerHTML = `Draw! Two Scissors`;
        }
    } 

    playerScoreMessage.innerHTML = `Player: ${playerScore}`;
    computerScoreMessage.innerHTML = `Computer: ${computerScore}`;
};

/*This event Listener will call the playRound() function after the player chooses their move via button.
    This will also let that function know which choice the player made. */

const playerPickBtns = document.querySelectorAll(`button`);
playerPickBtns.forEach((button) => {
    button.addEventListener(`click`, () => {
        playRound(button.id.slice(0, -4)); //slice removes the "-btn" from the class to become compatible with playRound
    });
});


/*game() will create a loop that lets the user play 5 rounds against the computer.
    If the user enteres a invalid input it will not count as a round.
    The game will keep score and report a winner or loser at the end.*/

/*function game(totalScore = 0) {
    for (let i = 0; i < 5; i++) {
        playRound();
        if (roundResult === 99) {
            i--;
            totalScore -= 99;~
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
} */