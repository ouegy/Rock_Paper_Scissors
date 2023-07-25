
let playerScore = 0;
let computerScore = 0;

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
    return computerChoice;
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
                break;
        }  
    }
    
    console.log(playerChoice);
    console.log(typeof playerChoice);
    return playerChoice;
}

function playRound(computerChoice, playerChoice) {

    // computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        console.log("The game is a draw!");
        console.log(playerScore);
        console.log(computerScore);
    }
    else if ( (playerChoice == "rock" && computerChoice == "scissors")
        || (playerChoice == "paper" && computerChoice == "rock")
        || (playerChoice == "scissors" && computerChoice == "paper") ) {
            console.log("Player wins!");
            playerScore++;
            console.log(playerScore);
            console.log(computerScore);
        }
    else if ( (playerChoice == "rock" && computerChoice == "paper")
    || (playerChoice == "paper" && computerChoice == "scissors")
    || (playerChoice == "scissors" && computerChoice == "rock") ) {
        console.log("Computer wins!");
        computerScore++;
        console.log(playerScore);
        console.log(computerScore);
    }
}

function game() {
    initialiseGame();
    while (playerScore < 5 && computerScore < 5) {
        initialiseGame();
        console.log(playerScore);
        console.log(computerScore);
        if (playerScore == 5) {
            console.log("Player wins the best of 5!");
            break;
        }
        else if (computerScore == 5) {
            console.log("Computer wins the best of 5!");
            break;
        }
    }
}
function initialiseGame() {
    getComputerChoice();
    getPlayerChoice();
    playRound(computerChoice, playerChoice);
}
game();
// I can only pass the arguments in to the playRound() function after getComputerChoice() and getPlayerChoice()
// getComputerChoice();
// getPlayerChoice();
// playRound(computerChoice, playerChoice);
