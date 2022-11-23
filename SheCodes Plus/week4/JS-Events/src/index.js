// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
let button = document.querySelector("button");
function onclick() {
  alert(`It is 18 degrees`);
}
function clicked() {
  let button = document.querySelector("button");
  button.innerHTML = "18 degrees";
}
button.addEventListener("click", onclick);
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
button.addEventListener("click", clicked);
