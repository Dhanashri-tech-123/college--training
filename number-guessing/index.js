let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    count++;

    if (userGuess === randomNumber) {
        document.getElementById("message").innerText = " Correct! You guessed it!";
        document.getElementById("attempts").innerText = "Attempts: " + count;
    } 
    else if (userGuess > randomNumber) {
        document.getElementById("message").innerText = " Too High!";
    } 
    else {
        document.getElementById("message").innerText = "Too Low!";
    }
}