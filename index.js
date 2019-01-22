// to begin the game

const inquirer = require('inquirer');

// ask to start the game
inquirer
    .prompt([
        {
            name: "response",
            message: "Would you like to start the game?",
        }
    ])
    .then(answers => {

        // grab the response
        let answer = answers.response;

        // start the game
        if (answer === "yes") {
            console.log("Okay!");
            game();
        }

        // end the game
        else {
            console.log("Okay! Maybe another time.");
        }
    });


// create the words
var wordArr = ["Beyonce", "Blue Ivy", "Jay", "Rumi", "Sir"];

// pick a word in the array
choosenWord = wordArr[Math.floor(Math.random() * wordArr.length)];


// function to start/continue the game
function game() {

    console.log(choosenWord);

    inquirer
        .prompt([
            {
                name: "response",
                message: "Guess a letter: ",
            }
        ])
        .then(answers => {

            let guess = answers.response;
            console.log(guess);

        })
}


module.exports = game;