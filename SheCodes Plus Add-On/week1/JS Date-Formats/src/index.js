let today = moment().format("[Today is] dddd, MMMM D, YYYY");
document.getElementById("current-date").innerHTML = today;
let futureToday = moment()
  .add(10, "years")
  .format("[10 years from now, it will be] dddd, MMMM D, YYYY HH:mm:ss");
document.getElementById("future-date").innerHTML = futureToday;
