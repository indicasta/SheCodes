let currentDateHawaii = moment()
  .tz("Pacific/Honolulu")
  .format("[It is] dddd, MMMM D, YYYY hh:mm A [in Honolulu, Hawaii]");
document.getElementById("current-date").innerHTML = currentDateHawaii;
let futureDateParis = moment()
  .tz("Europe/Paris")
  .add(10, "years")
  .format(
    "[10 years from now, it will be] dddd, MMMM D, YYYY hh:mm A [in Paris France]"
  );
document.getElementById("future-date").innerHTML = futureDateParis;
let localTimeZone = moment.tz.guess();
document.getElementById(
  "local-time-zone"
).innerHTML = `My local Timezone is ${localTimeZone}`;
