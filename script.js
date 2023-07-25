
let playerScore = 0;
let computerScore = 0;
console.log(playerScore);
console.log(computerScore);

function getComputerChoice() {
    let randomInt = getRandomInt(3);
    switch (randomInt) {
        case 0:
            computerChoice = "rock";
            console.log(`The computer chose ${computerChoice}`)
            break;
        case 1:
            computerChoice = "paper";
            console.log(`The computer chose ${computerChoice}`)
            break; 
        case 2:
            computerChoice = "scissors";
            console.log(`The computer chose ${computerChoice}`)
            break;               
        default:
            break;
    }
    console.log(computerChoice);
    console.log(typeof computerChoice);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getPlayerChoice() {
    playerChoice = prompt("Enter your choice. Either: Rock, Paper or Scissors");
    if (playerChoice === null) {
        console.log("The player left the game");
        return;
    }
    else if (playerChoice != null) {
        switch (playerChoice.toLowerCase()) {
            case "rock":
                console.log(`Player chose ${playerChoice}`);
                break;
            case "paper":
                console.log(`Player chose ${playerChoice}`);
                break; 
            case "scissors":
                console.log(`Player chose ${playerChoice}`);
                break;             
            default:
                alert("That is not a valid choice, please try again!");
                console.log("That is not a valid choice, please try again!");
                //getPlayerChoice();
                break;
        }  
    }
    
    console.log(playerChoice);
    console.log(typeof playerChoice);

}

function playRound(computerChoice, playerChoice) {
    getPlayerChoice();
    getComputerChoice();
    if (playerChoice === computerChoice) {
        console.log("The game is a draw!");
        roundResult = "draw";
    }
    else if ( (playerChoice == "rock" && computerChoice == "scissors")
        || (playerChoice == "paper" && computerChoice == "rock")
        || (playerChoice == "scissors" && computerChoice == "paper") ) {
            console.log("Player wins!");
            roundResult = "player";
            playerScore++;
        }
    else if ( (playerChoice == "rock" && computerChoice == "paper")
    || (playerChoice == "paper" && computerChoice == "scissors")
    || (playerChoice == "scissors" && computerChoice == "rock") ) {
        console.log("Computer wins!");
        roundResult = "computer";
        computerScore++;
    }
}

function game() {
    getPlayerChoice();
    getComputerChoice();
    while (playerScore < 5 && computerScore < 5) {
        playRound(computerChoice, playerChoice);
        console.log(playerScore);
        console.log(computerScore);
    }
    if (playerScore == 5) {
        console.log("Player wins the best of 5!");
    }
    else if (computerScore == 5) {
        console.log("Computer wins the best of 5!");
    }
}

// getComputerChoice();
// getPlayerChoice();


game();
