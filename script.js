'use strict';

////////////////////////////////////////////////////////////////////////////////////////////////////
// Variables & Basic Functions
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


const displayScore = function(functionScore) {
    document.querySelector('.score').textContent = functionScore;
}





////////////////////////////////////////////////////////////////////////////////////////////////////
// Game logic
document.querySelector('.check').addEventListener('click', function() {


    let guess = Number(document.querySelector('.guess').value);


    /////////////////////////////////////////////////
    // When no number is entered in the field
    if (!guess) { 
        displayMessage('☔ No Number!');


    /////////////////////////////////////////////////
    // When player wins   
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        // Manipulating game style when player wins
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // Highscore 
        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;


    /////////////////////////////////////////////////
    // When guess is different from the secret number
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore(score)
        } else {
            displayMessage('💥 Game Over');
            document.querySelector('.score').textContent = '0';
        }




    }


})





////////////////////////////////////////////////////////////////////////////////////////////////////
// Resetting the game
document.querySelector('.again').addEventListener('click', function () {

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.number').textContent = '?';

    document.querySelector('.guess').value = '';

    score = 20;

    displayScore(20)

    displayMessage('Start guessing...');

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';
    
})
