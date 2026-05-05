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

function showSingleCity(cityTz) {
  function update() {
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
      </div>
      <p class="back"> ← Back to all cities</p>
    `;
  }

  update();
  clearInterval(interval);
  interval = setInterval(update, 1000);
}

function updateCity(event) {
  let cityTz = event.target.value;

  if (!cityTz) return;

  if (cityTz === "current") {
    cityTz = moment.tz.guess();
  }

  showSingleCity(cityTz);
}

updateCityTime();
interval = setInterval(updateCityTime, 1000);

let selectCity = document.querySelector("#select");
selectCity.addEventListener("change", updateCity);

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("back")) {
    clearInterval(interval);
    updateCityTime();
    interval = setInterval(updateCityTime, 1000);
  }
});
