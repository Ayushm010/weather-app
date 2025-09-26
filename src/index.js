import "./style.css"
import { gateData } from "./getData";
import { renderWeatherUi } from "./renderWeatherUi";


function getUserLocation() {
    const searchTxt = document.querySelector("#search-location");
    const searchTxtValue = searchTxt.value;
    searchTxt.value = "";
    return searchTxtValue;
}

document.querySelector(".search").addEventListener("click", async () => {
    try {
        const location = getUserLocation();
        const result = await gateData(location);
        console.log(result);
        renderWeatherUi(result);
    }catch(err){
        console.log(err);
    }
});

renderWeatherUi(gateData("india").then(result=>renderWeatherUi(result)).catch(console.log));//default