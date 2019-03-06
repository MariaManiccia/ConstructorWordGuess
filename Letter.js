/* eslint-disable linebreak-style */
/* eslint-disable func-names */
function Letter(char) {

  // grab the letter
  this.character = char.toString();
  // if the letter is correct or not
  this.guessed = false;

  // to display
  this.displayer = function () {
    // if the letter is in the work
    if (this.guessed === true) {
      return this.character;

    }
    // if not, put the placeholder
    if (this.guessed !== true) {
      return '_';
    }
  };

  // checking to see if the letter is in the word
  this.checker = function (input) {
    // making them lower case
    const inputLower = input.toLowerCase();
    const characterLower = this.character.toLowerCase();
    // if the are equal to each other
    if (inputLower === characterLower) {
      this.guessed = true;
      return true;
    }

    return false;
  };
}

module.exports = Letter;
