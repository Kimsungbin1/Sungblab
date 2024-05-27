function openplayer(event) {
  editedplayer = +event.target.dataset.playerid;
  playerover.style.display = "block";
  backdrope.style.display = "block";
}

function closedonfig() {
  playerover.style.display = "none";
  backdrope.style.display = "none";
  forme.firstElementChild.lastElementChild.value = "";
}

function saveplayerconfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredname = formData.get("username");

  if (document.getElementById("playername").value.trim() == "") {
    alert("Please enter correctly");
  }

  const updated = document.getElementById("player-" + editedplayer + "-data");
  updated.children[1].textContent = enteredname;

  players[editedplayer - 1].name = enteredname;

  closedonfig();
}
