let date = new Date();
console.log(date);
console.log(date.getMilliseconds());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getMonth());

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
  return `${days[date.getDay()]}, ${
    months[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

console.log(`Today is ${formatDate(date)}`);
console.log(formatDate(new Date()));
