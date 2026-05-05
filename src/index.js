function updateParisTime() {
  let date = document.querySelector("#city-date");
  let tzDate = moment.tz("Europe/Paris").format("Do MMMM YYYY");

  date.innerHTML = tzDate;

  let time = document.querySelector("#city-time");
  let tzTime = moment.tz("Europe/Paris").format("H:mm:ss [<small>]A[</small>]");

  time.innerHTML = tzTime;
}

function updateCity(event) {
  let cityTz = event.target.value;
  let cityName = cityTz.replace("_", " ").split("/")[1];
  let cityDate = moment.tz(cityTz).format("Do MMMM YYYY");
  let cityTime = moment.tz(cityTz).format("H:mm:ss [<small>]A[</small>]");
  let city = document.querySelector("#city-section");

  city.innerHTML = `       
   <div class="left">        
            <h2 id="city-name">${cityName}</h2>
          <p id="city-date">${cityDate}</p>
        </div>
          <div id="city-time">${cityTime}</div>`;
}

updateParisTime();
setInterval(updateParisTime, 1000);
let selectCity = document.querySelector("#select");
selectCity.addEventListener("change", updateCity);
