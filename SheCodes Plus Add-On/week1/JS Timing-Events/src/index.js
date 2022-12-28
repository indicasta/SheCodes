let currentDate = document.getElementById("date");
let milleseconds = document.getElementById("milliseconds");
function showCurrentDate() {
  currentDate.innerHTML = new Date();
}
setTimeout(showCurrentDate, 5000);
setInterval(() => {
  milleseconds.innerHTML = new Date().getMilliseconds();
}, 1);
