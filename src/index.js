function updateCityTime() {
  let tzCities = [
    "America/Los_Angeles",
    "Europe/Rome",
    "Africa/Lagos",
    "Asia/Dubai",
    "Australia/Melbourne",
  ];
  let citySection = document.querySelector("#city-section");
  let addCities = "";

  tzCities.forEach((tzCity) => {
    let city = tzCity.replace("_", " ").split("/")[1];
    let cityDate = moment.tz(tzCity).format("Do MMMM YYYY");
    let cityTime = moment.tz(tzCity).format("H:mm:ss [<small>]A[</small>]");

    addCities += `
    <div class="city">
      <div class="left">        
          <h2 class="city-name">${city}</h2>
          <p class="city-date">${cityDate}</p>
        </div>
          <div class="city-time">${cityTime}</div>
  </div>
  <hr>`;
  });
  citySection.innerHTML = addCities;
}

function updateCity(event) {
  let cityTz = event.target.value;
  if (cityTz === "current") {
    cityTz = moment.tz.guess(true);
  }
  let cityName = cityTz.replace("_", " ").split("/")[1];
  let cityDate = moment.tz(cityTz).format("Do MMMM YYYY");
  let cityTime = moment.tz(cityTz).format("H:mm:ss [<small>]A[</small>]");
  let city = document.querySelector("#city-section");

  city.innerHTML = `  
  <div class="city">
      <div class="left">        
          <h2 class="city-name">${cityName}</h2>
          <p class="city-date">${cityDate}</p>
        </div>
          <div class="city-time">${cityTime}</div>
  </div>`;
}

updateCityTime();
setInterval(updateCityTime, 1000);

let selectCity = document.querySelector("#select");
selectCity.addEventListener("change", updateCity);
