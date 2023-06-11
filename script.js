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
  playerChoice = playerChoice.toLowerCase();
  if (playerChoice === "rock" && computerChoice === "rock") {
    return "Tie";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "You Lose! Paper beats Rock.";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You Win! Rock beats Scissors.";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You Win! Paper beats Rock.";
  } else if (playerChoice === "paper" && computerChoice === "paper") {
    return "Tie";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You Lose! Scissors beat Paper.";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You Lose! Rock beats Scissors.";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You Win! Scissors beat Paper.";
  } else if (playerChoice === "scissors" && computerChoice === "scissors") {
    return "Tie";
  } else {
    return "Invalid choice! Please choose Rock, Paper or Scissors.";
  }
}

function game() {
  let playerChoice;
  let computerChoice;
  let playerScore = 0;
  let computerScore = 0;
  let roundResult;

  for (let i = 0; i < 5; i++) {
    playerChoice = prompt("Choose Rock, Paper or Scissors");
    computerChoice = getComputerChoice();
    roundResult = playRound(playerChoice, computerChoice);
    console.log(roundResult);

    switch (roundResult) {
      case "You Win! Rock beats Scissors.":
      case "You Win! Paper beats Rock.":
      case "You Win! Scissors beat Paper.":
        playerScore++;
        break;
      case "You Lose! Paper beats Rock.":
      case "You Lose! Scissors beat Paper.":
      case "You Lose! Rock beats Scissors.":
        computerScore++;
        break;
    }
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You've won the game.");
    console.log(`YOUR SCORE: ${playerScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log("Alas! You've lost the game.");
    console.log(`YOUR SCORE: ${playerScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);
  } else {
    console.log("The game ended in a tie.");
    console.log(`YOUR SCORE: ${playerScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);
  }
}

game();
