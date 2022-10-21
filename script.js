const min = document.getElementById("min");
const max = document.getElementById("max");
const val = document.getElementById("txtNumber");
const btn = document.getElementById("btnGuess");
const msg = document.getElementById("message");

let gameOver = false;
let attempts = 3;
let minValue, maxValue, generateValue;
minValue = 1;
maxValue = 20;
generateValue = generateNumber(minValue, maxValue);

min.textContent = minValue;
max.textContent = maxValue;

btn.addEventListener("click", () => {
  if (gameOver) {
    resetGame();
    return;
  }
  if (val.value == 0 || isNaN(val.value)) {
    alert("Input a number.");
    return;
  }
  let userVal = parseInt(val.value);
  if (userVal != generateValue) {
    attempts--;
    if (attempts == 0) {
      onGameOver();
      msg.textContent = "Game over!";
    } else {
      msg.textContent = "Try again!";
    }
  } else {
    onGameOver();
    msg.textContent = "Congratulations! You guessed it.";
  }
});

function onGameOver() {
  gameOver = true;
  val.disabled = true;
  btn.textContent = "Play again!";
}

function resetGame() {
  gameOver = false;
  attempts = 3;
  generateValue = generateNumber(minValue, maxValue);
  msg.textContent = "";
  val.textContent = "";
  btn.textContent = "Guess";
  val.disabled = false;
}

function generateNumber(minValue, maxValue) {
  return Math.ceil(minValue + Math.random() * (maxValue - minValue));
}
