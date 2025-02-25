let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log('Tie.');
    } else if (
            humanChoice == 'rock' && computerChoice == 'scissors'
            || humanChoice == 'paper' && computerChoice == 'rock'
            || humanChoice == 'scissors' && computerChoice == 'paper'
        ) {
            humanChoice = capitaliseFirstLetter(humanChoice);
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
    } else {
        computerChoice = capitaliseFirstLetter(computerChoice);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        computerScore++;
    }
}


function getComputerChoice() {
    const random_int = Math.floor(Math.random()*3);

    let choice;
    switch (random_int) {
        case 0:
            choice = 'rock';
            break;

        case 1:
            choice = 'paper';
            break;

        default:
            choice = 'scissors';
    }

    return choice;
}


function getHumanChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    while (true) {
        const input = prompt('Rock, paper, scissors?');
        const choice = input.toLowerCase();

        if (choices.includes(choice)) {
            return choice;
        }

        console.log('Incorrect input. Choose rock, paper, or scissors');
    }
}


function capitaliseFirstLetter(string) {
    let first_letter = string[0];
    first_letter =  first_letter.toUpperCase();

    return first_letter + string.slice(1);
}
