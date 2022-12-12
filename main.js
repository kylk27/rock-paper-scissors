let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

//creates an array, generates a random item from that array and returns it
function getComputerChoice() {
    const array = ['rock', 'paper', 'scissors'];
    const result = array[Math.floor(Math.random()*array.length)];
    return result;
};

//takes two parameters and returns the winner as well as keeping score
function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Choose between rock, paper & scissors').toLowerCase();
    computerSelection = getComputerChoice();

    if ((playerSelection === 'rock' && computerSelection === 'rock') ||
        (playerSelection === 'paper' && computerSelection === 'paper') ||
        (playerSelection === 'scissors' && computerSelection === 'scissors')) {
        console.log(`Player: ${playerSelection} Computer: ${computerSelection} (It\'s a tie!)`);
        console.log(`Score: Player(${playerScore})  Computer(${computerScore})`);

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        playerScore++;
        console.log(`Player: ${playerSelection} Computer: ${computerSelection} (You win!)`);
        console.log(`Score: Player(${playerScore})  Computer(${computerScore})`);
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        console.log(`Player: ${playerSelection} Computer: ${computerSelection} (You lost!)`);
        console.log(`Score: Player(${playerScore})  Computer(${computerScore})`);
    };
};
/* 
calls the function playRound() and allows you to 
play until either you or opponent reaches a score 
of 5, then prints the winner of the game
*/
function game() {
    for (let i = 0; (playerScore < 5 && computerScore <5); i++) {
        playRound(playerSelection, computerSelection);
    };

    if (playerScore === 5) {
        console.log('You won the game. Congratulations!');
    } else {
        console.log('You lost to the computer. Game over!');
    };
};

game();