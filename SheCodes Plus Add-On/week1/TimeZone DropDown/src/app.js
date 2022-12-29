let currentCity = document.getElementById("cityTimeZone");
function showCityTimeZone(event) {
  switch (event.target.value) {
    case "paris":
      alert(
        moment()
          .tz("Europe/Paris")
          .format("[It is] dddd, MMMM D, YYYY hh:mm A [in Europe/Paris]")
      );
      break;
    case "tokyo":
      alert(
        moment()
          .tz("Asia/Tokyo")
          .format("[It is] dddd, MMMM D, YYYY hh:mm A [in Asia/Tokyo]")
      );
      break;
    case "sydney":
      alert(
        moment()
          .tz("Australia/Sydney")
          .format("[It is] dddd, MMMM D, YYYY hh:mm A [in Australia/Sydney]")
      );
      break;
    default:
      break;
  }
}
currentCity.addEventListener("change", showCityTimeZone);
