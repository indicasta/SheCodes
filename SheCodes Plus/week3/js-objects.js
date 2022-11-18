// Challenge1
// Create an object weather and console log it
let weather = {};
console.log(weather);
// Challenge2
// Create an object weather with properties of temp and humidity and console log the object
weather = { temp: 17, humidity: "72%" };
console.log(weather);
// Challenge3
// console log the humidity and the temperature
console.log(weather.humidity);
console.log(weather.temp);
// Challenge4
// Add a property windSpeed and console log it
weather.windSpeed = "10km/h";
console.log(weather.windSpeed);
// Challenge5
// Console log the wind speed, the temperature and the humidity using the square brackets syntax
console.log(weather["windSpeed"]);
console.log(weather["temp"]);
console.log(weather["humidity"]);
// Challenge6
// Create an object or an array of objects called `forecast` with each day’s temperature, and console log it
let sunday = { name: "Sunday", temp: 17, humidity: "72%", windSpeed: "10km/h" };
let monday = { name: "Monday", temp: 18, humidity: "82%", windSpeed: "12km/h" };
let tuesday = {
  name: "Tuesday",
  temp: 22,
  humidity: "72%",
  windSpeed: "10km/h",
};
let wednesday = {
  name: "Wednesday",
  temp: 19,
  humidity: "72%",
  windSpeed: "10km/h",
};
let thursday = {
  name: "Thursday",
  temp: 15,
  humidity: "72%",
  windSpeed: "10km/h",
};
let friday = { name: "Friday", temp: 16, humidity: "72%", windSpeed: "10km/h" };
let saturday = {
  name: "Saturday",
  temp: 13,
  humidity: "72%",
  windSpeed: "10km/h",
};

let forecast = [sunday, monday, tuesday, wednesday, thursday, friday, saturday];
console.log(forecast);

function dayForecast(day) {
  console.log(`The temperature on ${day.name} will be ${day.temp}ºC`);
}
forecast.forEach(dayForecast);

let secondForecast = [
  { name: "Sunday", temp: 17, humidity: "72%", windSpeed: "10km/h" },
  { name: "Monday", temp: 18, humidity: "82%", windSpeed: "12km/h" },
  {
    name: "Tuesday",
    temp: 22,
    humidity: "72%",
    windSpeed: "10km/h",
  },
  {
    name: "Wednesday",
    temp: 19,
    humidity: "72%",
    windSpeed: "10km/h",
  },
  {
    name: "Thursday",
    temp: 15,
    humidity: "72%",
    windSpeed: "10km/h",
  },
  { name: "Friday", temp: 16, humidity: "72%", windSpeed: "10km/h" },
  {
    name: "Saturday",
    temp: 13,
    humidity: "72%",
    windSpeed: "10km/h",
  },
];
