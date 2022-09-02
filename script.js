function getComputerChoice() {
  if (Math.floor(Math.random()*100) <= 33) {
    return 'Rock'
  } else if (Math.floor(Math.random()*100) <= 66) {
    return 'Paper'
  } else if (Math.floor(Math.random()*100) <= 99) {
    return 'Scissors'
  }
};

let playerScore = 0;
let computerScore = 0;

function playRound() {
  let playerSelection = prompt('Type either Rock, Paper or Scissors as your choice:', '').toLowerCase();
  let computerSelection = getComputerChoice();
  if (playerSelection === '' || playerSelection === null) {
    alert('You need to type either Rock, Paper of Scissors to play the game')
  }
  else if(playerSelection === 'rock' && computerSelection === 'Rock') {
    return 'It\'s a tie!';
  } else if (playerSelection === 'rock' && computerSelection === 'Paper') {
    computerScore++
    return 'You lose! Paper beats Rock';
  } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
    playerScore++
    return 'You win! Rock beats Scissors' 
  } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
    computerScore++
    return 'You lose! Rock beats Scissors';
  } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
    playerScore++
    return 'You win! Scissors beats Paper';
  } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
    return 'It\'s a tie!';
  } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
    return 'It\'s a tie!';
  } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
    playerScore++
    return 'You win! Paper beats Rock';
  } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
    computerScore++
    return 'You lose! Scissors beats Paper';
  }
};


function winner(){
  if(playerScore > computerScore) {
    console.log('You won! Congratulations')
  } else if (playerScore < computerScore) {
    console.log('You lost! Play again')
  } else if (playerScore === computerScore) {
    console.log('It\'s a tie! Try again')
  }
};


function game() {
  let score = 5;
  for (let i = 0; i < score; i++){
    console.log(playRound());
  }
  winner();
};

game();


