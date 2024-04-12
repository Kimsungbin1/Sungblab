function resetgamestatus() {
    activeplayer = 0;
    currentround = 1;
    gameoverelemet.firstElementChild.innerHTML =
      'You won, <span id="winner">PLAYER NAME</span>!';
    gameoverelemet.style.display = "none";
  
    let gameboardindex = 0;
    for (let i = 0; i < 3; i++ ) {
      for (let j = 0; j < 3; j++) {
        gameData[i][j] = 0;
      const gameboarditemelement = gameboardelement.children[gameboardindex];
      gameboarditemelement.textContent = '';
      gameboarditemelement.classList.remove('disabled');
      gameboardindex++;   
     }
    }
  }
  
  function startgame() {
    if (players[0].name === "" || players[1].name === "") {
      alert("please set custom player names for both players!");
      return;
    }
  
    resetgamestatus();
  
    activeplayername.textContent = players[activeplayer].name;
    gamearea.style.display = "block";
  }
  
  function swichPlayer() {
    if (activeplayer === 0) {
      activeplayer = 1;
    } else {
      activeplayer = 0;
    }
    activeplayername.textContent = players[activeplayer].name;
  }
  
  function selectgamefield(event) {
    const selectedfield = event.target;
    const selectedcolum = selectedfield.dataset.col - 1;
    const selectedcorow = selectedfield.dataset.row - 1;
  
    if (gameData[selectedcorow][selectedcolum] > 0) {
      alert("please select an emtpy field!");
      return;
    }
  
    selectedfield.textContent = players[activeplayer].Symbol;
    selectedfield.classList.add("disabled");
  
    gameData[selectedcorow][selectedcolum] = activeplayer + 1;
  
    const winnerid = checkforgameover();
  
    if (winnerid !== 0) {
      endgame(winnerid);
    }
  
    currentround++;
    swichPlayer();
  }
  
  function checkforgameover() {
    for (let i = 0; i < 3; i++) {
      if (
        gameData[i][0] > 0 &&
        gameData[i][0] === gameData[i][1] &&
        gameData[i][1] === gameData[i][2]
      ) {
        return gameData[i][0];
      }
    }
  
    for (let i = 0; i < 3; i++) {
      if (
        gameData[0][i] > 0 &&
        gameData[0][i] === gameData[1][i] &&
        gameData[0][i] === gameData[2][i]
      ) {
        return gameData[i][0];
      }
    }
  
    if (
      (gameData[0][0] > 0) & (gameData[0][0] === gameData[1][1]) &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[0][0];
    }
  
    if (
      gameData[2][0] > 0 &&
      gameData[2][0] === gameData[1][1] &&
      gameData[1][1] === gameData[2][2]
    ) {
      return gameData[2][0];
    }
  
    if (currentround === 9) {
      return -1;
    }
    return 0;
  }
  
  function endgame(winnerid) {
    gameoverelemet.style.display = "block";
    if (winnerid > 0) {
      const winnername = players[winnerid - 1].name;
      gameoverelemet.firstElementChild.firstElementChild.textContent = winnername;
    } else {
      gameoverelemet.firstElementChild.textContent = "It's a draw!";
    }
  }
  