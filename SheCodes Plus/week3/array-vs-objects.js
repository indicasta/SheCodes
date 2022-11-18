let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true,
};

// Challenge1
console.log(paris.temperature);

// Challenge2
let sydney = {
  name: "Sydney",
  country: "Australia",
  language: "English",
  temperature: 9,
  capitalCity: false,
};
console.log(sydney.temperature);

// Challenge3
let australianCities = ["Melbourne", "Canberra", "Adelaide"];
australianCities.forEach(console.log);

// Challenge4
let cities = [
  {
    name: "Moscow",
    country: "Russia",
    language: "Russian",
    temperature: -4,
    capitalCity: true,
  },
  {
    name: "Florence",
    country: "Italy",
    language: "Italian",
    temperature: 11,
    capitalCity: false,
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    language: "Arab",
    temperature: 23,
    capitalCity: false,
  },
];
console.log(cities[0].temperature);
console.log(cities[1].temperature);
console.log(cities[2].temperature);
