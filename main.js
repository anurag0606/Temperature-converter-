function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("fahrenheit").innerHTML = (valNum * 1.8) + 32;
}