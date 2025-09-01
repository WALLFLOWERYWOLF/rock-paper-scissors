let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter 'Rock', 'Paper', or 'Scissors'");
  humanChoice = humanChoice.toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "rock") {
    console.log("Tie");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You Lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
  } else if (humanChoice === "paper" && computerChoice === "paper") {
    console.log("Tie");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You Lose! Scissors beat Paper");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You Lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("you Win! Scissors beat Paper");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
  } else if (humanChoice === "scissors" && computerChoice === "scissors") {
    console.log("Tie");
  }
}
