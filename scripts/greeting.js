const PNIE = document.getElementById("p-name");
const reaminchar = document.getElementById("remain");
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


const handleFormSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const response = await fetch(event.target.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  if (response.ok) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = formData.get('p-name');
    greeting.innerText = `Hello ${username}`;
  }
};

