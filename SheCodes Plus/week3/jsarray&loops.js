// Challenge 1
// Create an array weekDays with all days of the week, console log the array
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(weekDays);
// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[1]);
console.log(weekDays[0]);
// Challenge 3
// Change ‘Sunday’ by ‘Funday’
// Log the array
weekDays.splice(0, 1, "funday");
weekDays[0] = "Funday";
console.log(weekDays);
// Challenge 4
// Remove Monday and Tuesday
// Log the array
weekDays.splice(1, 2);
console.log(weekDays);
// Challenge 5
// Log every day of the week this way:`Temperature on Monday is 18 degrees’
function printTemp(day) {
  console.log(`Temperature on ${day} is 18 degrees`);
}
weekDays.forEach(printTemp);
