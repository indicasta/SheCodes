let apiKey = "c8735bb7e8e2f8d8a38c7501f3cd47d3";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
function showWeatherSelectedCity(response) {
  let temp = Math.round(response.data.main.temp);
  console.log(`The current temperature in ${city} is ${temp}ºC`);
  document.querySelector("h1").innerHTML = `It is ${temp}ºC in ${city}`;
}

axios.get(apiUrl).then(showWeatherSelectedCity);
