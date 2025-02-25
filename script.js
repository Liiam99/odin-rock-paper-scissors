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
