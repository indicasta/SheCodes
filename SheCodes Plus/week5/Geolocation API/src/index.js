let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
let lat, lon;
let exclude = "minutely,hourly,daily";
function handlePosition(position) {
  lat = position.coords.latitude;
  lon = position.coords.longitude;
  console.log(`My current latitude is ${lat}`);
  console.log(`My current longitude is ${lon}`);
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getpositionTemperature);
}
function getpositionTemperature(response) {
  let currentTemp = Math.round(response.data.current.temp);
  console.log(`The current temperature is ${currentTemp}ºC`);
  document.querySelector(
    "h1"
  ).innerHTML = `The outside temperature is ${currentTemp}ºC`;
}
navigator.geolocation.getCurrentPosition(handlePosition);
