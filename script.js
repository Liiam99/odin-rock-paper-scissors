document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');

    let humanScore = 0;
    let computerScore = 0;

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const playerSelection = e.target.textContent.toLowerCase();

            winner = playRound(playerSelection, getComputerChoice());

            if (winner == 'human') {
                humanScore++;
            } else if (winner == 'computer') {
                computerScore++;
            }
        });
    });
});

function playRound(humanChoice, computerChoice) {
    let result;

    if (humanChoice == computerChoice) {
        console.log('Tie.');

        result = 'none';
    } else if (
            humanChoice == 'rock' && computerChoice == 'scissors'
            || humanChoice == 'paper' && computerChoice == 'rock'
            || humanChoice == 'scissors' && computerChoice == 'paper'
        ) {
            humanChoice = capitaliseFirstLetter(humanChoice);
            console.log(`You won the round: ${humanChoice} beats ${computerChoice}.`);

            result = 'human';
    } else {
        computerChoice = capitaliseFirstLetter(computerChoice);
        console.log(`You lost the round: ${computerChoice} beats ${humanChoice}.`);

        result = 'computer';
    }

    return result;
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


function capitaliseFirstLetter(string) {
    let first_letter = string[0];
    first_letter =  first_letter.toUpperCase();

    return first_letter + string.slice(1);
}
