"use strict";

const title = document.querySelector("h1");
const boxes = Array.from(document.querySelectorAll(".box"));
const resetBtn = document.querySelector(".reset-btn");
const currentPlayer = document.querySelector(".current-player");

let playerChooses = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let playerO = "O";
let playerX = "X";
let activePlayer = playerO;

let playing = true;

const boxClicked = (e) => {
  const id = e.target.id;
  if (playing) {
    if (!playerChooses[id]) {
      playerChooses[id] = activePlayer;
      e.target.textContent = activePlayer;

      if (!playerChooses.includes(0)) {
        title.textContent = "DRAW 💥";
      }

      if (playerWon()) {
        title.textContent = `Player ${activePlayer} WON THE GAME 🎉`;
        playing = false;
        return;
      }
      activePlayer = activePlayer === playerO ? playerX : playerO;
      currentPlayer.textContent = activePlayer;
    }
  }
};

boxes.forEach((box) => {
  if (playing) {
    box.addEventListener("click", boxClicked);
  }
});

const playerWon = function () {
  if (playerChooses[0] === activePlayer) {
    if (
      playerChooses[1] === activePlayer &&
      playerChooses[2] === activePlayer
    ) {
      return true;
    }
    if (
      playerChooses[3] === activePlayer &&
      playerChooses[6] === activePlayer
    ) {
      return true;
    }
    if (
      playerChooses[4] === activePlayer &&
      playerChooses[8] === activePlayer
    ) {
      return true;
    }
    if (
      playerChooses[6] === activePlayer &&
      playerChooses[7] === activePlayer
    ) {
      return true;
    }
  }
  if (playerChooses[8] === activePlayer) {
    if (
      playerChooses[2] === activePlayer &&
      playerChooses[5] === activePlayer
    ) {
      return true;
    }
    if (
      playerChooses[6] === activePlayer &&
      playerChooses[7] === activePlayer
    ) {
      return true;
    }
  }
  if (playerChooses[4] === activePlayer) {
    if (
      playerChooses[1] === activePlayer &&
      playerChooses[7] === activePlayer
    ) {
      return true;
    }
    if (
      playerChooses[3] === activePlayer &&
      playerChooses[5] === activePlayer
    ) {
      return true;
    }
    if (
      playerChooses[2] === activePlayer &&
      playerChooses[6] === activePlayer
    ) {
      return true;
    }
  }
};
resetBtn.addEventListener("click", function () {
  playerChooses = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  boxes.forEach((box) => {
    box.textContent = " ";
  });
  title.textContent = `Let's play`;

  activePlayer = playerO;
  currentPlayer.textContent = activePlayer;
  playing = true;
});
