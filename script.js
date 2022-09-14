const outcome = document.querySelector('.outcome');

const result = document.querySelector('.result');

const player = document.querySelector('.player');

const computer = document.querySelector('.computer');

function getComputerChoice() {
  if (Math.floor(Math.random() * 10) <= 3) {
    return 'rock'
  } else if (Math.floor(Math.random() * 10) <= 6) {
    return 'paper'
  } else {
    return 'scissors'
  }
};

const buttons = [...document.querySelectorAll('button')];
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (playerScore < 5 && computerScore < 5) {
      let computerSelection = getComputerChoice();
      let playerSelection = e.target.textContent.toLowerCase();
      outcome.textContent = `Round outcome: ${playRound(playerSelection, computerSelection)}`;
      player.textContent = `Player score: ${playerScore}`;
      computer.textContent = `Computer score: ${computerScore}`;
    } else {
      winner()
    }
  })
});

let playerScore = 0;

let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'rock') {
    return 'It\'s a tie! Both players chose rock!'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You win! Rock beats scissors!'
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    return 'You lost! Paper beats rock!'
  } else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return 'It\'s a tie! Both players chose paper!'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++
    return 'You win! Paper beats rock!'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    return 'You lost! Scissors beats paper!'
  } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return 'It\'s a tie! Both players chose scissors!'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++
    return 'You win! Scissors beats paper!'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    return 'You lost! Rock beats scissors!'
  }
};

function winner() {
  if (playerScore > computerScore) {
    result.textContent = (`Final result: You won ${playerScore} - ${computerScore}! Congratulations!`)
  } else if (playerScore < computerScore) {
    result.textContent = (`Final result: You lost ${playerScore} - ${computerScore}! Try again!`)
  } else if (playerScore === computerScore) {
    result.textContent = (`Final result: It\'s a tie ${playerScore} - ${computerScore}! Play again!`)
  }
  const playAgain = document.querySelector('.play-again');
  playAgain.style.display = 'block';
  playAgain.addEventListener('click', () => {
    window.location.reload()
  })
};

