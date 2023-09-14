// ----- Variables -----
let playerScore = 0;
let computerScore = 0;
let roundWinner = '';
let gameWinner = '';
const mainText = document.querySelector('.status');
const subText = document.querySelector('.description');
const playerBox = document.querySelector('.playerWeap');
const compuBox = document.querySelector('.compuWeap');
const score1 = document.querySelector('.playerScore');
const score2 = document.querySelector('.compuScore');
const weapons = document.querySelectorAll('.box');
const image = document.createElement('img');
image.style.cssText = "height: 172px; width: 140px; border-radius: 7px;";
const image2 = document.createElement('img');
image2.style.cssText = "height: 172px; width: 140px; border-radius: 7px;";
const modal = document.querySelector('.modal');
const modalText = document.querySelector('.modalText');
const modalBtn = document.querySelector('.modalButton');

// ----- Functions -----
function getComputerChoice() { //random computer choice
    const choices = ['sword', 'gun', 'shield'];
    const result = choices[Math.floor(Math.random() * choices.length)];
    return result;
};
  
function playRound(playerSelection, computerSelection) { //playerChoice vs computerChoice
  if ((playerSelection === 'sword' && computerSelection === 'shield') ||
      (playerSelection === 'gun' && computerSelection === 'sword') || 
      (playerSelection === 'shield' && computerSelection === 'gun')) {
        playerScore++;
        roundWinner = 'player';
      } else if ((playerSelection === 'shield' && computerSelection === 'sword') || 
      (playerSelection === 'sword' && computerSelection === 'gun') || 
      (playerSelection === 'gun' && computerSelection === 'shield')) { 
        computerScore++;
        roundWinner = 'computer';
      } else if ((playerSelection === 'sword' && computerSelection === 'sword') || 
      (playerSelection === 'gun' && computerSelection === 'gun') || 
      (playerSelection === 'shield' && computerSelection === 'shield')) { 
        roundWinner = 'none';
      }; 
};

function updateWeapon(player, computer) {
  if (player === 'sword') {
    image.src = './images/sword.jpg';
    playerBox.replaceWith(image);
  } else if (player === 'gun') {
    image.src = './images/gun.jpg';
    playerBox.replaceWith(image);
  } else if (player === 'shield') {
    image.src = './images/shield.jpg';
    playerBox.replaceWith(image);
  };

  if (computer === 'sword') {
    image2.src = './images/sword.jpg';
    compuBox.replaceWith(image2);
  } else if (computer === 'gun') {
    image2.src = './images/gun.jpg';
    compuBox.replaceWith(image2);
  } else if (computer === 'shield') {
    image2.src = './images/shield.jpg';
    compuBox.replaceWith(image2);
  };

};

function keepScore() {
  score1.textContent = `Player: ${playerScore}`;
  score2.textContent = `Computer: ${computerScore}`;
};

function displayText(winner, player, computer) {
  const str1 = `${player} beats ${computer}.`;
  const str2 = `${player} loses to ${computer}`;
  if (winner === 'player') {
    mainText.textContent = 'You Won!';
    subText.textContent = str1.charAt(0).toUpperCase() + str1.slice(1);
  } else if (winner === 'computer') {
    mainText.textContent = 'You Lost!';
    subText.textContent = str2.charAt(0).toUpperCase() + str2.slice(1);
  } else if (winner === 'none') {
    mainText.textContent = 'It\'s a tie!';
    subText.textContent = 'Pick a weapon again.'
  };
};


function endGame() {
    if (playerScore === 5) {
      modalText.textContent = 'You won!';
    } else {
      modalText.textContent = 'You lost...';
    };
    modal.classList.add("open");
};

function resetGame() {
  modal.classList.remove('open');
  location.reload();
};

// ----- Game -----
for (let weapon of weapons) {
  weapon.addEventListener('click', () => {
    let playerChoice = weapon.id;
    let computerChoice = getComputerChoice();
    updateWeapon(playerChoice, computerChoice);
    playRound(playerChoice, computerChoice);
    keepScore();
    displayText(roundWinner, playerChoice, computerChoice);
    if (playerScore === 5 || computerScore === 5) {
      endGame();
      modalBtn.addEventListener('click', resetGame);
    };
  });
};