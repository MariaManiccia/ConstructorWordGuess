/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
// to communicate with Letter.js
const Letter = require('./Letter');

// Word constructor to split the word up and check it
function Word(chosenWord) {
  // split up the word
  const letArr = chosenWord.split('');
  const wordSplit = [];

  for (let i = 0; i < letArr.length; i++) {
    // push it throught the Letter constructor
    wordSplit.push(new Letter(letArr[i]));
  }
  // how to display
  this.wordDisplay = function () {

    let wordAppear = '';

    for (let i = 0; i < wordSplit.length; i++) {
      wordAppear += `${wordSplit[i].displayer()} `;
    }

    return wordAppear.trim();
  };
  // checking the letter
  this.guessChecker = function (char) {

    let trueCount = 0;

    for (let i = 0; i < wordSplit.length; i++) {
      const placeholder = wordSplit[i].checker(`${char}`);
      if (placeholder) {
        trueCount++;
      }
    }

    if (trueCount > 0) {
      return true;
    }

    return false;
  };
  // to check if the word is complete
  this.completed = function () {
    let wordCompleted = true;
    for (let i = 0; i < wordSplit.length; i++) {
      wordCompleted = wordSplit[i].guessed;
      if (!wordCompleted) return wordCompleted;
    }
    return wordCompleted;
  };
}

module.exports = Word;
