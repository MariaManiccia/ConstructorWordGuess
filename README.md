<h1>NodeJS Hangman Game</h1>

<br>
<h2>Guess the correct Spice Girl!</h2>

<br>
<p>This a Word Guess command-line game using constructor functions.</p>

<!--Here I will describe the commands for the command line-->
<h3>::Main Files::</h3>
<br>

<h4>Letter.js:</h4>

<p>This file contains a constructor, Letter. This constructor is able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter.</p>
<br>

<h4>Word.js:</h4> 

<p>This file contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.</p>
<br>

<h4>index.js:</h4>

<p>This is the file containing the logic for the course of the game, which depends on Word.js.</p>
<p>It randomly selects a word and uses the Word constructor to store it and prompts the user for each guess and keeps track of the user's remaining guesses</p>


