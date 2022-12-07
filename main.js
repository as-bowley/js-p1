let round = 1;
let playerScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

function playerSelection() {
  let player = prompt(
    `Round ${round}: Please enter your choice of either Rock, Paper or Scissors:`
  )
    .toLowerCase()
    .trim();

  while (choices.indexOf(player) === -1) {
    console.log("Choice not valid. Please try again.");
    player = playerSelection();
  }

  return player;
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 1;
}

function checkWinner() {
  if (playerScore > computerScore) {
    resetGame();
    return "Player wins the game!";
  } else if (computerScore > playerScore) {
    resetGame();
    return "Computer wins the game";
  } else {
    resetGame();
    return "The game is a draw!";
  }
}

function playRound(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    playerScore = playerScore + 1;
    console.log(`Player wins Round ${round}`);
  } else if (
    (player === "rock" && computer === "rock") ||
    (player === "paper" && computer === "paper") ||
    (player === "scissors" && computer === "scissors")
  ) {
    console.log(`Round ${round} is a draw`);
  } else {
    computerScore = computerScore + 1;
    console.log(`Computer wins Round ${round}`);
  }
}

function game() {
  for (round; round < 6; round++) {
    const computerSelection = computerPlay();
    const player = playerSelection();

    playRound(player, computerSelection);
  }
  return console.log(checkWinner());
}
