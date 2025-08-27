let humanScore = 0;
let computerScore = 0;
let draw = 0;
let round = 0;

// 1 represents rock
// 2 represents paper
// 3 represents scissor

function getHumanChoice() {
    let userChoice = document.getElementById('userChoice').value;
    let message = document.getElementById('gameMessage');
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

    let pc_choice = '';
    if (computerChoice === 1) {
        pc_choice = 'Rock';
    } else if (computerChoice === 2) {
        pc_choice = 'Paper';
    } else {
        pc_choice = 'Scissor';
    };

    if (userChoice === computerChoice) {
        message.textContent = "It's a draw. Try again.";
        draw++;
        round++;
    } else if (userChoice === 1 && computerChoice === 2 || userChoice === 2 && computerChoice === 3 || userChoice === 3 && computerChoice === 1) {
        message.textContent = "You lose. The computer chose " + pc_choice;
        computerScore++;
        round++;
    } else if (userChoice === 1 && computerChoice === 3 || userChoice === 2 && computerChoice === 1 || userChoice === 3 && computerChoice === 2) {
        message.textContent = "You win. The computer chose " + pc_choice;
        humanScore++;
        round++;
    }

    humanScoreUpdate = document.getElementById('humanScore');
    humanScoreUpdate.textContent = humanScore;
    computerScoreUpdate = document.getElementById('computerScore');
    computerScoreUpdate.textContent = computerScore;
    drawUpdate = document.getElementById('draw');
    drawUpdate.textContent = draw;
    roundUpdate = document.getElementById('round');
    roundUpdate.textContent = round;


}