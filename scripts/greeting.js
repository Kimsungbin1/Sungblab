const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const PNIE = document.getElementById("p-name");
const reaminchar = document.getElementById("remain");

const HIDDEN_CLASSNAME = "hidden";

function onLoginsubmit(event) {

}

loginForm.addEventListener("submit",  onLoginsubmit);

function update(event) {
  const entered = event.target.value;
  const length = entered.length;

  const reaminchars = 15 - length;

  reaminchar.textContent = reaminchars;

  if(reaminchars <= 4) {
    reaminchar.classList.add('warning');
    PNIE.classList.add('warning');
  } else {
reaminchar.classList.remove('warning');
PNIE.classList.remove('warning');
  }
}

PNIE.addEventListener("input", update);
