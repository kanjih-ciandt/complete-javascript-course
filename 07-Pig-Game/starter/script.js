'use strict';


const btnNewGame = document.querySelector(".btn--new");
const btnRollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const dice = document.querySelector(".dice");

const player1 = {
    panel: document.querySelector(".player--0"),
    score: document.getElementById("score--0"),
    currentScore: document.getElementById("current--0")
}

const player2 = {
    panel: document.querySelector(".player--1"),
    score: document.getElementById("score--1"),
    currentScore: document.getElementById("current--1")
}

let currentPlayer = player1;
let haveWon = false; 


const changeClass =  (player, className) => {
    if(player.panel.classList.contains(className)) {
        player.panel.classList.remove(className);
    } else {
        player.panel.classList.add(className);
        currentPlayer = player;

    }
};

const switPlayer = () =>{
    if (haveWon) return;

    currentPlayer.score.textContent = Number(currentPlayer.currentScore.textContent) + Number(currentPlayer.score.textContent);
    if(Number(currentPlayer.score.textContent) > 99 ) {
        haveWon = true;
        wonGame();

    } else {
        currentPlayer.currentScore.textContent = 0;
        changeClass(player1,"player--active");
        changeClass(player2,"player--active");
        
    }
}

const wonGame = () =>{
    console.log(currentPlayer);
    currentPlayer.panel.classList.remove("player--active");
    currentPlayer.panel.classList.add("player--winner");
    dice.classList.add("hidden");
}


const rollDice = ()=>{
    if (haveWon) return;

    const diceRoll = Math.floor(Math.random() * 6)+1;
    dice.src = `dice-${diceRoll}.png`;

    if(diceRoll > 1) {
        currentPlayer.currentScore.textContent = diceRoll + Number(currentPlayer.currentScore.textContent);
    } else {
        currentPlayer.currentScore.textContent = 0
        switPlayer();
    }

}


const newGame= ()=>{
    window.location.reload(false); 
}

btnHold.addEventListener('click', switPlayer);
btnRollDice.addEventListener('click', rollDice);
btnNewGame.addEventListener('click', newGame)