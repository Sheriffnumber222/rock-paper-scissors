/*ComputerPlay will randomly generate a number and assign a value (Rock, Paper, or Scissors) to their nextMove based off the number */
function computerPlay () {
    let randomNumber = Math.floor(math.random()*100);
    let nextMove = ``;
    if (randomNumber <= 33) {
        nextMove = `Rock`;
    } else if (randomNumber <= 66) {
        nextMove = `Paper`;
    } else {
        nextMove = `Scissors`;
    }
    nextMove return;
};