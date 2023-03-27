const convertToCelsius = function(tempF) {
  let celcius = (tempF - 32) * 5/9
  let celciusFinal = celcius.toFixed(1)
  return Number(celciusFinal)
};

const convertToFahrenheit = function(tempC) {
  let fahrenheit = (tempC * 9/5) + 32
  let fahrenheitFinal = fahrenheit.toFixed(1)
  return Number(fahrenheitFinal)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
