// to begin the game

var inquirer = require('inquirer');

//let response = process.argv[3];

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
        }

        // end the game
        else {
            console.log("Okay! Maybe another time.");
        }
    });