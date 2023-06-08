function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "paper";
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  let playerChoiceCaseInsensitive = playerChoice.toLowerCase();
  if (playerChoiceCaseInsensitive === "rock" && computerChoice === "rock") {
    return "Tie";
  } else if (
    playerChoiceCaseInsensitive === "rock" &&
    computerChoice === "paper"
  ) {
    return "You Lose! Paper beats Rock.";
  } else if (
    playerChoiceCaseInsensitive === "rock" &&
    computerChoice === "scissors"
  ) {
    return "You Win! Rock beats Scissors.";
  } else if (
    playerChoiceCaseInsensitive === "paper" &&
    computerChoice === "rock"
  ) {
    return "You Win! Paper beats Rock.";
  } else if (
    playerChoiceCaseInsensitive === "paper" &&
    computerChoice === "paper"
  ) {
    return "Tie";
  } else if (
    playerChoiceCaseInsensitive === "paper" &&
    computerChoice === "scissors"
  ) {
    return "You Lose! Scissors beat Paper.";
  } else if (
    playerChoiceCaseInsensitive === "scissors" &&
    computerChoice === "rock"
  ) {
    return "You Lose! Rock beats Scissors.";
  } else if (
    playerChoiceCaseInsensitive === "scissors" &&
    computerChoice === "paper"
  ) {
    return "You Win! Scissors beat Paper.";
  } else if (
    playerChoiceCaseInsensitive === "scissors" &&
    computerChoice === "scissors"
  ) {
    return "Tie";
  } else {
    return "Invalid choice! Please choose Rock, Paper or Scissors.";
  }
}
