const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
const roundResultAnnouncement = document.createElement("div");
const playerScoreAnnouncement = document.createElement("div");
const computerScoreAnnouncement = document.createElement("div");
let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const roundResult = playRound(
      e.target.classList.value,
      getComputerChoice()
    );
    roundResultAnnouncement.textContent = roundResult;
    results.appendChild(roundResultAnnouncement);

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

    playerScoreAnnouncement.textContent = `YOUR SCORE: ${playerScore}`;
    results.appendChild(playerScoreAnnouncement);

    computerScoreAnnouncement.textContent = `COMPUTER SCORE: ${computerScore}`;
    results.appendChild(computerScoreAnnouncement);

    if (playerScore === 5 || computerScore === 5) {
      if (playerScore === 5) {
        const playerWinner = document.createElement("div");
        playerWinner.textContent = `Congratulations! You've won the game. Your Score: ${playerScore} Computer Score: ${computerScore}`;
        results.appendChild(playerWinner);
      } else {
        const computerWinner = document.createElement("div");
        computerWinner.textContent = `Alas! You've lost the game. Your Score: ${playerScore} Computer Score: ${computerScore}`;
        results.appendChild(computerWinner);
      }
      playerScore = 0;
      computerScore = 0;
      playerScoreAnnouncement.textContent = `YOUR SCORE: ${playerScore}`;
      computerScoreAnnouncement.textContent = `COMPUTER SCORE: ${computerScore}`;
    }
  });
});

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
      return "scissors";
      break;
  }
}

function playRound(playerChoice, computerChoice) {
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
  }
}
