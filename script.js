const gameBoard = document.getElementById("game-board");
const scoreSpan = document.getElementById("score");
const moleHoles = [];
let score = 0;

function createMoleHoles() {
  for (let i = 0; i < 9; i++) {
    const moleHole = document.createElement("div");
    moleHole.classList.add("mole-hole");
    moleHole.innerHTML = `<div class="mole"></div>`;
    moleHole.addEventListener("click", () => {
      if (moleHole.querySelector(".mole.active")) {
        score++;
        scoreSpan.textContent = score;
      }
    });
    gameBoard.appendChild(moleHole);
    moleHoles.push(moleHole);
  }
}
