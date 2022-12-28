let selectPrimaryColor = document.getElementById("primaryColor");
function alertColor(event) {
  if (event.target.value.length > 0) {
    switch (selectPrimaryColor.value) {
      case "red":
        alert("❤️");
        break;
      case "blue":
        alert("💙");
        break;
      case "yellow":
        alert("💛");
        break;
      default:
        break;
    }
  }
}
selectPrimaryColor.addEventListener("change", alertColor);
