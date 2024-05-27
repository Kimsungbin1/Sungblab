const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedplayer = 0;
let activeplayer = 0;
let currentround = 1;

const players = [
  {
    name: "",
    Symbol: "x",
  },
  {
    name: "",
    Symbol: "0",
  },
];

const playerover = document.getElementById("config");
const backdrope = document.getElementById("backdrop");
const forme = document.querySelector("form");
const gamearea = document.getElementById("active-game");
const activeplayername = document.getElementById("active-pname");

const editp1 = document.getElementById("edit-p1");
const editp2 = document.getElementById("edit-p2");
const cancel = document.getElementById("cancel-btn");
const startnewgame = document.getElementById("start-game-btn");
const gamefieldElements = document.querySelectorAll("#game-board li");
const gameoverelemet = document.getElementById("game-over");
const gameboardelement = document.getElementById("game-board");

editp1.addEventListener("click", openplayer);
editp2.addEventListener("click", openplayer);

cancel.addEventListener("click", closedonfig);
backdrope.addEventListener("click", closedonfig);

forme.addEventListener("submit", saveplayerconfig);

startnewgame.addEventListener("click", startgame);

for (const gamefieldElement of gamefieldElements) {
  gamefieldElement.addEventListener("click", selectgamefield);
}
