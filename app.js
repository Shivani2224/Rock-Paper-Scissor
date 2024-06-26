const startGameBtn = document.getElementById("start-game-btn");
const messageHandler = document.getElementById("message");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_VALUE = ROCK;
let gameIsRunning = false;
const DRAW = "DRAW";
const RESULT_PLAYER = "PLAYER_WINNER";
const RESULT_COMPUTER = "COMPUTER_WINNER";

let userSelection = null;

const confetti = function () {
  const canvas = document.getElementById("your_custom_canvas_id");
  const jsConfetti = new JSConfetti();
  jsConfetti.addConfetti({ confettiRadius: 6, confettiNumber: 500 });
};

document.getElementById("rock_btn").addEventListener("click", function () {
  userSelection = ROCK;
});
document.getElementById("paper_btn").addEventListener("click", function () {
  userSelection = PAPER;
});
document.getElementById("scissor_btn").addEventListener("click", function () {
  userSelection = SCISSORS;
});

const getPlayerChoice = function () {
  if (
    userSelection !== ROCK &&
    userSelection !== PAPER &&
    userSelection !== SCISSORS
  ) {
    alert(`Invalid Selection Please select your choice`);
    gameIsRunning = false;
    userSelection = null;
    messageHandler.style.display = "none";
    return;
  } else {
    messageHandler.style.display = "block";
    return userSelection;
  }
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue <= 0.34) {
    return ROCK;
  } else if (randomValue >= 0.68) {
    return SCISSORS;
  } else {
    return PAPER;
  }
};

const getWinner = function (cChoice, pChoice) {
  if (cChoice === pChoice) {
    return DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER;
  } else {
    return RESULT_COMPUTER;
  }
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("game is starting..");
  const playerSelection = getPlayerChoice();
  let messageHandler = document.getElementById("message");
  messageHandler.innerHTML = `Player's Choice: ${playerSelection}<br>`;
  console.log(playerSelection);
  const computerSelection = getComputerChoice();
  messageHandler.innerHTML += `Computer's Choice: ${computerSelection}<br>`;
  console.log(computerSelection);
  const WinnerDisplay = getWinner(computerSelection, playerSelection);
  console.log(WinnerDisplay);
  console.log(
    `You picked ${playerSelection} and Computer picked ${computerSelection}<br>`
  );
  if (WinnerDisplay === DRAW) {
    console.log('"Draw "' + messageHandler + "  so it is a Draw");
    messageHandler.innerHTML += "Draw ";
  } else if (WinnerDisplay === RESULT_PLAYER) {
    console.log('"You Win!!! "' + message + " so you win");
    messageHandler.innerHTML += "You Win!!! ";
    confetti();
  } else {
    console.log('"You lose!!! "' + message + " so Computer Win");
    messageHandler.innerHTML += "You lose!!!";
  }

  gameIsRunning = false;
  userSelection = null;
});
