// Initiate variables to be used in the game
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i','j','k','l','m','n','o','p','r','s','t','u','v','w',
    'x','y','w','x','y','z'];	// array of alphabets available for choice by the user and the computer
var leftGuesses;                // guesses that are left after pressing a key
var counter ;                   // Count user guesses
var guesses = []; 

document.onkeyup = function(event) {

        // Determine which key was pressed, make it lowercase, and set it to the userGuess variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        document.getElementById("demo").innerHTML = userGuess ;
        var i, len, text;  
        for (i = 0, len = userGuess.length, text = ""; i < len; i++) {
        text += userGuess[i] + "<br>";

        // Sets the computerGuess variable equal to a random choice from the computerChoice array.
        var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        for (j = 0, lenc = computerGuess.length, txt = ""; j < len; j++) {
        txt += computerGuess[j] + "<br>";
        document.getElementById("demo").innerHTML = computerGuess ;
        var j, lenc, text1; 

        // Write function to reload page after winning or losing
            function refreshPage() {
            window.location.reload();
            };

            function addFunction() {    
            var counter = 0;
            return counter += 1;
            };            
        // Write function to show remaining guesess
      
        if (guesses.length <= 10){
        guesses.push(userGuess[i]);
        document.getElementById("demo").innerHTML = guesses;

        if (guesses.length <=10) {
            var leftGuesses;
            leftGuesses =10-guesses.length;
            //alert("Your are left with " + leftGuesses + " guesses");
            document.getElementById("myLeftGuesses").innerHTML = ("Your have " + leftGuesses + " guesses left");
          
        if ((guesses.length <= 10) && (userGuess === userGuess[i]) && (computerGuess === computerGuess[j]) && (userGuess[i] === computerGuess[j]) ) {
           		var Wins = 0; 
           		wins += 1; 
           		alert("You Win, Congratulations!");
                 document.getElementById("congrats").innerHTML = (Wins + "Wins");       
           
    }
        else if (guesses.length >= 9) {
       alert("You Lost, Maybe Try Again"); 
        document.getElementById("repeat").innerHTML = ("DON'T WORRY - PLAY AGAIN!");
                   
    }    
           
}
}
 }
 }
 }