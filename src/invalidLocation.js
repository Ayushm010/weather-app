export function invalidLocation() {
  const address = document.querySelector(".address");
  address.innerHTML = "INVALID LOCATION!!!";

  const forecast = document.querySelector(".forecast");
  forecast.innerHTML = "";
  
  const primaryContainer = document.querySelector(".primary-container");
  primaryContainer.innerHTML = "SEARCH AGAIN";

  const secondaryContainer = document.querySelector(".secondary-container");
  secondaryContainer.innerHTML = "";
}
