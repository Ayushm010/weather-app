import "./style.css";
import { gateData } from "./getData";
import { renderWeatherUi } from "./renderWeatherUi";
import { invalidLocation } from "./invalidLocation";

let currentWeatherData = null;
let currentUnit = "°F";

function getUserLocation() {
  const searchTxt = document.querySelector("#search-location");
  const value = searchTxt.value;
  searchTxt.value = "";
  return value;
}

// Search button
document.querySelector(".search").addEventListener("click", async () => {
  try {
    const location = getUserLocation();
    const result = await gateData(location);
    currentWeatherData = result;
    renderWeatherUi(result, currentUnit);
  } catch (err) {
    currentWeatherData = null;
    invalidLocation();
  }
});

// Unit toggle
const unit = document.querySelector(".unit");
unit.addEventListener("click", () => {
  currentUnit = unit.textContent.trim() === "°F" ? "°C" : "°F";
  unit.textContent = currentUnit;
  if (currentWeatherData) {
    renderWeatherUi(currentWeatherData, currentUnit);
  }
});

// Default 
gateData("india")
  .then(result => {
    currentWeatherData = result;
    renderWeatherUi(result, currentUnit);
  })
  .catch(console.log);
