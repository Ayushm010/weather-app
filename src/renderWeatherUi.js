import { createIcons } from "./createIcons";
import { convertTemp } from "./convertTemp";

export function renderWeatherUi(weatherData, unit = "°F") {
  // Address
  const address = document.querySelector(".address");
  if (address) {
    address.textContent = `${weatherData.resolvedAddress}`;
  }

  // Primary container
  const primaryContainer = document.querySelector(".primary-container");
  primaryContainer.innerHTML = "";

  // Icon
  const icon = createIcons(weatherData.currentConditions.icon);
  icon.classList.add("icons");

  // Temperature
  const temp = document.createElement("div");
  temp.classList.add("temp");
  temp.textContent = `${convertTemp(weatherData.currentConditions.temp, unit)}${unit}`;

  // Details container
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("details-container");

  const feelsLike = document.createElement("div");
  feelsLike.classList.add("feels-like");
  feelsLike.textContent = `Feels Like ${convertTemp(weatherData.currentConditions.feelslike, unit)}${unit}`;

  const humidity = document.createElement("div");
  humidity.classList.add("humidity");
  humidity.textContent = `Humidity ${weatherData.currentConditions.humidity}%`;

  const visibility = document.createElement("div");
  visibility.classList.add("visibility");
  visibility.textContent = `Visibility ${weatherData.currentConditions.visibility} km`;

  const conditions = document.createElement("div");
  conditions.classList.add("conditions");
  conditions.textContent = weatherData.currentConditions.conditions;

  detailsContainer.append(feelsLike, humidity, visibility, conditions);
  primaryContainer.append(icon, temp, detailsContainer);

  // Forecast
  const forecast = document.querySelector(".forecast");
  if (forecast) forecast.textContent = "5-Day Forecast";

  const secondaryContainer = document.querySelector(".secondary-container");
  secondaryContainer.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const forecastWrapper = document.createElement("div");
    forecastWrapper.classList.add("forecast-wrapper");

    const forecastDate = document.createElement("div");
    forecastDate.classList.add("forecast-date");
    const [year, month, day] = weatherData.days[i].datetime.split("-");
    forecastDate.textContent = `${day}-${month}-${year}`;

    const forecastIcon = createIcons(weatherData.days[i].icon);
    forecastIcon.classList.add("forecast-icons");

    const forecastTemp = document.createElement("div");
    forecastTemp.classList.add("forecast-temp");
    forecastTemp.textContent = `${convertTemp(weatherData.days[i].temp, unit)}${unit}`;

    const forecastConditions = document.createElement("div");
    forecastConditions.classList.add("forecast-conditions");
    forecastConditions.textContent = weatherData.days[i].conditions;

    forecastWrapper.append(forecastDate, forecastIcon, forecastTemp, forecastConditions);
    secondaryContainer.append(forecastWrapper);
  }
}
