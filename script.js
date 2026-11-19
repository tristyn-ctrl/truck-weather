const url = 
"https://api.open-meteo.com/v1/forecast?latitude=26.12231&longitude=-80.14338&hourly=temperature_2m,wind_speed_10m&current=temperature_2m";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

button.addEventListener("click", getWeather);