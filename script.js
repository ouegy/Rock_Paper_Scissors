const mouseTarget = Array.from(document.querySelectorAll(".fighter"));
mouseTarget.forEach((item) => {
    item.addEventListener('mouseenter', displayIcon);
    item.addEventListener('mouseenter', enlargeImage);
    item.addEventListener('click', playSound);
    item.addEventListener('mouseleave', removeIcon);
    item.addEventListener('mouseleave', reduceImage);
});
console.log(mouseTarget);
function displayIcon(e) {
// if data-key of .fighter image matches data-key of .icon image, remove hidden class    
    const icons = Array.from(document.querySelectorAll(".icon"));
    const key = e.srcElement.dataset.key;
    icons.forEach((item) => {
        const iconKey = item.dataset.key;
        if(key == iconKey) {
            item.classList.remove('hidden');
            item.classList.add('fade-in');
        }
    });  
};
function removeIcon(e) {
    const icons = Array.from(document.querySelectorAll(".icon"));
    const key = e.srcElement.dataset.key;
    icons.forEach((item) => {
        const iconKey = item.dataset.key;
        if(key == iconKey) {
            item.classList.add('hidden');
        }
    });
} 
function playSound(e) {
    //console.log(this);
    console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.target.dataset.sound}"]`);
    console.log(audio);
    audio.currentTime = 0;
    audio.play();
}
function enlargeImage(e) {
    const fighter = document.querySelector(`img[data-fighter="${e.srcElement.dataset.fighter}"]`);
    console.log(fighter.src);
    fighter.src = `./images/${e.srcElement.dataset.fighter}-hover.png`;
}
function reduceImage(e) {
    const fighter = document.querySelector(`img[data-fighter="${e.srcElement.dataset.fighter}"]`);
    console.log(fighter.src);
    fighter.src = `./images/${e.srcElement.dataset.fighter}.png`;
}

function playGame() {
    const play = document.getElementById("play");
    //console.log(play);
    play.addEventListener('click', () => {
        initialiseGame();
    });
}

function initialiseGame() {
    const coin = document.querySelector("audio[data-key='coin']");
    const background = document.querySelector("audio[data-key='background']");
    coin.currentTime = 0;
    coin.play();
    background.currentTime = 0;
    background.play();
}

playGame();

// let playerScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//     let randomInt = getRandomInt(3);
//     switch (randomInt) {
//         case 0:
//             computerChoice = "rock";
//             console.log(`The computer chose ${computerChoice}`)
//             break;
//         case 1:
//             computerChoice = "paper";
//             console.log(`The computer chose ${computerChoice}`)
//             break; 
//         case 2:
//             computerChoice = "scissors";
//             console.log(`The computer chose ${computerChoice}`)
//             break;               
//         default:
//             break;
//     }
//     console.log(computerChoice);
//     console.log(typeof computerChoice);
//     return computerChoice;
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function getPlayerChoice() {
//     playerChoice = prompt("Enter your choice. Either: Rock, Paper or Scissors");
//     if (playerChoice === null) {
//         console.log("The player left the game");
//         return;
//     }
//     else if (playerChoice != null) {
//         switch (playerChoice.toLowerCase()) {
//             case "rock":
//                 console.log(`Player chose ${playerChoice}`);
//                 break;
//             case "paper":
//                 console.log(`Player chose ${playerChoice}`);
//                 break; 
//             case "scissors":
//                 console.log(`Player chose ${playerChoice}`);
//                 break;             
//             default:
//                 alert("That is not a valid choice, please try again!");
//                 console.log("That is not a valid choice, please try again!");
//                 break;
//         }  
//     }
    
//     console.log(playerChoice);
//     console.log(typeof playerChoice);
//     return playerChoice;
// }

// function playRound(computerChoice, playerChoice) {

//     // computerChoice = getComputerChoice();
//     if (playerChoice === computerChoice) {
//         console.log("The game is a draw!");
//         console.log(playerScore);
//         console.log(computerScore);
//     }
//     else if ( (playerChoice == "rock" && computerChoice == "scissors")
//         || (playerChoice == "paper" && computerChoice == "rock")
//         || (playerChoice == "scissors" && computerChoice == "paper") ) {
//             console.log("Player wins!");
//             playerScore++;
//             console.log(playerScore);
//             console.log(computerScore);
//         }
//     else if ( (playerChoice == "rock" && computerChoice == "paper")
//     || (playerChoice == "paper" && computerChoice == "scissors")
//     || (playerChoice == "scissors" && computerChoice == "rock") ) {
//         console.log("Computer wins!");
//         computerScore++;
//         console.log(playerScore);
//         console.log(computerScore);
//     }
// }

// function game() {
//     initialiseGame();
//     do {
//         initialiseGame();
//         console.log(playerScore);
//         console.log(computerScore);
//     } while (playerScore < 5 && computerScore < 5);

//         if (playerScore == 5) {
//             console.log("Player wins the best of 5!");
//         }
//         else if (computerScore == 5) {
//             console.log("Computer wins the best of 5!");
//         }
    
// }
// function initialiseGame() {
//     getComputerChoice();
//     getPlayerChoice();
//     playRound(computerChoice, playerChoice);
// }
//game();
// I can only pass the arguments in to the playRound() function after getComputerChoice() and getPlayerChoice()
// getComputerChoice();
// getPlayerChoice();
// playRound(computerChoice, playerChoice);
