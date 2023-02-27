const PNIE = document.getElementById("p-name");
const reaminchar = document.getElementById("remain");
const HIDDEN_CLASSNAME = "hidden";
const loginForm = document.querySelector("#login-form");
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

const greeting = document.querySelector('#greeting');
greeting.classList.add(HIDDEN_CLASSNAME);


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


