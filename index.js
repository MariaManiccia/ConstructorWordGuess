/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// constant variables
const inquirer = require('inquirer');
const Word = require('./Word');

// my global variables/arrays
const wordArr = ['Baby', 'Ginger', 'Sporty', 'Posh', 'Scary'];
let chosenWord;
let letterArr = [''];
let guessLeft = 9;
let wins = 0;
let losses = 0;

// grabs a word from the array
function chooseWord() {
  const i = Math.floor(Math.random() * wordArr.length);
  // using the word with the Word constructor in Word.js
  chosenWord = new Word(wordArr[i]);
}

// once the game is over...
function playAgain() {
  // ask if they want to play again
  inquirer.prompt([{
    type: 'confirm',
    message: 'Play again?',
    name: 'restart',
    default: true,
  }]).then((input) => {
    // if they do
    if (input.restart === true) {
      // start again
      newGame();
    } else {
      // if not.. say goodbye!
      console.log('Thanks for playing!');
    }
  });
}

// function to display the amount of wins/losses
function winLoss() {
  // display
  console.log(`You've won ${wins} games and have lost ${losses} times.\r\n`);
  playAgain();
}


// function to check the user input
function letterGuess() {
  inquirer.prompt([{
    type: 'input',
    message: 'Guess a letter: ',
    name: 'letter',
    // validate the input
    validate: function validateLetter(letter) {
      if (letter.length === 1) return true;
    },
  }]).then((input) => {
    // grabbing the input
    const letGuess = input.letter;
    // check to see if the letter is in the word
    const correct = chosenWord.guessChecker(letGuess);
    // display
    console.log(chosenWord.wordDisplay());
    // if the letter is not in the word
    if (correct == false && letterArr.indexOf(letGuess.toLowerCase()) == -1) {
      letterArr.push(letGuess.toLowerCase());
      // guess count goes down
      guessLeft--;
      console.log(`Sorry! There is no ${letGuess}'s\r\nGuesses Left: ${guessLeft}\r\n`);
      // or if they ran out of guesses
      if (guessLeft == 0) {
        console.log('Sorry, you ran out of guesses!.  Try again!');
        // add to the loss count
        losses++;
        // display their wins/losses
        winLoss();
        // ask if they want to play again
        // playAgain();
      } else {
        // guess another letter
        letterGuess();
      }
    } else {
      // if they've already picked a letter
      if (letterArr.indexOf(letGuess.toLowerCase()) !== -1) {
        console.log('Oops! You already guessed that. Try again.\r\n');
      } else {
        console.log('Correct!\r\n');
      }
      // if they have completed the word
      const complete = chosenWord.completed();

      if (complete) {
        // display
        console.log('Congrats! You guessed the right Spice Girl!\r\n');
        // win counter goes up
        wins++;
        // display
        winLoss();

        // if they want to play again
        // playAgain();
      }
      // or else
      else {
        // guess another letter
        letterGuess();
      }
    }
  });
}


// function to start a new game
function newGame() {
  // welcome display
  console.log('Welcome! This is the hangman type game in which you guess which Spice Girl is displayed. Good luck!');
  // start their guesses countdown
  guessLeft = 9;
  // get a new word
  chooseWord();
  // make an array for the letters
  letterArr = [''];
  // display the underscores of the word
  console.log(chosenWord.wordDisplay());
  // function to communicate with user
  letterGuess();
}


// initial game start
newGame();
