export function convertTemp(temp, unit = "°F") {
  if (unit === "°C") return ((temp - 32) * 5/9).toFixed(1);
  return temp.toFixed(1);
}
