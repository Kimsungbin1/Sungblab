// HTML에 날씨 엘리먼트 추가 
<div id="weather"></div>

// JavaScript 
const apiKey = "f522959ef248368614a3310231643561";
const weatherElement = document.getElementById("weather");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    weatherElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      weatherElement.innerHTML = `Today's weather: ${weather}, Temperature: ${temp}°C`;
    });
}

getLocation();