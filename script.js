let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10); // creates random number between 0 and 9
};

// Determines winner of guesses

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (Math.abs(targetGuess - humanGuess) <= Math.abs(targetGuess - computerGuess)) {
        return true; //if human difference to guess less than computer = human wins
    } else {
        return false; // otherwise computer wins
    }
}

// Updates Score in the Game

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++; 
    }
}

// Increase Round by 1

const advanceRound = () => {
    currentRoundNumber++;
};
