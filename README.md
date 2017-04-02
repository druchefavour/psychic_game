# Psychic Game App

# Overview

In this project, a computer game: Psychic Game is created. This app will run in the browser, and feature dynamically updated HTML powered by JavaScript code.

# Procedure
* Create a new GitHub repo called psychic_game, then clone it to the computer.
* Inside the local week-3-game folder, create the following: ```index.html```, ```composer.json``` and ```index.php```

* Fill in the appropriate content in the composer.json and index.php files to be able to deploy the game to Heroku when it is finished.

* While still in your psychic_game directory, make a folder called assets.
* Navigate to the assets folder, then make three additional folders: javascript, css and images.
* In the javascript folder, make a file called game.js.
* In the css folder, make a file called style.css.
* Also in the css folder, make a file called reset.css. Paste into it the code from the [Meyerweb reset](http://meyerweb.com/eric/tools/css/reset/) stylesheet.
* In the images folder, save all the images used in the app.
* Use git add, git commit and git push to push the above changes to GitHub.

## The App
The app randomly picks a letter, and the user has to guess which letter the app chose. 

The following text is put on the page:

* Guess what letter I'm thinking of

* Wins: (# of times the user has guessed the letter correctly)

* Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)

* Guesses Left: (# of guesses left. This will update)

* Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)

Create functionalties that enables the following:

* When the player wins, increase the Wins counter and start the game over again (without refreshing the page).

* When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


* Push your selected game to Heroku using:
  * heroku login
  * heroku create
  * git push heroku master

## Coding
* Code the game one piece at a time! 
* Pseudocode the program and break the app down into tiny, manageable fragments -- this'll make the whole coding process much less frustrating and a veritable Mach number faster. 