function playGame() {
    let totalScore = 0;

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const round_score = playRound(humanSelection, computerSelection);
        totalScore += round_score;
    }

    if (totalScore > 0) {
        alert('You won the game!');
    } else if (totalScore < 0) {
        alert('You lost the game.');
    } else {
        alert('Tie.');
    }
}


function playRound(humanChoice, computerChoice) {
    let score;

    if (humanChoice == computerChoice) {
        console.log('Tie.');

        score = 0;
    } else if (
            humanChoice == 'rock' && computerChoice == 'scissors'
            || humanChoice == 'paper' && computerChoice == 'rock'
            || humanChoice == 'scissors' && computerChoice == 'paper'
        ) {
            humanChoice = capitaliseFirstLetter(humanChoice);
            console.log(`You won the round: ${humanChoice} beats ${computerChoice}`);

            score = 1;
    } else {
        computerChoice = capitaliseFirstLetter(computerChoice);
        console.log(`You lost the round: ${computerChoice} beats ${humanChoice}.`);

        score = -1;
    }

    return score;
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
        const input = prompt('Rock, paper, or scissors?');
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
