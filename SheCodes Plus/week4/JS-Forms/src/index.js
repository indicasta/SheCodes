// Challenge1
function onclick() {
  alert("Hooray!");
}
document.querySelector("#special-button").addEventListener("click", onclick);
// Challenge2
function onsubmitting(event) {
  event.preventDefault();
  let passInput = document.querySelector("#password-input");
  if (passInput.value) alert(`Your password is ${passInput.value} 🧐`);
  else alert("You must enter a password!🗝");
}
let passForm = document.querySelector("#password-form");

passForm.addEventListener("submit", onsubmitting);

function onsigning(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let userInput = document.querySelector("#username-input");
  alert(`Your email address is ${emailInput.value} 📧`);
  alert(`Your username is ${userInput.value} ☺`);
}
let singUpForm = document.querySelector("#signup-form");

singUpForm.addEventListener("submit", onsigning);
