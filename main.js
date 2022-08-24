let array1 = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = array1[Math.floor(Math.random()*array1.length)];
    return choice;
}

function playRound(playerHand, compHand) {
    compHand = getComputerChoice();
    let result;
    if ((playerHand == 'rock' && compHand == array1[0])||(playerHand == 'paper' && compHand == array1[1])||(playerHand == 'scissors' && compHand == array1[2])) {
        result = `player: ${playerHand} computer: ${compHand} (it\'s a tie!)`;
    } else if ((playerHand == 'rock' && compHand == array1[2])||(playerHand == 'paper' && compHand == array1[0])||(playerHand == 'scissors' && compHand == array1[1])) {
        result = `player: ${playerHand} computer: ${compHand} (You won)`;
        playerScore++;
    } else {
        result = `player: ${playerHand} computer: ${compHand} (You lost)`;
        computerScore++;
    };

    return result;
};

let compHand = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        let playerHand = `${prompt('choose between rock, paper and scissors')}`.toLowerCase();
        console.log(playRound(playerHand, compHand));
        console.log(`scoreboard: player (${playerScore}) computer(${computerScore})`);
    };
};

game();