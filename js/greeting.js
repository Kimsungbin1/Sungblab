const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const PNIE = document.getElementById("p-name");
const reaminchar = document.getElementById("remain");

const HIDDEN_CLASSNAME = "hidden";

function onLoginsubmit(event) {
  event.preventDefault();

  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);

  greeting.innerText = "Hello " + username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginsubmit);

function update(event) {
  const entered = event.target.value;
  const length = entered.length;

  const reaminchars = 15 - length;

  reaminchar.textContent = reaminchars;
}

PNIE.addEventListener("input", update);
