let writtenCity, transformation2do;
let $ = window.jQuery;
function updateCity() {
  writtenCity = document.getElementById("city").value;
  writtenCity = writtenCity.trim();
  writtenCity = writtenCity.toLowerCase();
  let writtenCity2Display =
    writtenCity.charAt(0).toUpperCase() + writtenCity.slice(1);
  document.querySelector("h1").innerHTML = writtenCity2Display;
}
function updateTemp(transformation2do) {
  let temp2Transform = document.querySelector("span.temperature").innerHTML;
  let newTemp;
  if (transformation2do === "°F") {
    newTemp = celsiustoFahrenheit(temp2Transform);
    document.querySelector("span.temperature").innerHTML = newTemp;
    document.querySelector("span.units").innerHTML = "°F|";
    document.getElementById("unit").innerHTML = "°C";
    document.getElementById(
      "feelsLike"
    ).innerHTML = `<i class="fa-solid fa-temperature-low"></i>FEELS LIKE: ${newTemp}°F`;
  } else {
    newTemp = fahrenheittoCelsius(temp2Transform);
    document.querySelector("span.temperature").innerHTML = newTemp;
    document.querySelector("span.units").innerHTML = "°C|";
    document.getElementById("unit").innerHTML = "°F";
    document.getElementById(
      "feelsLike"
    ).innerHTML = `<i class="fa-solid fa-temperature-low"></i>FEELS LIKE: ${newTemp}°C`;
  }
}
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    updateCity();
  } else return;
});
function celsiustoFahrenheit(degree) {
  return Math.round((degree * 9) / 5 + 32);
}
function fahrenheittoCelsius(degree) {
  return Math.round(((degree - 32) * 5) / 9);
}
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let formattedDate = {
    day: `${days[date.getDay()]}`,
    month: `${months[date.getMonth()]}`,
    date: `${date.getDate()}`,
    year: `${date.getFullYear()}`,
    time: `${date.toLocaleTimeString("en-US")}`,
  };
  return formattedDate;
}

$(function () {
  let date = new Date();
  let obj = formatDate(date);
  document.querySelector("#day").innerHTML = obj.day;
  document.querySelector(
    "#date"
  ).innerHTML = `${obj.month} ${obj.date}, ${obj.year}`;
  document.querySelector("#time").innerHTML = obj.time;
  document.querySelector("#unit").addEventListener("click", (event) => {
    transformation2do = document.querySelector("#unit").innerHTML;
    updateTemp(transformation2do);
  });

  $("#city").autocomplete({
    // source: Object.keys(weather),
    // close: function (event, ui) {
    //   $(".selected-city").html($("#city").val());
    //   updateCity();
    // },
    select: function (event, ui) {
      writtenCity = ui.item.value;
    },
  });
});
