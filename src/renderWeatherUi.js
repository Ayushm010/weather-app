export function renderWeatherUi(weatherData) {
    console.log(weatherData);
    const address = document.querySelector(".address");
    address.textContent = weatherData.address;

    const tempreture = document.querySelector(".tempreture");
    tempreture.textContent = weatherData.currentConditions.temp;
}