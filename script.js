let playerScore = 0;
let computerScore = 0;

const mouseTarget = Array.from(document.querySelectorAll(".fighter"));
mouseTarget.forEach((item) => {
    item.addEventListener('mouseenter', enlargeImage);
    item.addEventListener('mouseenter', displayname);
    item.addEventListener('mouseleave', removename);
    item.addEventListener('mouseleave', reduceImage);
});

const play = document.getElementById("play");
    play.addEventListener('click', () => {
        initialiseGame();
    });

function displayname(e) {
    const names = Array.from(document.querySelectorAll(".name"));
    const key = e.srcElement.dataset.key;
    names.forEach((item) => {
        const nameKey = item.dataset.key;
        if(key === nameKey) {
            item.classList.remove('hidden'); 
            item.classList.add('fade-in');
        }
    });  
};

function removename(e) {
    const names = Array.from(document.querySelectorAll(".name"));
    const key = e.srcElement.dataset.key;
    names.forEach((item) => {
        const nameKey = item.dataset.key;
        if(key == nameKey) {
            item.classList.add('hidden');
        }
    });
} 

function enlargeImage(e) {
    const fighter = document.querySelector(`img[data-fighter="${e.srcElement.dataset.fighter}"]`);
    fighter.src = `./images/${e.srcElement.dataset.fighter}-hover.png`;
    const name = document.getElementsByClassName('name')
}

function reduceImage(e) {
    const fighter = document.querySelector(`img[data-fighter="${e.srcElement.dataset.fighter}"]`);
    fighter.src = `./images/${e.srcElement.dataset.fighter}.png`;
}

function initialiseGame() {
    mouseTarget.forEach((item) => {
        item.addEventListener('click', playSound);
        item.addEventListener('click', getPlayerChoice);
    });
    const coin = document.querySelector("audio[data-key='coin']");
    const background = document.querySelector("audio[data-key='background']");
    coin.currentTime = 0;
    coin.play();
    background.currentTime = 0;
    background.play();
    removeWinningMessage();
    removeRoundResult();
    resetScoreUI();
}
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.sound}"]`);
    audio.currentTime = 0;
    audio.play();
}

function getComputerChoice() {
    let randomInt = getRandomInt(3);
    switch (randomInt) {
        case 0:
            computerChoice = "Dieselnoi";
            break;
        case 1:
            computerChoice = "Sagat";
            break; 
        case 2:
            computerChoice = "Samart";
            break;               
        default:
            break;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getPlayerChoice(e) {
    let playerChoice = e.srcElement.dataset.fighter;
    getComputerChoice();
    playRound(playerChoice, computerChoice);
    updateScore();
    if (playerScore == 3) {
        endGame();
    }
    else if (computerScore == 3) {
        endGame();
    }
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        round_result.textContent = "The game is a draw";
    }
    if (playerChoice == "Dieselnoi") {
        switch (computerChoice) {
            case "Samart":
                round_result.textContent = `Computer chose ${computerChoice}. Dieselnoi beat Samart when they fought. Player Wins!`;  
                playerScore++;
                break;
            case "Sagat":
                round_result.textContent = `Computer chose ${computerChoice}. Sagat beat Dieselnoi in 2 of their 3 fights. Computer wins!`;
                computerScore++;
                break;
            default:
        }
    }
    if (playerChoice == "Sagat") {
        switch (computerChoice) {
            case "Dieselnoi":
                round_result.textContent = `Computer chose ${computerChoice}. Sagat beat Dieselnoi in 2 of their 3 fights. Player wins!`;  
                playerScore++;
                break;
            case "Samart":
                round_result.textContent = `Computer chose ${computerChoice}. Muay Femur is the counter to Muay Mat. Computer wins!`;
                computerScore++;
                break;
            default:
        }
    }
    if (playerChoice == "Samart") {
        switch (computerChoice) {
            case "Dieselnoi":
                round_result.textContent = `Computer chose ${computerChoice}. Dieselnoi beat Samart when they fought. Computer Wins!`;  
                computerScore++;
                break;
            case "Sagat":
                round_result.textContent = `Computer chose ${computerChoice}. Muay Femur is the counter to Muay Mat. Player wins!`;
                playerScore++;
                break;
            default:
        }
    }
}

function updateScore() {
    let playerScoreUI = document.getElementById("player_score");
    playerScoreUI.textContent = playerScore;
    let computerScoreUI = document.getElementById("computer_score");
    computerScoreUI.textContent = computerScore;
}

function removeRoundResult() {
    let round_result = document.getElementById("round_result"); 
    round_result.textContent = ""; 
}

function playGameEndSound() {
    var sound;
    if(computerScore == 0 && playerScore == 3) {
       sound = document.querySelector("audio[data-key='you-win-perfect']");
    }
    else if(playerScore == 3 && computerScore != 0) {
        sound = document.querySelector("audio[data-key='you-win']");
    }
    else if(computerScore == 3) {
        sound = document.querySelector("audio[data-key='you-lose']");
    }
    setTimeout(() => {
        sound.play();
      }, "1200");
    
}

function displayWinningMessage() {
    let winning_message = document.getElementById("winning_message");
    if(computerScore == 0 && playerScore == 3) {
        winning_message.textContent = "You Win - perfect!";
    }
    else if (playerScore == 3 && computerScore != 0) {
        winning_message.textContent = "You Win!";
    }
    else if (computerScore == 3) {
        winning_message.textContent = "You Lose!";
    }
    
}

function removeWinningMessage() {
    let winning_message = document.getElementById("winning_message");
    winning_message.textContent = "";
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function resetScoreUI() {
    let playerScoreUI = document.getElementById("player_score");
    playerScoreUI.textContent = "0";
    let computerScoreUI = document.getElementById("computer_score");
    computerScoreUI.textContent = "0";
}

function endGame() {
    mouseTarget.forEach((item) => {
        item.removeEventListener('click', playSound);
        item.removeEventListener('click', getPlayerChoice);
    });
    const background = document.querySelector("audio[data-key='background']");
    background.pause();
    playGameEndSound();
    displayWinningMessage();
    resetScore();
}


