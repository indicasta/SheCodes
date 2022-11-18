let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

function fillingList(weather) {
  document.getElementById("city");
}
let writtenCity;
function updateCity() {
  writtenCity = document.getElementById("city").value;
  writtenCity = writtenCity.trim();
  writtenCity = writtenCity.toLowerCase();
  writtenCity2Display =
    writtenCity.charAt(0).toUpperCase() + writtenCity.slice(1);
  document.querySelector("h1").innerHTML = writtenCity2Display;
  updateWeatherInfo(writtenCity);
}
function updateWeatherInfo(writtenCity) {
  writtenCity2Display =
    writtenCity.charAt(0).toUpperCase() + writtenCity.slice(1);
  if (writtenCity in weather) {
    let temperature = Math.round(weather[writtenCity].temp);
    let hum = Math.round(weather[writtenCity].humidity);
    document.querySelector(
      ".clouds"
    ).innerHTML = `<i class="fa-solid fa-cloud-moon"></i>  --`;
    document.querySelector(
      ".temperature"
    ).innerHTML = ` <i class="fa-solid fa-temperature-three-quarters"></i> ${temperature}°C (${celciustoFahrenheit(
      temperature
    )}°F)`;
    document.querySelector(
      ".feelsLike"
    ).innerHTML = `<i class="fa-solid fa-temperature-low"></i>FEELS LIKE: ${temperature}°C (${celciustoFahrenheit(
      temperature
    )}°F)`;
    document.querySelector(
      ".wind"
    ).innerHTML = `<i class="fa-solid fa-wind"> </i> WIND: --`;
    document.querySelector(
      ".humidity"
    ).innerHTML = `<i class="fa-solid fa-droplet"></i> HUMIDITY:${hum}%`;
    document.querySelector(
      ".precipitation"
    ).innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>
                    PRECIPITATION:  --`;
    alert(
      `It is currently ${temperature}°C (${celciustoFahrenheit(
        temperature
      )}°F) in ${writtenCity2Display} with a humidity of ${hum}%`
    );
  } else {
    document.querySelector(
      ".clouds"
    ).innerHTML = `<i class="fa-solid fa-cloud-moon"></i>  --`;
    document.querySelector(
      ".temperature"
    ).innerHTML = ` <i class="fa-solid fa-temperature-three-quarters"></i> --`;
    document.querySelector(
      ".feelsLike"
    ).innerHTML = `<i class="fa-solid fa-temperature-low"></i>FEELS LIKE: --`;
    document.querySelector(
      ".wind"
    ).innerHTML = `<i class="fa-solid fa-wind"> </i> WIND: --`;
    document.querySelector(
      ".humidity"
    ).innerHTML = `<i class="fa-solid fa-droplet"></i> HUMIDITY: --`;
    document.querySelector(
      ".precipitation"
    ).innerHTML = `<i class="fa-solid fa-cloud-showers-heavy"></i>
                    PRECIPITATION:  --`;
    alert(
      `Sorry, we don't have info about ${writtenCity2Display}, try going to https://www.google.com/search?q=weather+${writtenCity2Display}`
    );
  }
}
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    updateCity();
  } else return;
});
function celciustoFahrenheit(degree) {
  return Math.round((degree * 9) / 5 + 32);
}
$(function () {
  let date = new Date();
  document.querySelector(
    "div.card-body.text-center.text-properties h4"
  ).innerHTML = date.toUTCString();

  $("#city").autocomplete({
    source: Object.keys(weather),
    close: function (event, ui) {
      $(".selected-city").html($("#city").val());
      updateCity();
    },
    select: function (event, ui) {
      writtenCity = ui.item.value;
    },
  });
});
