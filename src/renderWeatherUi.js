import { createIcons } from "./createIcons";

export function renderWeatherUi(weatherData) {
  console.log(weatherData);

  //Address 
  const address = document.querySelector(".address");
  if (address) {
    address.textContent = weatherData.resolvedAddress;
  }

  const primaryContainer = document.querySelector(".primary-container");
  primaryContainer.innerHTML = "";

  //Icons
  const icon = createIcons(weatherData.currentConditions.icon);
  icon.classList.add("icons");

  //Tempreture
  const temp = document.createElement("div");
  temp.classList.add("temp");
  temp.textContent = `${weatherData.currentConditions.temp}°F`;

  //Details Container
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  //Feels Like
  const feelsLike = document.createElement("div");
  feelsLike.classList.add("feels-like");
  feelsLike.textContent = `Feels Like ${weatherData.currentConditions.feelslike}°F`;

  //Humidity
  const humidity = document.createElement("div");
  humidity.classList.add("humidity");
  humidity.textContent = `Humidity ${weatherData.currentConditions.humidity}%`;

  //Visibility
  const visibility = document.createElement("div");
  visibility.classList.add("visibility");
  visibility.textContent = `Visibility ${weatherData.currentConditions.visibility} km`;

  //Conditions
  const conditions = document.createElement("div");
  conditions.classList.add("conditions");
  conditions.textContent = weatherData.currentConditions.conditions;

  detailsContainer.append(feelsLike, humidity, visibility, conditions);

  primaryContainer.append(icon, temp, detailsContainer);
}
