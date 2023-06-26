function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const result = choices[Math.floor(Math.random() * choices.length)];
    return result;
  }
  
  function playRound(playerSelection, computerSelection) {
    if ((playerSelection === 'rock' && computerSelection === 'scissors')
      || (playerSelection === 'paper' && computerSelection === 'rock')
      || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
      } else if ((playerSelection === 'scissors' && computerSelection === 'rock')
                ||(playerSelection === 'rock' && computerSelection === 'paper')
                ||(playerSelection === 'paper' && computerSelection === 'scissors')) {
                  console.log(`You lost! ${computerSelection} beats ${playerSelection}`);
                  computerScore++;
                } else if ((playerSelection === 'rock' && computerSelection === 'rock')
                          ||(playerSelection === 'paper' && computerSelection === 'paper')
                          ||(playerSelection === 'scissors' && computerSelection === 'scissors')){
                  console.log('It\'s a tie!')
                };
  };
  
  function scoreKeeper() {
    console.log(`Player:${playerScore} Computer:${computerScore}`)
  };
  
  let playerScore = 0;
  let computerScore = 0;
  
  function game() {
    for (let i = 0; i < 5; i++) {
      let playerChoice = prompt('Please choose between rock, paper or scissors').toLowerCase();
      playRound(playerChoice, getComputerChoice());
      scoreKeeper();
    }
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game')
    } else if (playerScore < computerScore) {
      console.log('You lost the game. Better luck next time!')
    } else if (playerScore === computerScore) {
      console.log('Nobody won! Play again?')
    };
  }
  
  game();