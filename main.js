const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

const playerSelection = "rock";

let round = 1;
let playerScore = 0;
let computerScore = 0;

const resetGame = () => {
  playerScore = 0;
  computerScore = 0;
  round = 1;
};

const checkWinner = () => {
  if (playerScore > computerScore) {
    console.log("Player wins the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game");
  } else {
    console.log("The game is a draw!");
  }
};

const playRound = (player, computer) => {
  if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")
  ) {
    playerScore = playerScore + 1;
    console.log(`Player wins Round ${round}`);
  } else if (
    (player == "rock" && computer == "rock") ||
    (player == "paper" && computer == "paper") ||
    (player == "scissors" && computer == "scissors")
  ) {
    console.log(`Round ${round} is a draw`);
  } else {
    computerScore = computerScore + 1;
    console.log(`Computer wins Round ${round}`);
  }
};

const game = () => {
  for (let i = 0; i < 5; i++) {
    let player = prompt(
      `Round ${round}: Please enter your choice of either Rock, Paper or Scissors:`
    );
    const playerSanitized = player.toLowerCase();
    const computerSelection = computerPlay();

    if (choices.indexOf(playerSanitized) !== -1) {
      playRound(playerSanitized, computerSelection);
      round = round + 1;
    } else {
      player = prompt(
        `Round ${round}: Choice not valid. Please enter either Rock, Paper or Scissors:`
      );
    }
  }

  checkWinner();
  resetGame();
};
