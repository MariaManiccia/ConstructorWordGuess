
// function to create the underscores
function Letter(letter) {

    // grabbing the letters guessed
    this.letter = letter;
    this.guess = false;

    // return either the letter or an underscore
    this.placeholder = function () {
        if (this.guess) {
            return this.letter;
        }
        else {
            return "_";
        }
    };

    // checking the letter to see if it's used    
    this.compare = function () {

        if (guessed.toLowerCase() === this.letter.toLowerCase()) {

            this.guess = true;
            this.placeholder();
        }
        else {

            this.placeholder();
        }
    }
}

module.exports = Letter;
