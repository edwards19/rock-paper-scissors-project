function getComputerChoice() {
  if (Math.floor(Math.random()*100) <= 33) {
    return 'rock'
  } else if (Math.floor(Math.random()*100) <= 66) {
    return 'paper'
  } else if (Math.floor(Math.random()*100) <= 99) {
    return 'scissors'
  }
};

let playerScore = 0;
let computerScore = 0;

function playRound() {
  let playerSelection = prompt('Type either Rock, Paper or Scissors as your choice:', '').toLowerCase();
  let computerSelection = getComputerChoice();
  switch(true) {
    case (playerSelection === '' || playerSelection === null):
      alert('You need to type either Rock, Paper of Scissors to play the game')
      break;
    case (playerSelection === computerSelection):
      return 'It\'s a tie!';
    case (playerSelection === 'rock' && computerSelection === 'paper'):
      computerScore++
      return 'You lose! Paper beats Rock';
    case (playerSelection === 'rock' && computerSelection === 'scissors'):
      playerScore++
      return 'You win! Rock beats Scissors'
    case (playerSelection === 'scissors' && computerSelection === 'paper'):
      playerScore++
      return 'You win! Scissors beats Paper';
    case (playerSelection === 'paper' && computerSelection === 'rock'):
      playerScore++
      return 'You win! Paper beats Rock';
    case (playerSelection === 'paper' && computerSelection === 'scissors'):
      computerScore++
      return 'You lose! Scissors beats Paper';
  }
};

function winner(){
  if(playerScore > computerScore) {
    console.log(`You won ${playerScore}-${computerScore}! Congratulations!`)
  } else if (playerScore < computerScore) {
    console.log(`You lost ${playerScore}-${computerScore}! Play again.`)
  } else if (playerScore === computerScore) {
    console.log(`It\'s a tie ${playerScore}-${computerScore}! Try again.`)
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


