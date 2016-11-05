// Define variables
    // Initiate variables to be used in the game
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','w','x','y','z'];   
    // array of alphabets available for choice by the user and the computer
    var guesses = [];               // Arrey of user's guesses 
    var maxGuesses = 10             // Max. number of guesses allowed in a game
    // Variables for tracking our wins, losses. They begin at 0.
    var wins = 0;
    var losses = 0;

document.onkeyup = function(event) {    //function to initiate game by pressing any key

    // Determine which key was pressed, make it lowercase, and set it to the userGuess variable.

        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
       // Pick out each key character 
        var i, len, text;  
        for (i = 0, len = userGuess.length, text = ""; i < len; i++) {
        text += userGuess[i] + "<br>"
        document.getElementById("psychicGame").innerHTML;


        // Sets the computer guess variable equal to a random choice from the computerChoice array.
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    var j, lenc, txt;
    for (j = 0, lenc = computerGuess.length, txt = ""; j < lenc; j++) {
    txt += computerGuess[j] + "<br>"
        
////////////////////////////////////////////////////////////////////////////
     
    var leftGuesses = 10 - guesses.length;   // guesses that are left after pressing a key
    //var k, leng, num;
    //for (k = 0, leng = 10, num = ""; k < leng; k++) {
    //    num += leftGuesses + "<br>"

    if((0 < leftGuesses < 10) && (computerGuess == computerGuess[j]) && (userGuess == userGuess[i]) && (userGuess[i] != computerGuess[j])){
        guesses.push(userGuess[i]);
        document.getElementById("myGuesses").innerHTML = "User Guesses :"  +  guesses;
        document.getElementById("compGuesses").innerHTML = "Computer Guesses :" + computerGuess;
        document.getElementById("leftGuesses").innerHTML = "Your have " + leftGuesses + " guesses left";

    if (leftGuesses <= 0){
        losses ++;
        alert("You lost, Maybe Try Again");
        prompt("Do you want to play again");
        guesses = [];
        }

    else if ((userGuess[i] == computerGuess[j])){
         wins++;
         alert("You Win, Congratulations!");
         } 
         
    // Create new elements to write Computer Choice in HTML
    //var targetDiv = document.getElementById("psychicGame");
    //targetDiv.setAttribute("class" , "fancy"); 
    //targetDiv.innerHTML = "Start Game";
    //Create a new element to write User Choice in HTML
    //var userGuess = document.createElement("div");
    //userGuess.innerHTML = "<br> The User's Choice <br>";
    //targetDiv.appendChild(userGuess);

  //  var computerGuess = document.createElement("div");
  //  computerGuess.innerHTML = "<br> My Computer Choice <br>";
  //  targetDiv.appendChild(computerGuess);
   //     var targetDiv = document.getElementById("myGuesses");
 //Create a new element to write User Choice in HTML

  document.getElementById("wins").innerHTML = "<p>Record Results!</p>" +
  "<p>wins: " + wins + "</p>" +
  "<p>losses: " + losses + "</p>";

          // Injecting the HTML we just created into our div and updating the game information on our page.
          document.querySelector("#wins").innerHTML = html;
 }
 }
 }
}
    
    