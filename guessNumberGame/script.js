let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = []; // Array for storing previous guesses
let numGuess = 1; // Counter for number of guesses played
let playGame = true;

// Check if the game is currently active

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

// Function to validate the user's guess
const validateGuess = (guess) => {
  if (isNaN(guess)) {
    alert("Please enter a valid number ");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1 ");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      CleanUp(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
      endGame();
    } else {
      CleanUp(guess);
      checkGuess(guess);
    }
  }
};

// Function to display whether the guess is too low or too high
const checkGuess = (guess) => {
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is tooo high`);
  }
};

// Function to clear the input, update guesses, and add the guess to the array
const CleanUp = (guess) => {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
};

// Function to display messages (e.g., "Number is too low.")
const displayMessage = (message) => {
  lowOrHigh.innerHTML = `<span>${message}</span>`;
};

// Function to end the game
const endGame = () => {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id='newGameBtn'>Start new Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

// Function to start a new game
const newGame = () => {
  const newGameButton = document.querySelector("#newGameBtn");
  newGameButton.addEventListener("click", (e) => {
    e.preventDefault();
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHigh.innerHTML = ""; // Clear the lowOrHigh message
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
};