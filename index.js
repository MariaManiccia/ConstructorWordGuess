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
            startGame();
        }

        // end the game
        else {
            console.log("Okay! Maybe another time.");
        }
    });

// function to start the game
function startGame() {

    // create the words
    var wordArr = ["Beyonce", "Blue Ivy", "Jay", "Rumi", "Sir"];

    // pick a word in the array
    choosenWord = wordArr[Math.floor(Math.random() * wordArr.length)];

    console.log(choosenWord);

}