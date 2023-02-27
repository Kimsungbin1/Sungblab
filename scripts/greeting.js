// JavaScript
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input[name='username']");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const PNIE = document.getElementById("p-name");
const reaminchar = document.getElementById("remain");


function update(event) {
  const entered = event.target.value;
  const length = entered.length;
  const remainChars = 15 - length;

  remainChar.textContent = remainChars;

  if(remainChars <= 4) {
    remainChar.classList.add('warning');
    PNIE.classList.add('warning');
  } else {
    remainChar.classList.remove('warning');
    PNIE.classList.remove('warning');
  }
}

PNIE.addEventListener("input", update);
greeting.classList.add(HIDDEN_CLASSNAME);

function onLoginSubmit(event) 
  event.preventDefault();

  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);


function onLoginsubmit(event) {
  event.preventDefault();

  const username = loginInput.value;

  loginForm.classList.add(HIDDEN_CLASSNAME);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({ 'form-name': 'login-form', 'username': username })
  })
  .then(() => {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  })
  .catch(error => console.error(error));
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

loginForm.addEventListener("submit", onLoginsubmit);


