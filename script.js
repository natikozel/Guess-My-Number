'use strict';

const maxScore = 20;
let curScore = 20;
let highScore = 0;
let numToGuess = Math.trunc(Math.random() * maxScore + 1);
let gameOver = false;

const displayMessage = text => document.querySelector('.message').textContent = text;
const displayNumber = text => document.querySelector('.number').textContent = text;
const displayGuess = text => document.querySelector('.guess').textContent = text;
const displayScore = text => document.querySelector('.score').textContent = text;
const displayHighScore = text => document.querySelector('.highscore').textContent = text;
const changeNumberStyleWidth = width => document.querySelector('.number').style.width = width;
const changeBodyBGColor = color => document.querySelector('body').style.backgroundColor = color;
const getGuessValue = () => document.querySelector('.guess').value;


document.querySelector('.again').addEventListener(
  'click', function() {
    changeBodyBGColor('#222');
    displayNumber('?');
    changeNumberStyleWidth('15rem');
    displayGuess('');
    numToGuess = Math.trunc(Math.random() * maxScore + 1);
    curScore = maxScore;
    displayMessage('Start guessing...');
    displayScore(curScore);
    gameOver = false;
  }
);


document.querySelector('.check').addEventListener(
  'click', function() {
    const guess = Number(getGuessValue());
    if (!gameOver) {
      if (!guess) {
        displayMessage('No input!');
      } else if (curScore > 0 && numToGuess === guess) {
        displayMessage('Correct!');
        if (curScore > highScore) {
          highScore = curScore;
          displayHighScore(highScore);
        }
        changeBodyBGColor('#60b347');
        displayNumber(numToGuess);
        changeNumberStyleWidth('30rem');
        gameOver = true;
      } else if (curScore > 0 && numToGuess !== guess) {
        curScore--;
        displayScore(curScore);
        displayMessage(numToGuess > guess ? 'Too low!' : 'Too high!');

      }
      if (curScore === 0) {
        displayMessage('No more attempts left! Try Again!');
        displayScore(curScore);

      }
    } else {
      displayMessage('You\'ve already won the game!');
    }
  }
);