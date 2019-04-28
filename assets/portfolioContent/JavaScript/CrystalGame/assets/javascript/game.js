$(document).ready(function () {
    console.log("checking connection");


    //Declating Vars
    let wins = 0;
    let losses = 0;
    let randomNumber = randomNum(19, 120);
    let currentGuessValue = 0;

    $('#guessBox').text(randomNumber);
    $('#userGuessTotal').text(currentGuessValue);


    //Random Number func
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    console.log(randomNumber);

    //Game Func 
    function checkingScore() {
        if (currentGuessValue === randomNumber) {
            wins++;
            $("#wins").html(wins);
            alert("You Won!");
            reset();

        } else if (currentGuessValue > randomNumber) {
            losses++;
            $('#losses').text(losses);
            alert('You Lost!');
            reset();
        };
    };


    //Game Reset Func 
    function reset() {
        randomNumber = randomNum(19, 120);
        gemValues = chance.unique(chance.integer, 4, { min: 1, max: 12 });
        currentGuessValue = 0;
        $('#userGuessTotal').text(currentGuessValue);
        $('#guessBox').text(randomNumber);
    }


    /*Generate random numbers for each crystal (MIT library https://chancejs.com/index.html 
    I used unique funciton https://chancejs.com/miscellaneous/unique.html,
    to avoid creating loop funciton to assing random and unique number for 
    each cristal.
    */
    let gemValues = chance.unique(chance.integer, 4, { min: 1, max: 12 });
    console.log(gemValues)

    //Assign gemValues to each crystal 
    let cristalOne = gemValues[0];
    let cristalTwo = gemValues[1];
    let cristalTree = gemValues[2];
    let cristalFour = gemValues[3];



    //Making Crystals clicable and assing new values 
    $('#crystal1').on('click', () => {
        currentGuessValue += cristalOne;
        $('#userGuessTotal').text(currentGuessValue);
        checkingScore();
    });

    $('#crystal2').on('click', () => {
        currentGuessValue += cristalTwo;
        $('#userGuessTotal').text(currentGuessValue);
        checkingScore();
    });

    $('#crystal3').on('click', () => {
        currentGuessValue += cristalTree;
        $('#userGuessTotal').text(currentGuessValue);
        checkingScore();
    });

    $('#crystal4').on('click', () => {
        currentGuessValue += cristalFour;
        $('#userGuessTotal').text(currentGuessValue);
        checkingScore();
    });

});