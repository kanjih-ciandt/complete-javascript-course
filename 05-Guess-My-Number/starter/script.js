'use strict';

let numberToGuess = 0;
let score = 20;
let roundInProgress = true;

let guess =  document.getElementById("guess");


let loadGame =  () => {
    numberToGuess = Math.floor(Math.random() * 20)+1;
    score = 20;
    roundInProgress = true;
    document.querySelector(".message").textContent = "Start guessing...";
    document.getElementById("score").textContent  = score;
    document.getElementById("screen").style.background = "black";
    guess.value = ""
    
}

let finishRound = (won) => {
    roundInProgress = false;

    if(won) {
        document.querySelector(".message").textContent = "🥇🥇🥇🥇🥇 You Won !!!";
        const highScoreElement = document.querySelector(".highscore")
        console.log(highScoreElement);
        highScoreElement.textContent = Number(highScoreElement.textContent) < score ? score : highScoreElement.textContent
        document.getElementById("screen").style.background = "green";

    } else {
        document.querySelector(".message").textContent = "You lose !!!";
        document.getElementById("screen").style.background = "red";
    }
}



let check = () =>{
    document.querySelector(".message").textContent = guess.value > numberToGuess ? "Too High" : "Too Low";
    if(guess.value == numberToGuess){
        console.log("you won")
        finishRound(true);
    } else {
        document.getElementById("score").textContent = --score;
    }

    if(score === 0) {
        finishRound(false);
    }
    

}

document.onreadystatechange = (event) => {
    if (document.readyState === "complete") {
        loadGame();
        console.log('Leeeroy ', numberToGuess);
    }
};


document.addEventListener('click',  (event) => {
	
	if (event.target.matches('.again')) {
        loadGame();
        console.log(numberToGuess);

    }
    if (event.target.matches('.check') && roundInProgress ) {
        check();
    }

}, false);