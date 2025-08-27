let humanScore = 0;
let computerScore = 0;
let draw = 0;

// 1 represents rock
// 2 represents paper
// 3 represents scissor

function getHumanChoice() {
    let userChoice = document.getElementById('userChoice').value;
    userChoice = userChoice.toLowerCase();
    if (userChoice === 'rock') {
        return 1
    } else if (userChoice === 'paper') {
        return 2
    } else if (userChoice === 'scissor') {
        return 3
    } else {message.textContent = "Wrong Input. Try Again."}
}

function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    return computerChoice;
}

function guess(){
    let userChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(userChoice, computerChoice)
}

function playRound(userChoice, computerChoice) {
    let message = document.getElementById('gameMessage');
    if (userChoice === computerChoice) {
        message.textContent = "It's a draw. Try again.";
        draw++;
    }
}