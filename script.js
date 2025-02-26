document.addEventListener('DOMContentLoaded', function() {
    let humanScore = 0;
    let computerScore = 0;

    const buttons = document.querySelectorAll('button');

    buttons.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const playerSelection = e.target.textContent.toLowerCase();
            const computerSelection = getComputerChoice();

            const roundWinner = playRound(playerSelection, computerSelection);
            if (roundWinner == 'human') {
                humanScore++;
                updateScore('human', humanScore);
            } else if (roundWinner == 'computer') {
                computerScore++;
                updateScore('computer', computerScore);
            }

            const gameWinner = checkScore(humanScore, computerScore);
            if (gameWinner) {
                endGame(gameWinner, buttons);
            } else {
                addRoundMessage(roundWinner, playerSelection, computerSelection);
            }
        });
    });
});

function playRound(humanChoice, computerChoice) {
    let winner;

    if (humanChoice == computerChoice) {
        winner = 'none';
    } else if (
            humanChoice == 'rock' && computerChoice == 'scissors'
            || humanChoice == 'paper' && computerChoice == 'rock'
            || humanChoice == 'scissors' && computerChoice == 'paper'
        ) {
            winner = 'human';
    } else {
        winner = 'computer';
    }

    return winner;
}


function endGame(gameWinner, buttons) {
    buttons.forEach((btn) => {
        btn.disabled = true;
    });

    addGameEndMessage(gameWinner);
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


function checkScore(humanScore, computerScore) {
    if (humanScore == 5) {
        return 'human';
    } else if (computerScore == 5) {
        return 'computer';
    } else {
        return null;
    }
}


function updateScore(roundWinner, score) {
    scoreDiv = document.querySelector(`.${roundWinner}-score`);
    scoreDiv.textContent = score;
}


function addRoundMessage(roundWinner, humanSelection, computerSelection) {
    humanSelection = capitaliseFirstLetter(humanSelection)
    const message = document.querySelector('.message');

    if (roundWinner == 'human') {
        message.textContent = `You win the round. ${humanSelection} beats ${computerSelection}.`;
    } else if (roundWinner == 'computer') {
        message.textContent = `You lose the round. ${humanSelection} is beaten by ${computerSelection}.`;
    } else {
        message.textContent = 'Tie.';
    }
}


function addGameEndMessage(gameWinner) {
    const message = document.querySelector('.message');

    if (gameWinner == 'human') {
        message.textContent = 'You won! Refresh the site to play again.';
    } else if (gameWinner == 'computer') {
        message.textContent = 'You lost. Refresh the site to try again.'
    }

}


function capitaliseFirstLetter(string) {
    let first_letter = string[0];
    first_letter =  first_letter.toUpperCase();

    return first_letter + string.slice(1);
}
