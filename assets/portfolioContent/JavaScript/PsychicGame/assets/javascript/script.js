let guessedLetters = [];
let guessesLeft = 10;
let wins = 0;
let losses = 0;
let computerPick = randomChar();
console.log(computerPick);


//Logic
function updateGuessesLeft() {
    document.getElementById("gussesCounter").innerHTML = guessesLeft;
};

function updateGuessesSoFar() {
    document.getElementById("userGuesses").innerHTML = guessedLetters.join(", ");
};

function randomChar() {
    var chars = "abcdefghijklmnopqurstuvwxyz";  // You can do this also with array (and create array funciton) 
    return chars.substr(Math.floor(Math.random() * 26), 1); //letters[Math.floor(Math.random() * letters.length)];
}

// Game Reset
function reset() {
    guessesLeft = 10;
    guessedLetters = [];
    updateGuessesLeft();
    updateGuessesSoFar();
    computerPick = randomChar();
    console.log(computerPick);
};


//After game loaded
randomChar();
updateGuessesLeft();



document.onkeydown = function (event) {
    guessesLeft--;
    let letter = event.key
    guessedLetters.push(letter);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (letter === computerPick) {
        wins++;
        document.getElementById("wins").innerHTML = wins;
        alert("You Have Psychic Power and guess computer choice!!");
        reset();

    }

    if (guessesLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        reset();
    }

};







