const url = "https://api.open-meteo.com/v1/forecast?latitude=26.12231&longitude=-80.14338&current=temperature_2m,wind_speed_10m&wind_speed_unit=mph&temperature_unit=fahrenheit";
const button = document.getElementById("check-btn");
const weatherArea = document.getElementById("weather");

async function getWeather() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

 //Temp
 const temp = document.createElement("p");
 temp.className = " fs-4 ";
 temp.textContent = "Temperature: " + data.current.temperature_2m +
 " " + data.current_units.temperature_2m;

 weatherArea.appendChild(temp);

 //Wind Speed
 const wind = document.createElement("p");
 wind.className = "fs-4";
 wind.textContent = "Wind Speed: " + data.current.wind_speed_10m + 
 " " + data.current_units.wind_speed_10m;

weatherArea.appendChild(wind);
 

//Time
const time = document.createElement("p");
time.className = "fs-4";
time.textContent = "Time: " + new Date (data.current.time). toLocaleString(); 

weatherArea.appendChild(time);
}

button.addEventListener("click", getWeather);