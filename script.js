console.log("It reads the .js file");
let playerChoice = "";
let computerChoice = "";

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
            getPlayerChoice();
            break;
    }
    console.log(playerChoice);
    typeof playerChoice;
    return playerChoice;

}

function playRound(computerChoice, playerChoice) {
    if (playerChoice === computerChoice) {
        console.log("The game is a draw!");
    }
    else if (playerChoice == "rock" && computerChoice == "scissors"
        || playerChoice == "paper" && computerChoice == "rock"
        || playerChoice == "scissors" && computerChoice == "paper") {
            console.log("Player wins!");
        }
    else if (playerChoice == "rock" && computerChoice == "paper"
    || playerChoice == "paper" && computerChoice == "scissors"
    || playerChoice == "scissors" && computerChoice == "rock") {
        console.log("Computer wins!");
    }
}

getComputerChoice();
getPlayerChoice();
playRound(computerChoice, playerChoice);