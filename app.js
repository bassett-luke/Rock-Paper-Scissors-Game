var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".scoreboard");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

// Gets users choice
function main() {
  rock.addEventListener("click", function () {
    game("r");
  });
  paper.addEventListener("click", function () {
    game("r");
  });
  scissors.addEventListener("click", function () {
    game("r");
  });
}
main();

// Creates computers choice
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Rock paper scissors game
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

// Converts both user and computer choices to words
// r beats s ---> rock beats scissors
function convertToWord(letter) {
  if (letter === "r") return "rock";
  if (letter === "p") return "paper";
  return "scissors";
}

// User wins, loses or draw with the computer
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML =
    "Your " +
    convertToWord(userChoice) +
    " beats their " +
    convertToWord(computerChoice) +
    ", you win!";
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result.innerHTML =
    "Your " +
    convertToWord(userChoice) +
    " succumbs to their " +
    convertToWord(computerChoice) +
    ", you lose.";
}

function draw(userChoice, computerChoice) {
  result.innerHTML =
    "Your " +
    convertToWord(userChoice) +
    " has no effect on their " +
    convertToWord(computerChoice) +
    ", its a draw.";
}
