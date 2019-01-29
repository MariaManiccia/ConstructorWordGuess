// to communicate with Letter.js
const Letter = require("./letter");

// Word constructor to split the word up and check it
function Word(chosenWord) {
    // split up the word
    var letArr = chosenWord.split("");
    var wordSplit = [];

    for (var i = 0; i < letArr.length; i++) {
        // push it throught the Letter constructor
        wordSplit.push(new Letter(letArr[i]));
    }
    // how to display
    this.wordDisplay = function () {

        let wordAppear = "";

        for (var i = 0; i < wordSplit.length; i++) {
            wordAppear += wordSplit[i].displayer() + " ";
        }

        return wordAppear.trim();
    }
    // checking the letter
    this.guessChecker = function (char) {

        var trueCount = 0;

        for (var i = 0; i < wordSplit.length; i++) {
            var placeholder = wordSplit[i].checker(char + "");
            if (placeholder) {
                trueCount++;
            }
        }

        if (trueCount > 0) {
            return true;
        }

        return false;
    }
    // to check if the word is complete
    this.completed = function () {

        let wordCompleted = true;

        for (var i = 0; i < letArr.length; i++) {

            wordCompleted = letArr[i].guessed;
            if (!wordCompleted) return wordCompleted;
        }

        return wordCompleted;
    }
}

module.exports = Word;