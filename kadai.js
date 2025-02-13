"use strict";
let currentNumber, nextNumber;
let score = 0;
let gameActive = false;

function getRandomNumber(exclude) {
    let num;
    do {
        num = Math.floor(Math.random() * 13) + 1;
    } while (num === exclude);
    return num;
}

function startGame() {
    gameActive = true;
    document.getElementById("score").textContent = score;
    document.getElementById("result").textContent = "";
    document.getElementById("restartBtn").style.display = "none";
    currentNumber = getRandomNumber(null);
    document.getElementById("number").textContent = `現在のカード:${currentNumber}`;
}

function checkGuess(isHigh) {
    if (!gameActive) return;

    nextNumber = getRandomNumber(currentNumber);
    let resultText;

    if ((isHigh && nextNumber > currentNumber) || (!isHigh && nextNumber < currentNumber)) {
        score++;
        resultText = `正解！次のカードは${nextNumber}でした！ `;
    } else {
        resultText = `不正解...次のカードは${nextNumber}でした！ `;
        score = 0;  
    }
    
    document.getElementById("result").textContent = resultText;
    document.getElementById("score").textContent = score;
    document.getElementById("restartBtn").style.display = "block";
    gameActive = false;

}

document.getElementById("highBtn").addEventListener("click", function() {
    checkGuess(true);
});
document.getElementById("lowBtn").addEventListener("click", function() {
    checkGuess(false);
});
document.getElementById("restartBtn").addEventListener("click", startGame);

startGame();
