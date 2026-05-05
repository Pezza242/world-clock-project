let date = document.querySelector("#city-date");
let tzDate = moment.tz("Europe/Paris").format("Do MMMM YYYY");

date.innerHTML = tzDate;

let time = document.querySelector("#city-time");
let tzTime = moment.tz("Europe/Paris").format("H:mm:ss [<small>]A[</small>]");

time.innerHTML = tzTime;
